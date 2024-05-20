import { scoreProxy } from "@/store";
import { apiStatuses } from "@/constants";
import axios from "axios";
import { getToken } from "@/utils";

const SCORE_ADD_SUCCESS_CODE = "SUCCESS_ADD_RANKING";

class Score {
  addScore(score:number){
    const {setState} = scoreProxy;
    const access_token = getToken();
    setState({
      status: apiStatuses.pending
    });
    return new Promise((resolve, reject) =>{ axios({
        method: "post",
        headers: {
          'Authorization': `Bearer ${access_token}`
        },
        url: "/api/rank/add",
        data: {
          access_token,
          score
        },
      })
        .then((response:any) => {
          const { data:responseData} = response;
          const { result } = responseData;

          if(result !== SCORE_ADD_SUCCESS_CODE) return;
          
          setState({
            status: apiStatuses.success
          });

          resolve(null);
        })
        .catch(() => {
          setState({
            status: apiStatuses.fail
          });

          reject();
        });
      });
  }
  reset(){
    const {setState} = scoreProxy;
    setState({
      lastScore: 0,
    })
  }
}

export default Score;

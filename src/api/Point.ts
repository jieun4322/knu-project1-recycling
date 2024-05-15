import { pointProxy } from "@/store";
import { apiStatuses } from "@/constants";
import axios from "axios";
import { getToken } from "@/utils";

const POINT_ADD_SUCCESS_CODE = "SUCCESS_CHECK_POINT";

class Point {
  addPoints(point:number){
    const {setState} = pointProxy;
    const access_token = getToken();
    setState({
      status: apiStatuses.pending
    });
    return new Promise((resolve, reject) =>{ axios({
        method: "post",
        headers: {
          'Authorization': `Bearer ${access_token}`
        },
        url: "/api/point/add",
        data: {
          access_token,
          point
        },
      })
        .then((response:any) => {
          const { data:responseData} = response;
          const { result } = responseData;

          if(result !== POINT_ADD_SUCCESS_CODE) return;
          
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
    const {setState} = pointProxy;
    setState({
      additionalPoint: 0,
      point: 0,
      lastPoint: 0,
      status: apiStatuses.idle
    })
  }
}

export default Point;

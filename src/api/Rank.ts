
import { apiStatuses } from "@/constants";
import { rankProxy } from "@/store";
import { getToken } from "@/utils";
import axios from "axios";


const GLOBAL_SUCCESS_CODE = "SUCCESS_INDIVIDUAL_RANKING_MY_RANK"; // 전국
const REGION_SUCCESS_CODE = "SUCCESS_REGION_RANKING_MY_RANK"; // 시
const AREA_SUCCESS_CODE = "SUCCESS_AREA_RANKING_MY_RANK"; // 구


class Rank {
  getGlobalRanking(){
    const {setState, data:{global:data}} = rankProxy;
    setState({
      global: {
        ...data,
        status: apiStatuses.pending
      }
    });
    return new Promise((resolve, reject) =>{ axios({
        method: "get",
        headers: {
          'Authorization': `Bearer ${getToken()}`
        },
        url: "/api/rank/my-rank",
      })
        .then((response:any) => {

          
          const { data:responseData} = response;
          const { result, data:[data]} = responseData;

          if(result !== GLOBAL_SUCCESS_CODE) return;

          setState({
            global: {
              ...data,
              status: apiStatuses.success,
              rank: data.rank
            }
          });

          resolve(null);
        })
        .catch(() => {
          setState({
            global: {
              ...data,
              status: apiStatuses.fail,
              rank: 0
            }
          });

          reject();
        });
      });
  }

  getAreaRanking(){
    const {setState, data:{area:data}} = rankProxy;
    setState({
      area: {
        ...data,
        status: apiStatuses.pending
      }
    });
    return new Promise((resolve, reject) =>{ axios({
        method: "post",
        headers: {
          'Authorization': `Bearer ${getToken()}`
        },
        data: {
          "regionName": "대구",
          "areaName": "북구"
        },
        url: "/api/rank/area/my-rank",
      })
        .then((response:any) => {

          
          const { data:responseData} = response;
          const { result, data:[data]} = responseData;

          if(result !== AREA_SUCCESS_CODE) return;

          setState({
            area: {
              ...data,
              status: apiStatuses.success,
              rank: data.rank
            }
          });

          resolve(null);
        })
        .catch(() => {
          setState({
            area: {
              ...data,
              status: apiStatuses.fail,
              rank: 0
            }
          });

          reject();
        });
      });
  }

  getRegionRanking(){
    const {setState, data:{region:data}} = rankProxy;
    setState({
      region: {
        ...data,
        status: apiStatuses.pending
      }
    });
    return new Promise((resolve, reject) =>{ axios({
        method: "post",
        headers: {
          'Authorization': `Bearer ${getToken()}`
        },
        data: {
          "regionName": "대구"
        },
        url: "/api/rank/region/my-rank",
      })
        .then((response:any) => {

          
          const { data:responseData} = response;
          const { result, data:[data]} = responseData;

          if(result !== REGION_SUCCESS_CODE) return;

          setState({
            region: {
              ...data,
              status: apiStatuses.success,
              rank: data.rank
            }
          });

          resolve(null);
        })
        .catch(() => {
          setState({
            region: {
              ...data,
              status: apiStatuses.fail,
              rank: 0
            }
          });

          reject();
        });
      });
  }
}


export default Rank;


import {userProxy, pointProxy} from "@/store"
import {apiStatuses} from "@/constants"
import axios from "axios";
import { getToken } from "@/utils";

const SUCCESS_CODE = "SUCCESS_CHECK_USER_INFO"
class User{
  me(){
    const {setState} = userProxy;
    const {setState:setPointState} = pointProxy;
    setState({
      status: apiStatuses.pending
    });
    return new Promise((resolve, reject) =>{ axios({
        method: "get",
        headers: {
          'Authorization': `Bearer ${getToken()}`
        },
        url: "/api/auth/check-userinfo",
      })
        .then((response:any) => {

          
          const { data:responseData} = response;
          const { result, data} = responseData;

          if(result !== SUCCESS_CODE) return;

          console.log("me", data)

          setState({
            name: data.nickname,
            regionName: data.regionName,
            areaName: data.areaName,
            point: parseInt(data.point) 
          });

          setPointState({
            point: parseInt(data.point),
            additionalPoint: 0
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

}

export default User;
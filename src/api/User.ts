

import {userProxy, pointProxy} from "@/store"
import {apiStatuses} from "@/constants"
import axios from "axios";

class User{
  me(){
    const {setState} = userProxy;
    const {setState:setPointState} = pointProxy;
    setState({
      status: apiStatuses.pending
    });
    return new Promise((resolve, reject) =>{ axios({
        method: "get",
        url: "/api/auth/check-userinfo",
      })
        .then((response:any) => {
          setState({
            data: {
              name: response.data?.nickname,
              regionName: response.data.regionName,
              areaName: response.data.areaName
            }
          });

          setPointState({
            point:30
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
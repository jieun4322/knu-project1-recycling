import {faceProxy, bottleProxy, pointProxy, userProxy, containerCapacityProxy} from "@/store"
import {apiStatuses} from "@/constants"
import axios from "axios";
import User from "./User"
import { getToken, setToken } from "@/utils";
import Point from "./Point";

const SUCCESS_CODE = "SUCCESS_LOGIN"
const BOTTLE_SUCCESS_CODE = "SUCCESS_PET_RECOGNITION";
class Recognition{
  face(image: any){
    const myUser = new User
    const {setState} = faceProxy;
    setState({
      status: apiStatuses.pending
    });
    return new Promise((resolve, reject) =>{ axios({
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        url: "/api/model/face-recognition",
        data: {
          image: image,
        },
      })
        .then((response:any) => {


          const { data:responseData} = response;
          const { result, data} = responseData;

          if(result !== SUCCESS_CODE) return 

          setToken(data.access_token)

          setState({
            status: apiStatuses.success
          });

          // TODO: 
          myUser.me().then().catch();

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

  bottle(image: any){
    const {setState} = bottleProxy;
    const {setState:setPointState} = pointProxy;
    const {setState: setCapacity} = containerCapacityProxy;
    const myPoint = new Point;
    setState({
      status: apiStatuses.pending
    });
    return new Promise((resolve, reject) =>{ axios({
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${getToken()}`
        },
        url: "/api/model/pet-recognition",
        data: {
          image: image,
        },
      })
        .then((response:any) => {
          const { data:responseData} = response;
          const { result, data} = responseData;

          if(result !== BOTTLE_SUCCESS_CODE) return;

          if(data.count == 0) {
            setTimeout(() => {
              setState({
                status: apiStatuses.idle
              });

            }, 1000);
            return;
          }

          
          
          const additionalPoint = Math.max(data.count * 10, pointProxy.data.additionalPoint);

          
          if(pointProxy.data.lastPoint >=  additionalPoint) {
              
            setState({
              status: apiStatuses.success
            });
            resolve(null);
            return;
          }

          const addPoints = additionalPoint - pointProxy.data.lastPoint;

          setCapacity({
            currentCapacity: containerCapacityProxy.data.currentCapacity + addPoints / 10
          })
          
          myPoint.addPoints(addPoints).then(() => {
            
            setState({
              status: apiStatuses.success
            });
            setPointState({
              additionalPoint: additionalPoint,
              point: userProxy.data.point + additionalPoint,
              lastPoint: additionalPoint
            })
  
            resolve(null);
          }).catch((() => {
            reject();
          }));
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

export default Recognition;
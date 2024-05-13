import {faceProxy, bottleProxy} from "@/store"
import {apiStatuses} from "@/constants"
import axios from "axios";
import User from "./User"

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
        .then(() => {
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
    setState({
      status: apiStatuses.pending
    });
    return new Promise((resolve, reject) =>{ axios({
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        url: "/api/model/pet-recognition",
        data: {
          image: image,
        },
      })
        .then(({data}:any) => {
          if(data.data.count == 0) {
            setTimeout(() => {
              setState({
                status: apiStatuses.idle
              });

            }, 1000);
            return;
          }
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
}

export default Recognition;
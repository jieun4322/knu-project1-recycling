import { proxy } from 'valtio/vanilla'
import {apiStatuses} from "@/constants"

export const userInfoProxy:any = proxy({
  name: "이아무개",
  api: {
    status: apiStatuses.idle,
    data: null,
    message: ""
  }
});

export const setUserState = (data: any) => {
  Object.keys(data).map((k:any) => {
    userInfoProxy[k] = data[k];
  });
}

export const resultInfoProxy:any = proxy({
  point: 0,
  personalRanking: 0,
  regionRanking: 0,
  api: {
    status: apiStatuses.idle,
    data: null,
    message: ""
  }
});
export const setResultState = (data: any) => {
  console.log("setResultState", data, resultInfoProxy)
  Object.keys(data).map((k:any) => {
    resultInfoProxy[k] = data[k];
  });
}


export const additionalDataProxy:any = proxy({
  petCount: 0,
  point: 0,
  api: {
    status: apiStatuses.idle,
    data: null,
    message: ""
  }
});
export const setAdditionalState = (data: any) => {
  Object.keys(data).map((k:any) => {
    additionalDataProxy[k] = data[k];
  });
}
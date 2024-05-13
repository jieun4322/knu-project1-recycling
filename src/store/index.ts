import { proxy } from 'valtio/vanilla'
import {apiStatuses} from "@/constants"

export const userProxy= proxy({
  data: {
    name: "",
    status: apiStatuses.idle,
  },
  setState: (stateParams: any) => {
    const setData:any = {}
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    userProxy.data=  setData
  }
});

export const faceProxy= proxy({
  data: {
    status: apiStatuses.idle,
  },
  setState: (stateParams: any) => {
    const setData:any = {}
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    faceProxy.data=  setData
  }
});
export const bottleProxy= proxy({
  data: {
    status: apiStatuses.idle,
  },
  setState: (stateParams: any) => {
    const setData:any = {}
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    bottleProxy.data=  setData
  }
});
export const pointProxy= proxy({
  data: {
    additionalPoint: 0,
    point: 0,
    status: apiStatuses.idle,
  },
  setState: (stateParams: any) => {
    const setData:any = {}
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    pointProxy.data=  setData
  }
});


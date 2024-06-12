import { proxy } from 'valtio/vanilla'
import {apiStatuses} from "@/constants"


const userInitData = {
  name: "",
  regionName: "",
  areaName: "",
  point: 0,
  status: apiStatuses.idle,
};
export const userProxy= proxy({
  data: Object.assign({}, userInitData),
  setState: (stateParams: any) => {
    const setData:any = Object.assign({},userProxy.data)
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    userProxy.data=  setData
  },
  reset: () => {
    userProxy.data = Object.assign({}, userInitData)
  }
});
export const faceProxy= proxy({
  data: {
    status: apiStatuses.idle,
  },
  setState: (stateParams: any) => {
    const setData:any = Object.assign({}, faceProxy.data);
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    faceProxy.data=  setData
  }
});

export const bottleProxy= proxy({
  data: {
    status: apiStatuses.idle,
  },
  setState: (stateParams: any) => {
    const setData:any = Object.assign({}, bottleProxy.data) 
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    bottleProxy.data=  setData
  }
});

const pointInitData = {
  additionalPoint: 0,
  point: 0,
  lastPoint: 0,
  status: apiStatuses.idle,
};
export const pointProxy= proxy({
  data: Object.assign({}, pointInitData),
  setState: (stateParams: any) => {
    const setData:any = Object.assign({}, pointProxy.data) 
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    pointProxy.data = setData
  },
  reset: () => {
    pointProxy.data = Object.assign({}, pointInitData)
  }
});

const scoreInitData = {
  lastScore: 0,
};
export const scoreProxy= proxy({
  data: Object.assign({}, scoreInitData),
  setState: (stateParams: any) => {
    const setData:any = Object.assign({}, scoreProxy.data) 
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    scoreProxy.data=  setData
  },
  reset: () => {
    scoreProxy.data = Object.assign({}, scoreInitData)
  }
});

const rankInitData = {
  global: {
    rank: 0,
    status: apiStatuses.idle,
  },
  area: {
    rank: 0,
    status: apiStatuses.idle,
  },
  region: {
    rank: 0,
    status: apiStatuses.idle,
  }
}
export const rankProxy= proxy({
  data: Object.assign({}, rankInitData),
  setState: (stateParams: any) => {
    const setData:any = Object.assign({}, rankProxy.data) 
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    rankProxy.data = setData
  },
  reset: () => {
    rankProxy.data = {
      global: Object.assign({}, rankInitData.global),
      area: Object.assign({}, rankInitData.area),
      region: Object.assign({}, rankInitData.region)
    }
  }
});

export const containerCapacityProxy= proxy({
  data: {
    currentCapacity: 30,
    total: 100,
  },
  setState: (stateParams: any) => {
    const setData:any = Object.assign({}, containerCapacityProxy.data) 
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    containerCapacityProxy.data = setData
  }
});

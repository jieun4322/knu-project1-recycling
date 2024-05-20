import { proxy } from 'valtio/vanilla'
import {apiStatuses} from "@/constants"

export const userProxy= proxy({
  data: {
    name: "",
    regionName: "",
    areaName: "",
    point: 0,
    status: apiStatuses.idle,
  },
  setState: (stateParams: any) => {
    const setData:any = Object.assign({},userProxy.data)
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    userProxy.data=  setData
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

export const pointProxy= proxy({
  data: {
    additionalPoint: 0,
    point: 0,
    lastPoint: 0,
    status: apiStatuses.idle,
  },
  setState: (stateParams: any) => {
    const setData:any = Object.assign({}, pointProxy.data) 
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    pointProxy.data=  setData
  }
});

export const scoreProxy= proxy({
  data: {
    lastScore: 0,
  },
  setState: (stateParams: any) => {
    const setData:any = Object.assign({}, scoreProxy.data) 
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    scoreProxy.data=  setData
  }
});

export const rankProxy= proxy({
  data: {
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
  },
  setState: (stateParams: any) => {
    const setData:any = Object.assign({}, rankProxy.data) 
    Object.keys(stateParams).map(k => setData[k] = stateParams[k]);
    rankProxy.data = setData
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

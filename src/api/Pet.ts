import {additionalDataProxy, resultInfoProxy, setResultState, setAdditionalState} from "@/store"
import { apiStatuses } from "@/constants";

class Pet{
  injectCheck(){
    return new Promise<void>((resolve)=>{
      additionalDataProxy.api.status = apiStatuses.pending;
      setTimeout(() => {
        const addRandomCount = 1; // Math.floor(Math.random() * 3) + 1;
        const addPoint = (additionalDataProxy.petCount + addRandomCount) * 10
        setAdditionalState({
          petCount: additionalDataProxy.petCount + addRandomCount,
          point: addPoint,
          api: {
            ...additionalDataProxy.api,
            status: apiStatuses.success
          }
        })
        
        setResultState({
          point: resultInfoProxy.point + (addRandomCount * 10),
          regionRanking: 15,
          personalRanking: 3
        })

        resolve()
      }, 2000);
    });
  }
}

export default Pet;
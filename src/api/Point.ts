import {setResultState} from "@/store"
import {apiStatuses} from "@/constants"
class Point{
  getAll(){
    setResultState({
      api: {status: apiStatuses.pending}
    });
    return new Promise<void>((resolve)=>{
      setTimeout(() => {
        setResultState({
          api: {status: apiStatuses.success}
        });
        resolve();
      }, 2000);
    });
  }
}

export default Point;
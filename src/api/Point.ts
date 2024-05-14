import { pointProxy, faceProxy } from "@/store";
import { apiStatuses } from "@/constants";
import axios from "axios";

class Point {
  constructor() {
    const { setState: setPointState } = pointProxy;
    //const { token } = faceProxy.data;

    // 현재 포인트를 확인
    const checkCurrentPoint = () => {
      return axios({
        method: "get",
        url: "/api/point/check",
        headers: {
          Authorization: `Bearer ${token}` // 사용자의 토큰을 헤더에 포함하여 요청
        }
      });
    };

    // 요청한 만큼 포인트를 적립
    const addPoints = () => {
      const requestedPoints = 50; // 요청할 포인트 양
      return axios({
        method: "post",
        url: "/api/point/add",
        data: {
          point: requestedPoints
        },
        headers: {
          Authorization: `Bearer ${token}` // 사용자의 토큰을 헤더에 포함하여 요청
        }
      });
    };

    // 현재 포인트 확인 및 적립 요청
    checkCurrentPoint()
      .then(response => {
        const currentPoints = response.data.points; // 응답에서 현재 포인트를 가져옴
        console.log("현재 포인트:", currentPoints);

        // 포인트를 적립하는 함수 호출
        return addPoints();
      })
      .then(() => {
        setPointState({
          status: apiStatuses.success
        });
      })
      .catch(error => {
        setPointState({
          status: apiStatuses.fail
        });
        console.error("포인트 적립 실패:", error);
      });
  }
}

export default Point;

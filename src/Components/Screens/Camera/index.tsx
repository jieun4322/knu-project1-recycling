import { useCallback, useEffect, useState } from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
  // const [deviceId, setDeviceId]: any = useState<any>({});
  const [videoDevices, setVideoDevices] = useState<any>([]);

  const handleDevices = useCallback(
    (mediaDevices: any) =>
      setVideoDevices(
        mediaDevices.filter(({ kind }: any) => kind === "videoinput")
      ),
    [setVideoDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  const setFaceCameraOnClick = (deviceId: string) => {
    localStorage.setItem("faceCameraId", deviceId);
  };

  const setBottleCameraOnClick = (deviceId: string) => {
    localStorage.setItem("bottleCameraId", deviceId);
  };

  return (
    <>
      <div>카메라 테스트</div>
      <div style={{ overflowY: "auto", height: "100vh" }}>
        {videoDevices.map((device: any, key: any) => (
          <div>
            <Webcam
              audio={false}
              videoConstraints={{ deviceId: device.deviceId }}
            />
            <div>
              <ul>
                <li>deviceId: {device.deviceId}</li>
                <li>label: {device.label}</li>
                <li>key: {`Device ${key + 1}`}</li>
                <li>
                  <button
                    style={{
                      color:
                        localStorage.getItem("faceCameraId") === device.deviceId
                          ? "blue"
                          : "black",
                    }}
                    onClick={() => setFaceCameraOnClick(device.deviceId)}
                  >
                    페이스 카메라
                  </button>
                  <button
                    style={{
                      color:
                        localStorage.getItem("bottleCameraId") ===
                        device.deviceId
                          ? "blue"
                          : "black",
                    }}
                    onClick={() => setBottleCameraOnClick(device.deviceId)}
                  >
                    보틀(pet) 카메라
                  </button>
                </li>
              </ul>
            </div>
            <div style={{ padding: "50px" }}></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WebcamCapture;

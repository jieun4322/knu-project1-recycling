import Cookies from 'js-cookie';

export const base64ToFile = (base64Data: any, filename: string) => {
  if (!base64Data || base64Data === "data:,") return null;
  const mime = base64Data.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];

  // Base64 데이터를 순수 데이터 부분만 추출
  const base64 = base64Data.replace(/^data:.+;base64,/, "");

  // Base64 문자열을 ArrayBuffer로 변환
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  // ArrayBuffer를 Blob으로 변환
  const blob = new Blob([byteArray], { type: mime });

  // Blob을 File 객체로 변환
  const file = new File([blob], filename, { type: mime });

  return file;
}

export const setToken = (token:string, expires?:number) => {
  Cookies.set("__token", token, { expires: expires ?? 7 }); 
};

export const getToken = () => {
  return Cookies.get("__token");
};


export const clearToken = () => {
  return setToken("", -1)
};
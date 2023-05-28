export const SETFILE = "SETFILE";
export const LOADDATA = "LOADDATA";


export function SetLoader() {
  return {
    type: LOADDATA,
  };
}

export function SetFileAudio(file) {
  return {
    type: SETFILE,
    payload: file,
  };
}




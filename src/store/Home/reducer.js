import { SETFILE, LOADDATA } from "./action";

export default function HomeReducer(state = {
    loading: false,
    file:""
}, action) {
  switch (action.type) {
    case SETFILE:
      return { ...state,file: action.payload ,loading:false};
      break;
    case LOADDATA:
      return { ...state, loading: true };
    default:
      return state;
  }
}
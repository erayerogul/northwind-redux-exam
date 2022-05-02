import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

/*
Reducerlar state'i (data) tutar ve isteyen component'e iletir.
Böylece ihtiyaç duyan her component ilgili reducer'dan state'i alabilir.
*/

export default function changeCategoryReducer(
  state = initialState.currentCategory,
  action
) {
    // Gelen aksiyonun payload'ını state olarak döndür:
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return action.payload;
    
      // Eğer state'e bir aksiyon gönderilmemişse initial state'i döndür:
    default:
      return state;
  }
}

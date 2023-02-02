import {types} from "./types";

const initialState = {
    result: null
}

export default function reducer(state = initialState, action){
    if (action.type === types.BUTTON_PLUS){
        return {result: action.payload}
    }
    if (action.type === types.BUTTON_MINUS){
        return {result: action.payload}
    }
    if (action.type === types.BUTTON_MULTIPLICATION){
        return {result: action.payload}
    }
    if (action.type === types.BUTTON_DIVISION){
        return {result: action.payload}
    }
    return state
}
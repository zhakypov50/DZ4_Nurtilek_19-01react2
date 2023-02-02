import {types} from "./types";

export function buttonPlus(value) {
    return {
        type: types.BUTTON_PLUS,
        payload: value
    }
}

export function buttonMinus(value){
    return {
        type: types.BUTTON_MINUS,
        payload: value
    }
}

export function buttonMultiplication(value){
    return {
        type: types.BUTTON_MULTIPLICATION,
        payload: value
    }
}

export function buttonDivision(value){
    return {
        type: types.BUTTON_DIVISION,
        payload: value
    }
}
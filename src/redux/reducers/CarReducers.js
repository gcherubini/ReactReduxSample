import { ADD_CAR , REMOVE_CAR } from "../types/CarTypes"

export const INITIAL_STATE = { 
    cars: ["Ford", "Wolkswagen", "Pegeout", "Mitsubishi"] 
}

export default (state = INITIAL_STATE, action) => { 
    console.log(action)
    switch(action.type) {
        case ADD_CAR:
            return { ...state, cars: [ ...state.cars, action.payload ] }
        case REMOVE_CAR:
            return { ...state, cars: state.cars.filter( c => c !== action.payload) }
        default: 
            return state
    }
}
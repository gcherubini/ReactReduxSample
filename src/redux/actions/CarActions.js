import { ADD_CAR , REMOVE_CAR } from "../types/CarTypes"

export const addCar = car => ({
    type: ADD_CAR,
    payload: car
})

export const removeCar = car => ({
    type: REMOVE_CAR,
    payload: car
})
import { createStore, combineReducers } from 'redux'
import CarReducers from './reducers/CarReducers'

const rootReducers = combineReducers({
    carReducer: CarReducers
})

export default createStore(rootReducers)
import reducer from './reducer/reducer'
import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const store = createStore(reducer)

export default store;
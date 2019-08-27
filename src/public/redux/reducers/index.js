import { combineReducers } from 'redux'

import book from '../reducers/book'
import user from '../reducers/user'

const appReducer = combineReducers({
    book,
    user
})

export default appReducer
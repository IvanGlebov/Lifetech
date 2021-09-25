import {fromJS} from "immutable"

export const userInitialState = fromJS({
  username:'',
  email: '',
  authorized: false
})

export const userReducer = (state = {}, action) => {
  if(action.type.startsWith('USER__')){
    switch (action.type) {
      default:
        return state
    }
  }
}
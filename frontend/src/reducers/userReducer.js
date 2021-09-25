import {fromJS} from "immutable"

export const userInitialState = fromJS({
  username: '',
  email: '',
  authorized: true,
  user_group: 'Child'
})

export const userReducer = (state = {}, action) => {
  // if(action.type.startsWith('USER__')){
  switch (action.type) {
    default:
      return state
  }
  // } {
  //   return state
  // }
}
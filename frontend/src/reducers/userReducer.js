import {fromJS} from "immutable"

export const userInitialState = fromJS({
  username:'',
  email: '',
  authorized: true
})

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}
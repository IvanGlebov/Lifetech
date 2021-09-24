import {fromJS} from 'immutable'

export const eventsInitialState = fromJS({
  events: {},
})

export const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}
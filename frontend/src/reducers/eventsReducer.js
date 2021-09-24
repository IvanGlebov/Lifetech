import {fromJS} from 'immutable'

export const eventsInitialState = fromJS({
  events: {
    1: {id: 1, img: '', description: 'Описание'},
    2: {id: 2, img: '', description: 'Описание'},
    3: {id: 3, img: '', description: 'Описание'},
    4: {id: 4, img: '', description: 'Описание'},
    5: {id: 5, img: '', description: 'Описание'},
    6: {id: 6, img: '', description: 'Описание'},
    7: {id: 7, img: '', description: 'Описание'},
    8: {id: 8, img: '', description: 'Описание'},
    9: {id: 9, img: '', description: 'Описание'},
    10: {id: 10, img: '', description: 'Описание'},
  },
})

export const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}
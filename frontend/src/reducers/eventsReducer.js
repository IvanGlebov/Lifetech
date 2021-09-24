import {fromJS} from 'immutable'

export const eventsInitialState = fromJS({
  events: {
    1: {
      id: 1,
      img: '',
      name: 'Название мероприятия',
      description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание '
    },
    2: {id: 2, img: '', name: 'Название мероприятия', description: 'Описание'},
    3: {id: 3, img: '', name: 'Название мероприятия', description: 'Описание'},
    4: {id: 4, img: '', name: 'Название мероприятия', description: 'Описание'},
    5: {id: 5, img: '', name: 'Название мероприятия', description: 'Описание'},
    6: {id: 6, img: '', name: 'Название мероприятия', description: 'Описание'},
    7: {id: 7, img: '', name: 'Название мероприятия', description: 'Описание'},
    8: {id: 8, img: '', name: 'Название мероприятияНазвание мероприятияНазвание мероприятияНазвание мероприятияНазвание мероприятияНазвание мероприятияНазвание мероприятия', description: 'Описание'},
    9: {id: 9, img: '', name: 'Название мероприятия', description: 'Описание'},
    10: {id: 10, img: '', name: 'Название мероприятия', description: 'Описание'},
  },
})

export const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}
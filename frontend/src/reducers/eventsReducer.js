import {fromJS} from 'immutable'
import {types} from "./common";

export const eventsInitialState = fromJS({
  events: {
    1: {
      id: 1,
      img: 'https://size-up.ru/wp-content/uploads/2019/10/%D0%B1%D0%B8%D0%BB%D0%BB%D0%B8-1280x720.png',
      name: 'Online Встреча с Billie Eilish',
      description: 'Самое ожидаемое мероприятие 2021 года!',
      region:'Новгородская область',
      volunteers:[]
    },
    2: {id: 2,
      img: 'https://grantist.com/wp-content/uploads/2015/06/stazhirovka-v-nacionalnom-agentstve-finansovyx-issledovanij-v-moskve.jpg',
      name: 'Отбор на участие в обучающей стажировке на базе благотворительной организации «Перспективы»',
      description: 'С 8 по 14 ноября 2021 года в г. Санкт-Петербурге на базе Санкт-Петербургской благотворительной общественной организации «Перспективы» пройдет обучающая стажировка в сфере гражданской активности и добровольчества (волонтерства) в рамках Программы мобильности волонтеров.',
      status:'запланировано',
      region:'Санкт-Петербург',
      volunteers:[]
    },
    3: {
      id: 3,
      img: 'https://s.go31.ru/section/afisha_event/upload/pers/65/img/afisha/000/000/002/170124113748357_59392ab13439b.jpg',
      name: 'Посещение нового кинотеатра "Ласточка"',
      description: '29.09.2021 года открывается новый кинотеатр в г.Новгород. Все желающие могут посмотреть любимый мультсериал на большом экране',
      status:'запланировано',
      region:'Новгородская область',
      volunteers:[]
    }
  },
})

export const eventsReducer = (state = {}, action) => {
  if(action.type.startsWith('USER__')) {
    switch (action.type) {
      case types.EVENTS__FETCH_INFO:
        return state
          .mergeDeepIn(['events'], fromJS(action.events))

      default:
        return state
    }
  }
}
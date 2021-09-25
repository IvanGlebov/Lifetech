import React from "react"
import style from './EventMini.module.scss'
import {connect} from "react-redux";
import {setQueryValues} from "../../reducers/routerActions";


export default connect(
  (store) => ({
    gallery: new URLSearchParams(store.router.location.search).get('gallery'),
    pathname: store.router.location.pathname
  }),
  (dispatch) => ({
    setEvent: (eventID) => setQueryValues(dispatch, {eventid: eventID}, '/event')
  })
)
(class EventMini extends React.Component {
    changePage = () => {
      location.replace('/event')
    }

    render() {
      const {id, img, description, name, right} = this.props
      return (
        <div className={right ? style.event1 : style.event2} onClick={() => this.props.setEvent(id)}>
          <img className={style} src={img} alt={'img'}/>
          <div className={style.desc}>
            <h4> {name}</h4>
            {description}
          </div>
        </div>
      )
    }
  }
)
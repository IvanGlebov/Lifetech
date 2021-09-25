import React from "react"
import style from './Event.module.scss'
import {connect} from "react-redux";
import img from '@images/sample_event.svg'
import Line from "../Line/Line";


export default connect(
  (store) => ({
    // events: store.events.getIn(['events']).filter(v.id => )
    eventID: new URLSearchParams(store.router.location.query).get('eventid'),
    events: store.events.getIn(['events']).toJS()
  }),
  (dispatch) => ({})
)
(class Event extends React.Component {

  render() {
    const {eventID, key} = this.props
    let event = {}
    Object.values(this.props.events).map(item => {
      if (item.id === parseInt(eventID))
        event = item
    })
    return (
      <div className={style.event_page}>
        <Line/>
        <div className={style.event}>
          <h2> {event.name}</h2>
          <h3>Регион: {event.region}</h3>
          {event.volunteers.length !== 0
            ? <h3>Волонтеры: {event.volunteers.map(u => (<li>{u}</li>))}</h3>
            : <> </>
          }
          <img src={img} alt={'img'}/>
          <div className={style.desc}>{event.description}</div>
        </div>
      </div>
    )
  }
})

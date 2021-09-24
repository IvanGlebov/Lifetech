import React from "react"
import style from './Gallery.module.scss'
import {connect} from "react-redux";
import Event from "../../components/Event/Event";
import * as events from "events";
import img from '@images/sample_event.svg'
import Line from "../../components/Line/Line";


export default connect(
  (store) => ({
    events: store.events.getIn(['events']).toJS()
  })
)
(class Gallery extends React.Component {

  render() {
    const {events} = this.props
    return (
      <div className={style.gallery}>
        <Line />
        <h1>Галерея мероприятий</h1>
        <div className={style.photos}>
          {
            Object.values(events).map(e => (<Event
                key={e.id}
                id={e.id}
                img={img}
                description={e.description}

              />
            ))
          }
        </div>
      </div>
    )
  }
})
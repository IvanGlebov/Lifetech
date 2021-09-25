import React from "react"
import style from './Gallery.module.scss'
import {connect} from "react-redux";
import EventMini from "../../components/EventMini/EventMini";
import * as events from "events";
import Line from "../../components/Line/Line";


export default connect(
  (store) => ({
    events: store.events.getIn(['events']).toJS()
  }),
)
(class Gallery extends React.Component {

  render() {
    const {events} = this.props
    return (
      <div className={style.gallery}>
        <Line />
        <h2>Галерея мероприятий</h2>
        <div>
          {
            Object.values(events).map(e => (<EventMini
                key={e.id}
                id={e.id}
                img={e.img}
                name={e.name}
                description={e.description}
                right={false}
              />
            ))
          }
        </div>
      </div>
    )
  }
})
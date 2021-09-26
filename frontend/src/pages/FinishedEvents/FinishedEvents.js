import React from "react"
import style from './FinishedEvents.module.scss'
import Gallery from "../Gallery/Gallery";
import {connect} from "react-redux";
import Line from "../../components/Line/Line";
import EventMini from "../../components/EventMini/EventMini";


export default connect(
  (store) => ({
    events: store.events.getIn(['events']).toJS()
  }),
)
(class FinishedEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
    render() {
    const {events} = this.props
    return (
      <div className={style.create_event}>
        <div className={style.block}>
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
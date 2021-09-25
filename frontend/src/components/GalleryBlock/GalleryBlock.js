import React from "react"
import style from './GalleryBlock.module.scss'
import {connect} from "react-redux";
import EventMini from "../Event/EventMini";
import img from '@images/sample_event.svg'

export default connect(
  (store) => ({
    events: store.events.getIn(['events']).toJS()
  })
)
(class GalleryBlock extends React.Component {

  render() {
    const {events} = this.props
    return (
      <div className={style.gallery}>
        <h4 className={style.heading}>Топ мероприятий</h4>
        {
          Object.values(events).slice(0, 3).map(e => (<EventMini
              key={e.id}
              id={e.id}
              img={img}
              name={e.name}
              description={e.description}
              right={true}
            />
          ))
        }
      </div>
    )
  }
})
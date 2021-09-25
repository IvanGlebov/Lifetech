import React from "react"
import style from './GalleryBlock.module.scss'
import {connect} from "react-redux";
import EventMini from "../EventMini/EventMini";
import img from '@images/sample_event.svg'

export default connect(
  (store) => ({
    events: store.events.getIn(['events']).toJS(),
    event: new URLSearchParams(store.router.location.search).get('gallery'),
    pathname: store.router.location.pathname
  })
)
(class GalleryBlock extends React.Component {

  render() {
    const {events} = this.props
    return (
      <div className={style.gallery}>
        <h4 className={style.heading}>Последние мероприятия</h4>
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
import React from "react"
import style from './GalleryBlock.module.scss'
import {connect} from "react-redux";
import EventMini from "../EventMini/EventMini";
import img from '@images/sample_event.svg'
import {push} from "connected-react-router";

export default connect(
  (store) => ({
    events: store.events.getIn(['events']).toJS(),
    pathname: store.router.location.pathname
  }),
  (dispatch) => ({
  redirectToGallery: () => dispatch(push('/gallery'))
})
)
(class GalleryBlock extends React.Component {

  render() {
    const {events} = this.props
    return (
      <div className={style.gallery}>
        <h4 className={style.heading} onClick={this.props.redirectToGallery}>Последние мероприятия</h4>
        {
          Object.values(events).slice(0, 3).map(e => (<EventMini
              key={e.id}
              id={e.id}
              img={e.img}
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
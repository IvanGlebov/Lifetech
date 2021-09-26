import React from "react"
import style from './PhotoMini.module.scss'
import {connect} from "react-redux";
import {setQueryValues} from "../../reducers/routerActions";

export default connect(
  (store) => ({
    profile_o: new URLSearchParams(store.router.location.search).get('profile'),
    pathname: store.router.location.pathname,

  }),
  (dispatch) => ({
    setPhoto: (photoID) => setQueryValues(dispatch, {photoid: photoID}, '/profile')
  })
)
(class PhotoMini extends React.Component {
    render() {
      const {img, id} = this.props
      return (
        <div className={style.photo}>
          <img onClick={() => this.props.setPhoto(id)} className={style} src={img} alt={'img'}/>
        </div>
      )
    }
  }
)
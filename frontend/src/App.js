import React from 'react'
import {withTranslation} from "react-i18next"
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import Landing from "@pages/Landing/Landing";
import Profile_orphanage from "@pages/Profile_orphanage/Profile_orphanage";
import Gallery from "@pages/Gallery/Gallery";
import Event from '@components/Event/Event'
import Login from "@pages/Login/Login";
import Register from "@pages/Register/Register";
import {doFetchEvents} from "./reducers/eventsActions";
import Profile_child from "@pages/Profile_child/Profile_child";
import {Header} from "./components";

export default withTranslation()(connect(
  (store) => ({
    location: store.router.location.pathname
  }),
  (dispatch) => ({
    fetchEvents: () => doFetchEvents(dispatch)
  })
)(class App extends React.Component {

  static propTypes = {
    location: PropTypes.string.isRequired,

    fetchEvents: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchEvents()
  }

  routes = [
    ['^/$', () => <Landing/>], // Path for / (main page with tasks)
    ['^/profile-o', () => <Profile_orphanage/>],
    ['^/profile-c', () => <Profile_child/>],
    ['^/gallery', () => <Gallery/>],
    ['^/event', () => <Event/>] ,//
    ['^/login', () => <Login/>],
    ['^/register', () => <Register/>],
  ]


  route = path => this.routes.find(r => path.match(r[0]) !== null)?.[1]?.()


  render() {
    return (
      <div>
        {/* place for sidebar and navbar */}
        <Header />
        {this.route(this.props.location)}
        {/* place for notifications component */}
      </div>
    )
  }
}))
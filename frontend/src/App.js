import React from 'react'
import {withTranslation} from "react-i18next"
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import Landing from "@pages/Landing/Landing";
import Gallery from "@pages/Gallery/Gallery";
import Event from '@components/Event/Event'
import Login from "@pages/Login/Login";
import Register from "@pages/Register/Register";
import {doFetchEvents} from "./reducers/eventsActions";
import {Header} from "./components";
import ProfileO from "./pages/ProfileO/ProfileO";
import CreateEvent from "./pages/CreateEvent/CreateEvent";

export default withTranslation()(connect(
  (store) => ({
    location: store.router.location.pathname,
    user_group:store.user.getIn(['user_group'])
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
    ['^/profile', () =>
      (this.props.user_group === 'Organizer'
        ? <ProfileO />
        : <></>)
    ],
    ['^/gallery', () => <Gallery/>],
    ['^/event', () => <Event/>] ,//
    ['^/login', () => <Login/>],
    ['^/register', () => <Register/>],
    ['^/create-an-event', () => <CreateEvent/>],
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
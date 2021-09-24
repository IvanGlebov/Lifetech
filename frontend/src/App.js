import React from 'react'
import { withTranslation } from "react-i18next"
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import Landing from "./pages/Landing/Landing";

export default withTranslation()(connect(
  (store) => ({
    location: store.router.location.pathname
  }),
)(class App extends React.Component{

  static propTypes = {
    location: PropTypes.string.isRequired
  }

  routes = [
    ['^/$', () =><Landing/>], // Path for / (main page with tasks)
  ]



  route = path => this.routes.find(r => path.match(r[0]) !== null)?.[1]?.()


  render(){
    return (
      <div>
        {/* place for sidebar and navbar */}
        {this.route(this.props.location)}
        {/* place for notifications component */}
      </div>
    )
  }
}))
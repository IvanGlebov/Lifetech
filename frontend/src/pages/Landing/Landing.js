import React from "react"
import style from './Landing.module.scss'
import Header from "@components/Header/Header";
import Content from "@components/Content/Content";
import Photos from "@components/Gallery/Gallery";


export default class Landing extends React.Component {

  render() {
    return (
      <div className={style.landing}>
        <Header />
        <div className={style.line}> </div>
        <Content/>
        <Photos />
      </div>
    )
  }
}
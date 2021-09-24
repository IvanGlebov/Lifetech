import React from "react"
import style from './Landing.module.scss'
import Header from "@components/Header/Header";
import Content from "@components/Content/Content";
import GalleryBlock from "@components/GalleryBlock/GalleryBlock";
import Line from "../../components/Line/Line";


export default class Landing extends React.Component {

  render() {
    return (
      <div className={style.landing}>
        <Header />
        <Line/>
        <Content/>
        <GalleryBlock />
      </div>
    )
  }
}
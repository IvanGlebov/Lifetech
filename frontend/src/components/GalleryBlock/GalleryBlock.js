import React from "react"
import style from './GalleryBlock.module.scss'


export default class GalleryBlock extends React.Component {

  render() {
    return (
      <div className={style.gallery}>
        <h4>Мероприятия</h4>
      </div>
    )
  }
}
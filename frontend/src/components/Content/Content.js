import React from "react"
import style from './Content.module.scss'
import img from '@images/photoChildren.svg'


export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {people: 'XXX', past: 'XXX', future: 'XXX', color: 'init'}
  }

  changeColor = () => {
    this.state.color === 'init'
      ? this.setState({color: 'another'})
      : this.setState({color: 'init'})
  }

  componentDidMount() {
    console.log(this.state)
  }

  render() {
    const {people, past, future} = this.state
    return (
      <div onClick={this.changeColor} className={this.state.color === 'init' ? style.content1 : style.content2}>
        <h3>
          Тебя приветствует платформа добрых дел! Мы не волшебники, но здесь происходят настоящие ЧУДЕСА!
        </h3>
        <img src={img} alt={'img'}/>
        <div>
          Нас уже <b>{people}</b>,
          мы провели <b>{past}</b>,
          сейчас реализуется <b>{future}</b> мероприятий!
          Стань одним из нас!
        </div>

      </div>
    )
  }
}
import React, {Component} from 'react'
import logo from './logo.svg'
import swan from './img/swan.png'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      waypoint: true
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  handleScroll() {
    this.setState(prevState => {
      return{
      waypoint: !prevState.waypoint
    }
    })
  }
  render() {
    let boxClass = ['hidden'];

    //this.state.addClass ?  boxClass.push('current') : boxClass
    return(
      <header>
      <img src = {swan} alt= 'swan' />
<ul className= 'top-menu'>
    <li className='current'><a className='scroll' href = '#Home'>home</a></li>
    <li><a href = '#About'>about</a></li>
    <li><a href = '#Gallery'>gallery</a></li>
    <li><a href = '#TodoApp'>todo app</a></li>
</ul>
      </header>
    )
  }
}

export default Header

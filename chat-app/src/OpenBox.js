import React from 'react'

class OpenBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(prevState =>{
      return {
        addClass: !prevState.addClass
      }
    });
  }
  render() {
    let boxi={width:'100px',height:'100px',background:'black'};
    let baxi={width:'100px',height:'100px',background:'green'}
    let boxClass = "box";
if(this.state.addClass) {
  boxClass +='.hidden'
}

    /*  render() {
    let boxClass = ["box"];
    if(this.state.addClass) {
      boxClass.push('green');
    }
    return(
        <div className={boxClass.join(' ')}   */
    //let openClass = this.state.addClass ? {${boxClass} $'{hidden'}} : ''
    let buttonText = this.state.addClass ? 'ADD' : 'REMOVE'
    return(
      <div>
        <div className={boxClass}>
        <br />
</div>
<button onClick = {this.handleClick}>{buttonText}</button>
        </div>
    );
  }
}

export default OpenBox

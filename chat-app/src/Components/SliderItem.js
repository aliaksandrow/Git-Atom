import React,{Component} from "react"
import './Slider.css'

class SliderItem extends Component {
  render() {
    const styles = {
      backgroundImage: `url(${this.props.item})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
  	};
  //  let computedClass= this.props.img === (this.state.activeIndex) ? 'slide active' : 'slide';
    return (
      <ul className="slider-wrapper" style={{
        transform: `translateX(${this.props.translateValue}px)`,
        transition: 'transform ease-out 2s'
      }}>
      <li style={styles}>{this.props.item.img}
      <img src ={this.props.img } alt=''/>
      </li>
      </ul>
    )
  }
}


/*function ContactCard(props) {
  const styles = {
    backgroundImage: `url(${props.item.i})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontSize: 20,
    color: 'green'
  };
    return (
        <div className="image-slide">
        <img alt='ooo' style ={styles}/>
        <p>{props.item.i}</p>

        </div>
    )
}*/

export default SliderItem

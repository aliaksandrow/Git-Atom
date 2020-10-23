import React, {Component} from 'react';
//import sliderData from './sliderData';
import SliderItem from './SliderItem'
import '../App.css';
import './Slider.css'


/*class Slider extends Component {
    constructor() {
    super()
    this.state= {
      img: [
        {imgUrl:"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
         text: 'love you',
         show: true},

        {imgUrl:"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
         text: 'kill you',
         show: false
      },
        {imgUrl:"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg",
         text: 'thrill you',
         show: false
      },
        {text:'fuck you all'}
      ],
      slideIndex:0
    }
  //  this.nextSlideHandler= this.nextSlideHandler.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
handleChange(n) {

}
handleClick(i) {
if(this.state.slideIndex === this.state.img.lenght -1){
  return this.setState({
    slideIndex: 0
  })
}
this.setState(prevState => ({
  slideIndex: prevState.slideIndex +1
}))
}

  render() {

const doubled =this.state.img.map((item,i) =>
<SliderItem key={i}
  item ={item}
text={item.text}
imgUrl={item.imgUrl}
handleClick={this.handleClick}/>)
    return(
      <div className="slideshow-container">
      {doubled}
      <button onClick={this.handleClick}>NEXT</button>
      </div>
    )
  }
}*/


// Check out my free youtube video on how to build a thumbnail gallery in react
// https://www.youtube.com/watch?v=GZ4d3HEn9zg

class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0,
    //  translateValue: 0
      addClass: document.querySelector('.active')
    }
    this.onSlide= this.onSlide.bind(this)
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }
onSlide() {
  if(this.state.currentIndex<this.state.images.length) {
    this.setState({
      currentIndex: this.state.currentIndex+1,
      //translateValue:this.state.translateValue +-( this.slideWidth())
    })
  } else {
    this.setState({
      currentIndex:0,
      //translateValue:0
    })
  }
}
  render() {
    const Slide = ({ item }) => {
      const styles = {
        backgroundImage: `url(${item})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
      }
      return <div className="slide" style={styles}></div>
    }
const nextSlide= this.state.images.map(item=>{
  let carousel = item=== (this.state.activeIndex) ? 'slide active' : 'slide';
  return<Slide key={item.i} item={item} img={item.i}
   className={carousel}/>
})
    return (
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {nextSlide}

        </div>

<button className='next' onClick={this.onSlide}>START</button>
      </div>
    );
  }
}


















export default Slider

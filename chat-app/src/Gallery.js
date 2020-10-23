import React,{Component} from 'react'

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state={
      images: [
      {id:1, img:'./images/boat.JPG'},
      {id:2, img:'./images/sea.JPG'},
      {id:3, img: './images/seaWith.JPG'},
      {id:4, img: "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg"},
      {id:5, img:"https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"},
      {id:6, img: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg"},
      ],
      activeIndex:1,
      //translateValue: 0
    }
this.onNextClick = this.onNextClick.bind(this)
this.onPrevClick=this.onPrevClick.bind(this)
this.slideInterval=this.slideInterval.bind(this)
  }
  slideWidth= () => {
    return document.querySelector('.slide').clientWidth
  }
  onNextClick() {
    if(this.state.activeIndex<this.state.images.length){
    this.setState({
      activeIndex:this.state.activeIndex+1,
      //translateValue:this.state.translateValue +-(this.slideWidth())
    })
  } else {
    this.setState({
      activeIndex: 1,
      //translateValue: 0
    })
  }
  }
slideInterval() {
  setInterval(this.onNextClick,5000)
}
 onPrevClick() {
   if(this.state.activeIndex){
     this.setState({
       activeIndex:this.state.activeIndex -1
     })
   } else {
     this.setState({
       activeIndex: 1
     })
   }
 }
  render() {
    return(
      <section id= 'Gallery'>
<div id= 'slider'><h1>gallery</h1>
<ul className='slide-container'style={{
  transform: `translateX(${this.state.translateValue}px)`,
  transition: 'transform ease-out 2s'
}} >

{this.state.images.map(item=>{

let styles = {
  backgroundImage: `url(${item.img})`,
  maxWidth: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

let computedClass=item.id === (this.state.activeIndex) ? 'slide active' : 'slide';
return <li className = {computedClass}
  key ={item.id}
 img={item.img}
 style = {styles}>{item.img}</li>
})
}
</ul>
<button className= 'next' onClick = {this.slideInterval}>NEXT</button>
<button className= 'prev' onClick = {this.onPrevClick}>PREV</button>
</div>

      </section>
    )
  }
}

export default Gallery

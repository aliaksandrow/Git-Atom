const sliderData= [
    {
     id: 1,
     img: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg" ,
     text: 'Caption Text',
     numbertext: '1/3',
     slide: true
    },
    {
     id: 2,
     img: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
     text: 'Caption Text',
     numbertext: '1/2',
     slide: true
    },
    {
     id: 3,
     img: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
     text: 'Caption Text',
     numbertext: '1/3',
     slide: true
    }
]

constructor (props) {
  super(props);

  this.state = {
    imgUrls: [
      '../images/boat.JPG',
      '../images/sea.JPG',
      '../images/seaWith.JPG',
      "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
      "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg",
      "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
      ],
    currentIndex: 0 ,//randomeImg
    translateValue: 0
  };
  this.nextSlide = this.nextSlide.bind(this);
  this.prevSlide = this.prevSlide.bind(this);

  this.handleSubmit = this.handleSubmit.bind(this)
}
slideWidth= () => {
  return document.querySelector('.slide').clientWidth
}
nextSlide () {
  const index = this.state.currentIndex === 0 ?
   this.state.imgUrls.length -1:
   this.state.currentIndex - 1;
  this.setState({
    currentIndex: index,
    translateValue:this.state.translateValue + this.slideWidth()
  })
}


prevSlide () {
  const showImage = this.state.currentIndex;
  const imagesSlide = this.state.imgUrls[showImage];
  const index = this.state.currentIndex === this.state.imgUrls.length - 1 ?
   0 :
   this.state.currentIndex + 1;

  this.setState({
    currentIndex: index,imagesSlide,
    translateValue: 0
  });
}
/*handleChange() {
const showImage = this.state.currentIndex;
const imagesSlide = this.state.imgUrls[showImage];
this.setState({
  currentIndex: imagesSlide
})
}*/
handleSubmit(event) {
  event.preventDefault()
  const randNum = Math.floor(Math.random() * this.state.imgUrls.length)
  const randImg = this.state.imgUrls[randNum].url
  this.setState({ imgUrls: randImg })
}
render () {

const slideImg = this.state.imgUrls.map(item => (
<SliderItem key={item}
item={item}
/>
))

  return (
    <div className="slider" onSubmit={this.handleSubmit}>
      <div className="slider-wrapper" style={{
        transform: `translateX(${this.state.translateValue}px)`,
        transition: 'transform ease-out 2s'
      }}> {slideImg}
      </div>
      <button className='prev'

       onClick={this.prevSlide}>PREV</button>
      <button className='next'

       onClick={this.nextSlide}
       >NEXT</button>


    </div>
  )
}
}
//---------------------------------------------------------------
var slides = document.querySelectorAll('#slides .slide');
currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
}
export default sliderData

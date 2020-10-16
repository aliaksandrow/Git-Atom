var slideIndex = 1;
showSlides(slideIndex);

function handleClick(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  //var slides = document.getElementsByClassName("mySlides"); this.state.img
  //var dots = document.getElementsByClassName("dot");

  if (n > slides.length)
   {slideIndex = 1}
  if (n < 1)
   {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";
};






handleChange (event) {
    const{value} = event.target
    this.setState({
      [name]: value
    })
}
componentDidMount() {
  const {images} = this.state.img
  this.setState({img: images})
}
handleClick() {
  this.setState(prevState =>{
    const nextItem = this.state.img.map(item =>{

    })
  })
}


"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"


  let newIndex= this.state.slideIndex;
  if(e.target.value) {
    if(newIndex < this.state.img.length-1) {
    newIndex = this.state.slideIndex +1  }}
    else{
      if(newIndex > 0){
      newIndex= this.state.slideIndex -1
    }}
    this.setState({slideIndex: newIndex})


    <div>
         <button onClick ={this.nextSlideHandler}>
    PREV
         </button>
    </div>
    <div>
    <img src={this.state.img[this.state.slideIndex]} alt= ''/>
    {this.state.slideIndex}
    </div>
    <div>
         <button onClick ={this.nextSlideHandler} value= 'next'>
    NEXT
         </button>
    </div>


window.addEventListener("scroll",(event)=>{
  var scroll = this.scrollY;
  if(scroll > 60){
    this.document.querySelector("header .top-nav").classList.add("background-header");
  }else{
    this.document.querySelector("header .top-nav").classList.remove("background-header");
  }
})
let hide=()=>{
  document.querySelector(".first-line").classList.toggle("hide");
  document.querySelector(".second-line").classList.toggle("hide");
  document.querySelector(".third-line").classList.toggle("hide");
  document.querySelector(".first-line-1").classList.toggle("hide");
  document.querySelector(".third-line-2").classList.toggle("hide");
  document.querySelector(".m-window").classList.toggle("hide");
}
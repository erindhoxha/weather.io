var burger = document.getElementsByClassName("mdc-icon-button");
var sidebar = document.getElementsByClassName("left-sidebar");
var close = document.getElementsByClassName("close-icon");

var tl = new TimelineMax({paused:true, reversed:false});
  tl.timeScale(0);
  tl.to(burger, 1, { rotation: 360, ease: Power1.easeInOut }, 0)
    .to(sidebar, 1, { width: "70vw", ease: Power1.easeInOut }, "-=-5")
    .to(close, 1, { rotation: 360, ease: Power1.easeInOut }, "-=-5");
function haminate() {
  tl.reversed() ? tl.play() : tl.reverse();	
}

import 'font-awesome/scss/font-awesome.scss';
import '../styles/scss/index.scss'
console.log(10);
const v = 5;
// window.scrollY
// for(let div of document.querySelectorAll('div')) {;
//   div.addEventListener("click", function(e) {
//     var text = div.innerHTML;
//     window.location.href = `/${text}`;
//   })
// }



var btn = document.getElementById('btn')
btn.addEventListener('click', function () {
  let headerHeight = document.getElementsByTagName('header')[0].clientHeight;
  let intro = document.getElementById('intro').clientHeight;
  var scrollY = window.scrollY;
  var id = setInterval(frame, 0.01);
  function frame() {
    if (scrollY == (headerHeight + intro)) {
      clearInterval(id);
    } else {
      window.scroll(0, scrollY++)
    }
  }
})

var p = document.getElementsByTagName('p')[1];
var under = document.getElementById('under')
var legends = document.getElementById('legends');
var popular = document.getElementById('popular');
var freshmen = document.getElementById('freshmen');
window.addEventListener('scroll', function () {
  if(document.getElementsByTagName('body')[0].clientWidth > 720) {
    let headerHeight = document.getElementsByTagName('header')[0].clientHeight;
    let intro = document.getElementById('intro').clientHeight;
    let scroll = window.scrollY;
    let part = freshmen.clientHeight/5;
    if(scroll > (headerHeight + intro - freshmen.clientHeight * 3)){
    p.classList.add("pan");
    }
    if(scroll > (headerHeight + intro - freshmen.clientHeight * 2)){
      btn.classList.add("btnup");
    }
    if(scroll > (headerHeight + intro - freshmen.clientHeight - part * 2)){
      freshmen.classList.add("franim");
    }
    if(scroll > (headerHeight + intro - part)) {
      popular.classList.add("poanim");
    }
    if(scroll > (headerHeight + intro + freshmen.clientHeight - part)) {
      legends.classList.add("leanim");
    }
    if(scroll > (headerHeight + intro + (freshmen.clientHeight * 2) - part)) {
      under.classList.add("unanim");
    }
  } else {
    p.classList.add("pan");
    btn.classList.add("btnup");
    freshmen.classList.add("franim");
    popular.classList.add("poanim");
    legends.classList.add("leanim");
    under.classList.add("unanim");
  }
})

var fresh = document.getElementById('btn1')
fresh.addEventListener("click", function() {
    window.location.href = `/freshmen`;
  });
var pop = document.getElementById('btn2')
pop.addEventListener("click", function() {
window.location.href = `/popular`;
});
var leg = document.getElementById('btn3')
leg.addEventListener("click", function() {
  window.location.href = `/legends`;
});
var und = document.getElementById('btn4')
und.addEventListener("click", function() {
    window.location.href = `/underground`;
  })

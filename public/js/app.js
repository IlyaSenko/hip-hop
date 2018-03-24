import 'font-awesome/scss/font-awesome.scss';
import '../styles/scss/index.scss'
console.log(10);
const v = 5;

// for(let div of document.querySelectorAll('div')) {;
//   div.addEventListener("click", function(e) {
//     var text = div.innerHTML;
//     window.location.href = `/${text}`;
//   })
// }

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

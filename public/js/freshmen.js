import '../styles/scss/freshmen.scss'
console.log(10);

// var btn = document.getElementByClassName(btn);
//.
// btn.addEventListener('mouseover', function () {
//   btn.parentElement.style.opacity = '0';
// })

for(let btn of document.getElementsByClassName('btn')) {;

  var isPlaying = true;
  btn.addEventListener("click", function onclick(e) {
      var aud = document.querySelector('audio')
      if(aud != null){
        var audid = aud.getAttribute('id');
        var btnid = btn.getAttribute('id');
        if(audid === btnid) {
          if(isPlaying === true){
            aud.pause();
            isPlaying = false;
            btn.classList.add('btn')
            btn.classList.remove('btnps')
          } else {
            aud.play();
            isPlaying = true;
            btn.classList.remove('btn')
            btn.classList.add('btnps')
          }
        } else {
          aud.remove();
          if(isPlaying === true) {
            var pause = document.getElementsByClassName('btnps')[0];
            pause.classList.add('btn');
            pause.classList.remove('btnps');
          }
          onclick();
        }
      } else {
      var audio = document.createElement('audio');
      audio.setAttribute('controls', '');
      audio.setAttribute('autoplay', '');
      audio.setAttribute('volume', '0.1');
      audio.style.opacity = '0';
      var source = document.createElement('source');
       // var top = cover.nextSibling;
      var song = btn.getAttribute('id');
      audio.setAttribute('id', song);
      source.setAttribute('src', `/music/fr/${song}.mp3`);
      source.setAttribute('type', 'audio/mpeg');
      audio.appendChild(source);
      document.body.appendChild(audio);
      console.log(6);
      btn.classList.remove('btn')
      btn.classList.add('btnps')
      isPlaying = true;
      }
    }
    )
  }

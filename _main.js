window.loadSheet = function(data) {
  var girth = data.map(function(row) {return 1 * row.girth})

  var max = Math.max.apply(Math,girth)
  var min = Math.min.apply(Math,girth)

  girthScaled = girth.map(function(x){return (x - min)/(max - min) })
  window.girthScaled = girthScaled
}

window.playSound = function(audio, time) {
  setTimeout(function() {
    audio.currentTime = 0
    audio.play()
  }, time)
}

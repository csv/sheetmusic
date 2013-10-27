var crossfilter = require('crossfilter');

window.main = function(data) {
  var cf = crossfilter(data)
  var girth = cf.dimension(function(row) {return row.girth})

  var max = girth.top(1)[0].girth
  var min = girth.bottom(1)[0].girth

  g = girth.group(function(x){return (x - min)/(max - min) })
  console.log(g.all())
}

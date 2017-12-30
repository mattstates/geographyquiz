import * as d3 from 'd3';
console.log('test 7');
var width = 980;
var height = 500;

var svg = d3.select('#map').append('svg');

var projection = d3
  .geoMercator()
  .scale(width / 2 / Math.PI)
  //.scale(100)
  .translate([width / 2, height / 2]);

var path = d3.geoPath().projection(projection);

var url = 'http://localhost/maps/world-110m.geojson';
d3.json(url, function(err, geojson) {
  svg.append('path').attr('d', path(geojson));
});

if (module.hot) {
  module.hot.accept('./index.js', function() {
    console.log('Accepting the updated printMe module!');
  });
}

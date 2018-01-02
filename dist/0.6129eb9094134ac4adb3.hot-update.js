webpackHotUpdate(0,{

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_topojson__ = __webpack_require__("./node_modules/topojson/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__ = __webpack_require__("./node_modules/d3-geo-projection/index.js");




let d3 = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0_d3__, __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__);
/*
let questions = [];
var width = 960;
var height = 500;

let question = document.getElementById('question');
let randomBtn = document.getElementById('random');
let score = document.getElementById('score');
let status = document.getElementById('status');

let correctAnswerText;
let oldColor;

var svg = d3.select('#map')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'map')
    .append('g')

var projection = d3.geoRobinson()
    //   .scale(width / 1.25); USA
    .scale(width / 5.6);

//    .translate([Math.sqrt(width / 2), height / 2]);

// projection.center([-98, 36]); USA
projection.center([15, 10]);


var path = d3.geoPath()
    .projection(projection);

var url = '/maps/world-110m.geojson';

d3.json(url, function(err, mapJson) {
    //console.log(mapJson);
    if (err) {
        console.log('error in d3.json', err);
    }
    let mapDivisions = Object.keys(mapJson.objects)[0];
    let countries = topojson.feature(mapJson, mapJson.objects[mapDivisions]).features;
    //console.log(countries, '<-- countries');
    let colorScale = d3.scaleSequential(d3.interpolateRainbow).domain([30, 750]);

    svg.selectAll('.country')
        .data(countries, function(country, i) {
            console.log(i, country, 'country');
            if (country.properties.name !== 'District of Columbia') {

                questions.push(country.properties.name);
            }
        })
        .enter()
        .append('path')
        .attr('class', 'country')
        .attr('d', path)
        .attr('stroke', 'rgba(50,50,50,.6)')
        .attr('fill', function(data, i) {
            return colorScale(i * 7);
        })
        .on('mouseover', function() {
            // console.log(d);
            // console.log(this.getAttribute('fill'));
            oldColor = this.getAttribute('fill');
            // this.setAttribute('stroke', 'rgba(250,250,250,.9)');
            this.setAttribute('stroke-width', 0.2);
            this.setAttribute('fill', 'yellow');
        })
        .on('mouseout', function() {
            // this.setAttribute('stroke', 'black');
            this.setAttribute('stroke-width', 1);
            this.setAttribute('fill', oldColor);

        })
        .on('click', function(data) {
            status.classList.remove('correct', 'wrong');
            correctAnswerText = document.getElementById('test');
            data.properties.name === correctAnswerText.innerText ? correctAnswer() : wrongAnswer();
        });
    console.log(questions);
});


randomBtn.addEventListener('click', generateQuestion);

function generateQuestion() {
    question.innerHTML = `Where is <strong id='test'>${questions[Math.floor(Math.random() * questions.length)]}</strong>?`;
    //status.classList.remove('correct', 'wrong');

}

function correctAnswer() {
    let scoreCount = parseInt(score.innerText);
    score.innerText = scoreCount += 1;
    status.innerText = 'CORRECT!';
    // status.classList.remove('correct', 'wrong');

    status.classList.add('correct');
    generateQuestion();
}

function wrongAnswer() {
    status.innerText = 'WRONG!';
    // status.classList.remove('correct', 'wrong');
    status.classList.add('wrong');
}
*/


var width = 960,
    height = 500,
    active = d3.select(null);

var projection = d3.geoAlbersUsa() // updated for d3 v4
    .scale(1000)
    .translate([width / 2, height / 2]);

var zoom = d3.zoom()
    // no longer in d3 v4 - zoom initialises with zoomIdentity, so it's already at origin
    // .translate([0, 0])
    // .scale(1)
    .scaleExtent([1, 8])
    .on('zoom', zoomed);

var path = d3.geoPath() // updated for d3 v4
    .projection(projection);

var svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)
    .on('click', stopped, true);

svg.append('rect')
    .attr('class', 'background')
    .attr('width', width)
    .attr('height', height)
    .on('click', reset);

var g = svg.append('g');

svg
    .call(zoom); // delete this line to disable free zooming
// .call(zoom.event); // not in d3 v4

d3.json('/maps/world-110m.geojson', function(error, us) {
    if (error) {throw error;}

    g.selectAll('path')
        .data(__WEBPACK_IMPORTED_MODULE_1_topojson__["a" /* feature */](us, us.objects.states).features)
        .enter().append('path')
        .attr('d', path)
        .attr('class', 'feature')
        .on('click', clicked);

    g.append('path')
        .datum(__WEBPACK_IMPORTED_MODULE_1_topojson__["b" /* mesh */](us, us.objects.states, function(a, b) { return a !== b; }))
        .attr('class', 'mesh')
        .attr('d', path);
});

function clicked(d) {
    if (active.node() === this) {return reset();}
    active.classed('active', false);
    active = d3.select(this).classed('active', true);

    var bounds = path.bounds(d),
        dx = bounds[1][0] - bounds[0][0],
        dy = bounds[1][1] - bounds[0][1],
        x = (bounds[0][0] + bounds[1][0]) / 2,
        y = (bounds[0][1] + bounds[1][1]) / 2,
        scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
        translate = [width / 2 - scale * x, height / 2 - scale * y];

    svg.transition()
        .duration(750)
    // .call(zoom.translate(translate).scale(scale).event); // not in d3 v4
        .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)); // updated for d3 v4
}

function reset() {
    active.classed('active', false);
    active = d3.select(null);

    svg.transition()
        .duration(750)
    // .call( zoom.transform, d3.zoomIdentity.translate(0, 0).scale(1) ); // not in d3 v4
        .call(zoom.transform, d3.zoomIdentity); // updated for d3 v4
}

function zoomed() {
    g.style('stroke-width', 1.5 / d3.event.transform.k + 'px');
    // g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"); // not in d3 v4
    g.attr('transform', d3.event.transform); // updated for d3 v4
}

// If the drag behavior prevents the default click,
// also stop propagation so we don’t click-to-zoom.
function stopped() {
    if (d3.event.defaultPrevented) {d3.event.stopPropagation();}
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBLGdDQUFnQztBQUNoQzs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBLHVEQUF1RCx3REFBd0Q7QUFDL0c7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIscUJBQXFCOztBQUVyQjtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkdBQW9FLGdCQUFnQixFQUFFO0FBQ3RGO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRCxrR0FBa0c7QUFDbEc7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekUsK0NBQStDO0FBQy9DOztBQUVBO0FBQ0E7QUFDQSxpR0FBaUc7QUFDakcsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxDIiwiZmlsZSI6IjAuNjEyOWViOTA5NDEzNGFjNGFkYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzTWFpbiBmcm9tICdkMyc7XG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbic7XG5pbXBvcnQgKiBhcyBkM2dlb1Byb2ogZnJvbSAnZDMtZ2VvLXByb2plY3Rpb24nO1xuXG5sZXQgZDMgPSBPYmplY3QuYXNzaWduKHt9LCBkM01haW4sIGQzZ2VvUHJvaik7XG4vKlxubGV0IHF1ZXN0aW9ucyA9IFtdO1xudmFyIHdpZHRoID0gOTYwO1xudmFyIGhlaWdodCA9IDUwMDtcblxubGV0IHF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uJyk7XG5sZXQgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbScpO1xubGV0IHNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG5sZXQgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpO1xuXG5sZXQgY29ycmVjdEFuc3dlclRleHQ7XG5sZXQgb2xkQ29sb3I7XG5cbnZhciBzdmcgPSBkMy5zZWxlY3QoJyNtYXAnKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAuYXR0cignY2xhc3MnLCAnbWFwJylcbiAgICAuYXBwZW5kKCdnJylcblxudmFyIHByb2plY3Rpb24gPSBkMy5nZW9Sb2JpbnNvbigpXG4gICAgLy8gICAuc2NhbGUod2lkdGggLyAxLjI1KTsgVVNBXG4gICAgLnNjYWxlKHdpZHRoIC8gNS42KTtcblxuLy8gICAgLnRyYW5zbGF0ZShbTWF0aC5zcXJ0KHdpZHRoIC8gMiksIGhlaWdodCAvIDJdKTtcblxuLy8gcHJvamVjdGlvbi5jZW50ZXIoWy05OCwgMzZdKTsgVVNBXG5wcm9qZWN0aW9uLmNlbnRlcihbMTUsIDEwXSk7XG5cblxudmFyIHBhdGggPSBkMy5nZW9QYXRoKClcbiAgICAucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxudmFyIHVybCA9ICcvbWFwcy93b3JsZC0xMTBtLmdlb2pzb24nO1xuXG5kMy5qc29uKHVybCwgZnVuY3Rpb24oZXJyLCBtYXBKc29uKSB7XG4gICAgLy9jb25zb2xlLmxvZyhtYXBKc29uKTtcbiAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBkMy5qc29uJywgZXJyKTtcbiAgICB9XG4gICAgbGV0IG1hcERpdmlzaW9ucyA9IE9iamVjdC5rZXlzKG1hcEpzb24ub2JqZWN0cylbMF07XG4gICAgbGV0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUobWFwSnNvbiwgbWFwSnNvbi5vYmplY3RzW21hcERpdmlzaW9uc10pLmZlYXR1cmVzO1xuICAgIC8vY29uc29sZS5sb2coY291bnRyaWVzLCAnPC0tIGNvdW50cmllcycpO1xuICAgIGxldCBjb2xvclNjYWxlID0gZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdykuZG9tYWluKFszMCwgNzUwXSk7XG5cbiAgICBzdmcuc2VsZWN0QWxsKCcuY291bnRyeScpXG4gICAgICAgIC5kYXRhKGNvdW50cmllcywgZnVuY3Rpb24oY291bnRyeSwgaSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaSwgY291bnRyeSwgJ2NvdW50cnknKTtcbiAgICAgICAgICAgIGlmIChjb3VudHJ5LnByb3BlcnRpZXMubmFtZSAhPT0gJ0Rpc3RyaWN0IG9mIENvbHVtYmlhJykge1xuXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zLnB1c2goY291bnRyeS5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NvdW50cnknKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAncmdiYSg1MCw1MCw1MCwuNiknKVxuICAgICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGRhdGEsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGkgKiA3KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSk7XG4gICAgICAgICAgICBvbGRDb2xvciA9IHRoaXMuZ2V0QXR0cmlidXRlKCdmaWxsJyk7XG4gICAgICAgICAgICAvLyB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ3JnYmEoMjUwLDI1MCwyNTAsLjkpJyk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgMC4yKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmaWxsJywgJ3llbGxvdycpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ2JsYWNrJyk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgMSk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZmlsbCcsIG9sZENvbG9yKTtcblxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcbiAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QnKTtcbiAgICAgICAgICAgIGRhdGEucHJvcGVydGllcy5uYW1lID09PSBjb3JyZWN0QW5zd2VyVGV4dC5pbm5lclRleHQgPyBjb3JyZWN0QW5zd2VyKCkgOiB3cm9uZ0Fuc3dlcigpO1xuICAgICAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbnMpO1xufSk7XG5cblxucmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVRdWVzdGlvbik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUXVlc3Rpb24oKSB7XG4gICAgcXVlc3Rpb24uaW5uZXJIVE1MID0gYFdoZXJlIGlzIDxzdHJvbmcgaWQ9J3Rlc3QnPiR7cXVlc3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHF1ZXN0aW9ucy5sZW5ndGgpXX08L3N0cm9uZz4/YDtcbiAgICAvL3N0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG5cbn1cblxuZnVuY3Rpb24gY29ycmVjdEFuc3dlcigpIHtcbiAgICBsZXQgc2NvcmVDb3VudCA9IHBhcnNlSW50KHNjb3JlLmlubmVyVGV4dCk7XG4gICAgc2NvcmUuaW5uZXJUZXh0ID0gc2NvcmVDb3VudCArPSAxO1xuICAgIHN0YXR1cy5pbm5lclRleHQgPSAnQ09SUkVDVCEnO1xuICAgIC8vIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG5cbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgIGdlbmVyYXRlUXVlc3Rpb24oKTtcbn1cblxuZnVuY3Rpb24gd3JvbmdBbnN3ZXIoKSB7XG4gICAgc3RhdHVzLmlubmVyVGV4dCA9ICdXUk9ORyEnO1xuICAgIC8vIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3dyb25nJyk7XG59XG4qL1xuXG5cbnZhciB3aWR0aCA9IDk2MCxcbiAgICBoZWlnaHQgPSA1MDAsXG4gICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuXG52YXIgcHJvamVjdGlvbiA9IGQzLmdlb0FsYmVyc1VzYSgpIC8vIHVwZGF0ZWQgZm9yIGQzIHY0XG4gICAgLnNjYWxlKDEwMDApXG4gICAgLnRyYW5zbGF0ZShbd2lkdGggLyAyLCBoZWlnaHQgLyAyXSk7XG5cbnZhciB6b29tID0gZDMuem9vbSgpXG4gICAgLy8gbm8gbG9uZ2VyIGluIGQzIHY0IC0gem9vbSBpbml0aWFsaXNlcyB3aXRoIHpvb21JZGVudGl0eSwgc28gaXQncyBhbHJlYWR5IGF0IG9yaWdpblxuICAgIC8vIC50cmFuc2xhdGUoWzAsIDBdKVxuICAgIC8vIC5zY2FsZSgxKVxuICAgIC5zY2FsZUV4dGVudChbMSwgOF0pXG4gICAgLm9uKCd6b29tJywgem9vbWVkKTtcblxudmFyIHBhdGggPSBkMy5nZW9QYXRoKCkgLy8gdXBkYXRlZCBmb3IgZDMgdjRcbiAgICAucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxudmFyIHN2ZyA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5vbignY2xpY2snLCBzdG9wcGVkLCB0cnVlKTtcblxuc3ZnLmFwcGVuZCgncmVjdCcpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2JhY2tncm91bmQnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLm9uKCdjbGljaycsIHJlc2V0KTtcblxudmFyIGcgPSBzdmcuYXBwZW5kKCdnJyk7XG5cbnN2Z1xuICAgIC5jYWxsKHpvb20pOyAvLyBkZWxldGUgdGhpcyBsaW5lIHRvIGRpc2FibGUgZnJlZSB6b29taW5nXG4vLyAuY2FsbCh6b29tLmV2ZW50KTsgLy8gbm90IGluIGQzIHY0XG5cbmQzLmpzb24oJy9tYXBzL3dvcmxkLTExMG0uZ2VvanNvbicsIGZ1bmN0aW9uKGVycm9yLCB1cykge1xuICAgIGlmIChlcnJvcikge3Rocm93IGVycm9yO31cblxuICAgIGcuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLmRhdGEodG9wb2pzb24uZmVhdHVyZSh1cywgdXMub2JqZWN0cy5zdGF0ZXMpLmZlYXR1cmVzKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmZWF0dXJlJylcbiAgICAgICAgLm9uKCdjbGljaycsIGNsaWNrZWQpO1xuXG4gICAgZy5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuZGF0dW0odG9wb2pzb24ubWVzaCh1cywgdXMub2JqZWN0cy5zdGF0ZXMsIGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgIT09IGI7IH0pKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnbWVzaCcpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aCk7XG59KTtcblxuZnVuY3Rpb24gY2xpY2tlZChkKSB7XG4gICAgaWYgKGFjdGl2ZS5ub2RlKCkgPT09IHRoaXMpIHtyZXR1cm4gcmVzZXQoKTt9XG4gICAgYWN0aXZlLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QodGhpcykuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSk7XG5cbiAgICB2YXIgYm91bmRzID0gcGF0aC5ib3VuZHMoZCksXG4gICAgICAgIGR4ID0gYm91bmRzWzFdWzBdIC0gYm91bmRzWzBdWzBdLFxuICAgICAgICBkeSA9IGJvdW5kc1sxXVsxXSAtIGJvdW5kc1swXVsxXSxcbiAgICAgICAgeCA9IChib3VuZHNbMF1bMF0gKyBib3VuZHNbMV1bMF0pIC8gMixcbiAgICAgICAgeSA9IChib3VuZHNbMF1bMV0gKyBib3VuZHNbMV1bMV0pIC8gMixcbiAgICAgICAgc2NhbGUgPSBNYXRoLm1heCgxLCBNYXRoLm1pbig4LCAwLjkgLyBNYXRoLm1heChkeCAvIHdpZHRoLCBkeSAvIGhlaWdodCkpKSxcbiAgICAgICAgdHJhbnNsYXRlID0gW3dpZHRoIC8gMiAtIHNjYWxlICogeCwgaGVpZ2h0IC8gMiAtIHNjYWxlICogeV07XG5cbiAgICBzdmcudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgLy8gLmNhbGwoem9vbS50cmFuc2xhdGUodHJhbnNsYXRlKS5zY2FsZShzY2FsZSkuZXZlbnQpOyAvLyBub3QgaW4gZDMgdjRcbiAgICAgICAgLmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUodHJhbnNsYXRlWzBdLCB0cmFuc2xhdGVbMV0pLnNjYWxlKHNjYWxlKSk7IC8vIHVwZGF0ZWQgZm9yIGQzIHY0XG59XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGFjdGl2ZS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuXG4gICAgc3ZnLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgIC8vIC5jYWxsKCB6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSgwLCAwKS5zY2FsZSgxKSApOyAvLyBub3QgaW4gZDMgdjRcbiAgICAgICAgLmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eSk7IC8vIHVwZGF0ZWQgZm9yIGQzIHY0XG59XG5cbmZ1bmN0aW9uIHpvb21lZCgpIHtcbiAgICBnLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxLjUgLyBkMy5ldmVudC50cmFuc2Zvcm0uayArICdweCcpO1xuICAgIC8vIGcuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIGQzLmV2ZW50LnRyYW5zbGF0ZSArIFwiKXNjYWxlKFwiICsgZDMuZXZlbnQuc2NhbGUgKyBcIilcIik7IC8vIG5vdCBpbiBkMyB2NFxuICAgIGcuYXR0cigndHJhbnNmb3JtJywgZDMuZXZlbnQudHJhbnNmb3JtKTsgLy8gdXBkYXRlZCBmb3IgZDMgdjRcbn1cblxuLy8gSWYgdGhlIGRyYWcgYmVoYXZpb3IgcHJldmVudHMgdGhlIGRlZmF1bHQgY2xpY2ssXG4vLyBhbHNvIHN0b3AgcHJvcGFnYXRpb24gc28gd2UgZG9u4oCZdCBjbGljay10by16b29tLlxuZnVuY3Rpb24gc3RvcHBlZCgpIHtcbiAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge2QzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO31cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
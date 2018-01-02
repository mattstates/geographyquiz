webpackHotUpdate(0,{

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_topojson__ = __webpack_require__("./node_modules/topojson/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__ = __webpack_require__("./node_modules/d3-geo-projection/index.js");




//let d3 = Object.assign({}, d3geoProj, d3Main);
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
console.log(__WEBPACK_IMPORTED_MODULE_0_d3__);
var width = 960,
    height = 500,
    active = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](null);

let colorScale = __WEBPACK_IMPORTED_MODULE_0_d3__["scaleSequential"](__WEBPACK_IMPORTED_MODULE_0_d3__["interpolateRainbow"]).domain([30, 750]);

var projection = __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__["a" /* geoRobinson */]() // updated for d3 v4
    .scale(150)
    .translate([width / 2, height / 1.75]);

var zoom = __WEBPACK_IMPORTED_MODULE_0_d3__["zoom"]()
    // no longer in d3 v4 - zoom initialises with zoomIdentity, so it's already at origin
    // .translate([0, 0])
    // .scale(1)
    .scaleExtent([1, 8])
    .on('zoom', zoomed);

var path = __WEBPACK_IMPORTED_MODULE_0_d3__["geoPath"]() // updated for d3 v4
    .projection(projection);

var svg = __WEBPACK_IMPORTED_MODULE_0_d3__["select"]('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .on('click', stopped, true);

svg
    .append('rect')
    .attr('class', 'background')
    .attr('width', width)
    .attr('height', height)
    .on('click', reset);

var g = svg.append('g');

svg.call(zoom); // delete this line to disable free zooming
// .call(zoom.event); // not in d3 v4

__WEBPACK_IMPORTED_MODULE_0_d3__["json"]('/maps/world-110m.geojson', function(error, mapJson) {
    if (error) {
        throw error;
    }
    let mapDivisions = Object.keys(mapJson.objects)[0];

    g
        .selectAll('path')
        .data(__WEBPACK_IMPORTED_MODULE_1_topojson__["a" /* feature */](mapJson, mapJson.objects[mapDivisions]).features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', function(data, i) {
            return colorScale(i * 7);
        })
        .on('click', clicked);

    g
        .append('path')
        .datum(
            __WEBPACK_IMPORTED_MODULE_1_topojson__["b" /* mesh */](mapJson, mapJson.objects[mapDivisions], function(a, b) {
                return a !== b;
            })
        )
        .attr('class', 'mesh')
        .attr('d', path);
});

function clicked(d) {
    if (active.node() === this) {
        return reset();
    }
    active.classed('active', false);
    active = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](this).classed('active', true);

    var bounds = path.bounds(d),
        dx = bounds[1][0] - bounds[0][0],
        dy = bounds[1][1] - bounds[0][1],
        x = (bounds[0][0] + bounds[1][0]) / 2,
        y = (bounds[0][1] + bounds[1][1]) / 2,
        scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
        translate = [width / 2 - scale * x, height / 2 - scale * y];

    svg
        .transition()
        .duration(750)
    // .call(zoom.translate(translate).scale(scale).event); // not in d3 v4
        .call(zoom.transform, __WEBPACK_IMPORTED_MODULE_0_d3__["zoomIdentity"].translate(translate[0], translate[1]).scale(scale)); // updated for d3 v4
}

function reset() {
    active.classed('active', false);
    active = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](null);

    svg
        .transition()
        .duration(750)
    // .call( zoom.transform, d3.zoomIdentity.translate(0, 0).scale(1) ); // not in d3 v4
        .call(zoom.transform, __WEBPACK_IMPORTED_MODULE_0_d3__["zoomIdentity"]); // updated for d3 v4
}

function zoomed() {
    g.style('stroke-width', 1.5 / __WEBPACK_IMPORTED_MODULE_0_d3__["event"].transform.k + 'px');
    // g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"); // not in d3 v4
    g.attr('transform', __WEBPACK_IMPORTED_MODULE_0_d3__["event"].transform); // updated for d3 v4
}

// If the drag behavior prevents the default click,
// also stop propagation so we don’t click-to-zoom.
function stopped() {
    if (__WEBPACK_IMPORTED_MODULE_0_d3__["event"].defaultPrevented) {
        __WEBPACK_IMPORTED_MODULE_0_d3__["event"].stopPropagation();
    }
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBLGdDQUFnQztBQUNoQzs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBLHVEQUF1RCx3REFBd0Q7QUFDL0c7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUZBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFDQTtBQUNBOztBQUVBLG9EQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGVBQWU7QUFDZixxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRCxtSUFBa0c7QUFDbEc7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTtBQUN6RSxnRkFBK0M7QUFDL0M7O0FBRUE7QUFDQTtBQUNBLGlHQUFpRztBQUNqRyw2RUFBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC44YWEwOTE1ZTU4MTQ0NTI0ZWExZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24nO1xuaW1wb3J0ICogYXMgZDNnZW9Qcm9qIGZyb20gJ2QzLWdlby1wcm9qZWN0aW9uJztcblxuLy9sZXQgZDMgPSBPYmplY3QuYXNzaWduKHt9LCBkM2dlb1Byb2osIGQzTWFpbik7XG4vKlxubGV0IHF1ZXN0aW9ucyA9IFtdO1xudmFyIHdpZHRoID0gOTYwO1xudmFyIGhlaWdodCA9IDUwMDtcblxubGV0IHF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uJyk7XG5sZXQgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbScpO1xubGV0IHNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG5sZXQgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpO1xuXG5sZXQgY29ycmVjdEFuc3dlclRleHQ7XG5sZXQgb2xkQ29sb3I7XG5cbnZhciBzdmcgPSBkMy5zZWxlY3QoJyNtYXAnKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAuYXR0cignY2xhc3MnLCAnbWFwJylcbiAgICAuYXBwZW5kKCdnJylcblxudmFyIHByb2plY3Rpb24gPSBkMy5nZW9Sb2JpbnNvbigpXG4gICAgLy8gICAuc2NhbGUod2lkdGggLyAxLjI1KTsgVVNBXG4gICAgLnNjYWxlKHdpZHRoIC8gNS42KTtcblxuLy8gICAgLnRyYW5zbGF0ZShbTWF0aC5zcXJ0KHdpZHRoIC8gMiksIGhlaWdodCAvIDJdKTtcblxuLy8gcHJvamVjdGlvbi5jZW50ZXIoWy05OCwgMzZdKTsgVVNBXG5wcm9qZWN0aW9uLmNlbnRlcihbMTUsIDEwXSk7XG5cblxudmFyIHBhdGggPSBkMy5nZW9QYXRoKClcbiAgICAucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxudmFyIHVybCA9ICcvbWFwcy93b3JsZC0xMTBtLmdlb2pzb24nO1xuXG5kMy5qc29uKHVybCwgZnVuY3Rpb24oZXJyLCBtYXBKc29uKSB7XG4gICAgLy9jb25zb2xlLmxvZyhtYXBKc29uKTtcbiAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBkMy5qc29uJywgZXJyKTtcbiAgICB9XG4gICAgbGV0IG1hcERpdmlzaW9ucyA9IE9iamVjdC5rZXlzKG1hcEpzb24ub2JqZWN0cylbMF07XG4gICAgbGV0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUobWFwSnNvbiwgbWFwSnNvbi5vYmplY3RzW21hcERpdmlzaW9uc10pLmZlYXR1cmVzO1xuICAgIC8vY29uc29sZS5sb2coY291bnRyaWVzLCAnPC0tIGNvdW50cmllcycpO1xuICAgIGxldCBjb2xvclNjYWxlID0gZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdykuZG9tYWluKFszMCwgNzUwXSk7XG5cbiAgICBzdmcuc2VsZWN0QWxsKCcuY291bnRyeScpXG4gICAgICAgIC5kYXRhKGNvdW50cmllcywgZnVuY3Rpb24oY291bnRyeSwgaSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaSwgY291bnRyeSwgJ2NvdW50cnknKTtcbiAgICAgICAgICAgIGlmIChjb3VudHJ5LnByb3BlcnRpZXMubmFtZSAhPT0gJ0Rpc3RyaWN0IG9mIENvbHVtYmlhJykge1xuXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zLnB1c2goY291bnRyeS5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NvdW50cnknKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAncmdiYSg1MCw1MCw1MCwuNiknKVxuICAgICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGRhdGEsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGkgKiA3KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSk7XG4gICAgICAgICAgICBvbGRDb2xvciA9IHRoaXMuZ2V0QXR0cmlidXRlKCdmaWxsJyk7XG4gICAgICAgICAgICAvLyB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ3JnYmEoMjUwLDI1MCwyNTAsLjkpJyk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgMC4yKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmaWxsJywgJ3llbGxvdycpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ2JsYWNrJyk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgMSk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZmlsbCcsIG9sZENvbG9yKTtcblxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcbiAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QnKTtcbiAgICAgICAgICAgIGRhdGEucHJvcGVydGllcy5uYW1lID09PSBjb3JyZWN0QW5zd2VyVGV4dC5pbm5lclRleHQgPyBjb3JyZWN0QW5zd2VyKCkgOiB3cm9uZ0Fuc3dlcigpO1xuICAgICAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbnMpO1xufSk7XG5cblxucmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVRdWVzdGlvbik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUXVlc3Rpb24oKSB7XG4gICAgcXVlc3Rpb24uaW5uZXJIVE1MID0gYFdoZXJlIGlzIDxzdHJvbmcgaWQ9J3Rlc3QnPiR7cXVlc3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHF1ZXN0aW9ucy5sZW5ndGgpXX08L3N0cm9uZz4/YDtcbiAgICAvL3N0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG5cbn1cblxuZnVuY3Rpb24gY29ycmVjdEFuc3dlcigpIHtcbiAgICBsZXQgc2NvcmVDb3VudCA9IHBhcnNlSW50KHNjb3JlLmlubmVyVGV4dCk7XG4gICAgc2NvcmUuaW5uZXJUZXh0ID0gc2NvcmVDb3VudCArPSAxO1xuICAgIHN0YXR1cy5pbm5lclRleHQgPSAnQ09SUkVDVCEnO1xuICAgIC8vIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG5cbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgIGdlbmVyYXRlUXVlc3Rpb24oKTtcbn1cblxuZnVuY3Rpb24gd3JvbmdBbnN3ZXIoKSB7XG4gICAgc3RhdHVzLmlubmVyVGV4dCA9ICdXUk9ORyEnO1xuICAgIC8vIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3dyb25nJyk7XG59XG4qL1xuY29uc29sZS5sb2coZDMpO1xudmFyIHdpZHRoID0gOTYwLFxuICAgIGhlaWdodCA9IDUwMCxcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QobnVsbCk7XG5cbmxldCBjb2xvclNjYWxlID0gZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdykuZG9tYWluKFszMCwgNzUwXSk7XG5cbnZhciBwcm9qZWN0aW9uID0gZDNnZW9Qcm9qXG4gICAgLmdlb1JvYmluc29uKCkgLy8gdXBkYXRlZCBmb3IgZDMgdjRcbiAgICAuc2NhbGUoMTUwKVxuICAgIC50cmFuc2xhdGUoW3dpZHRoIC8gMiwgaGVpZ2h0IC8gMS43NV0pO1xuXG52YXIgem9vbSA9IGQzXG4gICAgLnpvb20oKVxuICAgIC8vIG5vIGxvbmdlciBpbiBkMyB2NCAtIHpvb20gaW5pdGlhbGlzZXMgd2l0aCB6b29tSWRlbnRpdHksIHNvIGl0J3MgYWxyZWFkeSBhdCBvcmlnaW5cbiAgICAvLyAudHJhbnNsYXRlKFswLCAwXSlcbiAgICAvLyAuc2NhbGUoMSlcbiAgICAuc2NhbGVFeHRlbnQoWzEsIDhdKVxuICAgIC5vbignem9vbScsIHpvb21lZCk7XG5cbnZhciBwYXRoID0gZDNcbiAgICAuZ2VvUGF0aCgpIC8vIHVwZGF0ZWQgZm9yIGQzIHY0XG4gICAgLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbnZhciBzdmcgPSBkM1xuICAgIC5zZWxlY3QoJ2JvZHknKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAub24oJ2NsaWNrJywgc3RvcHBlZCwgdHJ1ZSk7XG5cbnN2Z1xuICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgIC5hdHRyKCdjbGFzcycsICdiYWNrZ3JvdW5kJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5vbignY2xpY2snLCByZXNldCk7XG5cbnZhciBnID0gc3ZnLmFwcGVuZCgnZycpO1xuXG5zdmcuY2FsbCh6b29tKTsgLy8gZGVsZXRlIHRoaXMgbGluZSB0byBkaXNhYmxlIGZyZWUgem9vbWluZ1xuLy8gLmNhbGwoem9vbS5ldmVudCk7IC8vIG5vdCBpbiBkMyB2NFxuXG5kMy5qc29uKCcvbWFwcy93b3JsZC0xMTBtLmdlb2pzb24nLCBmdW5jdGlvbihlcnJvciwgbWFwSnNvbikge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgbGV0IG1hcERpdmlzaW9ucyA9IE9iamVjdC5rZXlzKG1hcEpzb24ub2JqZWN0cylbMF07XG5cbiAgICBnXG4gICAgICAgIC5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuZGF0YSh0b3BvanNvbi5mZWF0dXJlKG1hcEpzb24sIG1hcEpzb24ub2JqZWN0c1ttYXBEaXZpc2lvbnNdKS5mZWF0dXJlcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkYXRhLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3JTY2FsZShpICogNyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBjbGlja2VkKTtcblxuICAgIGdcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5kYXR1bShcbiAgICAgICAgICAgIHRvcG9qc29uLm1lc2gobWFwSnNvbiwgbWFwSnNvbi5vYmplY3RzW21hcERpdmlzaW9uc10sIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAhPT0gYjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ21lc2gnKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpO1xufSk7XG5cbmZ1bmN0aW9uIGNsaWNrZWQoZCkge1xuICAgIGlmIChhY3RpdmUubm9kZSgpID09PSB0aGlzKSB7XG4gICAgICAgIHJldHVybiByZXNldCgpO1xuICAgIH1cbiAgICBhY3RpdmUuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKTtcblxuICAgIHZhciBib3VuZHMgPSBwYXRoLmJvdW5kcyhkKSxcbiAgICAgICAgZHggPSBib3VuZHNbMV1bMF0gLSBib3VuZHNbMF1bMF0sXG4gICAgICAgIGR5ID0gYm91bmRzWzFdWzFdIC0gYm91bmRzWzBdWzFdLFxuICAgICAgICB4ID0gKGJvdW5kc1swXVswXSArIGJvdW5kc1sxXVswXSkgLyAyLFxuICAgICAgICB5ID0gKGJvdW5kc1swXVsxXSArIGJvdW5kc1sxXVsxXSkgLyAyLFxuICAgICAgICBzY2FsZSA9IE1hdGgubWF4KDEsIE1hdGgubWluKDgsIDAuOSAvIE1hdGgubWF4KGR4IC8gd2lkdGgsIGR5IC8gaGVpZ2h0KSkpLFxuICAgICAgICB0cmFuc2xhdGUgPSBbd2lkdGggLyAyIC0gc2NhbGUgKiB4LCBoZWlnaHQgLyAyIC0gc2NhbGUgKiB5XTtcblxuICAgIHN2Z1xuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgLy8gLmNhbGwoem9vbS50cmFuc2xhdGUodHJhbnNsYXRlKS5zY2FsZShzY2FsZSkuZXZlbnQpOyAvLyBub3QgaW4gZDMgdjRcbiAgICAgICAgLmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUodHJhbnNsYXRlWzBdLCB0cmFuc2xhdGVbMV0pLnNjYWxlKHNjYWxlKSk7IC8vIHVwZGF0ZWQgZm9yIGQzIHY0XG59XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGFjdGl2ZS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuXG4gICAgc3ZnXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAvLyAuY2FsbCggem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUoMCwgMCkuc2NhbGUoMSkgKTsgLy8gbm90IGluIGQzIHY0XG4gICAgICAgIC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkpOyAvLyB1cGRhdGVkIGZvciBkMyB2NFxufVxuXG5mdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgZy5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMS41IC8gZDMuZXZlbnQudHJhbnNmb3JtLmsgKyAncHgnKTtcbiAgICAvLyBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBkMy5ldmVudC50cmFuc2xhdGUgKyBcIilzY2FsZShcIiArIGQzLmV2ZW50LnNjYWxlICsgXCIpXCIpOyAvLyBub3QgaW4gZDMgdjRcbiAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGQzLmV2ZW50LnRyYW5zZm9ybSk7IC8vIHVwZGF0ZWQgZm9yIGQzIHY0XG59XG5cbi8vIElmIHRoZSBkcmFnIGJlaGF2aW9yIHByZXZlbnRzIHRoZSBkZWZhdWx0IGNsaWNrLFxuLy8gYWxzbyBzdG9wIHByb3BhZ2F0aW9uIHNvIHdlIGRvbuKAmXQgY2xpY2stdG8tem9vbS5cbmZ1bmN0aW9uIHN0b3BwZWQoKSB7XG4gICAgaWYgKGQzLmV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
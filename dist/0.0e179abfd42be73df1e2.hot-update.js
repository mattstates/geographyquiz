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

var width = 960,
    height = 500,
    active = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](null);

let colorScale = __WEBPACK_IMPORTED_MODULE_0_d3__["scaleSequential"](__WEBPACK_IMPORTED_MODULE_0_d3__["interpolateRainbow"]).domain([30, 750]);

var projection = __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__["a" /* geoRobinson */]()
    .scale(170)
    .translate([width / 2, height / 1.75]);

var zoom = __WEBPACK_IMPORTED_MODULE_0_d3__["zoom"]()
    .scaleExtent([1, 8])
    .on('zoom', zoomed);

var path = __WEBPACK_IMPORTED_MODULE_0_d3__["geoPath"]()
    .projection(projection);

var svg = __WEBPACK_IMPORTED_MODULE_0_d3__["select"]('#map')
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
        .call(zoom.transform, __WEBPACK_IMPORTED_MODULE_0_d3__["zoomIdentity"].translate(translate[0], translate[1]).scale(scale));
}

function reset() {
    active.classed('active', false);
    active = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](null);

    svg
        .transition()
        .duration(750)
        .call(zoom.transform, __WEBPACK_IMPORTED_MODULE_0_d3__["zoomIdentity"]);
}

function zoomed() {
    g.style('stroke-width', 1.5 / __WEBPACK_IMPORTED_MODULE_0_d3__["event"].transform.k + 'px');
    g.attr('transform', __WEBPACK_IMPORTED_MODULE_0_d3__["event"].transform);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBLGdDQUFnQztBQUNoQzs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBLHVEQUF1RCx3REFBd0Q7QUFDL0c7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1RkFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUNBO0FBQ0E7O0FBRUEsb0RBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuMGUxNzlhYmZkNDJiZTczZGYxZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uJztcbmltcG9ydCAqIGFzIGQzZ2VvUHJvaiBmcm9tICdkMy1nZW8tcHJvamVjdGlvbic7XG5cbi8vbGV0IGQzID0gT2JqZWN0LmFzc2lnbih7fSwgZDNnZW9Qcm9qLCBkM01haW4pO1xuLypcbmxldCBxdWVzdGlvbnMgPSBbXTtcbnZhciB3aWR0aCA9IDk2MDtcbnZhciBoZWlnaHQgPSA1MDA7XG5cbmxldCBxdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbicpO1xubGV0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20nKTtcbmxldCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xubGV0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKTtcblxubGV0IGNvcnJlY3RBbnN3ZXJUZXh0O1xubGV0IG9sZENvbG9yO1xuXG52YXIgc3ZnID0gZDMuc2VsZWN0KCcjbWFwJylcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ21hcCcpXG4gICAgLmFwcGVuZCgnZycpXG5cbnZhciBwcm9qZWN0aW9uID0gZDMuZ2VvUm9iaW5zb24oKVxuICAgIC8vICAgLnNjYWxlKHdpZHRoIC8gMS4yNSk7IFVTQVxuICAgIC5zY2FsZSh3aWR0aCAvIDUuNik7XG5cbi8vICAgIC50cmFuc2xhdGUoW01hdGguc3FydCh3aWR0aCAvIDIpLCBoZWlnaHQgLyAyXSk7XG5cbi8vIHByb2plY3Rpb24uY2VudGVyKFstOTgsIDM2XSk7IFVTQVxucHJvamVjdGlvbi5jZW50ZXIoWzE1LCAxMF0pO1xuXG5cbnZhciBwYXRoID0gZDMuZ2VvUGF0aCgpXG4gICAgLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbnZhciB1cmwgPSAnL21hcHMvd29ybGQtMTEwbS5nZW9qc29uJztcblxuZDMuanNvbih1cmwsIGZ1bmN0aW9uKGVyciwgbWFwSnNvbikge1xuICAgIC8vY29uc29sZS5sb2cobWFwSnNvbik7XG4gICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gZDMuanNvbicsIGVycik7XG4gICAgfVxuICAgIGxldCBtYXBEaXZpc2lvbnMgPSBPYmplY3Qua2V5cyhtYXBKc29uLm9iamVjdHMpWzBdO1xuICAgIGxldCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKG1hcEpzb24sIG1hcEpzb24ub2JqZWN0c1ttYXBEaXZpc2lvbnNdKS5mZWF0dXJlcztcbiAgICAvL2NvbnNvbGUubG9nKGNvdW50cmllcywgJzwtLSBjb3VudHJpZXMnKTtcbiAgICBsZXQgY29sb3JTY2FsZSA9IGQzLnNjYWxlU2VxdWVudGlhbChkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpLmRvbWFpbihbMzAsIDc1MF0pO1xuXG4gICAgc3ZnLnNlbGVjdEFsbCgnLmNvdW50cnknKVxuICAgICAgICAuZGF0YShjb3VudHJpZXMsIGZ1bmN0aW9uKGNvdW50cnksIGkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGksIGNvdW50cnksICdjb3VudHJ5Jyk7XG4gICAgICAgICAgICBpZiAoY291bnRyeS5wcm9wZXJ0aWVzLm5hbWUgIT09ICdEaXN0cmljdCBvZiBDb2x1bWJpYScpIHtcblxuICAgICAgICAgICAgICAgIHF1ZXN0aW9ucy5wdXNoKGNvdW50cnkucHJvcGVydGllcy5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjb3VudHJ5JylcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoKVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJ3JnYmEoNTAsNTAsNTAsLjYpJylcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkYXRhLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3JTY2FsZShpICogNyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ2V0QXR0cmlidXRlKCdmaWxsJykpO1xuICAgICAgICAgICAgb2xkQ29sb3IgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZmlsbCcpO1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdyZ2JhKDI1MCwyNTAsMjUwLC45KScpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDAuMik7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZmlsbCcsICd5ZWxsb3cnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdibGFjaycpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBvbGRDb2xvcik7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG4gICAgICAgICAgICBjb3JyZWN0QW5zd2VyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0Jyk7XG4gICAgICAgICAgICBkYXRhLnByb3BlcnRpZXMubmFtZSA9PT0gY29ycmVjdEFuc3dlclRleHQuaW5uZXJUZXh0ID8gY29ycmVjdEFuc3dlcigpIDogd3JvbmdBbnN3ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25zKTtcbn0pO1xuXG5cbnJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlUXVlc3Rpb24pO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVF1ZXN0aW9uKCkge1xuICAgIHF1ZXN0aW9uLmlubmVySFRNTCA9IGBXaGVyZSBpcyA8c3Ryb25nIGlkPSd0ZXN0Jz4ke3F1ZXN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBxdWVzdGlvbnMubGVuZ3RoKV19PC9zdHJvbmc+P2A7XG4gICAgLy9zdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuXG59XG5cbmZ1bmN0aW9uIGNvcnJlY3RBbnN3ZXIoKSB7XG4gICAgbGV0IHNjb3JlQ291bnQgPSBwYXJzZUludChzY29yZS5pbm5lclRleHQpO1xuICAgIHNjb3JlLmlubmVyVGV4dCA9IHNjb3JlQ291bnQgKz0gMTtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ0NPUlJFQ1QhJztcbiAgICAvLyBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuXG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICBnZW5lcmF0ZVF1ZXN0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIHdyb25nQW5zd2VyKCkge1xuICAgIHN0YXR1cy5pbm5lclRleHQgPSAnV1JPTkchJztcbiAgICAvLyBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCd3cm9uZycpO1xufVxuKi9cblxudmFyIHdpZHRoID0gOTYwLFxuICAgIGhlaWdodCA9IDUwMCxcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QobnVsbCk7XG5cbmxldCBjb2xvclNjYWxlID0gZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdykuZG9tYWluKFszMCwgNzUwXSk7XG5cbnZhciBwcm9qZWN0aW9uID0gZDNnZW9Qcm9qXG4gICAgLmdlb1JvYmluc29uKClcbiAgICAuc2NhbGUoMTcwKVxuICAgIC50cmFuc2xhdGUoW3dpZHRoIC8gMiwgaGVpZ2h0IC8gMS43NV0pO1xuXG52YXIgem9vbSA9IGQzXG4gICAgLnpvb20oKVxuICAgIC5zY2FsZUV4dGVudChbMSwgOF0pXG4gICAgLm9uKCd6b29tJywgem9vbWVkKTtcblxudmFyIHBhdGggPSBkM1xuICAgIC5nZW9QYXRoKClcbiAgICAucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxudmFyIHN2ZyA9IGQzXG4gICAgLnNlbGVjdCgnI21hcCcpXG4gICAgLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5vbignY2xpY2snLCBzdG9wcGVkLCB0cnVlKTtcblxuc3ZnXG4gICAgLmFwcGVuZCgncmVjdCcpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2JhY2tncm91bmQnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLm9uKCdjbGljaycsIHJlc2V0KTtcblxudmFyIGcgPSBzdmcuYXBwZW5kKCdnJyk7XG5cbnN2Zy5jYWxsKHpvb20pOyAvLyBkZWxldGUgdGhpcyBsaW5lIHRvIGRpc2FibGUgZnJlZSB6b29taW5nXG5cbmQzLmpzb24oJy9tYXBzL3dvcmxkLTExMG0uZ2VvanNvbicsIGZ1bmN0aW9uKGVycm9yLCBtYXBKc29uKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBsZXQgbWFwRGl2aXNpb25zID0gT2JqZWN0LmtleXMobWFwSnNvbi5vYmplY3RzKVswXTtcblxuICAgIGdcbiAgICAgICAgLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgICAgIC5kYXRhKHRvcG9qc29uLmZlYXR1cmUobWFwSnNvbiwgbWFwSnNvbi5vYmplY3RzW21hcERpdmlzaW9uc10pLmZlYXR1cmVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoKVxuICAgICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGRhdGEsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGkgKiA3KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGNsaWNrZWQpO1xuXG4gICAgZ1xuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmRhdHVtKFxuICAgICAgICAgICAgdG9wb2pzb24ubWVzaChtYXBKc29uLCBtYXBKc29uLm9iamVjdHNbbWFwRGl2aXNpb25zXSwgZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICE9PSBiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnbWVzaCcpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aCk7XG59KTtcblxuZnVuY3Rpb24gY2xpY2tlZChkKSB7XG4gICAgaWYgKGFjdGl2ZS5ub2RlKCkgPT09IHRoaXMpIHtcbiAgICAgICAgcmV0dXJuIHJlc2V0KCk7XG4gICAgfVxuICAgIGFjdGl2ZS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgYWN0aXZlID0gZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpO1xuXG4gICAgdmFyIGJvdW5kcyA9IHBhdGguYm91bmRzKGQpLFxuICAgICAgICBkeCA9IGJvdW5kc1sxXVswXSAtIGJvdW5kc1swXVswXSxcbiAgICAgICAgZHkgPSBib3VuZHNbMV1bMV0gLSBib3VuZHNbMF1bMV0sXG4gICAgICAgIHggPSAoYm91bmRzWzBdWzBdICsgYm91bmRzWzFdWzBdKSAvIDIsXG4gICAgICAgIHkgPSAoYm91bmRzWzBdWzFdICsgYm91bmRzWzFdWzFdKSAvIDIsXG4gICAgICAgIHNjYWxlID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oOCwgMC45IC8gTWF0aC5tYXgoZHggLyB3aWR0aCwgZHkgLyBoZWlnaHQpKSksXG4gICAgICAgIHRyYW5zbGF0ZSA9IFt3aWR0aCAvIDIgLSBzY2FsZSAqIHgsIGhlaWdodCAvIDIgLSBzY2FsZSAqIHldO1xuXG4gICAgc3ZnXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUodHJhbnNsYXRlWzBdLCB0cmFuc2xhdGVbMV0pLnNjYWxlKHNjYWxlKSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGFjdGl2ZS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuXG4gICAgc3ZnXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eSk7XG59XG5cbmZ1bmN0aW9uIHpvb21lZCgpIHtcbiAgICBnLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxLjUgLyBkMy5ldmVudC50cmFuc2Zvcm0uayArICdweCcpO1xuICAgIGcuYXR0cigndHJhbnNmb3JtJywgZDMuZXZlbnQudHJhbnNmb3JtKTtcbn1cblxuLy8gSWYgdGhlIGRyYWcgYmVoYXZpb3IgcHJldmVudHMgdGhlIGRlZmF1bHQgY2xpY2ssXG4vLyBhbHNvIHN0b3AgcHJvcGFnYXRpb24gc28gd2UgZG9u4oCZdCBjbGljay10by16b29tLlxuZnVuY3Rpb24gc3RvcHBlZCgpIHtcbiAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
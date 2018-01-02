webpackHotUpdate(0,{

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_topojson__ = __webpack_require__("./node_modules/topojson/index.js");


//import * as d3geoProj from 'd3-geo-projection';

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

var projection = __WEBPACK_IMPORTED_MODULE_0_d3__["geoMercator"]() // updated for d3 v4
    .scale(130)
    .translate([width / 2, height / 2]);

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
        .attr('class', 'feature')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7O0FBRUEsZ0NBQWdDO0FBQ2hDOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0EsdURBQXVELHdEQUF3RDtBQUMvRzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUNBO0FBQ0E7O0FBRUEsb0RBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZUFBZTtBQUNmLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELG1JQUFrRztBQUNsRzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFLGdGQUErQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0EsaUdBQWlHO0FBQ2pHLDZFQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmE0NGE4OWFkYjJjM2M2Nzc4OTdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbic7XG4vL2ltcG9ydCAqIGFzIGQzZ2VvUHJvaiBmcm9tICdkMy1nZW8tcHJvamVjdGlvbic7XG5cbi8vbGV0IGQzID0gT2JqZWN0LmFzc2lnbih7fSwgZDNnZW9Qcm9qLCBkM01haW4pO1xuLypcbmxldCBxdWVzdGlvbnMgPSBbXTtcbnZhciB3aWR0aCA9IDk2MDtcbnZhciBoZWlnaHQgPSA1MDA7XG5cbmxldCBxdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbicpO1xubGV0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20nKTtcbmxldCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xubGV0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKTtcblxubGV0IGNvcnJlY3RBbnN3ZXJUZXh0O1xubGV0IG9sZENvbG9yO1xuXG52YXIgc3ZnID0gZDMuc2VsZWN0KCcjbWFwJylcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ21hcCcpXG4gICAgLmFwcGVuZCgnZycpXG5cbnZhciBwcm9qZWN0aW9uID0gZDMuZ2VvUm9iaW5zb24oKVxuICAgIC8vICAgLnNjYWxlKHdpZHRoIC8gMS4yNSk7IFVTQVxuICAgIC5zY2FsZSh3aWR0aCAvIDUuNik7XG5cbi8vICAgIC50cmFuc2xhdGUoW01hdGguc3FydCh3aWR0aCAvIDIpLCBoZWlnaHQgLyAyXSk7XG5cbi8vIHByb2plY3Rpb24uY2VudGVyKFstOTgsIDM2XSk7IFVTQVxucHJvamVjdGlvbi5jZW50ZXIoWzE1LCAxMF0pO1xuXG5cbnZhciBwYXRoID0gZDMuZ2VvUGF0aCgpXG4gICAgLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbnZhciB1cmwgPSAnL21hcHMvd29ybGQtMTEwbS5nZW9qc29uJztcblxuZDMuanNvbih1cmwsIGZ1bmN0aW9uKGVyciwgbWFwSnNvbikge1xuICAgIC8vY29uc29sZS5sb2cobWFwSnNvbik7XG4gICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gZDMuanNvbicsIGVycik7XG4gICAgfVxuICAgIGxldCBtYXBEaXZpc2lvbnMgPSBPYmplY3Qua2V5cyhtYXBKc29uLm9iamVjdHMpWzBdO1xuICAgIGxldCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKG1hcEpzb24sIG1hcEpzb24ub2JqZWN0c1ttYXBEaXZpc2lvbnNdKS5mZWF0dXJlcztcbiAgICAvL2NvbnNvbGUubG9nKGNvdW50cmllcywgJzwtLSBjb3VudHJpZXMnKTtcbiAgICBsZXQgY29sb3JTY2FsZSA9IGQzLnNjYWxlU2VxdWVudGlhbChkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpLmRvbWFpbihbMzAsIDc1MF0pO1xuXG4gICAgc3ZnLnNlbGVjdEFsbCgnLmNvdW50cnknKVxuICAgICAgICAuZGF0YShjb3VudHJpZXMsIGZ1bmN0aW9uKGNvdW50cnksIGkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGksIGNvdW50cnksICdjb3VudHJ5Jyk7XG4gICAgICAgICAgICBpZiAoY291bnRyeS5wcm9wZXJ0aWVzLm5hbWUgIT09ICdEaXN0cmljdCBvZiBDb2x1bWJpYScpIHtcblxuICAgICAgICAgICAgICAgIHF1ZXN0aW9ucy5wdXNoKGNvdW50cnkucHJvcGVydGllcy5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjb3VudHJ5JylcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoKVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJ3JnYmEoNTAsNTAsNTAsLjYpJylcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkYXRhLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3JTY2FsZShpICogNyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ2V0QXR0cmlidXRlKCdmaWxsJykpO1xuICAgICAgICAgICAgb2xkQ29sb3IgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZmlsbCcpO1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdyZ2JhKDI1MCwyNTAsMjUwLC45KScpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDAuMik7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZmlsbCcsICd5ZWxsb3cnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdibGFjaycpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBvbGRDb2xvcik7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG4gICAgICAgICAgICBjb3JyZWN0QW5zd2VyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0Jyk7XG4gICAgICAgICAgICBkYXRhLnByb3BlcnRpZXMubmFtZSA9PT0gY29ycmVjdEFuc3dlclRleHQuaW5uZXJUZXh0ID8gY29ycmVjdEFuc3dlcigpIDogd3JvbmdBbnN3ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25zKTtcbn0pO1xuXG5cbnJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlUXVlc3Rpb24pO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVF1ZXN0aW9uKCkge1xuICAgIHF1ZXN0aW9uLmlubmVySFRNTCA9IGBXaGVyZSBpcyA8c3Ryb25nIGlkPSd0ZXN0Jz4ke3F1ZXN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBxdWVzdGlvbnMubGVuZ3RoKV19PC9zdHJvbmc+P2A7XG4gICAgLy9zdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuXG59XG5cbmZ1bmN0aW9uIGNvcnJlY3RBbnN3ZXIoKSB7XG4gICAgbGV0IHNjb3JlQ291bnQgPSBwYXJzZUludChzY29yZS5pbm5lclRleHQpO1xuICAgIHNjb3JlLmlubmVyVGV4dCA9IHNjb3JlQ291bnQgKz0gMTtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ0NPUlJFQ1QhJztcbiAgICAvLyBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuXG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICBnZW5lcmF0ZVF1ZXN0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIHdyb25nQW5zd2VyKCkge1xuICAgIHN0YXR1cy5pbm5lclRleHQgPSAnV1JPTkchJztcbiAgICAvLyBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCd3cm9uZycpO1xufVxuKi9cbmNvbnNvbGUubG9nKGQzKTtcbnZhciB3aWR0aCA9IDk2MCxcbiAgICBoZWlnaHQgPSA1MDAsXG4gICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuXG52YXIgcHJvamVjdGlvbiA9IGQzXG4gICAgLmdlb01lcmNhdG9yKCkgLy8gdXBkYXRlZCBmb3IgZDMgdjRcbiAgICAuc2NhbGUoMTMwKVxuICAgIC50cmFuc2xhdGUoW3dpZHRoIC8gMiwgaGVpZ2h0IC8gMl0pO1xuXG52YXIgem9vbSA9IGQzXG4gICAgLnpvb20oKVxuICAgIC8vIG5vIGxvbmdlciBpbiBkMyB2NCAtIHpvb20gaW5pdGlhbGlzZXMgd2l0aCB6b29tSWRlbnRpdHksIHNvIGl0J3MgYWxyZWFkeSBhdCBvcmlnaW5cbiAgICAvLyAudHJhbnNsYXRlKFswLCAwXSlcbiAgICAvLyAuc2NhbGUoMSlcbiAgICAuc2NhbGVFeHRlbnQoWzEsIDhdKVxuICAgIC5vbignem9vbScsIHpvb21lZCk7XG5cbnZhciBwYXRoID0gZDNcbiAgICAuZ2VvUGF0aCgpIC8vIHVwZGF0ZWQgZm9yIGQzIHY0XG4gICAgLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbnZhciBzdmcgPSBkM1xuICAgIC5zZWxlY3QoJ2JvZHknKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAub24oJ2NsaWNrJywgc3RvcHBlZCwgdHJ1ZSk7XG5cbnN2Z1xuICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgIC5hdHRyKCdjbGFzcycsICdiYWNrZ3JvdW5kJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5vbignY2xpY2snLCByZXNldCk7XG5cbnZhciBnID0gc3ZnLmFwcGVuZCgnZycpO1xuXG5zdmcuY2FsbCh6b29tKTsgLy8gZGVsZXRlIHRoaXMgbGluZSB0byBkaXNhYmxlIGZyZWUgem9vbWluZ1xuLy8gLmNhbGwoem9vbS5ldmVudCk7IC8vIG5vdCBpbiBkMyB2NFxuXG5kMy5qc29uKCcvbWFwcy93b3JsZC0xMTBtLmdlb2pzb24nLCBmdW5jdGlvbihlcnJvciwgbWFwSnNvbikge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgbGV0IG1hcERpdmlzaW9ucyA9IE9iamVjdC5rZXlzKG1hcEpzb24ub2JqZWN0cylbMF07XG5cbiAgICBnXG4gICAgICAgIC5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuZGF0YSh0b3BvanNvbi5mZWF0dXJlKG1hcEpzb24sIG1hcEpzb24ub2JqZWN0c1ttYXBEaXZpc2lvbnNdKS5mZWF0dXJlcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZlYXR1cmUnKVxuICAgICAgICAub24oJ2NsaWNrJywgY2xpY2tlZCk7XG5cbiAgICBnXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuZGF0dW0oXG4gICAgICAgICAgICB0b3BvanNvbi5tZXNoKG1hcEpzb24sIG1hcEpzb24ub2JqZWN0c1ttYXBEaXZpc2lvbnNdLCBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IGI7XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdtZXNoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoKTtcbn0pO1xuXG5mdW5jdGlvbiBjbGlja2VkKGQpIHtcbiAgICBpZiAoYWN0aXZlLm5vZGUoKSA9PT0gdGhpcykge1xuICAgICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICB9XG4gICAgYWN0aXZlLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QodGhpcykuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSk7XG5cbiAgICB2YXIgYm91bmRzID0gcGF0aC5ib3VuZHMoZCksXG4gICAgICAgIGR4ID0gYm91bmRzWzFdWzBdIC0gYm91bmRzWzBdWzBdLFxuICAgICAgICBkeSA9IGJvdW5kc1sxXVsxXSAtIGJvdW5kc1swXVsxXSxcbiAgICAgICAgeCA9IChib3VuZHNbMF1bMF0gKyBib3VuZHNbMV1bMF0pIC8gMixcbiAgICAgICAgeSA9IChib3VuZHNbMF1bMV0gKyBib3VuZHNbMV1bMV0pIC8gMixcbiAgICAgICAgc2NhbGUgPSBNYXRoLm1heCgxLCBNYXRoLm1pbig4LCAwLjkgLyBNYXRoLm1heChkeCAvIHdpZHRoLCBkeSAvIGhlaWdodCkpKSxcbiAgICAgICAgdHJhbnNsYXRlID0gW3dpZHRoIC8gMiAtIHNjYWxlICogeCwgaGVpZ2h0IC8gMiAtIHNjYWxlICogeV07XG5cbiAgICBzdmdcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgIC8vIC5jYWxsKHpvb20udHJhbnNsYXRlKHRyYW5zbGF0ZSkuc2NhbGUoc2NhbGUpLmV2ZW50KTsgLy8gbm90IGluIGQzIHY0XG4gICAgICAgIC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKHRyYW5zbGF0ZVswXSwgdHJhbnNsYXRlWzFdKS5zY2FsZShzY2FsZSkpOyAvLyB1cGRhdGVkIGZvciBkMyB2NFxufVxuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBhY3RpdmUuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdChudWxsKTtcblxuICAgIHN2Z1xuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgLy8gLmNhbGwoIHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKDAsIDApLnNjYWxlKDEpICk7IC8vIG5vdCBpbiBkMyB2NFxuICAgICAgICAuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5KTsgLy8gdXBkYXRlZCBmb3IgZDMgdjRcbn1cblxuZnVuY3Rpb24gem9vbWVkKCkge1xuICAgIGcuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEuNSAvIGQzLmV2ZW50LnRyYW5zZm9ybS5rICsgJ3B4Jyk7XG4gICAgLy8gZy5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgZDMuZXZlbnQudHJhbnNsYXRlICsgXCIpc2NhbGUoXCIgKyBkMy5ldmVudC5zY2FsZSArIFwiKVwiKTsgLy8gbm90IGluIGQzIHY0XG4gICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCBkMy5ldmVudC50cmFuc2Zvcm0pOyAvLyB1cGRhdGVkIGZvciBkMyB2NFxufVxuXG4vLyBJZiB0aGUgZHJhZyBiZWhhdmlvciBwcmV2ZW50cyB0aGUgZGVmYXVsdCBjbGljayxcbi8vIGFsc28gc3RvcCBwcm9wYWdhdGlvbiBzbyB3ZSBkb27igJl0IGNsaWNrLXRvLXpvb20uXG5mdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgIGlmIChkMy5ldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate(0,{

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_topojson__ = __webpack_require__("./node_modules/topojson/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__ = __webpack_require__("./node_modules/d3-geo-projection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_selection__ = __webpack_require__("./node_modules/d3-selection/index.js");






let d3 = Object.assign({}, __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__, __WEBPACK_IMPORTED_MODULE_0_d3__, { event: __WEBPACK_IMPORTED_MODULE_3_d3_selection__["a" /* event */] });
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
console.log(d3);
var width = 960,
    height = 500,
    active = d3.select(null);

var projection = d3
    .geoAlbersUsa() // updated for d3 v4
    .scale(1000)
    .translate([width / 2, height / 2]);

var zoom = d3
    .zoom()
    // no longer in d3 v4 - zoom initialises with zoomIdentity, so it's already at origin
    // .translate([0, 0])
    // .scale(1)
    .scaleExtent([1, 8])
    .on('zoom', zoomed);

var path = d3
    .geoPath() // updated for d3 v4
    .projection(projection);

var svg = d3
    .select('body')
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

d3.json('/maps/world-110m.geojson', function(error, us) {
    if (error) {
        throw error;
    }

    g
        .selectAll('path')
        .data(__WEBPACK_IMPORTED_MODULE_1_topojson__["a" /* feature */](us, us.objects.states).features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', 'feature')
        .on('click', clicked);

    g
        .append('path')
        .datum(
            __WEBPACK_IMPORTED_MODULE_1_topojson__["b" /* mesh */](us, us.objects.states, function(a, b) {
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
    active = d3.select(this).classed('active', true);

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
        .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)); // updated for d3 v4
}

function reset() {
    active.classed('active', false);
    active = d3.select(null);

    svg
        .transition()
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
    if (d3.event.defaultPrevented) {
        d3.event.stopPropagation();
    }
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ2dCOzs7QUFHaEIseUJBQXlCLHNGQUFzQixxRUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQSx1REFBdUQsd0RBQXdEO0FBQy9HOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGVBQWU7QUFDZixxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Qsa0dBQWtHO0FBQ2xHOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekUsK0NBQStDO0FBQy9DOztBQUVBO0FBQ0E7QUFDQSxpR0FBaUc7QUFDakcsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuZjM0NmVhZjJmMjBjYjliZTg0ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzTWFpbiBmcm9tICdkMyc7XG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbic7XG5pbXBvcnQgKiBhcyBkM2dlb1Byb2ogZnJvbSAnZDMtZ2VvLXByb2plY3Rpb24nO1xuaW1wb3J0IHsgZXZlbnQgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuXG5cbmxldCBkMyA9IE9iamVjdC5hc3NpZ24oe30sIGQzZ2VvUHJvaiwgZDNNYWluLCB7IGV2ZW50IH0pO1xuLypcbmxldCBxdWVzdGlvbnMgPSBbXTtcbnZhciB3aWR0aCA9IDk2MDtcbnZhciBoZWlnaHQgPSA1MDA7XG5cbmxldCBxdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbicpO1xubGV0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20nKTtcbmxldCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xubGV0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKTtcblxubGV0IGNvcnJlY3RBbnN3ZXJUZXh0O1xubGV0IG9sZENvbG9yO1xuXG52YXIgc3ZnID0gZDMuc2VsZWN0KCcjbWFwJylcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ21hcCcpXG4gICAgLmFwcGVuZCgnZycpXG5cbnZhciBwcm9qZWN0aW9uID0gZDMuZ2VvUm9iaW5zb24oKVxuICAgIC8vICAgLnNjYWxlKHdpZHRoIC8gMS4yNSk7IFVTQVxuICAgIC5zY2FsZSh3aWR0aCAvIDUuNik7XG5cbi8vICAgIC50cmFuc2xhdGUoW01hdGguc3FydCh3aWR0aCAvIDIpLCBoZWlnaHQgLyAyXSk7XG5cbi8vIHByb2plY3Rpb24uY2VudGVyKFstOTgsIDM2XSk7IFVTQVxucHJvamVjdGlvbi5jZW50ZXIoWzE1LCAxMF0pO1xuXG5cbnZhciBwYXRoID0gZDMuZ2VvUGF0aCgpXG4gICAgLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbnZhciB1cmwgPSAnL21hcHMvd29ybGQtMTEwbS5nZW9qc29uJztcblxuZDMuanNvbih1cmwsIGZ1bmN0aW9uKGVyciwgbWFwSnNvbikge1xuICAgIC8vY29uc29sZS5sb2cobWFwSnNvbik7XG4gICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gZDMuanNvbicsIGVycik7XG4gICAgfVxuICAgIGxldCBtYXBEaXZpc2lvbnMgPSBPYmplY3Qua2V5cyhtYXBKc29uLm9iamVjdHMpWzBdO1xuICAgIGxldCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKG1hcEpzb24sIG1hcEpzb24ub2JqZWN0c1ttYXBEaXZpc2lvbnNdKS5mZWF0dXJlcztcbiAgICAvL2NvbnNvbGUubG9nKGNvdW50cmllcywgJzwtLSBjb3VudHJpZXMnKTtcbiAgICBsZXQgY29sb3JTY2FsZSA9IGQzLnNjYWxlU2VxdWVudGlhbChkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpLmRvbWFpbihbMzAsIDc1MF0pO1xuXG4gICAgc3ZnLnNlbGVjdEFsbCgnLmNvdW50cnknKVxuICAgICAgICAuZGF0YShjb3VudHJpZXMsIGZ1bmN0aW9uKGNvdW50cnksIGkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGksIGNvdW50cnksICdjb3VudHJ5Jyk7XG4gICAgICAgICAgICBpZiAoY291bnRyeS5wcm9wZXJ0aWVzLm5hbWUgIT09ICdEaXN0cmljdCBvZiBDb2x1bWJpYScpIHtcblxuICAgICAgICAgICAgICAgIHF1ZXN0aW9ucy5wdXNoKGNvdW50cnkucHJvcGVydGllcy5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjb3VudHJ5JylcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoKVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJ3JnYmEoNTAsNTAsNTAsLjYpJylcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkYXRhLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3JTY2FsZShpICogNyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ2V0QXR0cmlidXRlKCdmaWxsJykpO1xuICAgICAgICAgICAgb2xkQ29sb3IgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZmlsbCcpO1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdyZ2JhKDI1MCwyNTAsMjUwLC45KScpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDAuMik7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZmlsbCcsICd5ZWxsb3cnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdibGFjaycpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBvbGRDb2xvcik7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG4gICAgICAgICAgICBjb3JyZWN0QW5zd2VyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0Jyk7XG4gICAgICAgICAgICBkYXRhLnByb3BlcnRpZXMubmFtZSA9PT0gY29ycmVjdEFuc3dlclRleHQuaW5uZXJUZXh0ID8gY29ycmVjdEFuc3dlcigpIDogd3JvbmdBbnN3ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25zKTtcbn0pO1xuXG5cbnJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlUXVlc3Rpb24pO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVF1ZXN0aW9uKCkge1xuICAgIHF1ZXN0aW9uLmlubmVySFRNTCA9IGBXaGVyZSBpcyA8c3Ryb25nIGlkPSd0ZXN0Jz4ke3F1ZXN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBxdWVzdGlvbnMubGVuZ3RoKV19PC9zdHJvbmc+P2A7XG4gICAgLy9zdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuXG59XG5cbmZ1bmN0aW9uIGNvcnJlY3RBbnN3ZXIoKSB7XG4gICAgbGV0IHNjb3JlQ291bnQgPSBwYXJzZUludChzY29yZS5pbm5lclRleHQpO1xuICAgIHNjb3JlLmlubmVyVGV4dCA9IHNjb3JlQ291bnQgKz0gMTtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ0NPUlJFQ1QhJztcbiAgICAvLyBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuXG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICBnZW5lcmF0ZVF1ZXN0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIHdyb25nQW5zd2VyKCkge1xuICAgIHN0YXR1cy5pbm5lclRleHQgPSAnV1JPTkchJztcbiAgICAvLyBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCd3cm9uZycpO1xufVxuKi9cbmNvbnNvbGUubG9nKGQzKTtcbnZhciB3aWR0aCA9IDk2MCxcbiAgICBoZWlnaHQgPSA1MDAsXG4gICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuXG52YXIgcHJvamVjdGlvbiA9IGQzXG4gICAgLmdlb0FsYmVyc1VzYSgpIC8vIHVwZGF0ZWQgZm9yIGQzIHY0XG4gICAgLnNjYWxlKDEwMDApXG4gICAgLnRyYW5zbGF0ZShbd2lkdGggLyAyLCBoZWlnaHQgLyAyXSk7XG5cbnZhciB6b29tID0gZDNcbiAgICAuem9vbSgpXG4gICAgLy8gbm8gbG9uZ2VyIGluIGQzIHY0IC0gem9vbSBpbml0aWFsaXNlcyB3aXRoIHpvb21JZGVudGl0eSwgc28gaXQncyBhbHJlYWR5IGF0IG9yaWdpblxuICAgIC8vIC50cmFuc2xhdGUoWzAsIDBdKVxuICAgIC8vIC5zY2FsZSgxKVxuICAgIC5zY2FsZUV4dGVudChbMSwgOF0pXG4gICAgLm9uKCd6b29tJywgem9vbWVkKTtcblxudmFyIHBhdGggPSBkM1xuICAgIC5nZW9QYXRoKCkgLy8gdXBkYXRlZCBmb3IgZDMgdjRcbiAgICAucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxudmFyIHN2ZyA9IGQzXG4gICAgLnNlbGVjdCgnYm9keScpXG4gICAgLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5vbignY2xpY2snLCBzdG9wcGVkLCB0cnVlKTtcblxuc3ZnXG4gICAgLmFwcGVuZCgncmVjdCcpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2JhY2tncm91bmQnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLm9uKCdjbGljaycsIHJlc2V0KTtcblxudmFyIGcgPSBzdmcuYXBwZW5kKCdnJyk7XG5cbnN2Zy5jYWxsKHpvb20pOyAvLyBkZWxldGUgdGhpcyBsaW5lIHRvIGRpc2FibGUgZnJlZSB6b29taW5nXG4vLyAuY2FsbCh6b29tLmV2ZW50KTsgLy8gbm90IGluIGQzIHY0XG5cbmQzLmpzb24oJy9tYXBzL3dvcmxkLTExMG0uZ2VvanNvbicsIGZ1bmN0aW9uKGVycm9yLCB1cykge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgICBnXG4gICAgICAgIC5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuZGF0YSh0b3BvanNvbi5mZWF0dXJlKHVzLCB1cy5vYmplY3RzLnN0YXRlcykuZmVhdHVyZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmZWF0dXJlJylcbiAgICAgICAgLm9uKCdjbGljaycsIGNsaWNrZWQpO1xuXG4gICAgZ1xuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmRhdHVtKFxuICAgICAgICAgICAgdG9wb2pzb24ubWVzaCh1cywgdXMub2JqZWN0cy5zdGF0ZXMsIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAhPT0gYjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ21lc2gnKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpO1xufSk7XG5cbmZ1bmN0aW9uIGNsaWNrZWQoZCkge1xuICAgIGlmIChhY3RpdmUubm9kZSgpID09PSB0aGlzKSB7XG4gICAgICAgIHJldHVybiByZXNldCgpO1xuICAgIH1cbiAgICBhY3RpdmUuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKTtcblxuICAgIHZhciBib3VuZHMgPSBwYXRoLmJvdW5kcyhkKSxcbiAgICAgICAgZHggPSBib3VuZHNbMV1bMF0gLSBib3VuZHNbMF1bMF0sXG4gICAgICAgIGR5ID0gYm91bmRzWzFdWzFdIC0gYm91bmRzWzBdWzFdLFxuICAgICAgICB4ID0gKGJvdW5kc1swXVswXSArIGJvdW5kc1sxXVswXSkgLyAyLFxuICAgICAgICB5ID0gKGJvdW5kc1swXVsxXSArIGJvdW5kc1sxXVsxXSkgLyAyLFxuICAgICAgICBzY2FsZSA9IE1hdGgubWF4KDEsIE1hdGgubWluKDgsIDAuOSAvIE1hdGgubWF4KGR4IC8gd2lkdGgsIGR5IC8gaGVpZ2h0KSkpLFxuICAgICAgICB0cmFuc2xhdGUgPSBbd2lkdGggLyAyIC0gc2NhbGUgKiB4LCBoZWlnaHQgLyAyIC0gc2NhbGUgKiB5XTtcblxuICAgIHN2Z1xuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgLy8gLmNhbGwoem9vbS50cmFuc2xhdGUodHJhbnNsYXRlKS5zY2FsZShzY2FsZSkuZXZlbnQpOyAvLyBub3QgaW4gZDMgdjRcbiAgICAgICAgLmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUodHJhbnNsYXRlWzBdLCB0cmFuc2xhdGVbMV0pLnNjYWxlKHNjYWxlKSk7IC8vIHVwZGF0ZWQgZm9yIGQzIHY0XG59XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGFjdGl2ZS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuXG4gICAgc3ZnXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAvLyAuY2FsbCggem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUoMCwgMCkuc2NhbGUoMSkgKTsgLy8gbm90IGluIGQzIHY0XG4gICAgICAgIC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkpOyAvLyB1cGRhdGVkIGZvciBkMyB2NFxufVxuXG5mdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgZy5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMS41IC8gZDMuZXZlbnQudHJhbnNmb3JtLmsgKyAncHgnKTtcbiAgICAvLyBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBkMy5ldmVudC50cmFuc2xhdGUgKyBcIilzY2FsZShcIiArIGQzLmV2ZW50LnNjYWxlICsgXCIpXCIpOyAvLyBub3QgaW4gZDMgdjRcbiAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGQzLmV2ZW50LnRyYW5zZm9ybSk7IC8vIHVwZGF0ZWQgZm9yIGQzIHY0XG59XG5cbi8vIElmIHRoZSBkcmFnIGJlaGF2aW9yIHByZXZlbnRzIHRoZSBkZWZhdWx0IGNsaWNrLFxuLy8gYWxzbyBzdG9wIHByb3BhZ2F0aW9uIHNvIHdlIGRvbuKAmXQgY2xpY2stdG8tem9vbS5cbmZ1bmN0aW9uIHN0b3BwZWQoKSB7XG4gICAgaWYgKGQzLmV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
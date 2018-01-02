webpackHotUpdate(0,{

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_topojson__ = __webpack_require__("./node_modules/topojson/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__ = __webpack_require__("./node_modules/d3-geo-projection/index.js");




let questions = [];
let question = document.getElementById('question');
let randomBtn = document.getElementById('random');
let scoreEl = document.getElementById('score');
let status = document.getElementById('status');

let activeAnswer = null;
let correctAnswerText;
let questionCount = 0;
let scoreCount = 0;

var width = 960,
    height = 500,
    active = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](null);

let colorScale = __WEBPACK_IMPORTED_MODULE_0_d3__["scaleSequential"](__WEBPACK_IMPORTED_MODULE_0_d3__["interpolateRainbow"]).domain([100, 40000]);

var projection = __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__["a" /* geoRobinson */]()
    .scale(170)
    .translate([width / 2, height / 1.75]);

var zoom = __WEBPACK_IMPORTED_MODULE_0_d3__["zoom"]()
    .scaleExtent([1, 8])
    .on('zoom', zoomed);

var path = __WEBPACK_IMPORTED_MODULE_0_d3__["geoPath"]().projection(projection);

var svg = __WEBPACK_IMPORTED_MODULE_0_d3__["select"]('#map')
    .append('svg')
    .attr('class', 'map')
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

// TODO: Update map and routing for new maps.
__WEBPACK_IMPORTED_MODULE_0_d3__["json"]('/maps/map', function(error, mapJson) {
    if (error) {
        throw error;
    }
    let mapDivisions = Object.keys(mapJson.objects)[0];

    let mapPaths = __WEBPACK_IMPORTED_MODULE_1_topojson__["a" /* feature */](mapJson, mapJson.objects[mapDivisions]).features;

    g
        .selectAll('path')
        .data(mapPaths, function(country, i) {
            if (country.properties.name !== 'District of Columbia') {
                questions.push(country.properties.name);
            }
        })
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', function(data, i) {
            return colorScale(Math.random() * 10 + i * 230);
        })
        .on('mouseover', function() {
            this.classList.add('hover');
        })
        .on('mouseout', function() {
            this.classList.remove('hover');
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

    generateQuestion();
});

function clicked(d) {
    if (active.node() === this) {
        return reset();
    }
    active.classed('active', false);
    active = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](this).classed('active', true);
    activeAnswer = d.properties.name;

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

    activeAnswer = null;
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

randomBtn.addEventListener('click', generateQuestion);

function generateQuestion() {
    question.innerHTML = `Where is <strong id='test'>${questions[Math.floor(Math.random() * questions.length)]}</strong>?`;
    scoreEl.innerText = scoreUpdate(false);

}

function correctAnswer() {
    scoreEl.innerText = scoreUpdate(true);
    status.innerText = 'CORRECT!';
    status.classList.add('correct');
    generateQuestion();
    reset();
}

function wrongAnswer() {
    scoreEl.innerText = scoreUpdate(false);
    status.innerText = 'WRONG!';
    status.classList.add('wrong');
    active.classed('active', false);
    active = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](null);
    activeAnswer = null;
}

function scoreUpdate(correct) {
    questionCount += 1;

    scoreCount = correct ? scoreCount += 1 : scoreCount;
    let percentage = scoreCount ? ` – ${(scoreCount / questionCount).toFixed(2) * 100}%` : '';
    return `${scoreCount} out of ${questionCount}${percentage}`;
}

window.addEventListener('keyup', function(e) {
    if (e.which === 13 && activeAnswer !== null) {
        event.preventDefault();
        status.classList.remove('correct', 'wrong');
        correctAnswerText = document.getElementById('test');
        activeAnswer === correctAnswerText.innerText ? correctAnswer() : wrongAnswer();
    }
});


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUZBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvREFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVEQUF1RCx3REFBd0Q7QUFDL0c7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLDhDQUE4QztBQUN0RixjQUFjLFdBQVcsVUFBVSxjQUFjLEVBQUUsV0FBVztBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMC5hN2I3ZjEyMDdhMGFkNGFkYmY4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24nO1xuaW1wb3J0ICogYXMgZDNnZW9Qcm9qIGZyb20gJ2QzLWdlby1wcm9qZWN0aW9uJztcblxubGV0IHF1ZXN0aW9ucyA9IFtdO1xubGV0IHF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uJyk7XG5sZXQgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbScpO1xubGV0IHNjb3JlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcbmxldCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJyk7XG5cbmxldCBhY3RpdmVBbnN3ZXIgPSBudWxsO1xubGV0IGNvcnJlY3RBbnN3ZXJUZXh0O1xubGV0IHF1ZXN0aW9uQ291bnQgPSAwO1xubGV0IHNjb3JlQ291bnQgPSAwO1xuXG52YXIgd2lkdGggPSA5NjAsXG4gICAgaGVpZ2h0ID0gNTAwLFxuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdChudWxsKTtcblxubGV0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KS5kb21haW4oWzEwMCwgNDAwMDBdKTtcblxudmFyIHByb2plY3Rpb24gPSBkM2dlb1Byb2pcbiAgICAuZ2VvUm9iaW5zb24oKVxuICAgIC5zY2FsZSgxNzApXG4gICAgLnRyYW5zbGF0ZShbd2lkdGggLyAyLCBoZWlnaHQgLyAxLjc1XSk7XG5cbnZhciB6b29tID0gZDNcbiAgICAuem9vbSgpXG4gICAgLnNjYWxlRXh0ZW50KFsxLCA4XSlcbiAgICAub24oJ3pvb20nLCB6b29tZWQpO1xuXG52YXIgcGF0aCA9IGQzLmdlb1BhdGgoKS5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG52YXIgc3ZnID0gZDNcbiAgICAuc2VsZWN0KCcjbWFwJylcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCdjbGFzcycsICdtYXAnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLm9uKCdjbGljaycsIHN0b3BwZWQsIHRydWUpO1xuXG5zdmdcbiAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAuYXR0cignY2xhc3MnLCAnYmFja2dyb3VuZCcpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAub24oJ2NsaWNrJywgcmVzZXQpO1xuXG52YXIgZyA9IHN2Zy5hcHBlbmQoJ2cnKTtcblxuc3ZnLmNhbGwoem9vbSk7IC8vIGRlbGV0ZSB0aGlzIGxpbmUgdG8gZGlzYWJsZSBmcmVlIHpvb21pbmdcblxuLy8gVE9ETzogVXBkYXRlIG1hcCBhbmQgcm91dGluZyBmb3IgbmV3IG1hcHMuXG5kMy5qc29uKCcvbWFwcy9tYXAnLCBmdW5jdGlvbihlcnJvciwgbWFwSnNvbikge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgbGV0IG1hcERpdmlzaW9ucyA9IE9iamVjdC5rZXlzKG1hcEpzb24ub2JqZWN0cylbMF07XG5cbiAgICBsZXQgbWFwUGF0aHMgPSB0b3BvanNvbi5mZWF0dXJlKG1hcEpzb24sIG1hcEpzb24ub2JqZWN0c1ttYXBEaXZpc2lvbnNdKS5mZWF0dXJlcztcblxuICAgIGdcbiAgICAgICAgLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgICAgIC5kYXRhKG1hcFBhdGhzLCBmdW5jdGlvbihjb3VudHJ5LCBpKSB7XG4gICAgICAgICAgICBpZiAoY291bnRyeS5wcm9wZXJ0aWVzLm5hbWUgIT09ICdEaXN0cmljdCBvZiBDb2x1bWJpYScpIHtcbiAgICAgICAgICAgICAgICBxdWVzdGlvbnMucHVzaChjb3VudHJ5LnByb3BlcnRpZXMubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZGF0YSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoTWF0aC5yYW5kb20oKSAqIDEwICsgaSAqIDIzMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGNsaWNrZWQpO1xuXG4gICAgZ1xuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmRhdHVtKFxuICAgICAgICAgICAgdG9wb2pzb24ubWVzaChtYXBKc29uLCBtYXBKc29uLm9iamVjdHNbbWFwRGl2aXNpb25zXSwgZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICE9PSBiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnbWVzaCcpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aCk7XG5cbiAgICBnZW5lcmF0ZVF1ZXN0aW9uKCk7XG59KTtcblxuZnVuY3Rpb24gY2xpY2tlZChkKSB7XG4gICAgaWYgKGFjdGl2ZS5ub2RlKCkgPT09IHRoaXMpIHtcbiAgICAgICAgcmV0dXJuIHJlc2V0KCk7XG4gICAgfVxuICAgIGFjdGl2ZS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgYWN0aXZlID0gZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpO1xuICAgIGFjdGl2ZUFuc3dlciA9IGQucHJvcGVydGllcy5uYW1lO1xuXG4gICAgdmFyIGJvdW5kcyA9IHBhdGguYm91bmRzKGQpLFxuICAgICAgICBkeCA9IGJvdW5kc1sxXVswXSAtIGJvdW5kc1swXVswXSxcbiAgICAgICAgZHkgPSBib3VuZHNbMV1bMV0gLSBib3VuZHNbMF1bMV0sXG4gICAgICAgIHggPSAoYm91bmRzWzBdWzBdICsgYm91bmRzWzFdWzBdKSAvIDIsXG4gICAgICAgIHkgPSAoYm91bmRzWzBdWzFdICsgYm91bmRzWzFdWzFdKSAvIDIsXG4gICAgICAgIHNjYWxlID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oOCwgMC45IC8gTWF0aC5tYXgoZHggLyB3aWR0aCwgZHkgLyBoZWlnaHQpKSksXG4gICAgICAgIHRyYW5zbGF0ZSA9IFt3aWR0aCAvIDIgLSBzY2FsZSAqIHgsIGhlaWdodCAvIDIgLSBzY2FsZSAqIHldO1xuXG4gICAgc3ZnXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUodHJhbnNsYXRlWzBdLCB0cmFuc2xhdGVbMV0pLnNjYWxlKHNjYWxlKSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGFjdGl2ZS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuXG4gICAgc3ZnXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eSk7XG5cbiAgICBhY3RpdmVBbnN3ZXIgPSBudWxsO1xufVxuXG5mdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgZy5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMS41IC8gZDMuZXZlbnQudHJhbnNmb3JtLmsgKyAncHgnKTtcbiAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG59XG5cbi8vIElmIHRoZSBkcmFnIGJlaGF2aW9yIHByZXZlbnRzIHRoZSBkZWZhdWx0IGNsaWNrLFxuLy8gYWxzbyBzdG9wIHByb3BhZ2F0aW9uIHNvIHdlIGRvbuKAmXQgY2xpY2stdG8tem9vbS5cbmZ1bmN0aW9uIHN0b3BwZWQoKSB7XG4gICAgaWYgKGQzLmV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxufVxuXG5yYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZVF1ZXN0aW9uKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVRdWVzdGlvbigpIHtcbiAgICBxdWVzdGlvbi5pbm5lckhUTUwgPSBgV2hlcmUgaXMgPHN0cm9uZyBpZD0ndGVzdCc+JHtxdWVzdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcXVlc3Rpb25zLmxlbmd0aCldfTwvc3Ryb25nPj9gO1xuICAgIHNjb3JlRWwuaW5uZXJUZXh0ID0gc2NvcmVVcGRhdGUoZmFsc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGNvcnJlY3RBbnN3ZXIoKSB7XG4gICAgc2NvcmVFbC5pbm5lclRleHQgPSBzY29yZVVwZGF0ZSh0cnVlKTtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ0NPUlJFQ1QhJztcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgIGdlbmVyYXRlUXVlc3Rpb24oKTtcbiAgICByZXNldCgpO1xufVxuXG5mdW5jdGlvbiB3cm9uZ0Fuc3dlcigpIHtcbiAgICBzY29yZUVsLmlubmVyVGV4dCA9IHNjb3JlVXBkYXRlKGZhbHNlKTtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ1dST05HISc7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3dyb25nJyk7XG4gICAgYWN0aXZlLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QobnVsbCk7XG4gICAgYWN0aXZlQW5zd2VyID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gc2NvcmVVcGRhdGUoY29ycmVjdCkge1xuICAgIHF1ZXN0aW9uQ291bnQgKz0gMTtcblxuICAgIHNjb3JlQ291bnQgPSBjb3JyZWN0ID8gc2NvcmVDb3VudCArPSAxIDogc2NvcmVDb3VudDtcbiAgICBsZXQgcGVyY2VudGFnZSA9IHNjb3JlQ291bnQgPyBgIOKAkyAkeyhzY29yZUNvdW50IC8gcXVlc3Rpb25Db3VudCkudG9GaXhlZCgyKSAqIDEwMH0lYCA6ICcnO1xuICAgIHJldHVybiBgJHtzY29yZUNvdW50fSBvdXQgb2YgJHtxdWVzdGlvbkNvdW50fSR7cGVyY2VudGFnZX1gO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUud2hpY2ggPT09IDEzICYmIGFjdGl2ZUFuc3dlciAhPT0gbnVsbCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuICAgICAgICBjb3JyZWN0QW5zd2VyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0Jyk7XG4gICAgICAgIGFjdGl2ZUFuc3dlciA9PT0gY29ycmVjdEFuc3dlclRleHQuaW5uZXJUZXh0ID8gY29ycmVjdEFuc3dlcigpIDogd3JvbmdBbnN3ZXIoKTtcbiAgICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
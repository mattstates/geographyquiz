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
    questionCount += 1;
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
    questionCount += 1;
    scoreEl.innerText = scoreUpdate(false);
    status.innerText = 'WRONG!';
    status.classList.add('wrong');
    active.classed('active', false);
    active = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](null);
    activeAnswer = null;
}

function scoreUpdate(correct) {

    scoreCount = correct ? scoreCount += 1 : scoreCount;
    let percentage = scoreCount ? ` – ${(scoreCount / questionCount).toFixed(2)}%` : '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUZBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvREFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVEQUF1RCx3REFBd0Q7QUFDL0c7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3Q0FBd0Msd0NBQXdDO0FBQ2hGLGNBQWMsV0FBVyxVQUFVLGNBQWMsRUFBRSxXQUFXO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmE4MTRjYTUwNzg5MjM2M2M5NTg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbic7XG5pbXBvcnQgKiBhcyBkM2dlb1Byb2ogZnJvbSAnZDMtZ2VvLXByb2plY3Rpb24nO1xuXG5sZXQgcXVlc3Rpb25zID0gW107XG5sZXQgcXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb24nKTtcbmxldCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG5sZXQgc2NvcmVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xubGV0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKTtcblxubGV0IGFjdGl2ZUFuc3dlciA9IG51bGw7XG5sZXQgY29ycmVjdEFuc3dlclRleHQ7XG5sZXQgcXVlc3Rpb25Db3VudCA9IDA7XG5sZXQgc2NvcmVDb3VudCA9IDA7XG5cbnZhciB3aWR0aCA9IDk2MCxcbiAgICBoZWlnaHQgPSA1MDAsXG4gICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuXG5sZXQgY29sb3JTY2FsZSA9IGQzLnNjYWxlU2VxdWVudGlhbChkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpLmRvbWFpbihbMTAwLCA0MDAwMF0pO1xuXG52YXIgcHJvamVjdGlvbiA9IGQzZ2VvUHJvalxuICAgIC5nZW9Sb2JpbnNvbigpXG4gICAgLnNjYWxlKDE3MClcbiAgICAudHJhbnNsYXRlKFt3aWR0aCAvIDIsIGhlaWdodCAvIDEuNzVdKTtcblxudmFyIHpvb20gPSBkM1xuICAgIC56b29tKClcbiAgICAuc2NhbGVFeHRlbnQoWzEsIDhdKVxuICAgIC5vbignem9vbScsIHpvb21lZCk7XG5cbnZhciBwYXRoID0gZDMuZ2VvUGF0aCgpLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbnZhciBzdmcgPSBkM1xuICAgIC5zZWxlY3QoJyNtYXAnKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ21hcCcpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAub24oJ2NsaWNrJywgc3RvcHBlZCwgdHJ1ZSk7XG5cbnN2Z1xuICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgIC5hdHRyKCdjbGFzcycsICdiYWNrZ3JvdW5kJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5vbignY2xpY2snLCByZXNldCk7XG5cbnZhciBnID0gc3ZnLmFwcGVuZCgnZycpO1xuXG5zdmcuY2FsbCh6b29tKTsgLy8gZGVsZXRlIHRoaXMgbGluZSB0byBkaXNhYmxlIGZyZWUgem9vbWluZ1xuXG4vLyBUT0RPOiBVcGRhdGUgbWFwIGFuZCByb3V0aW5nIGZvciBuZXcgbWFwcy5cbmQzLmpzb24oJy9tYXBzL21hcCcsIGZ1bmN0aW9uKGVycm9yLCBtYXBKc29uKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBsZXQgbWFwRGl2aXNpb25zID0gT2JqZWN0LmtleXMobWFwSnNvbi5vYmplY3RzKVswXTtcblxuICAgIGxldCBtYXBQYXRocyA9IHRvcG9qc29uLmZlYXR1cmUobWFwSnNvbiwgbWFwSnNvbi5vYmplY3RzW21hcERpdmlzaW9uc10pLmZlYXR1cmVzO1xuXG4gICAgZ1xuICAgICAgICAuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLmRhdGEobWFwUGF0aHMsIGZ1bmN0aW9uKGNvdW50cnksIGkpIHtcbiAgICAgICAgICAgIGlmIChjb3VudHJ5LnByb3BlcnRpZXMubmFtZSAhPT0gJ0Rpc3RyaWN0IG9mIENvbHVtYmlhJykge1xuICAgICAgICAgICAgICAgIHF1ZXN0aW9ucy5wdXNoKGNvdW50cnkucHJvcGVydGllcy5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkYXRhLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3JTY2FsZShNYXRoLnJhbmRvbSgpICogMTAgKyBpICogMjMwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgY2xpY2tlZCk7XG5cbiAgICBnXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuZGF0dW0oXG4gICAgICAgICAgICB0b3BvanNvbi5tZXNoKG1hcEpzb24sIG1hcEpzb24ub2JqZWN0c1ttYXBEaXZpc2lvbnNdLCBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IGI7XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdtZXNoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoKTtcblxuICAgIGdlbmVyYXRlUXVlc3Rpb24oKTtcbn0pO1xuXG5mdW5jdGlvbiBjbGlja2VkKGQpIHtcbiAgICBpZiAoYWN0aXZlLm5vZGUoKSA9PT0gdGhpcykge1xuICAgICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICB9XG4gICAgYWN0aXZlLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QodGhpcykuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgYWN0aXZlQW5zd2VyID0gZC5wcm9wZXJ0aWVzLm5hbWU7XG5cbiAgICB2YXIgYm91bmRzID0gcGF0aC5ib3VuZHMoZCksXG4gICAgICAgIGR4ID0gYm91bmRzWzFdWzBdIC0gYm91bmRzWzBdWzBdLFxuICAgICAgICBkeSA9IGJvdW5kc1sxXVsxXSAtIGJvdW5kc1swXVsxXSxcbiAgICAgICAgeCA9IChib3VuZHNbMF1bMF0gKyBib3VuZHNbMV1bMF0pIC8gMixcbiAgICAgICAgeSA9IChib3VuZHNbMF1bMV0gKyBib3VuZHNbMV1bMV0pIC8gMixcbiAgICAgICAgc2NhbGUgPSBNYXRoLm1heCgxLCBNYXRoLm1pbig4LCAwLjkgLyBNYXRoLm1heChkeCAvIHdpZHRoLCBkeSAvIGhlaWdodCkpKSxcbiAgICAgICAgdHJhbnNsYXRlID0gW3dpZHRoIC8gMiAtIHNjYWxlICogeCwgaGVpZ2h0IC8gMiAtIHNjYWxlICogeV07XG5cbiAgICBzdmdcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVbMF0sIHRyYW5zbGF0ZVsxXSkuc2NhbGUoc2NhbGUpKTtcbn1cblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgYWN0aXZlLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QobnVsbCk7XG5cbiAgICBzdmdcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5KTtcblxuICAgIGFjdGl2ZUFuc3dlciA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHpvb21lZCgpIHtcbiAgICBnLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxLjUgLyBkMy5ldmVudC50cmFuc2Zvcm0uayArICdweCcpO1xuICAgIGcuYXR0cigndHJhbnNmb3JtJywgZDMuZXZlbnQudHJhbnNmb3JtKTtcbn1cblxuLy8gSWYgdGhlIGRyYWcgYmVoYXZpb3IgcHJldmVudHMgdGhlIGRlZmF1bHQgY2xpY2ssXG4vLyBhbHNvIHN0b3AgcHJvcGFnYXRpb24gc28gd2UgZG9u4oCZdCBjbGljay10by16b29tLlxuZnVuY3Rpb24gc3RvcHBlZCgpIHtcbiAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG59XG5cbnJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlUXVlc3Rpb24pO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVF1ZXN0aW9uKCkge1xuICAgIHF1ZXN0aW9uLmlubmVySFRNTCA9IGBXaGVyZSBpcyA8c3Ryb25nIGlkPSd0ZXN0Jz4ke3F1ZXN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBxdWVzdGlvbnMubGVuZ3RoKV19PC9zdHJvbmc+P2A7XG4gICAgcXVlc3Rpb25Db3VudCArPSAxO1xuICAgIHNjb3JlRWwuaW5uZXJUZXh0ID0gc2NvcmVVcGRhdGUoZmFsc2UpO1xuXG59XG5cbmZ1bmN0aW9uIGNvcnJlY3RBbnN3ZXIoKSB7XG4gICAgc2NvcmVFbC5pbm5lclRleHQgPSBzY29yZVVwZGF0ZSh0cnVlKTtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ0NPUlJFQ1QhJztcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgIGdlbmVyYXRlUXVlc3Rpb24oKTtcbiAgICByZXNldCgpO1xufVxuXG5mdW5jdGlvbiB3cm9uZ0Fuc3dlcigpIHtcbiAgICBxdWVzdGlvbkNvdW50ICs9IDE7XG4gICAgc2NvcmVFbC5pbm5lclRleHQgPSBzY29yZVVwZGF0ZShmYWxzZSk7XG4gICAgc3RhdHVzLmlubmVyVGV4dCA9ICdXUk9ORyEnO1xuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCd3cm9uZycpO1xuICAgIGFjdGl2ZS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuICAgIGFjdGl2ZUFuc3dlciA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNjb3JlVXBkYXRlKGNvcnJlY3QpIHtcblxuICAgIHNjb3JlQ291bnQgPSBjb3JyZWN0ID8gc2NvcmVDb3VudCArPSAxIDogc2NvcmVDb3VudDtcbiAgICBsZXQgcGVyY2VudGFnZSA9IHNjb3JlQ291bnQgPyBgIOKAkyAkeyhzY29yZUNvdW50IC8gcXVlc3Rpb25Db3VudCkudG9GaXhlZCgyKX0lYCA6ICcnO1xuICAgIHJldHVybiBgJHtzY29yZUNvdW50fSBvdXQgb2YgJHtxdWVzdGlvbkNvdW50fSR7cGVyY2VudGFnZX1gO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUud2hpY2ggPT09IDEzICYmIGFjdGl2ZUFuc3dlciAhPT0gbnVsbCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuICAgICAgICBjb3JyZWN0QW5zd2VyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0Jyk7XG4gICAgICAgIGFjdGl2ZUFuc3dlciA9PT0gY29ycmVjdEFuc3dlclRleHQuaW5uZXJUZXh0ID8gY29ycmVjdEFuc3dlcigpIDogd3JvbmdBbnN3ZXIoKTtcbiAgICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
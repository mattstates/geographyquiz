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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUZBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvREFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVEQUF1RCx3REFBd0Q7QUFDL0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdDQUF3Qyx3Q0FBd0M7QUFDaEYsY0FBYyxXQUFXLFVBQVUsY0FBYyxFQUFFLFdBQVc7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuM2EzYWNmMzhlZWZjNjU2MjAxMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uJztcbmltcG9ydCAqIGFzIGQzZ2VvUHJvaiBmcm9tICdkMy1nZW8tcHJvamVjdGlvbic7XG5cbmxldCBxdWVzdGlvbnMgPSBbXTtcbmxldCBxdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbicpO1xubGV0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20nKTtcbmxldCBzY29yZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG5sZXQgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpO1xuXG5sZXQgYWN0aXZlQW5zd2VyID0gbnVsbDtcbmxldCBjb3JyZWN0QW5zd2VyVGV4dDtcbmxldCBxdWVzdGlvbkNvdW50ID0gMDtcbmxldCBzY29yZUNvdW50ID0gMDtcblxudmFyIHdpZHRoID0gOTYwLFxuICAgIGhlaWdodCA9IDUwMCxcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QobnVsbCk7XG5cbmxldCBjb2xvclNjYWxlID0gZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdykuZG9tYWluKFsxMDAsIDQwMDAwXSk7XG5cbnZhciBwcm9qZWN0aW9uID0gZDNnZW9Qcm9qXG4gICAgLmdlb1JvYmluc29uKClcbiAgICAuc2NhbGUoMTcwKVxuICAgIC50cmFuc2xhdGUoW3dpZHRoIC8gMiwgaGVpZ2h0IC8gMS43NV0pO1xuXG52YXIgem9vbSA9IGQzXG4gICAgLnpvb20oKVxuICAgIC5zY2FsZUV4dGVudChbMSwgOF0pXG4gICAgLm9uKCd6b29tJywgem9vbWVkKTtcblxudmFyIHBhdGggPSBkMy5nZW9QYXRoKCkucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxudmFyIHN2ZyA9IGQzXG4gICAgLnNlbGVjdCgnI21hcCcpXG4gICAgLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignY2xhc3MnLCAnbWFwJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5vbignY2xpY2snLCBzdG9wcGVkLCB0cnVlKTtcblxuc3ZnXG4gICAgLmFwcGVuZCgncmVjdCcpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2JhY2tncm91bmQnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLm9uKCdjbGljaycsIHJlc2V0KTtcblxudmFyIGcgPSBzdmcuYXBwZW5kKCdnJyk7XG5cbnN2Zy5jYWxsKHpvb20pOyAvLyBkZWxldGUgdGhpcyBsaW5lIHRvIGRpc2FibGUgZnJlZSB6b29taW5nXG5cbi8vIFRPRE86IFVwZGF0ZSBtYXAgYW5kIHJvdXRpbmcgZm9yIG5ldyBtYXBzLlxuZDMuanNvbignL21hcHMvbWFwJywgZnVuY3Rpb24oZXJyb3IsIG1hcEpzb24pIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIGxldCBtYXBEaXZpc2lvbnMgPSBPYmplY3Qua2V5cyhtYXBKc29uLm9iamVjdHMpWzBdO1xuXG4gICAgbGV0IG1hcFBhdGhzID0gdG9wb2pzb24uZmVhdHVyZShtYXBKc29uLCBtYXBKc29uLm9iamVjdHNbbWFwRGl2aXNpb25zXSkuZmVhdHVyZXM7XG5cbiAgICBnXG4gICAgICAgIC5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuZGF0YShtYXBQYXRocywgZnVuY3Rpb24oY291bnRyeSwgaSkge1xuICAgICAgICAgICAgaWYgKGNvdW50cnkucHJvcGVydGllcy5uYW1lICE9PSAnRGlzdHJpY3Qgb2YgQ29sdW1iaWEnKSB7XG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zLnB1c2goY291bnRyeS5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoKVxuICAgICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGRhdGEsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKE1hdGgucmFuZG9tKCkgKiAxMCArIGkgKiAyMzApO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBjbGlja2VkKTtcblxuICAgIGdcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5kYXR1bShcbiAgICAgICAgICAgIHRvcG9qc29uLm1lc2gobWFwSnNvbiwgbWFwSnNvbi5vYmplY3RzW21hcERpdmlzaW9uc10sIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAhPT0gYjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ21lc2gnKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpO1xuXG4gICAgZ2VuZXJhdGVRdWVzdGlvbigpO1xufSk7XG5cbmZ1bmN0aW9uIGNsaWNrZWQoZCkge1xuICAgIGlmIChhY3RpdmUubm9kZSgpID09PSB0aGlzKSB7XG4gICAgICAgIHJldHVybiByZXNldCgpO1xuICAgIH1cbiAgICBhY3RpdmUuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKTtcbiAgICBhY3RpdmVBbnN3ZXIgPSBkLnByb3BlcnRpZXMubmFtZTtcblxuICAgIHZhciBib3VuZHMgPSBwYXRoLmJvdW5kcyhkKSxcbiAgICAgICAgZHggPSBib3VuZHNbMV1bMF0gLSBib3VuZHNbMF1bMF0sXG4gICAgICAgIGR5ID0gYm91bmRzWzFdWzFdIC0gYm91bmRzWzBdWzFdLFxuICAgICAgICB4ID0gKGJvdW5kc1swXVswXSArIGJvdW5kc1sxXVswXSkgLyAyLFxuICAgICAgICB5ID0gKGJvdW5kc1swXVsxXSArIGJvdW5kc1sxXVsxXSkgLyAyLFxuICAgICAgICBzY2FsZSA9IE1hdGgubWF4KDEsIE1hdGgubWluKDgsIDAuOSAvIE1hdGgubWF4KGR4IC8gd2lkdGgsIGR5IC8gaGVpZ2h0KSkpLFxuICAgICAgICB0cmFuc2xhdGUgPSBbd2lkdGggLyAyIC0gc2NhbGUgKiB4LCBoZWlnaHQgLyAyIC0gc2NhbGUgKiB5XTtcblxuICAgIHN2Z1xuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAgIC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKHRyYW5zbGF0ZVswXSwgdHJhbnNsYXRlWzFdKS5zY2FsZShzY2FsZSkpO1xufVxuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBhY3RpdmUuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdChudWxsKTtcblxuICAgIHN2Z1xuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAgIC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkpO1xuXG4gICAgYWN0aXZlQW5zd2VyID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gem9vbWVkKCkge1xuICAgIGcuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEuNSAvIGQzLmV2ZW50LnRyYW5zZm9ybS5rICsgJ3B4Jyk7XG4gICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xufVxuXG4vLyBJZiB0aGUgZHJhZyBiZWhhdmlvciBwcmV2ZW50cyB0aGUgZGVmYXVsdCBjbGljayxcbi8vIGFsc28gc3RvcCBwcm9wYWdhdGlvbiBzbyB3ZSBkb27igJl0IGNsaWNrLXRvLXpvb20uXG5mdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgIGlmIChkMy5ldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbn1cblxucmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVRdWVzdGlvbik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUXVlc3Rpb24oKSB7XG4gICAgcXVlc3Rpb24uaW5uZXJIVE1MID0gYFdoZXJlIGlzIDxzdHJvbmcgaWQ9J3Rlc3QnPiR7cXVlc3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHF1ZXN0aW9ucy5sZW5ndGgpXX08L3N0cm9uZz4/YDtcbiAgICBxdWVzdGlvbkNvdW50ICs9IDE7XG59XG5cbmZ1bmN0aW9uIGNvcnJlY3RBbnN3ZXIoKSB7XG4gICAgc2NvcmVFbC5pbm5lclRleHQgPSBzY29yZVVwZGF0ZSh0cnVlKTtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ0NPUlJFQ1QhJztcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgIGdlbmVyYXRlUXVlc3Rpb24oKTtcbiAgICByZXNldCgpO1xufVxuXG5mdW5jdGlvbiB3cm9uZ0Fuc3dlcigpIHtcbiAgICBzY29yZUVsLmlubmVyVGV4dCA9IHNjb3JlVXBkYXRlKGZhbHNlKTtcblxuICAgIHN0YXR1cy5pbm5lclRleHQgPSAnV1JPTkchJztcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnd3JvbmcnKTtcbiAgICBhY3RpdmUuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdChudWxsKTtcbiAgICBhY3RpdmVBbnN3ZXIgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBzY29yZVVwZGF0ZShjb3JyZWN0KSB7XG5cbiAgICBzY29yZUNvdW50ID0gY29ycmVjdCA/IHNjb3JlQ291bnQgKz0gMSA6IHNjb3JlQ291bnQ7XG4gICAgbGV0IHBlcmNlbnRhZ2UgPSBzY29yZUNvdW50ID8gYCDigJMgJHsoc2NvcmVDb3VudCAvIHF1ZXN0aW9uQ291bnQpLnRvRml4ZWQoMil9JWAgOiAnJztcbiAgICByZXR1cm4gYCR7c2NvcmVDb3VudH0gb3V0IG9mICR7cXVlc3Rpb25Db3VudH0ke3BlcmNlbnRhZ2V9YDtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLndoaWNoID09PSAxMyAmJiBhY3RpdmVBbnN3ZXIgIT09IG51bGwpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcbiAgICAgICAgY29ycmVjdEFuc3dlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpO1xuICAgICAgICBhY3RpdmVBbnN3ZXIgPT09IGNvcnJlY3RBbnN3ZXJUZXh0LmlubmVyVGV4dCA/IGNvcnJlY3RBbnN3ZXIoKSA6IHdyb25nQW5zd2VyKCk7XG4gICAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
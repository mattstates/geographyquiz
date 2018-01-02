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

var projection = __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__["a" /* geoRobinson */]()
    .scale(170)
    .translate([width / 2, height / 1.75]);

var zoom = __WEBPACK_IMPORTED_MODULE_0_d3__["zoom"]()
    .scaleExtent([1, 8])
    .on('zoom', zoomed);

var path = __WEBPACK_IMPORTED_MODULE_0_d3__["geoPath"]()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBLGdDQUFnQztBQUNoQzs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBLHVEQUF1RCx3REFBd0Q7QUFDL0c7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUZBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFDQTtBQUNBOztBQUVBLG9EQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLjk3NjhmYTE2NWMzYTU2NzYyNzExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbic7XG5pbXBvcnQgKiBhcyBkM2dlb1Byb2ogZnJvbSAnZDMtZ2VvLXByb2plY3Rpb24nO1xuXG4vL2xldCBkMyA9IE9iamVjdC5hc3NpZ24oe30sIGQzZ2VvUHJvaiwgZDNNYWluKTtcbi8qXG5sZXQgcXVlc3Rpb25zID0gW107XG52YXIgd2lkdGggPSA5NjA7XG52YXIgaGVpZ2h0ID0gNTAwO1xuXG5sZXQgcXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb24nKTtcbmxldCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG5sZXQgc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcbmxldCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJyk7XG5cbmxldCBjb3JyZWN0QW5zd2VyVGV4dDtcbmxldCBvbGRDb2xvcjtcblxudmFyIHN2ZyA9IGQzLnNlbGVjdCgnI21hcCcpXG4gICAgLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5hdHRyKCdjbGFzcycsICdtYXAnKVxuICAgIC5hcHBlbmQoJ2cnKVxuXG52YXIgcHJvamVjdGlvbiA9IGQzLmdlb1JvYmluc29uKClcbiAgICAvLyAgIC5zY2FsZSh3aWR0aCAvIDEuMjUpOyBVU0FcbiAgICAuc2NhbGUod2lkdGggLyA1LjYpO1xuXG4vLyAgICAudHJhbnNsYXRlKFtNYXRoLnNxcnQod2lkdGggLyAyKSwgaGVpZ2h0IC8gMl0pO1xuXG4vLyBwcm9qZWN0aW9uLmNlbnRlcihbLTk4LCAzNl0pOyBVU0FcbnByb2plY3Rpb24uY2VudGVyKFsxNSwgMTBdKTtcblxuXG52YXIgcGF0aCA9IGQzLmdlb1BhdGgoKVxuICAgIC5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG52YXIgdXJsID0gJy9tYXBzL3dvcmxkLTExMG0uZ2VvanNvbic7XG5cbmQzLmpzb24odXJsLCBmdW5jdGlvbihlcnIsIG1hcEpzb24pIHtcbiAgICAvL2NvbnNvbGUubG9nKG1hcEpzb24pO1xuICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIGQzLmpzb24nLCBlcnIpO1xuICAgIH1cbiAgICBsZXQgbWFwRGl2aXNpb25zID0gT2JqZWN0LmtleXMobWFwSnNvbi5vYmplY3RzKVswXTtcbiAgICBsZXQgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZShtYXBKc29uLCBtYXBKc29uLm9iamVjdHNbbWFwRGl2aXNpb25zXSkuZmVhdHVyZXM7XG4gICAgLy9jb25zb2xlLmxvZyhjb3VudHJpZXMsICc8LS0gY291bnRyaWVzJyk7XG4gICAgbGV0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KS5kb21haW4oWzMwLCA3NTBdKTtcblxuICAgIHN2Zy5zZWxlY3RBbGwoJy5jb3VudHJ5JylcbiAgICAgICAgLmRhdGEoY291bnRyaWVzLCBmdW5jdGlvbihjb3VudHJ5LCBpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpLCBjb3VudHJ5LCAnY291bnRyeScpO1xuICAgICAgICAgICAgaWYgKGNvdW50cnkucHJvcGVydGllcy5uYW1lICE9PSAnRGlzdHJpY3Qgb2YgQ29sdW1iaWEnKSB7XG5cbiAgICAgICAgICAgICAgICBxdWVzdGlvbnMucHVzaChjb3VudHJ5LnByb3BlcnRpZXMubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY291bnRyeScpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdyZ2JhKDUwLDUwLDUwLC42KScpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZGF0YSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoaSAqIDcpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdldEF0dHJpYnV0ZSgnZmlsbCcpKTtcbiAgICAgICAgICAgIG9sZENvbG9yID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAncmdiYSgyNTAsMjUwLDI1MCwuOSknKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAwLjIpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAneWVsbG93Jyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnYmxhY2snKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmaWxsJywgb2xkQ29sb3IpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuICAgICAgICAgICAgY29ycmVjdEFuc3dlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpO1xuICAgICAgICAgICAgZGF0YS5wcm9wZXJ0aWVzLm5hbWUgPT09IGNvcnJlY3RBbnN3ZXJUZXh0LmlubmVyVGV4dCA/IGNvcnJlY3RBbnN3ZXIoKSA6IHdyb25nQW5zd2VyKCk7XG4gICAgICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9ucyk7XG59KTtcblxuXG5yYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZVF1ZXN0aW9uKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVRdWVzdGlvbigpIHtcbiAgICBxdWVzdGlvbi5pbm5lckhUTUwgPSBgV2hlcmUgaXMgPHN0cm9uZyBpZD0ndGVzdCc+JHtxdWVzdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcXVlc3Rpb25zLmxlbmd0aCldfTwvc3Ryb25nPj9gO1xuICAgIC8vc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcblxufVxuXG5mdW5jdGlvbiBjb3JyZWN0QW5zd2VyKCkge1xuICAgIGxldCBzY29yZUNvdW50ID0gcGFyc2VJbnQoc2NvcmUuaW5uZXJUZXh0KTtcbiAgICBzY29yZS5pbm5lclRleHQgPSBzY29yZUNvdW50ICs9IDE7XG4gICAgc3RhdHVzLmlubmVyVGV4dCA9ICdDT1JSRUNUISc7XG4gICAgLy8gc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcblxuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XG4gICAgZ2VuZXJhdGVRdWVzdGlvbigpO1xufVxuXG5mdW5jdGlvbiB3cm9uZ0Fuc3dlcigpIHtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ1dST05HISc7XG4gICAgLy8gc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnd3JvbmcnKTtcbn1cbiovXG5jb25zb2xlLmxvZyhkMyk7XG52YXIgd2lkdGggPSA5NjAsXG4gICAgaGVpZ2h0ID0gNTAwLFxuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdChudWxsKTtcblxubGV0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KS5kb21haW4oWzMwLCA3NTBdKTtcblxudmFyIHByb2plY3Rpb24gPSBkM2dlb1Byb2pcbiAgICAuZ2VvUm9iaW5zb24oKVxuICAgIC5zY2FsZSgxNzApXG4gICAgLnRyYW5zbGF0ZShbd2lkdGggLyAyLCBoZWlnaHQgLyAxLjc1XSk7XG5cbnZhciB6b29tID0gZDNcbiAgICAuem9vbSgpXG4gICAgLnNjYWxlRXh0ZW50KFsxLCA4XSlcbiAgICAub24oJ3pvb20nLCB6b29tZWQpO1xuXG52YXIgcGF0aCA9IGQzXG4gICAgLmdlb1BhdGgoKVxuICAgIC5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG52YXIgc3ZnID0gZDNcbiAgICAuc2VsZWN0KCdib2R5JylcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLm9uKCdjbGljaycsIHN0b3BwZWQsIHRydWUpO1xuXG5zdmdcbiAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAuYXR0cignY2xhc3MnLCAnYmFja2dyb3VuZCcpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAub24oJ2NsaWNrJywgcmVzZXQpO1xuXG52YXIgZyA9IHN2Zy5hcHBlbmQoJ2cnKTtcblxuc3ZnLmNhbGwoem9vbSk7IC8vIGRlbGV0ZSB0aGlzIGxpbmUgdG8gZGlzYWJsZSBmcmVlIHpvb21pbmdcblxuZDMuanNvbignL21hcHMvd29ybGQtMTEwbS5nZW9qc29uJywgZnVuY3Rpb24oZXJyb3IsIG1hcEpzb24pIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIGxldCBtYXBEaXZpc2lvbnMgPSBPYmplY3Qua2V5cyhtYXBKc29uLm9iamVjdHMpWzBdO1xuXG4gICAgZ1xuICAgICAgICAuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLmRhdGEodG9wb2pzb24uZmVhdHVyZShtYXBKc29uLCBtYXBKc29uLm9iamVjdHNbbWFwRGl2aXNpb25zXSkuZmVhdHVyZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZGF0YSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoaSAqIDcpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgY2xpY2tlZCk7XG5cbiAgICBnXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuZGF0dW0oXG4gICAgICAgICAgICB0b3BvanNvbi5tZXNoKG1hcEpzb24sIG1hcEpzb24ub2JqZWN0c1ttYXBEaXZpc2lvbnNdLCBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IGI7XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdtZXNoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoKTtcbn0pO1xuXG5mdW5jdGlvbiBjbGlja2VkKGQpIHtcbiAgICBpZiAoYWN0aXZlLm5vZGUoKSA9PT0gdGhpcykge1xuICAgICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICB9XG4gICAgYWN0aXZlLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QodGhpcykuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSk7XG5cbiAgICB2YXIgYm91bmRzID0gcGF0aC5ib3VuZHMoZCksXG4gICAgICAgIGR4ID0gYm91bmRzWzFdWzBdIC0gYm91bmRzWzBdWzBdLFxuICAgICAgICBkeSA9IGJvdW5kc1sxXVsxXSAtIGJvdW5kc1swXVsxXSxcbiAgICAgICAgeCA9IChib3VuZHNbMF1bMF0gKyBib3VuZHNbMV1bMF0pIC8gMixcbiAgICAgICAgeSA9IChib3VuZHNbMF1bMV0gKyBib3VuZHNbMV1bMV0pIC8gMixcbiAgICAgICAgc2NhbGUgPSBNYXRoLm1heCgxLCBNYXRoLm1pbig4LCAwLjkgLyBNYXRoLm1heChkeCAvIHdpZHRoLCBkeSAvIGhlaWdodCkpKSxcbiAgICAgICAgdHJhbnNsYXRlID0gW3dpZHRoIC8gMiAtIHNjYWxlICogeCwgaGVpZ2h0IC8gMiAtIHNjYWxlICogeV07XG5cbiAgICBzdmdcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVbMF0sIHRyYW5zbGF0ZVsxXSkuc2NhbGUoc2NhbGUpKTtcbn1cblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgYWN0aXZlLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QobnVsbCk7XG5cbiAgICBzdmdcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5KTtcbn1cblxuZnVuY3Rpb24gem9vbWVkKCkge1xuICAgIGcuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEuNSAvIGQzLmV2ZW50LnRyYW5zZm9ybS5rICsgJ3B4Jyk7XG4gICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xufVxuXG4vLyBJZiB0aGUgZHJhZyBiZWhhdmlvciBwcmV2ZW50cyB0aGUgZGVmYXVsdCBjbGljayxcbi8vIGFsc28gc3RvcCBwcm9wYWdhdGlvbiBzbyB3ZSBkb27igJl0IGNsaWNrLXRvLXpvb20uXG5mdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgIGlmIChkMy5ldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
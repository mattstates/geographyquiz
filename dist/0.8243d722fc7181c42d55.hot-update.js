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
let questions = [];
let question = document.getElementById('question');
let randomBtn = document.getElementById('random');
let score = document.getElementById('score');
let status = document.getElementById('status');

let correctAnswerText;
let oldColor;

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

__WEBPACK_IMPORTED_MODULE_0_d3__["json"]('/maps/world-110m.geojson', function(error, mapJson) {
    if (error) {
        throw error;
    }
    let mapDivisions = Object.keys(mapJson.objects)[0];

    let mapPaths = __WEBPACK_IMPORTED_MODULE_1_topojson__["a" /* feature */](mapJson, mapJson.objects[mapDivisions]).features;

    g
        .selectAll('path')
        .data(mapPaths, function(country, i) {
            console.log(i, country, 'country');
            if (country.properties.name !== 'District of Columbia') {

                questions.push(country.properties.name);
            }
        })
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
    console.log(d);
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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBLGdDQUFnQztBQUNoQzs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBLHVEQUF1RCx3REFBd0Q7QUFDL0c7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1RkFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUNBO0FBQ0E7O0FBRUEsb0RBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVEQUF1RCx3REFBd0Q7QUFDL0c7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLjgyNDNkNzIyZmM3MTgxYzQyZDU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbic7XG5pbXBvcnQgKiBhcyBkM2dlb1Byb2ogZnJvbSAnZDMtZ2VvLXByb2plY3Rpb24nO1xuXG4vL2xldCBkMyA9IE9iamVjdC5hc3NpZ24oe30sIGQzZ2VvUHJvaiwgZDNNYWluKTtcbi8qXG5sZXQgcXVlc3Rpb25zID0gW107XG52YXIgd2lkdGggPSA5NjA7XG52YXIgaGVpZ2h0ID0gNTAwO1xuXG5sZXQgcXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb24nKTtcbmxldCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG5sZXQgc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcbmxldCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJyk7XG5cbmxldCBjb3JyZWN0QW5zd2VyVGV4dDtcbmxldCBvbGRDb2xvcjtcblxudmFyIHN2ZyA9IGQzLnNlbGVjdCgnI21hcCcpXG4gICAgLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5hdHRyKCdjbGFzcycsICdtYXAnKVxuICAgIC5hcHBlbmQoJ2cnKVxuXG52YXIgcHJvamVjdGlvbiA9IGQzLmdlb1JvYmluc29uKClcbiAgICAvLyAgIC5zY2FsZSh3aWR0aCAvIDEuMjUpOyBVU0FcbiAgICAuc2NhbGUod2lkdGggLyA1LjYpO1xuXG4vLyAgICAudHJhbnNsYXRlKFtNYXRoLnNxcnQod2lkdGggLyAyKSwgaGVpZ2h0IC8gMl0pO1xuXG4vLyBwcm9qZWN0aW9uLmNlbnRlcihbLTk4LCAzNl0pOyBVU0FcbnByb2plY3Rpb24uY2VudGVyKFsxNSwgMTBdKTtcblxuXG52YXIgcGF0aCA9IGQzLmdlb1BhdGgoKVxuICAgIC5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG52YXIgdXJsID0gJy9tYXBzL3dvcmxkLTExMG0uZ2VvanNvbic7XG5cbmQzLmpzb24odXJsLCBmdW5jdGlvbihlcnIsIG1hcEpzb24pIHtcbiAgICAvL2NvbnNvbGUubG9nKG1hcEpzb24pO1xuICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIGQzLmpzb24nLCBlcnIpO1xuICAgIH1cbiAgICBsZXQgbWFwRGl2aXNpb25zID0gT2JqZWN0LmtleXMobWFwSnNvbi5vYmplY3RzKVswXTtcbiAgICBsZXQgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZShtYXBKc29uLCBtYXBKc29uLm9iamVjdHNbbWFwRGl2aXNpb25zXSkuZmVhdHVyZXM7XG4gICAgLy9jb25zb2xlLmxvZyhjb3VudHJpZXMsICc8LS0gY291bnRyaWVzJyk7XG4gICAgbGV0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KS5kb21haW4oWzMwLCA3NTBdKTtcblxuICAgIHN2Zy5zZWxlY3RBbGwoJy5jb3VudHJ5JylcbiAgICAgICAgLmRhdGEoY291bnRyaWVzLCBmdW5jdGlvbihjb3VudHJ5LCBpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpLCBjb3VudHJ5LCAnY291bnRyeScpO1xuICAgICAgICAgICAgaWYgKGNvdW50cnkucHJvcGVydGllcy5uYW1lICE9PSAnRGlzdHJpY3Qgb2YgQ29sdW1iaWEnKSB7XG5cbiAgICAgICAgICAgICAgICBxdWVzdGlvbnMucHVzaChjb3VudHJ5LnByb3BlcnRpZXMubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY291bnRyeScpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdyZ2JhKDUwLDUwLDUwLC42KScpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZGF0YSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoaSAqIDcpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdldEF0dHJpYnV0ZSgnZmlsbCcpKTtcbiAgICAgICAgICAgIG9sZENvbG9yID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAncmdiYSgyNTAsMjUwLDI1MCwuOSknKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAwLjIpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAneWVsbG93Jyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnYmxhY2snKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmaWxsJywgb2xkQ29sb3IpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuICAgICAgICAgICAgY29ycmVjdEFuc3dlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpO1xuICAgICAgICAgICAgZGF0YS5wcm9wZXJ0aWVzLm5hbWUgPT09IGNvcnJlY3RBbnN3ZXJUZXh0LmlubmVyVGV4dCA/IGNvcnJlY3RBbnN3ZXIoKSA6IHdyb25nQW5zd2VyKCk7XG4gICAgICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9ucyk7XG59KTtcblxuXG5yYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZVF1ZXN0aW9uKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVRdWVzdGlvbigpIHtcbiAgICBxdWVzdGlvbi5pbm5lckhUTUwgPSBgV2hlcmUgaXMgPHN0cm9uZyBpZD0ndGVzdCc+JHtxdWVzdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcXVlc3Rpb25zLmxlbmd0aCldfTwvc3Ryb25nPj9gO1xuICAgIC8vc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcblxufVxuXG5mdW5jdGlvbiBjb3JyZWN0QW5zd2VyKCkge1xuICAgIGxldCBzY29yZUNvdW50ID0gcGFyc2VJbnQoc2NvcmUuaW5uZXJUZXh0KTtcbiAgICBzY29yZS5pbm5lclRleHQgPSBzY29yZUNvdW50ICs9IDE7XG4gICAgc3RhdHVzLmlubmVyVGV4dCA9ICdDT1JSRUNUISc7XG4gICAgLy8gc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcblxuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XG4gICAgZ2VuZXJhdGVRdWVzdGlvbigpO1xufVxuXG5mdW5jdGlvbiB3cm9uZ0Fuc3dlcigpIHtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ1dST05HISc7XG4gICAgLy8gc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnd3JvbmcnKTtcbn1cbiovXG5sZXQgcXVlc3Rpb25zID0gW107XG5sZXQgcXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb24nKTtcbmxldCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG5sZXQgc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcbmxldCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJyk7XG5cbmxldCBjb3JyZWN0QW5zd2VyVGV4dDtcbmxldCBvbGRDb2xvcjtcblxudmFyIHdpZHRoID0gOTYwLFxuICAgIGhlaWdodCA9IDUwMCxcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QobnVsbCk7XG5cbmxldCBjb2xvclNjYWxlID0gZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdykuZG9tYWluKFszMCwgNzUwXSk7XG5cbnZhciBwcm9qZWN0aW9uID0gZDNnZW9Qcm9qXG4gICAgLmdlb1JvYmluc29uKClcbiAgICAuc2NhbGUoMTcwKVxuICAgIC50cmFuc2xhdGUoW3dpZHRoIC8gMiwgaGVpZ2h0IC8gMS43NV0pO1xuXG52YXIgem9vbSA9IGQzXG4gICAgLnpvb20oKVxuICAgIC5zY2FsZUV4dGVudChbMSwgOF0pXG4gICAgLm9uKCd6b29tJywgem9vbWVkKTtcblxudmFyIHBhdGggPSBkM1xuICAgIC5nZW9QYXRoKClcbiAgICAucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxudmFyIHN2ZyA9IGQzXG4gICAgLnNlbGVjdCgnI21hcCcpXG4gICAgLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignY2xhc3MnLCAnbWFwJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5vbignY2xpY2snLCBzdG9wcGVkLCB0cnVlKTtcblxuc3ZnXG4gICAgLmFwcGVuZCgncmVjdCcpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2JhY2tncm91bmQnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLm9uKCdjbGljaycsIHJlc2V0KTtcblxudmFyIGcgPSBzdmcuYXBwZW5kKCdnJyk7XG5cbnN2Zy5jYWxsKHpvb20pOyAvLyBkZWxldGUgdGhpcyBsaW5lIHRvIGRpc2FibGUgZnJlZSB6b29taW5nXG5cbmQzLmpzb24oJy9tYXBzL3dvcmxkLTExMG0uZ2VvanNvbicsIGZ1bmN0aW9uKGVycm9yLCBtYXBKc29uKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBsZXQgbWFwRGl2aXNpb25zID0gT2JqZWN0LmtleXMobWFwSnNvbi5vYmplY3RzKVswXTtcblxuICAgIGxldCBtYXBQYXRocyA9IHRvcG9qc29uLmZlYXR1cmUobWFwSnNvbiwgbWFwSnNvbi5vYmplY3RzW21hcERpdmlzaW9uc10pLmZlYXR1cmVzO1xuXG4gICAgZ1xuICAgICAgICAuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLmRhdGEobWFwUGF0aHMsIGZ1bmN0aW9uKGNvdW50cnksIGkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGksIGNvdW50cnksICdjb3VudHJ5Jyk7XG4gICAgICAgICAgICBpZiAoY291bnRyeS5wcm9wZXJ0aWVzLm5hbWUgIT09ICdEaXN0cmljdCBvZiBDb2x1bWJpYScpIHtcblxuICAgICAgICAgICAgICAgIHF1ZXN0aW9ucy5wdXNoKGNvdW50cnkucHJvcGVydGllcy5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkYXRhLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3JTY2FsZShpICogNyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBjbGlja2VkKTtcblxuICAgIGdcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5kYXR1bShcbiAgICAgICAgICAgIHRvcG9qc29uLm1lc2gobWFwSnNvbiwgbWFwSnNvbi5vYmplY3RzW21hcERpdmlzaW9uc10sIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAhPT0gYjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ21lc2gnKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpO1xufSk7XG5cbmZ1bmN0aW9uIGNsaWNrZWQoZCkge1xuICAgIGlmIChhY3RpdmUubm9kZSgpID09PSB0aGlzKSB7XG4gICAgICAgIHJldHVybiByZXNldCgpO1xuICAgIH1cbiAgICBhY3RpdmUuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKTtcbiAgICBjb25zb2xlLmxvZyhkKTtcbiAgICBhY3RpdmVBbnN3ZXIgPSBkLnByb3BlcnRpZXMubmFtZTtcblxuICAgIHZhciBib3VuZHMgPSBwYXRoLmJvdW5kcyhkKSxcbiAgICAgICAgZHggPSBib3VuZHNbMV1bMF0gLSBib3VuZHNbMF1bMF0sXG4gICAgICAgIGR5ID0gYm91bmRzWzFdWzFdIC0gYm91bmRzWzBdWzFdLFxuICAgICAgICB4ID0gKGJvdW5kc1swXVswXSArIGJvdW5kc1sxXVswXSkgLyAyLFxuICAgICAgICB5ID0gKGJvdW5kc1swXVsxXSArIGJvdW5kc1sxXVsxXSkgLyAyLFxuICAgICAgICBzY2FsZSA9IE1hdGgubWF4KDEsIE1hdGgubWluKDgsIDAuOSAvIE1hdGgubWF4KGR4IC8gd2lkdGgsIGR5IC8gaGVpZ2h0KSkpLFxuICAgICAgICB0cmFuc2xhdGUgPSBbd2lkdGggLyAyIC0gc2NhbGUgKiB4LCBoZWlnaHQgLyAyIC0gc2NhbGUgKiB5XTtcblxuICAgIHN2Z1xuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAgIC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKHRyYW5zbGF0ZVswXSwgdHJhbnNsYXRlWzFdKS5zY2FsZShzY2FsZSkpO1xufVxuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBhY3RpdmUuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdChudWxsKTtcblxuICAgIHN2Z1xuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAgIC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkpO1xufVxuXG5mdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgZy5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMS41IC8gZDMuZXZlbnQudHJhbnNmb3JtLmsgKyAncHgnKTtcbiAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG59XG5cbi8vIElmIHRoZSBkcmFnIGJlaGF2aW9yIHByZXZlbnRzIHRoZSBkZWZhdWx0IGNsaWNrLFxuLy8gYWxzbyBzdG9wIHByb3BhZ2F0aW9uIHNvIHdlIGRvbuKAmXQgY2xpY2stdG8tem9vbS5cbmZ1bmN0aW9uIHN0b3BwZWQoKSB7XG4gICAgaWYgKGQzLmV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxufVxuXG5yYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZVF1ZXN0aW9uKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVRdWVzdGlvbigpIHtcbiAgICBxdWVzdGlvbi5pbm5lckhUTUwgPSBgV2hlcmUgaXMgPHN0cm9uZyBpZD0ndGVzdCc+JHtxdWVzdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcXVlc3Rpb25zLmxlbmd0aCldfTwvc3Ryb25nPj9gO1xuICAgIC8vc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcblxufVxuXG5mdW5jdGlvbiBjb3JyZWN0QW5zd2VyKCkge1xuICAgIGxldCBzY29yZUNvdW50ID0gcGFyc2VJbnQoc2NvcmUuaW5uZXJUZXh0KTtcbiAgICBzY29yZS5pbm5lclRleHQgPSBzY29yZUNvdW50ICs9IDE7XG4gICAgc3RhdHVzLmlubmVyVGV4dCA9ICdDT1JSRUNUISc7XG4gICAgLy8gc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcblxuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XG4gICAgZ2VuZXJhdGVRdWVzdGlvbigpO1xufVxuXG5mdW5jdGlvbiB3cm9uZ0Fuc3dlcigpIHtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ1dST05HISc7XG4gICAgLy8gc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnd3JvbmcnKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
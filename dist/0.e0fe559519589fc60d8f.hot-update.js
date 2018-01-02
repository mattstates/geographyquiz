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

let activeAnswer = null;
let correctAnswerText;
let oldColor;

var width = 960,
    height = 500,
    active = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](null);

let colorScale = __WEBPACK_IMPORTED_MODULE_0_d3__["scaleSequential"](__WEBPACK_IMPORTED_MODULE_0_d3__["interpolateRainbow"]).domain([100, 10750]);

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
            if (country.properties.name !== 'District of Columbia') {
                questions.push(country.properties.name);
            }
        })
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', function(data, i) {
            return colorScale((Math.random() * 10 + (i * 230)));
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

window.addEventListener('keyup', function(e) {

    if (e.which === 13) {
        event.preventDefault();
        status.classList.remove('correct', 'wrong');
        correctAnswerText = document.getElementById('test');
        activeAnswer === correctAnswerText.innerText ? correctAnswer() : wrongAnswer();
    }
});


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBLGdDQUFnQztBQUNoQzs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBLHVEQUF1RCx3REFBd0Q7QUFDL0c7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVGQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQ0E7QUFDQTs7QUFFQSxvREFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1REFBdUQsd0RBQXdEO0FBQy9HOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmUwZmU1NTk1MTk1ODlmYzYwZDhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbic7XG5pbXBvcnQgKiBhcyBkM2dlb1Byb2ogZnJvbSAnZDMtZ2VvLXByb2plY3Rpb24nO1xuXG4vL2xldCBkMyA9IE9iamVjdC5hc3NpZ24oe30sIGQzZ2VvUHJvaiwgZDNNYWluKTtcbi8qXG5sZXQgcXVlc3Rpb25zID0gW107XG52YXIgd2lkdGggPSA5NjA7XG52YXIgaGVpZ2h0ID0gNTAwO1xuXG5sZXQgcXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb24nKTtcbmxldCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG5sZXQgc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcbmxldCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJyk7XG5cbmxldCBjb3JyZWN0QW5zd2VyVGV4dDtcbmxldCBvbGRDb2xvcjtcblxudmFyIHN2ZyA9IGQzLnNlbGVjdCgnI21hcCcpXG4gICAgLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5hdHRyKCdjbGFzcycsICdtYXAnKVxuICAgIC5hcHBlbmQoJ2cnKVxuXG52YXIgcHJvamVjdGlvbiA9IGQzLmdlb1JvYmluc29uKClcbiAgICAvLyAgIC5zY2FsZSh3aWR0aCAvIDEuMjUpOyBVU0FcbiAgICAuc2NhbGUod2lkdGggLyA1LjYpO1xuXG4vLyAgICAudHJhbnNsYXRlKFtNYXRoLnNxcnQod2lkdGggLyAyKSwgaGVpZ2h0IC8gMl0pO1xuXG4vLyBwcm9qZWN0aW9uLmNlbnRlcihbLTk4LCAzNl0pOyBVU0FcbnByb2plY3Rpb24uY2VudGVyKFsxNSwgMTBdKTtcblxuXG52YXIgcGF0aCA9IGQzLmdlb1BhdGgoKVxuICAgIC5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG52YXIgdXJsID0gJy9tYXBzL3dvcmxkLTExMG0uZ2VvanNvbic7XG5cbmQzLmpzb24odXJsLCBmdW5jdGlvbihlcnIsIG1hcEpzb24pIHtcbiAgICAvL2NvbnNvbGUubG9nKG1hcEpzb24pO1xuICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIGQzLmpzb24nLCBlcnIpO1xuICAgIH1cbiAgICBsZXQgbWFwRGl2aXNpb25zID0gT2JqZWN0LmtleXMobWFwSnNvbi5vYmplY3RzKVswXTtcbiAgICBsZXQgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZShtYXBKc29uLCBtYXBKc29uLm9iamVjdHNbbWFwRGl2aXNpb25zXSkuZmVhdHVyZXM7XG4gICAgLy9jb25zb2xlLmxvZyhjb3VudHJpZXMsICc8LS0gY291bnRyaWVzJyk7XG4gICAgbGV0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KS5kb21haW4oWzMwLCA3NTBdKTtcblxuICAgIHN2Zy5zZWxlY3RBbGwoJy5jb3VudHJ5JylcbiAgICAgICAgLmRhdGEoY291bnRyaWVzLCBmdW5jdGlvbihjb3VudHJ5LCBpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpLCBjb3VudHJ5LCAnY291bnRyeScpO1xuICAgICAgICAgICAgaWYgKGNvdW50cnkucHJvcGVydGllcy5uYW1lICE9PSAnRGlzdHJpY3Qgb2YgQ29sdW1iaWEnKSB7XG5cbiAgICAgICAgICAgICAgICBxdWVzdGlvbnMucHVzaChjb3VudHJ5LnByb3BlcnRpZXMubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY291bnRyeScpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdyZ2JhKDUwLDUwLDUwLC42KScpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZGF0YSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoaSAqIDcpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdldEF0dHJpYnV0ZSgnZmlsbCcpKTtcbiAgICAgICAgICAgIG9sZENvbG9yID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAncmdiYSgyNTAsMjUwLDI1MCwuOSknKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAwLjIpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAneWVsbG93Jyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnYmxhY2snKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmaWxsJywgb2xkQ29sb3IpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuICAgICAgICAgICAgY29ycmVjdEFuc3dlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpO1xuICAgICAgICAgICAgZGF0YS5wcm9wZXJ0aWVzLm5hbWUgPT09IGNvcnJlY3RBbnN3ZXJUZXh0LmlubmVyVGV4dCA/IGNvcnJlY3RBbnN3ZXIoKSA6IHdyb25nQW5zd2VyKCk7XG4gICAgICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9ucyk7XG59KTtcblxuXG5yYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZVF1ZXN0aW9uKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVRdWVzdGlvbigpIHtcbiAgICBxdWVzdGlvbi5pbm5lckhUTUwgPSBgV2hlcmUgaXMgPHN0cm9uZyBpZD0ndGVzdCc+JHtxdWVzdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcXVlc3Rpb25zLmxlbmd0aCldfTwvc3Ryb25nPj9gO1xuICAgIC8vc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcblxufVxuXG5mdW5jdGlvbiBjb3JyZWN0QW5zd2VyKCkge1xuICAgIGxldCBzY29yZUNvdW50ID0gcGFyc2VJbnQoc2NvcmUuaW5uZXJUZXh0KTtcbiAgICBzY29yZS5pbm5lclRleHQgPSBzY29yZUNvdW50ICs9IDE7XG4gICAgc3RhdHVzLmlubmVyVGV4dCA9ICdDT1JSRUNUISc7XG4gICAgLy8gc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcblxuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XG4gICAgZ2VuZXJhdGVRdWVzdGlvbigpO1xufVxuXG5mdW5jdGlvbiB3cm9uZ0Fuc3dlcigpIHtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ1dST05HISc7XG4gICAgLy8gc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnd3JvbmcnKTtcbn1cbiovXG5sZXQgcXVlc3Rpb25zID0gW107XG5sZXQgcXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb24nKTtcbmxldCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG5sZXQgc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcbmxldCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJyk7XG5cbmxldCBhY3RpdmVBbnN3ZXIgPSBudWxsO1xubGV0IGNvcnJlY3RBbnN3ZXJUZXh0O1xubGV0IG9sZENvbG9yO1xuXG52YXIgd2lkdGggPSA5NjAsXG4gICAgaGVpZ2h0ID0gNTAwLFxuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdChudWxsKTtcblxubGV0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KS5kb21haW4oWzEwMCwgMTA3NTBdKTtcblxudmFyIHByb2plY3Rpb24gPSBkM2dlb1Byb2pcbiAgICAuZ2VvUm9iaW5zb24oKVxuICAgIC5zY2FsZSgxNzApXG4gICAgLnRyYW5zbGF0ZShbd2lkdGggLyAyLCBoZWlnaHQgLyAxLjc1XSk7XG5cbnZhciB6b29tID0gZDNcbiAgICAuem9vbSgpXG4gICAgLnNjYWxlRXh0ZW50KFsxLCA4XSlcbiAgICAub24oJ3pvb20nLCB6b29tZWQpO1xuXG52YXIgcGF0aCA9IGQzXG4gICAgLmdlb1BhdGgoKVxuICAgIC5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG52YXIgc3ZnID0gZDNcbiAgICAuc2VsZWN0KCcjbWFwJylcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCdjbGFzcycsICdtYXAnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLm9uKCdjbGljaycsIHN0b3BwZWQsIHRydWUpO1xuXG5zdmdcbiAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAuYXR0cignY2xhc3MnLCAnYmFja2dyb3VuZCcpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAub24oJ2NsaWNrJywgcmVzZXQpO1xuXG52YXIgZyA9IHN2Zy5hcHBlbmQoJ2cnKTtcblxuc3ZnLmNhbGwoem9vbSk7IC8vIGRlbGV0ZSB0aGlzIGxpbmUgdG8gZGlzYWJsZSBmcmVlIHpvb21pbmdcblxuZDMuanNvbignL21hcHMvd29ybGQtMTEwbS5nZW9qc29uJywgZnVuY3Rpb24oZXJyb3IsIG1hcEpzb24pIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIGxldCBtYXBEaXZpc2lvbnMgPSBPYmplY3Qua2V5cyhtYXBKc29uLm9iamVjdHMpWzBdO1xuXG4gICAgbGV0IG1hcFBhdGhzID0gdG9wb2pzb24uZmVhdHVyZShtYXBKc29uLCBtYXBKc29uLm9iamVjdHNbbWFwRGl2aXNpb25zXSkuZmVhdHVyZXM7XG5cbiAgICBnXG4gICAgICAgIC5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuZGF0YShtYXBQYXRocywgZnVuY3Rpb24oY291bnRyeSwgaSkge1xuICAgICAgICAgICAgaWYgKGNvdW50cnkucHJvcGVydGllcy5uYW1lICE9PSAnRGlzdHJpY3Qgb2YgQ29sdW1iaWEnKSB7XG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zLnB1c2goY291bnRyeS5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoKVxuICAgICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGRhdGEsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKChNYXRoLnJhbmRvbSgpICogMTAgKyAoaSAqIDIzMCkpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgY2xpY2tlZCk7XG5cbiAgICBnXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuZGF0dW0oXG4gICAgICAgICAgICB0b3BvanNvbi5tZXNoKG1hcEpzb24sIG1hcEpzb24ub2JqZWN0c1ttYXBEaXZpc2lvbnNdLCBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IGI7XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdtZXNoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoKTtcbn0pO1xuXG5mdW5jdGlvbiBjbGlja2VkKGQpIHtcbiAgICBpZiAoYWN0aXZlLm5vZGUoKSA9PT0gdGhpcykge1xuICAgICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICB9XG4gICAgYWN0aXZlLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QodGhpcykuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSk7XG4gICAgYWN0aXZlQW5zd2VyID0gZC5wcm9wZXJ0aWVzLm5hbWU7XG5cbiAgICB2YXIgYm91bmRzID0gcGF0aC5ib3VuZHMoZCksXG4gICAgICAgIGR4ID0gYm91bmRzWzFdWzBdIC0gYm91bmRzWzBdWzBdLFxuICAgICAgICBkeSA9IGJvdW5kc1sxXVsxXSAtIGJvdW5kc1swXVsxXSxcbiAgICAgICAgeCA9IChib3VuZHNbMF1bMF0gKyBib3VuZHNbMV1bMF0pIC8gMixcbiAgICAgICAgeSA9IChib3VuZHNbMF1bMV0gKyBib3VuZHNbMV1bMV0pIC8gMixcbiAgICAgICAgc2NhbGUgPSBNYXRoLm1heCgxLCBNYXRoLm1pbig4LCAwLjkgLyBNYXRoLm1heChkeCAvIHdpZHRoLCBkeSAvIGhlaWdodCkpKSxcbiAgICAgICAgdHJhbnNsYXRlID0gW3dpZHRoIC8gMiAtIHNjYWxlICogeCwgaGVpZ2h0IC8gMiAtIHNjYWxlICogeV07XG5cbiAgICBzdmdcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVbMF0sIHRyYW5zbGF0ZVsxXSkuc2NhbGUoc2NhbGUpKTtcbn1cblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgYWN0aXZlLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QobnVsbCk7XG5cbiAgICBzdmdcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5KTtcblxuICAgIGFjdGl2ZUFuc3dlciA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHpvb21lZCgpIHtcbiAgICBnLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxLjUgLyBkMy5ldmVudC50cmFuc2Zvcm0uayArICdweCcpO1xuICAgIGcuYXR0cigndHJhbnNmb3JtJywgZDMuZXZlbnQudHJhbnNmb3JtKTtcbn1cblxuLy8gSWYgdGhlIGRyYWcgYmVoYXZpb3IgcHJldmVudHMgdGhlIGRlZmF1bHQgY2xpY2ssXG4vLyBhbHNvIHN0b3AgcHJvcGFnYXRpb24gc28gd2UgZG9u4oCZdCBjbGljay10by16b29tLlxuZnVuY3Rpb24gc3RvcHBlZCgpIHtcbiAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG59XG5cbnJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlUXVlc3Rpb24pO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVF1ZXN0aW9uKCkge1xuICAgIHF1ZXN0aW9uLmlubmVySFRNTCA9IGBXaGVyZSBpcyA8c3Ryb25nIGlkPSd0ZXN0Jz4ke3F1ZXN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBxdWVzdGlvbnMubGVuZ3RoKV19PC9zdHJvbmc+P2A7XG4gICAgLy9zdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuXG59XG5cbmZ1bmN0aW9uIGNvcnJlY3RBbnN3ZXIoKSB7XG4gICAgbGV0IHNjb3JlQ291bnQgPSBwYXJzZUludChzY29yZS5pbm5lclRleHQpO1xuICAgIHNjb3JlLmlubmVyVGV4dCA9IHNjb3JlQ291bnQgKz0gMTtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ0NPUlJFQ1QhJztcbiAgICAvLyBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuXG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICBnZW5lcmF0ZVF1ZXN0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIHdyb25nQW5zd2VyKCkge1xuICAgIHN0YXR1cy5pbm5lclRleHQgPSAnV1JPTkchJztcbiAgICAvLyBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCd3cm9uZycpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG5cbiAgICBpZiAoZS53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcbiAgICAgICAgY29ycmVjdEFuc3dlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpO1xuICAgICAgICBhY3RpdmVBbnN3ZXIgPT09IGNvcnJlY3RBbnN3ZXJUZXh0LmlubmVyVGV4dCA/IGNvcnJlY3RBbnN3ZXIoKSA6IHdyb25nQW5zd2VyKCk7XG4gICAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
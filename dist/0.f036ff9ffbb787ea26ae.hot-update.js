webpackHotUpdate(0,{

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_topojson__ = __webpack_require__("./node_modules/topojson/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__ = __webpack_require__("./node_modules/d3-geo-projection/index.js");




let d3 = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0_d3__, __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__);

let questions = [];
var width = 960;
var height = 500;
var rotate = 60;
var maxlat = 83;

let question = document.getElementById('question');
let randomBtn = document.getElementById('random');
let score = document.getElementById('score');
let status = document.getElementById('status');

let correctAnswerText;
let oldColor;
console.log(d3);
var zoom = d3.zoom()
    .scaleExtent(scaleExtent)
    .scale(projection.scale())
    .translate([0, 0]) // not linked directly to projection
    .on('zoom', redraw);

var svg = d3.select('#map')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'map')
    .call(zoom)
    .append('g');

var projection = d3.geoRobinson()
    .rotate([rotate, 0])
    .scale(1) // we'll scale up to match viewport shortly.
    .translate([width / 2, height / 2]);
//   .scale(width / 1.25); USA
//  .scale(width / 5.6); GLOBAL

//    .translate([Math.sqrt(width / 2), height / 2]);

// projection.center([-98, 36]); USA
// projection.center([15, 10]); GLOBAL

// find the top left and bottom right of current projection
function mercatorBounds(projection, maxlat) {
    var yaw = projection.rotate()[0],
        xymax = projection([-yaw + 180 - 1e-6, -maxlat]),
        xymin = projection([-yaw - 180 + 1e-6, maxlat]);

    return [xymin, xymax];
}
projection
    .scale(scaleExtent[0]);

// set up the scale extent and initial scale for the projection
var b = mercatorBounds(projection, maxlat),
    s = width / (b[1][0] - b[0][0]),
    scaleExtent = [s, 10 * s];


var path = d3.geoPath()
    .projection(projection);

var url = '/maps/world-110m.geojson';

d3.json(url, function(err, mapJson) {
    //console.log(mapJson);
    if (err) {
        console.log('error in d3.json', err);
    }
    let mapDivisions = Object.keys(mapJson.objects)[0];
    let countries = __WEBPACK_IMPORTED_MODULE_1_topojson__["a" /* feature */](mapJson, mapJson.objects[mapDivisions]).features;
    //console.log(countries, '<-- countries');
    let colorScale = d3.scaleSequential(d3.interpolateRainbow).domain([30, 750]);

    svg.selectAll('.country')
        .data(countries, function(country, i) {
            // console.log(i, country, 'country');
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
    //console.log(questions);
    redraw();
});


// track last translation and scale event we processed
var tlast = [0, 0],
    slast = null;

function redraw() {
    if (d3.event) {
        var scale = d3.event.scale,
            t = d3.event.translate;

        // if scaling changes, ignore translation (otherwise touch zooms are weird)
        if (scale != slast) {
            projection.scale(scale);
        } else {
            var dx = t[0] - tlast[0],
                dy = t[1] - tlast[1],
                yaw = projection.rotate()[0],
                tp = projection.translate();

            // use x translation to rotate based on current scale
            projection.rotate([yaw + 360.0 * dx / width * scaleExtent[0] / scale, 0, 0]);
            // use y translation to translate projection, clamped by min/max
            var b = mercatorBounds(projection, maxlat);
            if (b[0][1] + dy > 0) {dy = -b[0][1];} else if (b[1][1] + dy < height) {dy = height - b[1][1];}
            projection.translate([tp[0], tp[1] + dy]);
        }
        // save last values.  resetting zoom.translate() and scale() would
        // seem equivalent but doesn't seem to work reliably?
        slast = scale;
        tlast = t;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsd0JBQXdCOztBQUV4Qjs7QUFFQSxnQ0FBZ0M7QUFDaEMsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxlQUFlLGtDQUFrQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdURBQXVELHdEQUF3RDtBQUMvRzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuZjAzNmZmOWZmYmI3ODdlYTI2YWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzTWFpbiBmcm9tICdkMyc7XG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbic7XG5pbXBvcnQgKiBhcyBkM2dlb1Byb2ogZnJvbSAnZDMtZ2VvLXByb2plY3Rpb24nO1xuXG5sZXQgZDMgPSBPYmplY3QuYXNzaWduKHt9LCBkM01haW4sIGQzZ2VvUHJvaik7XG5cbmxldCBxdWVzdGlvbnMgPSBbXTtcbnZhciB3aWR0aCA9IDk2MDtcbnZhciBoZWlnaHQgPSA1MDA7XG52YXIgcm90YXRlID0gNjA7XG52YXIgbWF4bGF0ID0gODM7XG5cbmxldCBxdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbicpO1xubGV0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20nKTtcbmxldCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xubGV0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKTtcblxubGV0IGNvcnJlY3RBbnN3ZXJUZXh0O1xubGV0IG9sZENvbG9yO1xuY29uc29sZS5sb2coZDMpO1xudmFyIHpvb20gPSBkMy56b29tKClcbiAgICAuc2NhbGVFeHRlbnQoc2NhbGVFeHRlbnQpXG4gICAgLnNjYWxlKHByb2plY3Rpb24uc2NhbGUoKSlcbiAgICAudHJhbnNsYXRlKFswLCAwXSkgLy8gbm90IGxpbmtlZCBkaXJlY3RseSB0byBwcm9qZWN0aW9uXG4gICAgLm9uKCd6b29tJywgcmVkcmF3KTtcblxudmFyIHN2ZyA9IGQzLnNlbGVjdCgnI21hcCcpXG4gICAgLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5hdHRyKCdjbGFzcycsICdtYXAnKVxuICAgIC5jYWxsKHpvb20pXG4gICAgLmFwcGVuZCgnZycpO1xuXG52YXIgcHJvamVjdGlvbiA9IGQzLmdlb1JvYmluc29uKClcbiAgICAucm90YXRlKFtyb3RhdGUsIDBdKVxuICAgIC5zY2FsZSgxKSAvLyB3ZSdsbCBzY2FsZSB1cCB0byBtYXRjaCB2aWV3cG9ydCBzaG9ydGx5LlxuICAgIC50cmFuc2xhdGUoW3dpZHRoIC8gMiwgaGVpZ2h0IC8gMl0pO1xuLy8gICAuc2NhbGUod2lkdGggLyAxLjI1KTsgVVNBXG4vLyAgLnNjYWxlKHdpZHRoIC8gNS42KTsgR0xPQkFMXG5cbi8vICAgIC50cmFuc2xhdGUoW01hdGguc3FydCh3aWR0aCAvIDIpLCBoZWlnaHQgLyAyXSk7XG5cbi8vIHByb2plY3Rpb24uY2VudGVyKFstOTgsIDM2XSk7IFVTQVxuLy8gcHJvamVjdGlvbi5jZW50ZXIoWzE1LCAxMF0pOyBHTE9CQUxcblxuLy8gZmluZCB0aGUgdG9wIGxlZnQgYW5kIGJvdHRvbSByaWdodCBvZiBjdXJyZW50IHByb2plY3Rpb25cbmZ1bmN0aW9uIG1lcmNhdG9yQm91bmRzKHByb2plY3Rpb24sIG1heGxhdCkge1xuICAgIHZhciB5YXcgPSBwcm9qZWN0aW9uLnJvdGF0ZSgpWzBdLFxuICAgICAgICB4eW1heCA9IHByb2plY3Rpb24oWy15YXcgKyAxODAgLSAxZS02LCAtbWF4bGF0XSksXG4gICAgICAgIHh5bWluID0gcHJvamVjdGlvbihbLXlhdyAtIDE4MCArIDFlLTYsIG1heGxhdF0pO1xuXG4gICAgcmV0dXJuIFt4eW1pbiwgeHltYXhdO1xufVxucHJvamVjdGlvblxuICAgIC5zY2FsZShzY2FsZUV4dGVudFswXSk7XG5cbi8vIHNldCB1cCB0aGUgc2NhbGUgZXh0ZW50IGFuZCBpbml0aWFsIHNjYWxlIGZvciB0aGUgcHJvamVjdGlvblxudmFyIGIgPSBtZXJjYXRvckJvdW5kcyhwcm9qZWN0aW9uLCBtYXhsYXQpLFxuICAgIHMgPSB3aWR0aCAvIChiWzFdWzBdIC0gYlswXVswXSksXG4gICAgc2NhbGVFeHRlbnQgPSBbcywgMTAgKiBzXTtcblxuXG52YXIgcGF0aCA9IGQzLmdlb1BhdGgoKVxuICAgIC5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG52YXIgdXJsID0gJy9tYXBzL3dvcmxkLTExMG0uZ2VvanNvbic7XG5cbmQzLmpzb24odXJsLCBmdW5jdGlvbihlcnIsIG1hcEpzb24pIHtcbiAgICAvL2NvbnNvbGUubG9nKG1hcEpzb24pO1xuICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIGQzLmpzb24nLCBlcnIpO1xuICAgIH1cbiAgICBsZXQgbWFwRGl2aXNpb25zID0gT2JqZWN0LmtleXMobWFwSnNvbi5vYmplY3RzKVswXTtcbiAgICBsZXQgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZShtYXBKc29uLCBtYXBKc29uLm9iamVjdHNbbWFwRGl2aXNpb25zXSkuZmVhdHVyZXM7XG4gICAgLy9jb25zb2xlLmxvZyhjb3VudHJpZXMsICc8LS0gY291bnRyaWVzJyk7XG4gICAgbGV0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KS5kb21haW4oWzMwLCA3NTBdKTtcblxuICAgIHN2Zy5zZWxlY3RBbGwoJy5jb3VudHJ5JylcbiAgICAgICAgLmRhdGEoY291bnRyaWVzLCBmdW5jdGlvbihjb3VudHJ5LCBpKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLCBjb3VudHJ5LCAnY291bnRyeScpO1xuICAgICAgICAgICAgaWYgKGNvdW50cnkucHJvcGVydGllcy5uYW1lICE9PSAnRGlzdHJpY3Qgb2YgQ29sdW1iaWEnKSB7XG5cbiAgICAgICAgICAgICAgICBxdWVzdGlvbnMucHVzaChjb3VudHJ5LnByb3BlcnRpZXMubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY291bnRyeScpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdyZ2JhKDUwLDUwLDUwLC42KScpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZGF0YSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoaSAqIDcpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdldEF0dHJpYnV0ZSgnZmlsbCcpKTtcbiAgICAgICAgICAgIG9sZENvbG9yID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAncmdiYSgyNTAsMjUwLDI1MCwuOSknKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAwLjIpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAneWVsbG93Jyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnYmxhY2snKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmaWxsJywgb2xkQ29sb3IpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuICAgICAgICAgICAgY29ycmVjdEFuc3dlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpO1xuICAgICAgICAgICAgZGF0YS5wcm9wZXJ0aWVzLm5hbWUgPT09IGNvcnJlY3RBbnN3ZXJUZXh0LmlubmVyVGV4dCA/IGNvcnJlY3RBbnN3ZXIoKSA6IHdyb25nQW5zd2VyKCk7XG4gICAgICAgIH0pO1xuICAgIC8vY29uc29sZS5sb2cocXVlc3Rpb25zKTtcbiAgICByZWRyYXcoKTtcbn0pO1xuXG5cbi8vIHRyYWNrIGxhc3QgdHJhbnNsYXRpb24gYW5kIHNjYWxlIGV2ZW50IHdlIHByb2Nlc3NlZFxudmFyIHRsYXN0ID0gWzAsIDBdLFxuICAgIHNsYXN0ID0gbnVsbDtcblxuZnVuY3Rpb24gcmVkcmF3KCkge1xuICAgIGlmIChkMy5ldmVudCkge1xuICAgICAgICB2YXIgc2NhbGUgPSBkMy5ldmVudC5zY2FsZSxcbiAgICAgICAgICAgIHQgPSBkMy5ldmVudC50cmFuc2xhdGU7XG5cbiAgICAgICAgLy8gaWYgc2NhbGluZyBjaGFuZ2VzLCBpZ25vcmUgdHJhbnNsYXRpb24gKG90aGVyd2lzZSB0b3VjaCB6b29tcyBhcmUgd2VpcmQpXG4gICAgICAgIGlmIChzY2FsZSAhPSBzbGFzdCkge1xuICAgICAgICAgICAgcHJvamVjdGlvbi5zY2FsZShzY2FsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZHggPSB0WzBdIC0gdGxhc3RbMF0sXG4gICAgICAgICAgICAgICAgZHkgPSB0WzFdIC0gdGxhc3RbMV0sXG4gICAgICAgICAgICAgICAgeWF3ID0gcHJvamVjdGlvbi5yb3RhdGUoKVswXSxcbiAgICAgICAgICAgICAgICB0cCA9IHByb2plY3Rpb24udHJhbnNsYXRlKCk7XG5cbiAgICAgICAgICAgIC8vIHVzZSB4IHRyYW5zbGF0aW9uIHRvIHJvdGF0ZSBiYXNlZCBvbiBjdXJyZW50IHNjYWxlXG4gICAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShbeWF3ICsgMzYwLjAgKiBkeCAvIHdpZHRoICogc2NhbGVFeHRlbnRbMF0gLyBzY2FsZSwgMCwgMF0pO1xuICAgICAgICAgICAgLy8gdXNlIHkgdHJhbnNsYXRpb24gdG8gdHJhbnNsYXRlIHByb2plY3Rpb24sIGNsYW1wZWQgYnkgbWluL21heFxuICAgICAgICAgICAgdmFyIGIgPSBtZXJjYXRvckJvdW5kcyhwcm9qZWN0aW9uLCBtYXhsYXQpO1xuICAgICAgICAgICAgaWYgKGJbMF1bMV0gKyBkeSA+IDApIHtkeSA9IC1iWzBdWzFdO30gZWxzZSBpZiAoYlsxXVsxXSArIGR5IDwgaGVpZ2h0KSB7ZHkgPSBoZWlnaHQgLSBiWzFdWzFdO31cbiAgICAgICAgICAgIHByb2plY3Rpb24udHJhbnNsYXRlKFt0cFswXSwgdHBbMV0gKyBkeV0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNhdmUgbGFzdCB2YWx1ZXMuICByZXNldHRpbmcgem9vbS50cmFuc2xhdGUoKSBhbmQgc2NhbGUoKSB3b3VsZFxuICAgICAgICAvLyBzZWVtIGVxdWl2YWxlbnQgYnV0IGRvZXNuJ3Qgc2VlbSB0byB3b3JrIHJlbGlhYmx5P1xuICAgICAgICBzbGFzdCA9IHNjYWxlO1xuICAgICAgICB0bGFzdCA9IHQ7XG4gICAgfVxufVxuXG5yYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZVF1ZXN0aW9uKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVRdWVzdGlvbigpIHtcbiAgICBxdWVzdGlvbi5pbm5lckhUTUwgPSBgV2hlcmUgaXMgPHN0cm9uZyBpZD0ndGVzdCc+JHtxdWVzdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcXVlc3Rpb25zLmxlbmd0aCldfTwvc3Ryb25nPj9gO1xuICAgIC8vc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcblxufVxuXG5mdW5jdGlvbiBjb3JyZWN0QW5zd2VyKCkge1xuICAgIGxldCBzY29yZUNvdW50ID0gcGFyc2VJbnQoc2NvcmUuaW5uZXJUZXh0KTtcbiAgICBzY29yZS5pbm5lclRleHQgPSBzY29yZUNvdW50ICs9IDE7XG4gICAgc3RhdHVzLmlubmVyVGV4dCA9ICdDT1JSRUNUISc7XG4gICAgLy8gc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcblxuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XG4gICAgZ2VuZXJhdGVRdWVzdGlvbigpO1xufVxuXG5mdW5jdGlvbiB3cm9uZ0Fuc3dlcigpIHtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ1dST05HISc7XG4gICAgLy8gc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnd3JvbmcnKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
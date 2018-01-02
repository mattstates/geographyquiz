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

var zoom = d3.behavior.zoom()
    .scaleExtent(scaleExtent)
    .scale(projection.scale())
    .translate([0, 0]) // not linked directly to projection
    .on('zoom', redraw);

// set up the scale extent and initial scale for the projection
var b = mercatorBounds(projection, maxlat),
    s = width / (b[1][0] - b[0][0]),
    scaleExtent = [s, 10 * s];

projection
    .scale(scaleExtent[0]);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsd0JBQXdCOztBQUV4Qjs7QUFFQSxnQ0FBZ0M7QUFDaEMsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxlQUFlLGtDQUFrQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdURBQXVELHdEQUF3RDtBQUMvRzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuMGM3MzAwZWQzYWFlZGRiMTc3MDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzTWFpbiBmcm9tICdkMyc7XG5pbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbic7XG5pbXBvcnQgKiBhcyBkM2dlb1Byb2ogZnJvbSAnZDMtZ2VvLXByb2plY3Rpb24nO1xuXG5sZXQgZDMgPSBPYmplY3QuYXNzaWduKHt9LCBkM01haW4sIGQzZ2VvUHJvaik7XG5cbmxldCBxdWVzdGlvbnMgPSBbXTtcbnZhciB3aWR0aCA9IDk2MDtcbnZhciBoZWlnaHQgPSA1MDA7XG52YXIgcm90YXRlID0gNjA7XG52YXIgbWF4bGF0ID0gODM7XG5cbmxldCBxdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbicpO1xubGV0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20nKTtcbmxldCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xubGV0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKTtcblxubGV0IGNvcnJlY3RBbnN3ZXJUZXh0O1xubGV0IG9sZENvbG9yO1xuXG52YXIgc3ZnID0gZDMuc2VsZWN0KCcjbWFwJylcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ21hcCcpXG4gICAgLmNhbGwoem9vbSlcbiAgICAuYXBwZW5kKCdnJyk7XG5cbnZhciBwcm9qZWN0aW9uID0gZDMuZ2VvUm9iaW5zb24oKVxuICAgIC5yb3RhdGUoW3JvdGF0ZSwgMF0pXG4gICAgLnNjYWxlKDEpIC8vIHdlJ2xsIHNjYWxlIHVwIHRvIG1hdGNoIHZpZXdwb3J0IHNob3J0bHkuXG4gICAgLnRyYW5zbGF0ZShbd2lkdGggLyAyLCBoZWlnaHQgLyAyXSk7XG4vLyAgIC5zY2FsZSh3aWR0aCAvIDEuMjUpOyBVU0Fcbi8vICAuc2NhbGUod2lkdGggLyA1LjYpOyBHTE9CQUxcblxuLy8gICAgLnRyYW5zbGF0ZShbTWF0aC5zcXJ0KHdpZHRoIC8gMiksIGhlaWdodCAvIDJdKTtcblxuLy8gcHJvamVjdGlvbi5jZW50ZXIoWy05OCwgMzZdKTsgVVNBXG4vLyBwcm9qZWN0aW9uLmNlbnRlcihbMTUsIDEwXSk7IEdMT0JBTFxuXG4vLyBmaW5kIHRoZSB0b3AgbGVmdCBhbmQgYm90dG9tIHJpZ2h0IG9mIGN1cnJlbnQgcHJvamVjdGlvblxuZnVuY3Rpb24gbWVyY2F0b3JCb3VuZHMocHJvamVjdGlvbiwgbWF4bGF0KSB7XG4gICAgdmFyIHlhdyA9IHByb2plY3Rpb24ucm90YXRlKClbMF0sXG4gICAgICAgIHh5bWF4ID0gcHJvamVjdGlvbihbLXlhdyArIDE4MCAtIDFlLTYsIC1tYXhsYXRdKSxcbiAgICAgICAgeHltaW4gPSBwcm9qZWN0aW9uKFsteWF3IC0gMTgwICsgMWUtNiwgbWF4bGF0XSk7XG5cbiAgICByZXR1cm4gW3h5bWluLCB4eW1heF07XG59XG5cbnZhciB6b29tID0gZDMuYmVoYXZpb3Iuem9vbSgpXG4gICAgLnNjYWxlRXh0ZW50KHNjYWxlRXh0ZW50KVxuICAgIC5zY2FsZShwcm9qZWN0aW9uLnNjYWxlKCkpXG4gICAgLnRyYW5zbGF0ZShbMCwgMF0pIC8vIG5vdCBsaW5rZWQgZGlyZWN0bHkgdG8gcHJvamVjdGlvblxuICAgIC5vbignem9vbScsIHJlZHJhdyk7XG5cbi8vIHNldCB1cCB0aGUgc2NhbGUgZXh0ZW50IGFuZCBpbml0aWFsIHNjYWxlIGZvciB0aGUgcHJvamVjdGlvblxudmFyIGIgPSBtZXJjYXRvckJvdW5kcyhwcm9qZWN0aW9uLCBtYXhsYXQpLFxuICAgIHMgPSB3aWR0aCAvIChiWzFdWzBdIC0gYlswXVswXSksXG4gICAgc2NhbGVFeHRlbnQgPSBbcywgMTAgKiBzXTtcblxucHJvamVjdGlvblxuICAgIC5zY2FsZShzY2FsZUV4dGVudFswXSk7XG5cblxudmFyIHBhdGggPSBkMy5nZW9QYXRoKClcbiAgICAucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxudmFyIHVybCA9ICcvbWFwcy93b3JsZC0xMTBtLmdlb2pzb24nO1xuXG5kMy5qc29uKHVybCwgZnVuY3Rpb24oZXJyLCBtYXBKc29uKSB7XG4gICAgLy9jb25zb2xlLmxvZyhtYXBKc29uKTtcbiAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBkMy5qc29uJywgZXJyKTtcbiAgICB9XG4gICAgbGV0IG1hcERpdmlzaW9ucyA9IE9iamVjdC5rZXlzKG1hcEpzb24ub2JqZWN0cylbMF07XG4gICAgbGV0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUobWFwSnNvbiwgbWFwSnNvbi5vYmplY3RzW21hcERpdmlzaW9uc10pLmZlYXR1cmVzO1xuICAgIC8vY29uc29sZS5sb2coY291bnRyaWVzLCAnPC0tIGNvdW50cmllcycpO1xuICAgIGxldCBjb2xvclNjYWxlID0gZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdykuZG9tYWluKFszMCwgNzUwXSk7XG5cbiAgICBzdmcuc2VsZWN0QWxsKCcuY291bnRyeScpXG4gICAgICAgIC5kYXRhKGNvdW50cmllcywgZnVuY3Rpb24oY291bnRyeSwgaSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSwgY291bnRyeSwgJ2NvdW50cnknKTtcbiAgICAgICAgICAgIGlmIChjb3VudHJ5LnByb3BlcnRpZXMubmFtZSAhPT0gJ0Rpc3RyaWN0IG9mIENvbHVtYmlhJykge1xuXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zLnB1c2goY291bnRyeS5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NvdW50cnknKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAncmdiYSg1MCw1MCw1MCwuNiknKVxuICAgICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGRhdGEsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGkgKiA3KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSk7XG4gICAgICAgICAgICBvbGRDb2xvciA9IHRoaXMuZ2V0QXR0cmlidXRlKCdmaWxsJyk7XG4gICAgICAgICAgICAvLyB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ3JnYmEoMjUwLDI1MCwyNTAsLjkpJyk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgMC4yKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmaWxsJywgJ3llbGxvdycpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ2JsYWNrJyk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgMSk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZmlsbCcsIG9sZENvbG9yKTtcblxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcbiAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QnKTtcbiAgICAgICAgICAgIGRhdGEucHJvcGVydGllcy5uYW1lID09PSBjb3JyZWN0QW5zd2VyVGV4dC5pbm5lclRleHQgPyBjb3JyZWN0QW5zd2VyKCkgOiB3cm9uZ0Fuc3dlcigpO1xuICAgICAgICB9KTtcbiAgICAvL2NvbnNvbGUubG9nKHF1ZXN0aW9ucyk7XG4gICAgcmVkcmF3KCk7XG59KTtcblxuXG4vLyB0cmFjayBsYXN0IHRyYW5zbGF0aW9uIGFuZCBzY2FsZSBldmVudCB3ZSBwcm9jZXNzZWRcbnZhciB0bGFzdCA9IFswLCAwXSxcbiAgICBzbGFzdCA9IG51bGw7XG5cbmZ1bmN0aW9uIHJlZHJhdygpIHtcbiAgICBpZiAoZDMuZXZlbnQpIHtcbiAgICAgICAgdmFyIHNjYWxlID0gZDMuZXZlbnQuc2NhbGUsXG4gICAgICAgICAgICB0ID0gZDMuZXZlbnQudHJhbnNsYXRlO1xuXG4gICAgICAgIC8vIGlmIHNjYWxpbmcgY2hhbmdlcywgaWdub3JlIHRyYW5zbGF0aW9uIChvdGhlcndpc2UgdG91Y2ggem9vbXMgYXJlIHdlaXJkKVxuICAgICAgICBpZiAoc2NhbGUgIT0gc2xhc3QpIHtcbiAgICAgICAgICAgIHByb2plY3Rpb24uc2NhbGUoc2NhbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGR4ID0gdFswXSAtIHRsYXN0WzBdLFxuICAgICAgICAgICAgICAgIGR5ID0gdFsxXSAtIHRsYXN0WzFdLFxuICAgICAgICAgICAgICAgIHlhdyA9IHByb2plY3Rpb24ucm90YXRlKClbMF0sXG4gICAgICAgICAgICAgICAgdHAgPSBwcm9qZWN0aW9uLnRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAvLyB1c2UgeCB0cmFuc2xhdGlvbiB0byByb3RhdGUgYmFzZWQgb24gY3VycmVudCBzY2FsZVxuICAgICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUoW3lhdyArIDM2MC4wICogZHggLyB3aWR0aCAqIHNjYWxlRXh0ZW50WzBdIC8gc2NhbGUsIDAsIDBdKTtcbiAgICAgICAgICAgIC8vIHVzZSB5IHRyYW5zbGF0aW9uIHRvIHRyYW5zbGF0ZSBwcm9qZWN0aW9uLCBjbGFtcGVkIGJ5IG1pbi9tYXhcbiAgICAgICAgICAgIHZhciBiID0gbWVyY2F0b3JCb3VuZHMocHJvamVjdGlvbiwgbWF4bGF0KTtcbiAgICAgICAgICAgIGlmIChiWzBdWzFdICsgZHkgPiAwKSB7ZHkgPSAtYlswXVsxXTt9IGVsc2UgaWYgKGJbMV1bMV0gKyBkeSA8IGhlaWdodCkge2R5ID0gaGVpZ2h0IC0gYlsxXVsxXTt9XG4gICAgICAgICAgICBwcm9qZWN0aW9uLnRyYW5zbGF0ZShbdHBbMF0sIHRwWzFdICsgZHldKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzYXZlIGxhc3QgdmFsdWVzLiAgcmVzZXR0aW5nIHpvb20udHJhbnNsYXRlKCkgYW5kIHNjYWxlKCkgd291bGRcbiAgICAgICAgLy8gc2VlbSBlcXVpdmFsZW50IGJ1dCBkb2Vzbid0IHNlZW0gdG8gd29yayByZWxpYWJseT9cbiAgICAgICAgc2xhc3QgPSBzY2FsZTtcbiAgICAgICAgdGxhc3QgPSB0O1xuICAgIH1cbn1cblxucmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVRdWVzdGlvbik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUXVlc3Rpb24oKSB7XG4gICAgcXVlc3Rpb24uaW5uZXJIVE1MID0gYFdoZXJlIGlzIDxzdHJvbmcgaWQ9J3Rlc3QnPiR7cXVlc3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHF1ZXN0aW9ucy5sZW5ndGgpXX08L3N0cm9uZz4/YDtcbiAgICAvL3N0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG5cbn1cblxuZnVuY3Rpb24gY29ycmVjdEFuc3dlcigpIHtcbiAgICBsZXQgc2NvcmVDb3VudCA9IHBhcnNlSW50KHNjb3JlLmlubmVyVGV4dCk7XG4gICAgc2NvcmUuaW5uZXJUZXh0ID0gc2NvcmVDb3VudCArPSAxO1xuICAgIHN0YXR1cy5pbm5lclRleHQgPSAnQ09SUkVDVCEnO1xuICAgIC8vIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG5cbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgIGdlbmVyYXRlUXVlc3Rpb24oKTtcbn1cblxuZnVuY3Rpb24gd3JvbmdBbnN3ZXIoKSB7XG4gICAgc3RhdHVzLmlubmVyVGV4dCA9ICdXUk9ORyEnO1xuICAgIC8vIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3dyb25nJyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
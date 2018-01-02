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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsd0JBQXdCOztBQUV4Qjs7QUFFQSxnQ0FBZ0M7QUFDaEMsK0JBQStCOzs7QUFHL0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBLHVEQUF1RCx3REFBd0Q7QUFDL0c7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLjhlZjRiYTg3NzI3MGQwYWRmZTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkM01haW4gZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24nO1xuaW1wb3J0ICogYXMgZDNnZW9Qcm9qIGZyb20gJ2QzLWdlby1wcm9qZWN0aW9uJztcblxubGV0IGQzID0gT2JqZWN0LmFzc2lnbih7fSwgZDNNYWluLCBkM2dlb1Byb2opO1xuXG5sZXQgcXVlc3Rpb25zID0gW107XG52YXIgd2lkdGggPSA5NjA7XG52YXIgaGVpZ2h0ID0gNTAwO1xuXG5sZXQgcXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb24nKTtcbmxldCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG5sZXQgc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcbmxldCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJyk7XG5cbmxldCBjb3JyZWN0QW5zd2VyVGV4dDtcbmxldCBvbGRDb2xvcjtcblxudmFyIHN2ZyA9IGQzLnNlbGVjdCgnI21hcCcpXG4gICAgLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5hdHRyKCdjbGFzcycsICdtYXAnKVxuICAgIC5hcHBlbmQoJ2cnKTtcblxudmFyIHByb2plY3Rpb24gPSBkMy5nZW9Sb2JpbnNvbigpXG4gICAgLnJvdGF0ZShbcm90YXRlLCAwXSlcbiAgICAuc2NhbGUoMSkgLy8gd2UnbGwgc2NhbGUgdXAgdG8gbWF0Y2ggdmlld3BvcnQgc2hvcnRseS5cbiAgICAudHJhbnNsYXRlKFt3aWR0aCAvIDIsIGhlaWdodCAvIDJdKTtcbi8vICAgLnNjYWxlKHdpZHRoIC8gMS4yNSk7IFVTQVxuLy8gIC5zY2FsZSh3aWR0aCAvIDUuNik7IEdMT0JBTFxuXG4vLyAgICAudHJhbnNsYXRlKFtNYXRoLnNxcnQod2lkdGggLyAyKSwgaGVpZ2h0IC8gMl0pO1xuXG4vLyBwcm9qZWN0aW9uLmNlbnRlcihbLTk4LCAzNl0pOyBVU0Fcbi8vIHByb2plY3Rpb24uY2VudGVyKFsxNSwgMTBdKTsgR0xPQkFMXG5cblxudmFyIHBhdGggPSBkMy5nZW9QYXRoKClcbiAgICAucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxudmFyIHVybCA9ICcvbWFwcy93b3JsZC0xMTBtLmdlb2pzb24nO1xuXG5kMy5qc29uKHVybCwgZnVuY3Rpb24oZXJyLCBtYXBKc29uKSB7XG4gICAgLy9jb25zb2xlLmxvZyhtYXBKc29uKTtcbiAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBkMy5qc29uJywgZXJyKTtcbiAgICB9XG4gICAgbGV0IG1hcERpdmlzaW9ucyA9IE9iamVjdC5rZXlzKG1hcEpzb24ub2JqZWN0cylbMF07XG4gICAgbGV0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUobWFwSnNvbiwgbWFwSnNvbi5vYmplY3RzW21hcERpdmlzaW9uc10pLmZlYXR1cmVzO1xuICAgIC8vY29uc29sZS5sb2coY291bnRyaWVzLCAnPC0tIGNvdW50cmllcycpO1xuICAgIGxldCBjb2xvclNjYWxlID0gZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdykuZG9tYWluKFszMCwgNzUwXSk7XG5cbiAgICBzdmcuc2VsZWN0QWxsKCcuY291bnRyeScpXG4gICAgICAgIC5kYXRhKGNvdW50cmllcywgZnVuY3Rpb24oY291bnRyeSwgaSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSwgY291bnRyeSwgJ2NvdW50cnknKTtcbiAgICAgICAgICAgIGlmIChjb3VudHJ5LnByb3BlcnRpZXMubmFtZSAhPT0gJ0Rpc3RyaWN0IG9mIENvbHVtYmlhJykge1xuXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zLnB1c2goY291bnRyeS5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NvdW50cnknKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAncmdiYSg1MCw1MCw1MCwuNiknKVxuICAgICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGRhdGEsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGkgKiA3KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSk7XG4gICAgICAgICAgICBvbGRDb2xvciA9IHRoaXMuZ2V0QXR0cmlidXRlKCdmaWxsJyk7XG4gICAgICAgICAgICAvLyB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ3JnYmEoMjUwLDI1MCwyNTAsLjkpJyk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgMC4yKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmaWxsJywgJ3llbGxvdycpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ2JsYWNrJyk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgMSk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZmlsbCcsIG9sZENvbG9yKTtcblxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcbiAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QnKTtcbiAgICAgICAgICAgIGRhdGEucHJvcGVydGllcy5uYW1lID09PSBjb3JyZWN0QW5zd2VyVGV4dC5pbm5lclRleHQgPyBjb3JyZWN0QW5zd2VyKCkgOiB3cm9uZ0Fuc3dlcigpO1xuICAgICAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbnMpO1xufSk7XG5cblxucmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVRdWVzdGlvbik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUXVlc3Rpb24oKSB7XG4gICAgcXVlc3Rpb24uaW5uZXJIVE1MID0gYFdoZXJlIGlzIDxzdHJvbmcgaWQ9J3Rlc3QnPiR7cXVlc3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHF1ZXN0aW9ucy5sZW5ndGgpXX08L3N0cm9uZz4/YDtcbiAgICAvL3N0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG5cbn1cblxuZnVuY3Rpb24gY29ycmVjdEFuc3dlcigpIHtcbiAgICBsZXQgc2NvcmVDb3VudCA9IHBhcnNlSW50KHNjb3JlLmlubmVyVGV4dCk7XG4gICAgc2NvcmUuaW5uZXJUZXh0ID0gc2NvcmVDb3VudCArPSAxO1xuICAgIHN0YXR1cy5pbm5lclRleHQgPSAnQ09SUkVDVCEnO1xuICAgIC8vIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG5cbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgIGdlbmVyYXRlUXVlc3Rpb24oKTtcbn1cblxuZnVuY3Rpb24gd3JvbmdBbnN3ZXIoKSB7XG4gICAgc3RhdHVzLmlubmVyVGV4dCA9ICdXUk9ORyEnO1xuICAgIC8vIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3dyb25nJyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
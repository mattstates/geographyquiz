webpackHotUpdate(0,{

/***/ "./src/components/App.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { textAlign: 'center' } },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Hello World'
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__("./node_modules/d3/build/d3.js");

var d3 = _interopRequireWildcard(_d);

var _topojson = __webpack_require__("./node_modules/topojson/index.js");

var topojson = _interopRequireWildcard(_topojson);

var _d3GeoProjection = __webpack_require__("./node_modules/d3-geo-projection/index.js");

var d3geoProj = _interopRequireWildcard(_d3GeoProjection);

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__("./src/components/App.jsx");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var questions = [];
var question = document.getElementById('question');
var randomBtn = document.getElementById('random');
var scoreEl = document.getElementById('score');
var status = document.getElementById('status');

var activeAnswer = null;
var correctAnswerText = void 0;
var questionCount = 0;
var scoreCount = 0;

var width = window.outerWidth > 1000 ? 1000 : window.innerWidth,
    height = 500,
    active = d3.select(null);

var projection = d3geoProj.geoRobinson().scale(170).translate([width / 2.25, height / 1.75]);

var zoom = d3.zoom().scaleExtent([1, 8]).on('zoom', zoomed);

var path = d3.geoPath().projection(projection);

var svg = d3.select('#map').append('svg').attr('class', 'map').attr('width', width).attr('height', height).on('click', stopped, true);

svg.append('rect').attr('class', 'background').attr('width', width).attr('height', height).on('click', reset);

var g = svg.append('g');

svg.call(zoom); // delete this line to disable free zooming

// TODO: Update map and routing for new maps.
d3.json('/maps/map', function (error, mapJson) {
    // Code borrowed from https://bl.ocks.org/mbostock.
    if (error) {
        throw error;
    }
    var mapDivisions = Object.keys(mapJson.objects)[0];
    var colorScale = d3.scaleSequential(d3.interpolateRainbow).domain([1, 51]);

    var mapPaths = topojson.feature(mapJson, mapJson.objects[mapDivisions]).features;

    g.selectAll('path').data(mapPaths, function (country, i) {
        questions.push({
            countryName: country.properties.name,
            pathID: i
        });
    }).enter().append('path').attr('d', path).attr('data-index', function (data, i) {
        return i;
    }).attr('fill', function (data, i) {
        return colorScale(Math.random() * 2 + i * 2);
    }).on('mouseover', function () {
        this.classList.add('hover');
    }).on('mouseout', function () {
        this.classList.remove('hover');
    }).on('click', clicked);

    g.append('path').datum(topojson.mesh(mapJson, mapJson.objects[mapDivisions], function (a, b) {
        return a !== b;
    })).attr('class', 'mesh').attr('d', path);

    generateQuestion();
});

function clicked(d) {
    if (active.node() === this) {
        return reset();
    }
    active.classed('active', false);
    active = d3.select(this).classed('active', true);
    activeAnswer = d.properties.name;

    var bounds = path.bounds(d),
        dx = bounds[1][0] - bounds[0][0],
        dy = bounds[1][1] - bounds[0][1],
        x = (bounds[0][0] + bounds[1][0]) / 2,
        y = (bounds[0][1] + bounds[1][1]) / 2,
        scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
        translate = [width / 2 - scale * x, height / 2 - scale * y];

    svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
}

function reset() {
    active.classed('active', false);
    active = d3.select(null);

    svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity);

    activeAnswer = null;
}

function zoomed() {
    g.style('stroke-width', 1.5 / d3.event.transform.k + 'px');
    g.attr('transform', d3.event.transform);
}

// If the drag behavior prevents the default click,
// also stop propagation so we don’t click-to-zoom.
function stopped() {
    if (d3.event.defaultPrevented) {
        d3.event.stopPropagation();
    }
}

randomBtn.addEventListener('click', function () {
    reset();
    var previousCountryPathElement = document.querySelector('path[data-index="' + questionData.pathID + '"]');
    previousCountryPathElement.classList.add('learnCountry');
    document.body.classList.add('disable');
    window.setTimeout(function () {
        previousCountryPathElement.classList.remove('learnCountry');
        generateQuestion();
        document.body.classList.remove('disable');
    }, 3000);
    scoreEl.innerText = scoreUpdate(false);
});

var questionData = {};
function generateQuestion() {
    questionData = questions[Math.floor(Math.random() * questions.length)];
    question.innerHTML = 'Where is <strong id=\'test\'>' + questionData.countryName + '</strong>?';
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
    active = d3.select(null);
    activeAnswer = null;
}

function scoreUpdate(correct) {

    scoreCount = correct ? scoreCount += 1 : scoreCount;
    questionCount += 1;

    var percentage = scoreCount ? ' \u2013 ' + (scoreCount / questionCount * 100).toFixed(2) + '%' : '';

    return scoreCount + ' out of ' + questionCount + percentage;
}

window.addEventListener('keyup', submitAnswer);
document.getElementById('submitAnswer').addEventListener('click', submitAnswer);

function submitAnswer(e) {
    if ([1, 13].indexOf(e.which) > -1 && activeAnswer !== null) {
        event.preventDefault();
        status.classList.remove('correct', 'wrong');
        correctAnswerText = document.getElementById('test');
        activeAnswer === correctAnswerText.innerText ? correctAnswer() : wrongAnswer();
    }
}

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJ0ZXh0QWxpZ24iLCJDb21wb25lbnQiLCJkMyIsInRvcG9qc29uIiwiZDNnZW9Qcm9qIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmFuZG9tQnRuIiwic2NvcmVFbCIsInN0YXR1cyIsImFjdGl2ZUFuc3dlciIsImNvcnJlY3RBbnN3ZXJUZXh0IiwicXVlc3Rpb25Db3VudCIsInNjb3JlQ291bnQiLCJ3aWR0aCIsIndpbmRvdyIsIm91dGVyV2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiYWN0aXZlIiwic2VsZWN0IiwicHJvamVjdGlvbiIsImdlb1JvYmluc29uIiwic2NhbGUiLCJ0cmFuc2xhdGUiLCJ6b29tIiwic2NhbGVFeHRlbnQiLCJvbiIsInpvb21lZCIsInBhdGgiLCJnZW9QYXRoIiwic3ZnIiwiYXBwZW5kIiwiYXR0ciIsInN0b3BwZWQiLCJyZXNldCIsImciLCJjYWxsIiwianNvbiIsImVycm9yIiwibWFwSnNvbiIsIm1hcERpdmlzaW9ucyIsIk9iamVjdCIsImtleXMiLCJvYmplY3RzIiwiY29sb3JTY2FsZSIsInNjYWxlU2VxdWVudGlhbCIsImludGVycG9sYXRlUmFpbmJvdyIsImRvbWFpbiIsIm1hcFBhdGhzIiwiZmVhdHVyZSIsImZlYXR1cmVzIiwic2VsZWN0QWxsIiwiZGF0YSIsImNvdW50cnkiLCJpIiwicHVzaCIsImNvdW50cnlOYW1lIiwicHJvcGVydGllcyIsIm5hbWUiLCJwYXRoSUQiLCJlbnRlciIsIk1hdGgiLCJyYW5kb20iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjbGlja2VkIiwiZGF0dW0iLCJtZXNoIiwiYSIsImIiLCJnZW5lcmF0ZVF1ZXN0aW9uIiwiZCIsIm5vZGUiLCJjbGFzc2VkIiwiYm91bmRzIiwiZHgiLCJkeSIsIngiLCJ5IiwibWF4IiwibWluIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidHJhbnNmb3JtIiwiem9vbUlkZW50aXR5Iiwic3R5bGUiLCJldmVudCIsImsiLCJkZWZhdWx0UHJldmVudGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZpb3VzQ291bnRyeVBhdGhFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXN0aW9uRGF0YSIsImJvZHkiLCJzZXRUaW1lb3V0IiwiaW5uZXJUZXh0Iiwic2NvcmVVcGRhdGUiLCJmbG9vciIsImxlbmd0aCIsImlubmVySFRNTCIsImNvcnJlY3RBbnN3ZXIiLCJ3cm9uZ0Fuc3dlciIsImNvcnJlY3QiLCJwZXJjZW50YWdlIiwidG9GaXhlZCIsInN1Ym1pdEFuc3dlciIsImUiLCJpbmRleE9mIiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxHOzs7Ozs7Ozs7OztpQ0FDUjtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxPQUFPLEVBQUVDLFdBQVcsUUFBYixFQUFaO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGFBREo7QUFJSDs7OztFQU40QixnQkFBTUMsUzs7a0JBQWxCRixHOzs7Ozs7Ozs7O0FDRnJCOztJQUFZRyxFOztBQUNaOztJQUFZQyxROztBQUNaOztJQUFZQyxTOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJQyxZQUFZLEVBQWhCO0FBQ0EsSUFBSUMsV0FBV0MsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBSUMsWUFBWUYsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFoQjtBQUNBLElBQUlFLFVBQVVILFNBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLElBQUlHLFNBQVNKLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjs7QUFFQSxJ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RCxTQUFQLENBQWlCRSxNQUFqQixDQUF3QixTQUF4QixFQUFtQyxPQUFuQztBQUNBdkQsNEJBQW9CTixTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQXBCO0FBQ0FJLHlCQUFpQkMsa0JBQWtCdUYsU0FBbkMsR0FBK0NLLGVBQS9DLEdBQWlFQyxhQUFqRTtBQUNIO0FBQ0o7O0FBRUQsbUJBQVNTLE1BQVQsQ0FBZ0Isa0RBQWhCLEVBQXlCNUcsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QixFIiwiZmlsZSI6IjAuMzIxOWVlY2IxMjI0YmExMzIyNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxoMT5IZWxsbyBXb3JsZDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj4pO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BcHAuanN4IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24nO1xuaW1wb3J0ICogYXMgZDNnZW9Qcm9qIGZyb20gJ2QzLWdlby1wcm9qZWN0aW9uJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC5qc3gnO1xuXG5sZXQgcXVlc3Rpb25zID0gW107XG5sZXQgcXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb24nKTtcbmxldCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XG5sZXQgc2NvcmVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xubGV0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKTtcblxubGV0IGFjdGl2ZUFuc3dlciA9IG51bGw7XG5sZXQgY29ycmVjdEFuc3dlclRleHQ7XG5sZXQgcXVlc3Rpb25Db3VudCA9IDA7XG5sZXQgc2NvcmVDb3VudCA9IDA7XG5cbnZhciB3aWR0aCA9IHdpbmRvdy5vdXRlcldpZHRoID4gMTAwMCA/IDEwMDAgOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQgPSA1MDAsXG4gICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuXG52YXIgcHJvamVjdGlvbiA9IGQzZ2VvUHJvalxuICAgIC5nZW9Sb2JpbnNvbigpXG4gICAgLnNjYWxlKDE3MClcbiAgICAudHJhbnNsYXRlKFt3aWR0aCAvIDIuMjUsIGhlaWdodCAvIDEuNzVdKTtcblxudmFyIHpvb20gPSBkM1xuICAgIC56b29tKClcbiAgICAuc2NhbGVFeHRlbnQoWzEsIDhdKVxuICAgIC5vbignem9vbScsIHpvb21lZCk7XG5cbnZhciBwYXRoID0gZDMuZ2VvUGF0aCgpLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbnZhciBzdmcgPSBkM1xuICAgIC5zZWxlY3QoJyNtYXAnKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ21hcCcpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAub24oJ2NsaWNrJywgc3RvcHBlZCwgdHJ1ZSk7XG5cbnN2Z1xuICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgIC5hdHRyKCdjbGFzcycsICdiYWNrZ3JvdW5kJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5vbignY2xpY2snLCByZXNldCk7XG5cbnZhciBnID0gc3ZnLmFwcGVuZCgnZycpO1xuXG5zdmcuY2FsbCh6b29tKTsgLy8gZGVsZXRlIHRoaXMgbGluZSB0byBkaXNhYmxlIGZyZWUgem9vbWluZ1xuXG4vLyBUT0RPOiBVcGRhdGUgbWFwIGFuZCByb3V0aW5nIGZvciBuZXcgbWFwcy5cbmQzLmpzb24oJy9tYXBzL21hcCcsIGZ1bmN0aW9uKGVycm9yLCBtYXBKc29uKSB7XG4gICAgLy8gQ29kZSBib3Jyb3dlZCBmcm9tIGh0dHBzOi8vYmwub2Nrcy5vcmcvbWJvc3RvY2suXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBsZXQgbWFwRGl2aXNpb25zID0gT2JqZWN0LmtleXMobWFwSnNvbi5vYmplY3RzKVswXTtcbiAgICBsZXQgY29sb3JTY2FsZSA9IGQzLnNjYWxlU2VxdWVudGlhbChkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpLmRvbWFpbihbMSwgNTFdKTtcblxuICAgIGxldCBtYXBQYXRocyA9IHRvcG9qc29uLmZlYXR1cmUobWFwSnNvbiwgbWFwSnNvbi5vYmplY3RzW21hcERpdmlzaW9uc10pLmZlYXR1cmVzO1xuXG4gICAgZ1xuICAgICAgICAuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLmRhdGEobWFwUGF0aHMsIGZ1bmN0aW9uKGNvdW50cnksIGkpIHtcbiAgICAgICAgICAgIHF1ZXN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjb3VudHJ5TmFtZTogY291bnRyeS5wcm9wZXJ0aWVzLm5hbWUsXG4gICAgICAgICAgICAgICAgcGF0aElEOiBpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAgICAgLmF0dHIoJ2RhdGEtaW5kZXgnLCBmdW5jdGlvbihkYXRhLCBpKSB7IHJldHVybiBpOyB9KVxuICAgICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGRhdGEsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKE1hdGgucmFuZG9tKCkgKiAyICsgaSAqIDIpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBjbGlja2VkKTtcblxuICAgIGdcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5kYXR1bShcbiAgICAgICAgICAgIHRvcG9qc29uLm1lc2gobWFwSnNvbiwgbWFwSnNvbi5vYmplY3RzW21hcERpdmlzaW9uc10sIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAhPT0gYjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ21lc2gnKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpO1xuXG4gICAgZ2VuZXJhdGVRdWVzdGlvbigpO1xufSk7XG5cbmZ1bmN0aW9uIGNsaWNrZWQoZCkge1xuICAgIGlmIChhY3RpdmUubm9kZSgpID09PSB0aGlzKSB7XG4gICAgICAgIHJldHVybiByZXNldCgpO1xuICAgIH1cbiAgICBhY3RpdmUuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKTtcbiAgICBhY3RpdmVBbnN3ZXIgPSBkLnByb3BlcnRpZXMubmFtZTtcblxuICAgIHZhciBib3VuZHMgPSBwYXRoLmJvdW5kcyhkKSxcbiAgICAgICAgZHggPSBib3VuZHNbMV1bMF0gLSBib3VuZHNbMF1bMF0sXG4gICAgICAgIGR5ID0gYm91bmRzWzFdWzFdIC0gYm91bmRzWzBdWzFdLFxuICAgICAgICB4ID0gKGJvdW5kc1swXVswXSArIGJvdW5kc1sxXVswXSkgLyAyLFxuICAgICAgICB5ID0gKGJvdW5kc1swXVsxXSArIGJvdW5kc1sxXVsxXSkgLyAyLFxuICAgICAgICBzY2FsZSA9IE1hdGgubWF4KDEsIE1hdGgubWluKDgsIDAuOSAvIE1hdGgubWF4KGR4IC8gd2lkdGgsIGR5IC8gaGVpZ2h0KSkpLFxuICAgICAgICB0cmFuc2xhdGUgPSBbd2lkdGggLyAyIC0gc2NhbGUgKiB4LCBoZWlnaHQgLyAyIC0gc2NhbGUgKiB5XTtcblxuICAgIHN2Z1xuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAgIC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKHRyYW5zbGF0ZVswXSwgdHJhbnNsYXRlWzFdKS5zY2FsZShzY2FsZSkpO1xufVxuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBhY3RpdmUuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdChudWxsKTtcblxuICAgIHN2Z1xuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAgIC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkpO1xuXG4gICAgYWN0aXZlQW5zd2VyID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gem9vbWVkKCkge1xuICAgIGcuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEuNSAvIGQzLmV2ZW50LnRyYW5zZm9ybS5rICsgJ3B4Jyk7XG4gICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xufVxuXG4vLyBJZiB0aGUgZHJhZyBiZWhhdmlvciBwcmV2ZW50cyB0aGUgZGVmYXVsdCBjbGljayxcbi8vIGFsc28gc3RvcCBwcm9wYWdhdGlvbiBzbyB3ZSBkb27igJl0IGNsaWNrLXRvLXpvb20uXG5mdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgIGlmIChkMy5ldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbn1cblxucmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgcmVzZXQoKTtcbiAgICBsZXQgcHJldmlvdXNDb3VudHJ5UGF0aEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBwYXRoW2RhdGEtaW5kZXg9XCIke3F1ZXN0aW9uRGF0YS5wYXRoSUR9XCJdYCk7XG4gICAgcHJldmlvdXNDb3VudHJ5UGF0aEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGVhcm5Db3VudHJ5Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJyk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHByZXZpb3VzQ291bnRyeVBhdGhFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xlYXJuQ291bnRyeScpO1xuICAgICAgICBnZW5lcmF0ZVF1ZXN0aW9uKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZScpO1xuICAgIH0sIDMwMDApO1xuICAgIHNjb3JlRWwuaW5uZXJUZXh0ID0gc2NvcmVVcGRhdGUoZmFsc2UpO1xufSk7XG5cbmxldCBxdWVzdGlvbkRhdGEgPSB7fTtcbmZ1bmN0aW9uIGdlbmVyYXRlUXVlc3Rpb24oKSB7XG4gICAgcXVlc3Rpb25EYXRhID0gcXVlc3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHF1ZXN0aW9ucy5sZW5ndGgpXTtcbiAgICBxdWVzdGlvbi5pbm5lckhUTUwgPSBgV2hlcmUgaXMgPHN0cm9uZyBpZD0ndGVzdCc+JHtxdWVzdGlvbkRhdGEuY291bnRyeU5hbWV9PC9zdHJvbmc+P2A7XG59XG5cbmZ1bmN0aW9uIGNvcnJlY3RBbnN3ZXIoKSB7XG4gICAgc2NvcmVFbC5pbm5lclRleHQgPSBzY29yZVVwZGF0ZSh0cnVlKTtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ0NPUlJFQ1QhJztcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgIGdlbmVyYXRlUXVlc3Rpb24oKTtcbiAgICByZXNldCgpO1xufVxuXG5mdW5jdGlvbiB3cm9uZ0Fuc3dlcigpIHtcbiAgICBzY29yZUVsLmlubmVyVGV4dCA9IHNjb3JlVXBkYXRlKGZhbHNlKTtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ1dST05HISc7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3dyb25nJyk7XG4gICAgYWN0aXZlLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QobnVsbCk7XG4gICAgYWN0aXZlQW5zd2VyID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gc2NvcmVVcGRhdGUoY29ycmVjdCkge1xuXG4gICAgc2NvcmVDb3VudCA9IGNvcnJlY3QgPyBzY29yZUNvdW50ICs9IDEgOiBzY29yZUNvdW50O1xuICAgIHF1ZXN0aW9uQ291bnQgKz0gMTtcblxuICAgIGxldCBwZXJjZW50YWdlID0gc2NvcmVDb3VudCA/IGAg4oCTICR7KChzY29yZUNvdW50IC8gcXVlc3Rpb25Db3VudCkgKiAxMDApLnRvRml4ZWQoMil9JWAgOiAnJztcblxuICAgIHJldHVybiBgJHtzY29yZUNvdW50fSBvdXQgb2YgJHtxdWVzdGlvbkNvdW50fSR7cGVyY2VudGFnZX1gO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzdWJtaXRBbnN3ZXIpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdEFuc3dlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0QW5zd2VyKTtcblxuZnVuY3Rpb24gc3VibWl0QW5zd2VyKGUpIHtcbiAgICBpZiAoWzEsIDEzXS5pbmRleE9mKGUud2hpY2gpID4gLTEgJiYgYWN0aXZlQW5zd2VyICE9PSBudWxsKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG4gICAgICAgIGNvcnJlY3RBbnN3ZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QnKTtcbiAgICAgICAgYWN0aXZlQW5zd2VyID09PSBjb3JyZWN0QW5zd2VyVGV4dC5pbm5lclRleHQgPyBjb3JyZWN0QW5zd2VyKCkgOiB3cm9uZ0Fuc3dlcigpO1xuICAgIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
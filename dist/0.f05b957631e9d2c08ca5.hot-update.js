webpackHotUpdate(0,{

/***/ "./node_modules/topojson/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_topojson_client__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-client/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_topojson_client__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0_topojson_client__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_topojson_server__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-server/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_topojson_simplify__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-simplify/index.js");
/* unused harmony namespace reexport */





/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_bbox__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-client/src/bbox.js");
/* unused harmony reexport bbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_feature__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-client/src/feature.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_feature__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_mesh__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-client/src/mesh.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_mesh__["a"]; });
/* unused harmony reexport meshArcs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_merge__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-client/src/merge.js");
/* unused harmony reexport merge */
/* unused harmony reexport mergeArcs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_neighbors__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-client/src/neighbors.js");
/* unused harmony reexport neighbors */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_quantize__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-client/src/quantize.js");
/* unused harmony reexport quantize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_transform__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-client/src/transform.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__src_transform__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_untransform__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-client/src/untransform.js");
/* unused harmony reexport untransform */










/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-client/src/mesh.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export meshArcs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-client/src/feature.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stitch__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-client/src/stitch.js");



/* harmony default export */ __webpack_exports__["a"] = (function(topology) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__feature__["b" /* object */])(topology, meshArcs.apply(this, arguments));
});

function meshArcs(topology, object, filter) {
  var arcs, i, n;
  if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
  else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
  return {type: "MultiLineString", arcs: Object(__WEBPACK_IMPORTED_MODULE_1__stitch__["a" /* default */])(topology, arcs)};
}

function extractArcs(topology, object, filter) {
  var arcs = [],
      geomsByArc = [],
      geom;

  function extract0(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
  }

  function extract1(arcs) {
    arcs.forEach(extract0);
  }

  function extract2(arcs) {
    arcs.forEach(extract1);
  }

  function extract3(arcs) {
    arcs.forEach(extract2);
  }

  function geometry(o) {
    switch (geom = o, o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "LineString": extract1(o.arcs); break;
      case "MultiLineString": case "Polygon": extract2(o.arcs); break;
      case "MultiPolygon": extract3(o.arcs); break;
    }
  }

  geometry(object);

  geomsByArc.forEach(filter == null
      ? function(geoms) { arcs.push(geoms[0].i); }
      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });

  return arcs;
}


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-simplify/src/filterWeight.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_topojson_client__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-client/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__planar__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-simplify/src/planar.js");



/* harmony default export */ __webpack_exports__["a"] = (function(topology, minWeight, weight) {
  minWeight = minWeight == null ? Number.MIN_VALUE : +minWeight;

  if (weight == null) weight = __WEBPACK_IMPORTED_MODULE_1__planar__["a" /* planarRingArea */];

  return function(ring, interior) {
    return weight(Object(__WEBPACK_IMPORTED_MODULE_0_topojson_client__["a" /* feature */])(topology, {type: "Polygon", arcs: [ring]}).geometry.coordinates[0], interior) >= minWeight;
  };
});


/***/ }),

/***/ "./node_modules/topojson/node_modules/topojson-simplify/src/presimplify.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_topojson_client__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-client/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__heap__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-simplify/src/heap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__planar__ = __webpack_require__("./node_modules/topojson/node_modules/topojson-simplify/src/planar.js");




function copy(point) {
  return [point[0], point[1], 0];
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(topology, weight) {
  var point = topology.transform ? Object(__WEBPACK_IMPORTED_MODULE_0_topojson_client__["c" /* transform */])(topology.transform) : copy,
      heap = Object(__WEBPACK_IMPORTED_MODULE_1__heap__["a" /* default */])();

  if (weight == null) weight = __WEBPACK_IMPORTED_MODULE_2__planar__["b" /* planarTriangleArea */];

  var arcs = topology.arcs.map(function(arc) {
    var triangles = [],
        maxWeight = 0,
        triangle,
        i,
        n;

    arc = arc.map(point);

    for (i = 1, n = arc.length - 1; i < n; ++i) {
      triangle = [arc[i - 1], arc[i], arc[i + 1]];
      triangle[1][2] = weight(triangle);
      triangles.push(triangle);
      heap.push(triangle);
    }

    // Always keep the arc endpoints!
    arc[0][2] = arc[n][2] = Infinity;

    for (i = 0, n = triangles.length; i < n; ++i) {
      triangle = triangles[i];
      triangle.previous = triangles[i - 1];
      triangle.next = triangles[i + 1];
    }

    while (triangle = heap.pop()) {
      var previous = triangle.previous,
          next = triangle.next;

      // If the weight of the current point is less than that of the previous
      // point to be eliminated, use the latter’s weight instead. This ensures
      // that the current point cannot be eliminated without eliminating
      // previously- eliminated points.
      if (triangle[1][2] < maxWeight) triangle[1][2] = maxWeight;
      else maxWeight = triangle[1][2];

      if (previous) {
        previous.next = next;
        previous[2] = triangle[2];
        update(previous);
      }

      if (next) {
        next.previous = previous;
        next[0] = triangle[0];
        update(next);
      }
    }

    return arc;
  });

  function update(triangle) {
    heap.remove(triangle);
    triangle[1][2] = weight(triangle);
    heap.push(triangle);
  }

  return {
    type: "Topology",
    bbox: topology.bbox,
    objects: topology.objects,
    arcs: arcs
  };
});


/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_topojson__ = __webpack_require__("./node_modules/topojson/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__ = __webpack_require__("./node_modules/d3-geo-projection/index.js");




let d3 = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0_d3__, __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__);
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


var width = 960,
    height = 500,
    active = d3.select(null);

var projection = d3.geoAlbersUsa() // updated for d3 v4
    .scale(1000)
    .translate([width / 2, height / 2]);

var zoom = d3.zoom()
    // no longer in d3 v4 - zoom initialises with zoomIdentity, so it's already at origin
    // .translate([0, 0])
    // .scale(1)
    .scaleExtent([1, 8])
    .on('zoom', zoomed);

var path = d3.geoPath() // updated for d3 v4
    .projection(projection);

var svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)
    .on('click', stopped, true);

svg.append('rect')
    .attr('class', 'background')
    .attr('width', width)
    .attr('height', height)
    .on('click', reset);

var g = svg.append('g');

svg
    .call(zoom); // delete this line to disable free zooming
// .call(zoom.event); // not in d3 v4

d3.json('/mbostock/raw/4090846/us.json', function(error, us) {
    if (error) {throw error;}

    g.selectAll('path')
        .data(__WEBPACK_IMPORTED_MODULE_1_topojson__["a" /* feature */](us, us.objects.states).features)
        .enter().append('path')
        .attr('d', path)
        .attr('class', 'feature')
        .on('click', clicked);

    g.append('path')
        .datum(__WEBPACK_IMPORTED_MODULE_1_topojson__["b" /* mesh */](us, us.objects.states, function(a, b) { return a !== b; }))
        .attr('class', 'mesh')
        .attr('d', path);
});

function clicked(d) {
    if (active.node() === this) {return reset();}
    active.classed('active', false);
    active = d3.select(this).classed('active', true);

    var bounds = path.bounds(d),
        dx = bounds[1][0] - bounds[0][0],
        dy = bounds[1][1] - bounds[0][1],
        x = (bounds[0][0] + bounds[1][0]) / 2,
        y = (bounds[0][1] + bounds[1][1]) / 2,
        scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
        translate = [width / 2 - scale * x, height / 2 - scale * y];

    svg.transition()
        .duration(750)
    // .call(zoom.translate(translate).scale(scale).event); // not in d3 v4
        .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)); // updated for d3 v4
}

function reset() {
    active.classed('active', false);
    active = d3.select(null);

    svg.transition()
        .duration(750)
    // .call( zoom.transform, d3.zoomIdentity.translate(0, 0).scale(1) ); // not in d3 v4
        .call(zoom.transform, d3.zoomIdentity); // updated for d3 v4
}

function zoomed() {
    g.style('stroke-width', 1.5 / d3.event.transform.k + 'px');
    // g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"); // not in d3 v4
    g.attr('transform', d3.event.transform); // updated for d3 v4
}

// If the drag behavior prevents the default click,
// also stop propagation so we don’t click-to-zoom.
function stopped() {
    if (d3.event.defaultPrevented) {d3.event.stopPropagation();}
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdG9wb2pzb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RvcG9qc29uL25vZGVfbW9kdWxlcy90b3BvanNvbi1jbGllbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RvcG9qc29uL25vZGVfbW9kdWxlcy90b3BvanNvbi1jbGllbnQvc3JjL21lc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RvcG9qc29uL25vZGVfbW9kdWxlcy90b3BvanNvbi1zaW1wbGlmeS9zcmMvZmlsdGVyV2VpZ2h0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90b3BvanNvbi9ub2RlX21vZHVsZXMvdG9wb2pzb24tc2ltcGxpZnkvc3JjL3ByZXNpbXBsaWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGd0I7QUFDRztBQUNPO0FBQ0U7QUFDUDtBQUNEO0FBQ0M7QUFDRTs7Ozs7Ozs7Ozs7O0FDUGhCO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxPQUFPO0FBQ3JFLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELGNBQWM7QUFDaEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRSwwQ0FBMEM7QUFDMUMsK0RBQStEO0FBQy9ELDRDQUE0QztBQUM1QztBQUNBOztBQUVBOztBQUVBO0FBQ0EseUJBQXlCLHVCQUF1QjtBQUNoRCx5QkFBeUIsMEVBQTBFLEVBQUU7O0FBRXJHO0FBQ0E7Ozs7Ozs7Ozs7O0FDcERnQjtBQUNPOztBQUV2QjtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0dBQXFDLDhCQUE4QjtBQUNuRTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYa0I7QUFDbEI7QUFDMkI7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBLGdDQUFnQztBQUNoQzs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBLHVEQUF1RCx3REFBd0Q7QUFDL0c7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIscUJBQXFCOztBQUVyQjtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkdBQW9FLGdCQUFnQixFQUFFO0FBQ3RGO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRCxrR0FBa0c7QUFDbEc7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekUsK0NBQStDO0FBQy9DOztBQUVBO0FBQ0E7QUFDQSxpR0FBaUc7QUFDakcsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxDIiwiZmlsZSI6IjAuZjA1Yjk1NzYzMWU5ZDJjMDhjYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCJ0b3BvanNvbi1jbGllbnRcIjtcbmV4cG9ydCAqIGZyb20gXCJ0b3BvanNvbi1zZXJ2ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCJ0b3BvanNvbi1zaW1wbGlmeVwiO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdG9wb2pzb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3RvcG9qc29uL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7ZGVmYXVsdCBhcyBiYm94fSBmcm9tIFwiLi9zcmMvYmJveFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGZlYXR1cmV9IGZyb20gXCIuL3NyYy9mZWF0dXJlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWVzaCwgbWVzaEFyY3N9IGZyb20gXCIuL3NyYy9tZXNoXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWVyZ2UsIG1lcmdlQXJjc30gZnJvbSBcIi4vc3JjL21lcmdlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbmVpZ2hib3JzfSBmcm9tIFwiLi9zcmMvbmVpZ2hib3JzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcXVhbnRpemV9IGZyb20gXCIuL3NyYy9xdWFudGl6ZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRyYW5zZm9ybX0gZnJvbSBcIi4vc3JjL3RyYW5zZm9ybVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHVudHJhbnNmb3JtfSBmcm9tIFwiLi9zcmMvdW50cmFuc2Zvcm1cIjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RvcG9qc29uL25vZGVfbW9kdWxlcy90b3BvanNvbi1jbGllbnQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3RvcG9qc29uL25vZGVfbW9kdWxlcy90b3BvanNvbi1jbGllbnQvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtvYmplY3R9IGZyb20gXCIuL2ZlYXR1cmVcIjtcbmltcG9ydCBzdGl0Y2ggZnJvbSBcIi4vc3RpdGNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRvcG9sb2d5KSB7XG4gIHJldHVybiBvYmplY3QodG9wb2xvZ3ksIG1lc2hBcmNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVzaEFyY3ModG9wb2xvZ3ksIG9iamVjdCwgZmlsdGVyKSB7XG4gIHZhciBhcmNzLCBpLCBuO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIGFyY3MgPSBleHRyYWN0QXJjcyh0b3BvbG9neSwgb2JqZWN0LCBmaWx0ZXIpO1xuICBlbHNlIGZvciAoaSA9IDAsIGFyY3MgPSBuZXcgQXJyYXkobiA9IHRvcG9sb2d5LmFyY3MubGVuZ3RoKTsgaSA8IG47ICsraSkgYXJjc1tpXSA9IGk7XG4gIHJldHVybiB7dHlwZTogXCJNdWx0aUxpbmVTdHJpbmdcIiwgYXJjczogc3RpdGNoKHRvcG9sb2d5LCBhcmNzKX07XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RBcmNzKHRvcG9sb2d5LCBvYmplY3QsIGZpbHRlcikge1xuICB2YXIgYXJjcyA9IFtdLFxuICAgICAgZ2VvbXNCeUFyYyA9IFtdLFxuICAgICAgZ2VvbTtcblxuICBmdW5jdGlvbiBleHRyYWN0MChpKSB7XG4gICAgdmFyIGogPSBpIDwgMCA/IH5pIDogaTtcbiAgICAoZ2VvbXNCeUFyY1tqXSB8fCAoZ2VvbXNCeUFyY1tqXSA9IFtdKSkucHVzaCh7aTogaSwgZzogZ2VvbX0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZXh0cmFjdDEoYXJjcykge1xuICAgIGFyY3MuZm9yRWFjaChleHRyYWN0MCk7XG4gIH1cblxuICBmdW5jdGlvbiBleHRyYWN0MihhcmNzKSB7XG4gICAgYXJjcy5mb3JFYWNoKGV4dHJhY3QxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4dHJhY3QzKGFyY3MpIHtcbiAgICBhcmNzLmZvckVhY2goZXh0cmFjdDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VvbWV0cnkobykge1xuICAgIHN3aXRjaCAoZ2VvbSA9IG8sIG8udHlwZSkge1xuICAgICAgY2FzZSBcIkdlb21ldHJ5Q29sbGVjdGlvblwiOiBvLmdlb21ldHJpZXMuZm9yRWFjaChnZW9tZXRyeSk7IGJyZWFrO1xuICAgICAgY2FzZSBcIkxpbmVTdHJpbmdcIjogZXh0cmFjdDEoby5hcmNzKTsgYnJlYWs7XG4gICAgICBjYXNlIFwiTXVsdGlMaW5lU3RyaW5nXCI6IGNhc2UgXCJQb2x5Z29uXCI6IGV4dHJhY3QyKG8uYXJjcyk7IGJyZWFrO1xuICAgICAgY2FzZSBcIk11bHRpUG9seWdvblwiOiBleHRyYWN0MyhvLmFyY3MpOyBicmVhaztcbiAgICB9XG4gIH1cblxuICBnZW9tZXRyeShvYmplY3QpO1xuXG4gIGdlb21zQnlBcmMuZm9yRWFjaChmaWx0ZXIgPT0gbnVsbFxuICAgICAgPyBmdW5jdGlvbihnZW9tcykgeyBhcmNzLnB1c2goZ2VvbXNbMF0uaSk7IH1cbiAgICAgIDogZnVuY3Rpb24oZ2VvbXMpIHsgaWYgKGZpbHRlcihnZW9tc1swXS5nLCBnZW9tc1tnZW9tcy5sZW5ndGggLSAxXS5nKSkgYXJjcy5wdXNoKGdlb21zWzBdLmkpOyB9KTtcblxuICByZXR1cm4gYXJjcztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RvcG9qc29uL25vZGVfbW9kdWxlcy90b3BvanNvbi1jbGllbnQvc3JjL21lc2guanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3RvcG9qc29uL25vZGVfbW9kdWxlcy90b3BvanNvbi1jbGllbnQvc3JjL21lc2guanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtmZWF0dXJlfSBmcm9tIFwidG9wb2pzb24tY2xpZW50XCI7XG5pbXBvcnQge3BsYW5hclJpbmdBcmVhfSBmcm9tIFwiLi9wbGFuYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odG9wb2xvZ3ksIG1pbldlaWdodCwgd2VpZ2h0KSB7XG4gIG1pbldlaWdodCA9IG1pbldlaWdodCA9PSBudWxsID8gTnVtYmVyLk1JTl9WQUxVRSA6ICttaW5XZWlnaHQ7XG5cbiAgaWYgKHdlaWdodCA9PSBudWxsKSB3ZWlnaHQgPSBwbGFuYXJSaW5nQXJlYTtcblxuICByZXR1cm4gZnVuY3Rpb24ocmluZywgaW50ZXJpb3IpIHtcbiAgICByZXR1cm4gd2VpZ2h0KGZlYXR1cmUodG9wb2xvZ3ksIHt0eXBlOiBcIlBvbHlnb25cIiwgYXJjczogW3JpbmddfSkuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF0sIGludGVyaW9yKSA+PSBtaW5XZWlnaHQ7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90b3BvanNvbi9ub2RlX21vZHVsZXMvdG9wb2pzb24tc2ltcGxpZnkvc3JjL2ZpbHRlcldlaWdodC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdG9wb2pzb24vbm9kZV9tb2R1bGVzL3RvcG9qc29uLXNpbXBsaWZ5L3NyYy9maWx0ZXJXZWlnaHQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCJ0b3BvanNvbi1jbGllbnRcIjtcbmltcG9ydCBuZXdIZWFwIGZyb20gXCIuL2hlYXBcIjtcbmltcG9ydCB7cGxhbmFyVHJpYW5nbGVBcmVhfSBmcm9tIFwiLi9wbGFuYXJcIjtcblxuZnVuY3Rpb24gY29weShwb2ludCkge1xuICByZXR1cm4gW3BvaW50WzBdLCBwb2ludFsxXSwgMF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRvcG9sb2d5LCB3ZWlnaHQpIHtcbiAgdmFyIHBvaW50ID0gdG9wb2xvZ3kudHJhbnNmb3JtID8gdHJhbnNmb3JtKHRvcG9sb2d5LnRyYW5zZm9ybSkgOiBjb3B5LFxuICAgICAgaGVhcCA9IG5ld0hlYXAoKTtcblxuICBpZiAod2VpZ2h0ID09IG51bGwpIHdlaWdodCA9IHBsYW5hclRyaWFuZ2xlQXJlYTtcblxuICB2YXIgYXJjcyA9IHRvcG9sb2d5LmFyY3MubWFwKGZ1bmN0aW9uKGFyYykge1xuICAgIHZhciB0cmlhbmdsZXMgPSBbXSxcbiAgICAgICAgbWF4V2VpZ2h0ID0gMCxcbiAgICAgICAgdHJpYW5nbGUsXG4gICAgICAgIGksXG4gICAgICAgIG47XG5cbiAgICBhcmMgPSBhcmMubWFwKHBvaW50KTtcblxuICAgIGZvciAoaSA9IDEsIG4gPSBhcmMubGVuZ3RoIC0gMTsgaSA8IG47ICsraSkge1xuICAgICAgdHJpYW5nbGUgPSBbYXJjW2kgLSAxXSwgYXJjW2ldLCBhcmNbaSArIDFdXTtcbiAgICAgIHRyaWFuZ2xlWzFdWzJdID0gd2VpZ2h0KHRyaWFuZ2xlKTtcbiAgICAgIHRyaWFuZ2xlcy5wdXNoKHRyaWFuZ2xlKTtcbiAgICAgIGhlYXAucHVzaCh0cmlhbmdsZSk7XG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIGtlZXAgdGhlIGFyYyBlbmRwb2ludHMhXG4gICAgYXJjWzBdWzJdID0gYXJjW25dWzJdID0gSW5maW5pdHk7XG5cbiAgICBmb3IgKGkgPSAwLCBuID0gdHJpYW5nbGVzLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgdHJpYW5nbGUgPSB0cmlhbmdsZXNbaV07XG4gICAgICB0cmlhbmdsZS5wcmV2aW91cyA9IHRyaWFuZ2xlc1tpIC0gMV07XG4gICAgICB0cmlhbmdsZS5uZXh0ID0gdHJpYW5nbGVzW2kgKyAxXTtcbiAgICB9XG5cbiAgICB3aGlsZSAodHJpYW5nbGUgPSBoZWFwLnBvcCgpKSB7XG4gICAgICB2YXIgcHJldmlvdXMgPSB0cmlhbmdsZS5wcmV2aW91cyxcbiAgICAgICAgICBuZXh0ID0gdHJpYW5nbGUubmV4dDtcblxuICAgICAgLy8gSWYgdGhlIHdlaWdodCBvZiB0aGUgY3VycmVudCBwb2ludCBpcyBsZXNzIHRoYW4gdGhhdCBvZiB0aGUgcHJldmlvdXNcbiAgICAgIC8vIHBvaW50IHRvIGJlIGVsaW1pbmF0ZWQsIHVzZSB0aGUgbGF0dGVy4oCZcyB3ZWlnaHQgaW5zdGVhZC4gVGhpcyBlbnN1cmVzXG4gICAgICAvLyB0aGF0IHRoZSBjdXJyZW50IHBvaW50IGNhbm5vdCBiZSBlbGltaW5hdGVkIHdpdGhvdXQgZWxpbWluYXRpbmdcbiAgICAgIC8vIHByZXZpb3VzbHktIGVsaW1pbmF0ZWQgcG9pbnRzLlxuICAgICAgaWYgKHRyaWFuZ2xlWzFdWzJdIDwgbWF4V2VpZ2h0KSB0cmlhbmdsZVsxXVsyXSA9IG1heFdlaWdodDtcbiAgICAgIGVsc2UgbWF4V2VpZ2h0ID0gdHJpYW5nbGVbMV1bMl07XG5cbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICBwcmV2aW91cy5uZXh0ID0gbmV4dDtcbiAgICAgICAgcHJldmlvdXNbMl0gPSB0cmlhbmdsZVsyXTtcbiAgICAgICAgdXBkYXRlKHByZXZpb3VzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgbmV4dC5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgICAgICBuZXh0WzBdID0gdHJpYW5nbGVbMF07XG4gICAgICAgIHVwZGF0ZShuZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJjO1xuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGUodHJpYW5nbGUpIHtcbiAgICBoZWFwLnJlbW92ZSh0cmlhbmdsZSk7XG4gICAgdHJpYW5nbGVbMV1bMl0gPSB3ZWlnaHQodHJpYW5nbGUpO1xuICAgIGhlYXAucHVzaCh0cmlhbmdsZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiVG9wb2xvZ3lcIixcbiAgICBiYm94OiB0b3BvbG9neS5iYm94LFxuICAgIG9iamVjdHM6IHRvcG9sb2d5Lm9iamVjdHMsXG4gICAgYXJjczogYXJjc1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdG9wb2pzb24vbm9kZV9tb2R1bGVzL3RvcG9qc29uLXNpbXBsaWZ5L3NyYy9wcmVzaW1wbGlmeS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdG9wb2pzb24vbm9kZV9tb2R1bGVzL3RvcG9qc29uLXNpbXBsaWZ5L3NyYy9wcmVzaW1wbGlmeS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBkM01haW4gZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24nO1xuaW1wb3J0ICogYXMgZDNnZW9Qcm9qIGZyb20gJ2QzLWdlby1wcm9qZWN0aW9uJztcblxubGV0IGQzID0gT2JqZWN0LmFzc2lnbih7fSwgZDNNYWluLCBkM2dlb1Byb2opO1xuLypcbmxldCBxdWVzdGlvbnMgPSBbXTtcbnZhciB3aWR0aCA9IDk2MDtcbnZhciBoZWlnaHQgPSA1MDA7XG5cbmxldCBxdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbicpO1xubGV0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20nKTtcbmxldCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xubGV0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKTtcblxubGV0IGNvcnJlY3RBbnN3ZXJUZXh0O1xubGV0IG9sZENvbG9yO1xuXG52YXIgc3ZnID0gZDMuc2VsZWN0KCcjbWFwJylcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ21hcCcpXG4gICAgLmFwcGVuZCgnZycpXG5cbnZhciBwcm9qZWN0aW9uID0gZDMuZ2VvUm9iaW5zb24oKVxuICAgIC8vICAgLnNjYWxlKHdpZHRoIC8gMS4yNSk7IFVTQVxuICAgIC5zY2FsZSh3aWR0aCAvIDUuNik7XG5cbi8vICAgIC50cmFuc2xhdGUoW01hdGguc3FydCh3aWR0aCAvIDIpLCBoZWlnaHQgLyAyXSk7XG5cbi8vIHByb2plY3Rpb24uY2VudGVyKFstOTgsIDM2XSk7IFVTQVxucHJvamVjdGlvbi5jZW50ZXIoWzE1LCAxMF0pO1xuXG5cbnZhciBwYXRoID0gZDMuZ2VvUGF0aCgpXG4gICAgLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbnZhciB1cmwgPSAnL21hcHMvd29ybGQtMTEwbS5nZW9qc29uJztcblxuZDMuanNvbih1cmwsIGZ1bmN0aW9uKGVyciwgbWFwSnNvbikge1xuICAgIC8vY29uc29sZS5sb2cobWFwSnNvbik7XG4gICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gZDMuanNvbicsIGVycik7XG4gICAgfVxuICAgIGxldCBtYXBEaXZpc2lvbnMgPSBPYmplY3Qua2V5cyhtYXBKc29uLm9iamVjdHMpWzBdO1xuICAgIGxldCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKG1hcEpzb24sIG1hcEpzb24ub2JqZWN0c1ttYXBEaXZpc2lvbnNdKS5mZWF0dXJlcztcbiAgICAvL2NvbnNvbGUubG9nKGNvdW50cmllcywgJzwtLSBjb3VudHJpZXMnKTtcbiAgICBsZXQgY29sb3JTY2FsZSA9IGQzLnNjYWxlU2VxdWVudGlhbChkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpLmRvbWFpbihbMzAsIDc1MF0pO1xuXG4gICAgc3ZnLnNlbGVjdEFsbCgnLmNvdW50cnknKVxuICAgICAgICAuZGF0YShjb3VudHJpZXMsIGZ1bmN0aW9uKGNvdW50cnksIGkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGksIGNvdW50cnksICdjb3VudHJ5Jyk7XG4gICAgICAgICAgICBpZiAoY291bnRyeS5wcm9wZXJ0aWVzLm5hbWUgIT09ICdEaXN0cmljdCBvZiBDb2x1bWJpYScpIHtcblxuICAgICAgICAgICAgICAgIHF1ZXN0aW9ucy5wdXNoKGNvdW50cnkucHJvcGVydGllcy5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjb3VudHJ5JylcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoKVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJ3JnYmEoNTAsNTAsNTAsLjYpJylcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkYXRhLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3JTY2FsZShpICogNyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ2V0QXR0cmlidXRlKCdmaWxsJykpO1xuICAgICAgICAgICAgb2xkQ29sb3IgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZmlsbCcpO1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdyZ2JhKDI1MCwyNTAsMjUwLC45KScpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDAuMik7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZmlsbCcsICd5ZWxsb3cnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdibGFjaycpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBvbGRDb2xvcik7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG4gICAgICAgICAgICBjb3JyZWN0QW5zd2VyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0Jyk7XG4gICAgICAgICAgICBkYXRhLnByb3BlcnRpZXMubmFtZSA9PT0gY29ycmVjdEFuc3dlclRleHQuaW5uZXJUZXh0ID8gY29ycmVjdEFuc3dlcigpIDogd3JvbmdBbnN3ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25zKTtcbn0pO1xuXG5cbnJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlUXVlc3Rpb24pO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVF1ZXN0aW9uKCkge1xuICAgIHF1ZXN0aW9uLmlubmVySFRNTCA9IGBXaGVyZSBpcyA8c3Ryb25nIGlkPSd0ZXN0Jz4ke3F1ZXN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBxdWVzdGlvbnMubGVuZ3RoKV19PC9zdHJvbmc+P2A7XG4gICAgLy9zdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuXG59XG5cbmZ1bmN0aW9uIGNvcnJlY3RBbnN3ZXIoKSB7XG4gICAgbGV0IHNjb3JlQ291bnQgPSBwYXJzZUludChzY29yZS5pbm5lclRleHQpO1xuICAgIHNjb3JlLmlubmVyVGV4dCA9IHNjb3JlQ291bnQgKz0gMTtcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gJ0NPUlJFQ1QhJztcbiAgICAvLyBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuXG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICBnZW5lcmF0ZVF1ZXN0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIHdyb25nQW5zd2VyKCkge1xuICAgIHN0YXR1cy5pbm5lclRleHQgPSAnV1JPTkchJztcbiAgICAvLyBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcsICd3cm9uZycpO1xuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCd3cm9uZycpO1xufVxuKi9cblxuXG52YXIgd2lkdGggPSA5NjAsXG4gICAgaGVpZ2h0ID0gNTAwLFxuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdChudWxsKTtcblxudmFyIHByb2plY3Rpb24gPSBkMy5nZW9BbGJlcnNVc2EoKSAvLyB1cGRhdGVkIGZvciBkMyB2NFxuICAgIC5zY2FsZSgxMDAwKVxuICAgIC50cmFuc2xhdGUoW3dpZHRoIC8gMiwgaGVpZ2h0IC8gMl0pO1xuXG52YXIgem9vbSA9IGQzLnpvb20oKVxuICAgIC8vIG5vIGxvbmdlciBpbiBkMyB2NCAtIHpvb20gaW5pdGlhbGlzZXMgd2l0aCB6b29tSWRlbnRpdHksIHNvIGl0J3MgYWxyZWFkeSBhdCBvcmlnaW5cbiAgICAvLyAudHJhbnNsYXRlKFswLCAwXSlcbiAgICAvLyAuc2NhbGUoMSlcbiAgICAuc2NhbGVFeHRlbnQoWzEsIDhdKVxuICAgIC5vbignem9vbScsIHpvb21lZCk7XG5cbnZhciBwYXRoID0gZDMuZ2VvUGF0aCgpIC8vIHVwZGF0ZWQgZm9yIGQzIHY0XG4gICAgLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbnZhciBzdmcgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAub24oJ2NsaWNrJywgc3RvcHBlZCwgdHJ1ZSk7XG5cbnN2Zy5hcHBlbmQoJ3JlY3QnKVxuICAgIC5hdHRyKCdjbGFzcycsICdiYWNrZ3JvdW5kJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5vbignY2xpY2snLCByZXNldCk7XG5cbnZhciBnID0gc3ZnLmFwcGVuZCgnZycpO1xuXG5zdmdcbiAgICAuY2FsbCh6b29tKTsgLy8gZGVsZXRlIHRoaXMgbGluZSB0byBkaXNhYmxlIGZyZWUgem9vbWluZ1xuLy8gLmNhbGwoem9vbS5ldmVudCk7IC8vIG5vdCBpbiBkMyB2NFxuXG5kMy5qc29uKCcvbWJvc3RvY2svcmF3LzQwOTA4NDYvdXMuanNvbicsIGZ1bmN0aW9uKGVycm9yLCB1cykge1xuICAgIGlmIChlcnJvcikge3Rocm93IGVycm9yO31cblxuICAgIGcuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLmRhdGEodG9wb2pzb24uZmVhdHVyZSh1cywgdXMub2JqZWN0cy5zdGF0ZXMpLmZlYXR1cmVzKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmZWF0dXJlJylcbiAgICAgICAgLm9uKCdjbGljaycsIGNsaWNrZWQpO1xuXG4gICAgZy5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuZGF0dW0odG9wb2pzb24ubWVzaCh1cywgdXMub2JqZWN0cy5zdGF0ZXMsIGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgIT09IGI7IH0pKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnbWVzaCcpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aCk7XG59KTtcblxuZnVuY3Rpb24gY2xpY2tlZChkKSB7XG4gICAgaWYgKGFjdGl2ZS5ub2RlKCkgPT09IHRoaXMpIHtyZXR1cm4gcmVzZXQoKTt9XG4gICAgYWN0aXZlLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QodGhpcykuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSk7XG5cbiAgICB2YXIgYm91bmRzID0gcGF0aC5ib3VuZHMoZCksXG4gICAgICAgIGR4ID0gYm91bmRzWzFdWzBdIC0gYm91bmRzWzBdWzBdLFxuICAgICAgICBkeSA9IGJvdW5kc1sxXVsxXSAtIGJvdW5kc1swXVsxXSxcbiAgICAgICAgeCA9IChib3VuZHNbMF1bMF0gKyBib3VuZHNbMV1bMF0pIC8gMixcbiAgICAgICAgeSA9IChib3VuZHNbMF1bMV0gKyBib3VuZHNbMV1bMV0pIC8gMixcbiAgICAgICAgc2NhbGUgPSBNYXRoLm1heCgxLCBNYXRoLm1pbig4LCAwLjkgLyBNYXRoLm1heChkeCAvIHdpZHRoLCBkeSAvIGhlaWdodCkpKSxcbiAgICAgICAgdHJhbnNsYXRlID0gW3dpZHRoIC8gMiAtIHNjYWxlICogeCwgaGVpZ2h0IC8gMiAtIHNjYWxlICogeV07XG5cbiAgICBzdmcudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgLy8gLmNhbGwoem9vbS50cmFuc2xhdGUodHJhbnNsYXRlKS5zY2FsZShzY2FsZSkuZXZlbnQpOyAvLyBub3QgaW4gZDMgdjRcbiAgICAgICAgLmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUodHJhbnNsYXRlWzBdLCB0cmFuc2xhdGVbMV0pLnNjYWxlKHNjYWxlKSk7IC8vIHVwZGF0ZWQgZm9yIGQzIHY0XG59XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGFjdGl2ZS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuXG4gICAgc3ZnLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgIC8vIC5jYWxsKCB6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSgwLCAwKS5zY2FsZSgxKSApOyAvLyBub3QgaW4gZDMgdjRcbiAgICAgICAgLmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eSk7IC8vIHVwZGF0ZWQgZm9yIGQzIHY0XG59XG5cbmZ1bmN0aW9uIHpvb21lZCgpIHtcbiAgICBnLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxLjUgLyBkMy5ldmVudC50cmFuc2Zvcm0uayArICdweCcpO1xuICAgIC8vIGcuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIGQzLmV2ZW50LnRyYW5zbGF0ZSArIFwiKXNjYWxlKFwiICsgZDMuZXZlbnQuc2NhbGUgKyBcIilcIik7IC8vIG5vdCBpbiBkMyB2NFxuICAgIGcuYXR0cigndHJhbnNmb3JtJywgZDMuZXZlbnQudHJhbnNmb3JtKTsgLy8gdXBkYXRlZCBmb3IgZDMgdjRcbn1cblxuLy8gSWYgdGhlIGRyYWcgYmVoYXZpb3IgcHJldmVudHMgdGhlIGRlZmF1bHQgY2xpY2ssXG4vLyBhbHNvIHN0b3AgcHJvcGFnYXRpb24gc28gd2UgZG9u4oCZdCBjbGljay10by16b29tLlxuZnVuY3Rpb24gc3RvcHBlZCgpIHtcbiAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge2QzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO31cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
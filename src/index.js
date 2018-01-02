import * as d3 from 'd3';
import * as topojson from 'topojson';
import * as d3geoProj from 'd3-geo-projection';

let questions = [];
let question = document.getElementById('question');
let randomBtn = document.getElementById('random');
let scoreEl = document.getElementById('score');
let status = document.getElementById('status');

let activeAnswer = null;
let correctAnswerText;
let questionCount = 0;
let scoreCount = 0;

var width = 1000,
    height = 500,
    active = d3.select(null);

let colorScale = d3.scaleSequential(d3.interpolateRainbow).domain([100, 40000]);

var projection = d3geoProj
    .geoRobinson()
    .scale(170)
    .translate([width / 2.25, height / 1.75]);

var zoom = d3
    .zoom()
    .scaleExtent([1, 8])
    .on('zoom', zoomed);

var path = d3.geoPath().projection(projection);

var svg = d3
    .select('#map')
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
d3.json('/maps/map', function(error, mapJson) {
    if (error) {
        throw error;
    }
    let mapDivisions = Object.keys(mapJson.objects)[0];

    let mapPaths = topojson.feature(mapJson, mapJson.objects[mapDivisions]).features;

    g
        .selectAll('path')
        .data(mapPaths, function(country, i) {
            questions.push({
                countryName: country.properties.name,
                pathID: i
            });
        })
        .enter()
        .append('path')
        .attr('d', path)
        .attr('data-index', function(data, i) { return i; })
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
            topojson.mesh(mapJson, mapJson.objects[mapDivisions], function(a, b) {
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
    active = d3.select(this).classed('active', true);
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
        .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
}

function reset() {
    active.classed('active', false);
    active = d3.select(null);

    svg
        .transition()
        .duration(750)
        .call(zoom.transform, d3.zoomIdentity);

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

randomBtn.addEventListener('click', function() {
    reset();
    let previousCountryPathElement = document.querySelector(`path[data-index="${questionData.pathID}"]`);
    previousCountryPathElement.classList.add('learnCountry');
    document.body.classList.add('disable');
    window.setTimeout(function() {
        previousCountryPathElement.classList.remove('learnCountry');
        generateQuestion();
        document.body.classList.remove('disable');
    }, 3000);
    scoreEl.innerText = scoreUpdate(false);
});

let questionData = {};
function generateQuestion() {
    questionData = questions[Math.floor(Math.random() * questions.length)];
    question.innerHTML = `Where is <strong id='test'>${questionData.countryName}</strong>?`;
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

    let percentage = scoreCount ? ` – ${((scoreCount / questionCount) * 100).toFixed(2)}%` : '';

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

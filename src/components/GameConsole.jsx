import * as d3 from 'd3';
import * as topojson from 'topojson';
import * as d3geoProj from 'd3-geo-projection';
import React from 'react';
import Instructions from './Instructions.jsx';
import Map from './gameConsole/Map.jsx';
import Question from './gameConsole/Question.jsx';

export default class GameConsole extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            mapJson: null,
            mapType: '', // country || world
            questions: [],
            availableMaps: []
        };
    }

    render() {
        return this.state.loaded ? (
            <React.Fragment>
                <Instructions />
                <Map mapJson={this.state.mapJson} />
                <Question currentQuestion={this.state.questions[Math.floor(Math.random() * this.state.questions.length)]} />
            </React.Fragment>
        ) : (
            <div>
                <p>Loading...</p>
                <style jsx>{`
                    p {
                        font-size: 24px;
                        text-align: center;
                    }
                `}</style>
            </div>
        );
    }
    /*
    componentDidMount() {
        let questions = [];
        // let question = document.getElementById('question');
        // let randomBtn = document.getElementById('random');
        // let scoreEl = document.getElementById('score');
        // let status = document.getElementById('status');

        let activeAnswer = null;
        let correctAnswerText;
        let questionCount = 0;
        let scoreCount = 0;

        // var width = window.outerWidth > 1000 ? 1000 : window.innerWidth,
        //     height = 500,
            active = d3.select(null);

        // var projection = d3geoProj
        //     .geoRobinson()
        //     .scale(170)
        //     .translate([width / 2.25, height / 1.75]);

        // var zoom = d3
        //     .zoom()
        //     .scaleExtent([1, 8])
        //     .on('zoom', zoomed);

        // var path = d3.geoPath().projection(projection);

        // var svg = d3
        //     .select('#d3Map')
        //     .append('svg')
        //     .attr('class', 'map')
        //     .attr('width', width)
        //     .attr('height', height)
        //     .on('click', stopped, true);

        // svg
        //     .append('rect')
        //     .attr('class', 'background')
        //     .attr('width', width)
        //     .attr('height', height)
        //     .on('click', reset);

        // var g = svg.append('g');

        // svg.call(zoom); // delete this line to disable free zooming

        // // TODO: Update map and routing for new maps.
        // d3.json('/maps/map', function(error, mapJson) {
        //     // Code borrowed from https://bl.ocks.org/mbostock.
        //     if (error) {
        //         throw error;
        //     }
        //     let mapDivisions = Object.keys(mapJson.objects)[0];
        //     let colorScale = d3.scaleSequential(d3.interpolateRainbow).domain([1, 51]);
        //     let mapPaths = topojson.feature(mapJson, mapJson.objects[mapDivisions]).features;

        //     g
        //         .selectAll('path')
        //         .data(mapPaths, function(country, i) {
        //             questions.push({
        //                 countryName: country.properties.name,
        //                 pathID: i
        //             });
        //         })
        //         .enter()
        //         .append('path')
        //         .attr('d', path)
        //         .attr('data-index', function(data, i) {
        //             return i;
        //         })
        //         .attr('fill', function(data, i) {
        //             return colorScale(Math.random() * 2 + i * 2);
        //         })
        //         .on('mouseover', function() {
        //             // eslint-disable-next-line no-invalid-this
        //             this.classList.add('hover');
        //         })
        //         .on('mouseout', function() {
        //             // eslint-disable-next-line no-invalid-this
        //             this.classList.remove('hover');
        //         })
        //         .on('click', clicked);

        //     g
        //         .append('path')
        //         .datum(
        //             topojson.mesh(mapJson, mapJson.objects[mapDivisions], function(a, b) {
        //                 return a !== b;
        //             })
        //         )
        //         .attr('class', 'mesh')
        //         .attr('d', path);

        //     generateQuestion();
        //     loaded(true);
        // });

        // var loaded = (bool) => {
        //     console.log(bool);
        //     this.setState({ loaded: bool });
        // };

        // function clicked(d) {
        //     // eslint-disable-next-line no-invalid-this
        //     if (active.node() === this) {
        //         return reset();
        //     }
        //     active.classed('active', false);
        //     // eslint-disable-next-line no-invalid-this
        //     active = d3.select(this).classed('active', true);
        //     activeAnswer = d.properties.name;

        //     var bounds = path.bounds(d),
        //         dx = bounds[1][0] - bounds[0][0],
        //         dy = bounds[1][1] - bounds[0][1],
        //         x = (bounds[0][0] + bounds[1][0]) / 2,
        //         y = (bounds[0][1] + bounds[1][1]) / 2,
        //         scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
        //         translate = [width / 2 - scale * x, height / 2 - scale * y];

        //     svg
        //         .transition()
        //         .duration(750)
        //         .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
        // }

        // function reset() {
        //     active.classed('active', false);
        //     active = d3.select(null);

        //     svg
        //         .transition()
        //         .duration(750)
        //         .call(zoom.transform, d3.zoomIdentity);

        //     activeAnswer = null;
        // }

        // function zoomed() {
        //     g.style('stroke-width', 1.5 / d3.event.transform.k + 'px');
        //     g.attr('transform', d3.event.transform);
        // }

        // // If the drag behavior prevents the default click,
        // // also stop propagation so we don’t click-to-zoom.
        // function stopped() {
        //     if (d3.event.defaultPrevented) {
        //         d3.event.stopPropagation();
        //     }
        // }

        // TODO: Refactor this code.
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
            scoreCount = correct ? (scoreCount += 1) : scoreCount;
            questionCount += 1;

            let percentage = scoreCount ? ` – ${(scoreCount / questionCount * 100).toFixed(2)}%` : '';

            return `${scoreCount} out of ${questionCount}${percentage}`;
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
    }
    */
    componentDidMount() {
        // TODO: Read in a way to load the correct map on load.
        fetch('/maps/world')
            .then((response) => response.json())
            .then((mapJson) => {
                // TODO: Fix this to make it dynamic
                const firstKey = Object.keys(mapJson.objects)[0];
                const secondKey = Object.keys(mapJson.objects[firstKey])[1];
                this.setState({ mapJson: mapJson, loaded: true, questions: mapJson.objects[firstKey][secondKey].map((entry) => entry.properties.name) });
            });
    }
}

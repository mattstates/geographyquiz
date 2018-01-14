import * as d3 from 'd3';
import * as topojson from 'topojson';
import * as d3geoProj from 'd3-geo-projection';
import React from 'react';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            mapProps: {
                width: window.outerWidth > 1000 ? 1000 : window.innerWidth,
                height: 500,
                scale: 170
            }
        };
        this.d3MapGenerator = this.d3MapGenerator.bind(this);
    }
    render() {
        return <svg className="map" ref={(node) => this.node = node} />;
    }

    componentDidMount() {

        console.log(this.props, 'componenet mounted');
        this.d3MapGenerator();
    }

    componentDidUpdate() {
        this.d3MapGenerator();
    }

    d3MapGenerator() {
        console.log(this, '<-- Map Generator;');
        var active = d3.select(null);
        const width = this.state.mapProps.width,
            height = this.state.mapProps.height,
            scale = this.state.mapProps.scale;

        var projection = d3geoProj
            .geoRobinson()
            .scale(scale) // TODO: FIX
            .translate([width / 2.25, height / 1.75]); // TODO: FIX

        var zoom = d3
            .zoom()
            .scaleExtent([1, 8])
            .on('zoom', zoomed);

        var path = d3.geoPath().projection(projection);

        var svg = d3
            .select(this.node)
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

        // Code borrowed from https://bl.ocks.org/mbostock.
        let mapJson = this.props.mapJson;
        let mapDivisions = Object.keys(mapJson.objects)[0]; // TODO: How should we normalize the map data?
        let colorScale = d3.scaleSequential(d3.interpolateRainbow).domain([1, 51]);

        let mapPaths = topojson.feature(mapJson, mapJson.objects[mapDivisions]).features;

        g
            .selectAll('path')
            .data(mapPaths)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('data-index', function(data, i) {
                return i;
            })
            .attr('fill', function(data, i) {
                return colorScale(Math.random() * 2 + i * 2);
            })
            .on('mouseover', function() {
                // eslint-disable-next-line no-invalid-this
                this.classList.add('hover');
            })
            .on('mouseout', function() {
                // eslint-disable-next-line no-invalid-this
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

        function clicked(d) {
            // eslint-disable-next-line no-invalid-this
            if (active.node() === this) {
                return reset();
            }
            active.classed('active', false);
            // eslint-disable-next-line no-invalid-this
            active = d3.select(this).classed('active', true);
            // activeAnswer = d.properties.name;

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

            // activeAnswer = null;
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
    }
}

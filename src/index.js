import * as d3 from 'd3';
import * as topojson from 'topojson';
import * as d3geoProj from 'd3-geo-projection';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import App from './components/App.jsx';


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
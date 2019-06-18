import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import {OSM} from 'ol/source';

let map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map-container',
  view: new View({
    center: [15557616.105903586, 4255500.970286392],
    zoom: 14
  })
});

window.map = map;

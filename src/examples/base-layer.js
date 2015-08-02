import {inject, useView} from 'aurelia-framework';

@useView('./only-layers.html')
export class Simple {
  // demo
  jsFile = 'base-layer.js';
  htmlFile = 'only-layers.html';
  // demoend

  activate() {
    this.mapOptions = {
      center: {
        lat: 47.3686498,
        lng: 8.53918250
      },
      zoomLevel: 12
    };

    this.layers = {
      base: [
        {
          id: "OSM",
          url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
          options: {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
        }
      ]
    }
  }

}
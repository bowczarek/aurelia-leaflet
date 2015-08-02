System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var inject, useView, Simple;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      useView = _aureliaFramework.useView;
    }],
    execute: function () {
      Simple = (function () {
        function Simple() {
          _classCallCheck(this, _Simple);

          this.jsFile = 'base-layer.js';
          this.htmlFile = 'only-layers.html';
        }

        _createClass(Simple, [{
          key: 'activate',
          value: function activate() {
            this.mapOptions = {
              center: {
                lat: 47.3686498,
                lng: 8.53918250
              },
              zoomLevel: 12
            };

            this.layers = {
              base: [{
                id: "OSM",
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                options: {
                  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }
              }]
            };
          }
        }]);

        var _Simple = Simple;
        Simple = useView('./only-layers.html')(Simple) || Simple;
        return Simple;
      })();

      _export('Simple', Simple);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2Jhc2UtbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VCQUdhLE1BQU07Ozs7Ozs7O2lDQUhYLE1BQU07a0NBQUUsT0FBTzs7O0FBR1YsWUFBTTtpQkFBTixNQUFNOzs7ZUFFakIsTUFBTSxHQUFHLGVBQWU7ZUFDeEIsUUFBUSxHQUFHLGtCQUFrQjs7O3FCQUhsQixNQUFNOztpQkFNVCxvQkFBRztBQUNULGdCQUFJLENBQUMsVUFBVSxHQUFHO0FBQ2hCLG9CQUFNLEVBQUU7QUFDTixtQkFBRyxFQUFFLFVBQVU7QUFDZixtQkFBRyxFQUFFLFVBQVU7ZUFDaEI7QUFDRCx1QkFBUyxFQUFFLEVBQUU7YUFDZCxDQUFDOztBQUVGLGdCQUFJLENBQUMsTUFBTSxHQUFHO0FBQ1osa0JBQUksRUFBRSxDQUNKO0FBQ0Usa0JBQUUsRUFBRSxLQUFLO0FBQ1QsbUJBQUcsRUFBRSx5Q0FBeUM7QUFDOUMsdUJBQU8sRUFBRTtBQUNQLDZCQUFXLEVBQUUsd0ZBQXdGO2lCQUN0RztlQUNGLENBQ0Y7YUFDRixDQUFBO1dBQ0Y7OztzQkExQlUsTUFBTTtBQUFOLGNBQU0sR0FEbEIsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQ2pCLE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTSIsImZpbGUiOiJleGFtcGxlcy9iYXNlLWxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIHVzZVZpZXd9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQHVzZVZpZXcoJy4vb25seS1sYXllcnMuaHRtbCcpXG5leHBvcnQgY2xhc3MgU2ltcGxlIHtcbiAgLy8gZGVtb1xuICBqc0ZpbGUgPSAnYmFzZS1sYXllci5qcyc7XG4gIGh0bWxGaWxlID0gJ29ubHktbGF5ZXJzLmh0bWwnO1xuICAvLyBkZW1vZW5kXG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5tYXBPcHRpb25zID0ge1xuICAgICAgY2VudGVyOiB7XG4gICAgICAgIGxhdDogNDcuMzY4NjQ5OCxcbiAgICAgICAgbG5nOiA4LjUzOTE4MjUwXG4gICAgICB9LFxuICAgICAgem9vbUxldmVsOiAxMlxuICAgIH07XG5cbiAgICB0aGlzLmxheWVycyA9IHtcbiAgICAgIGJhc2U6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcIk9TTVwiLFxuICAgICAgICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vc20ub3JnL3t6fS97eH0ve3l9LnBuZycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYXR0cmlidXRpb246ICcmY29weTsgPGEgaHJlZj1cImh0dHA6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.heat';
import {MapOptions} from "../../constants/MapOptions";
import {MapService} from "../../services/map.service";
import 'leaflet.heat/dist/leaflet-heat.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  map?: L.Map;
  baseLayer?: L.Layer;

  constructor(public mapService: MapService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.map = this.mapService.createMap(53.2194, 6.5665, 10);
    this.baseLayer = this.mapService.createBaseLayer(MapOptions.STAMEN, 1, 16);
    this.mapService.addBaseLayer(this.baseLayer, this.map);
    this.onMapReady(this.map);
  }

  onMapOptionClicked(url: string) {
    this.mapService.removeBaseLayer(this.baseLayer!, this.map!);
    this.mapService.addBaseLayer(this.mapService.createBaseLayer(url, 1, 16), this.map!);
  }

  onMapReady(map: L.Map) {
    const heat = L.heatLayer([
        [53.2194, 6.5665, 0.5],
        [53.2193, 6.5600, 0.5],
        [53.2192, 6.5630, 0.5],
        [53.2191, 6.5640, 0.5],
        [53.2190, 6.5650, 0.5],
        [53.2180, 6.5660, 0.5]
      ],
      {radius: 35});
    map.addLayer(heat)
    map.setZoom(12);
  }
}

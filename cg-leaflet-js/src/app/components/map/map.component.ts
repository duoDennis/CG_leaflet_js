import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as Leaflet from 'leaflet';
import * as Heatmap from 'leaflet.heat';
import {MapOptions} from "../../constants/MapOptions";
import {MapService} from "../../services/map.service";
import 'leaflet.heat/dist/leaflet-heat.js';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
	map?: Leaflet.Map;
	baseLayer?: Leaflet.Layer;

	constructor(public mapService: MapService) {
	}

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		this.map = this.mapService.createMap(53.2194, 6.5665, 10);
		this.baseLayer = this.mapService.createBaseLayer(MapOptions.STAMEN, 1, 16);
		this.mapService.addBaseLayer(this.baseLayer, this.map);
		this.onMapReady(this.map)
	}

	onMapOptionClicked(url: string) {
		this.mapService.removeBaseLayer(this.baseLayer!, this.map!);
		this.mapService.addBaseLayer(this.mapService.createBaseLayer(url, 1, 16), this.map!);
	}

	onMapReady(map: Leaflet.Map) {
		Leaflet.heatLayer([
			[50.5, 30.5, 1],
			[50.6, 30.4, 1]
		], {radius: 2500}).addTo(map);
	}
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Heatmap} from "../models/heatmap";
import * as Leaflet from "leaflet";
import {Subject} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class MapService {
	mapSubject: Subject<Leaflet.Map> = new Subject<Leaflet.Map>();

	constructor(public http: HttpClient) {}

	createMap(x: number, y: number, zoom: number) {
		return Leaflet.map('map', {center: [x, y], zoom: zoom});
	}

	createBaseLayer(url: string, minZoom: number, maxZoom: number) {
		return Leaflet.tileLayer(url, {minZoom: minZoom, maxZoom: maxZoom});
	}

	addBaseLayer(layer: Leaflet.Layer, map: Leaflet.Map) {
		layer.addTo(map);
	}

	removeBaseLayer(layer: Leaflet.Layer, map: Leaflet.Map) {
		layer.removeFrom(map);
	}
}

import {LatLng} from "leaflet";

export class HeatModel {
	coordinates: LatLng;
	intensity: number;
	radius: number;

	constructor(coordinates: LatLng, intensity: number, radius: number) {
		this.coordinates = coordinates;
		this.intensity = intensity;
		this.radius = radius;
	}
}

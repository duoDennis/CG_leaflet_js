import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MapOptions} from "../../../constants/MapOptions";

@Component({
	selector: 'app-options-panel',
	templateUrl: './options-panel.component.html',
	styleUrls: ['./options-panel.component.scss']
})
export class OptionsPanelComponent implements OnInit {
	@Output() mapOption: EventEmitter<string> = new EventEmitter<string>();
	options = Object.entries(MapOptions);

	constructor() {
	}

	ngOnInit(): void {

	}

	emitOption(option: string) {
		this.mapOption.emit(option);
	}
}

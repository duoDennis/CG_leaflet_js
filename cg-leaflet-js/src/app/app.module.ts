import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapComponent} from './components/map/map.component';
import {OptionsPanelComponent} from './components/map/options-panel/options-panel.component';
import {HttpClientModule} from "@angular/common/http";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";

@NgModule({
	declarations: [
		AppComponent,
		MapComponent,
		OptionsPanelComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		LeafletModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

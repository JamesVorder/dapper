import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DappsComponent } from './dapps/dapps.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {Interceptor} from './interceptors/interceptor';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		DappsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MatTableModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatPaginatorModule,
		MatSortModule,
		MatFormFieldModule,
		MatInputModule,
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

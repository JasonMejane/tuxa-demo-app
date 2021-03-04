import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CursorTrashingComponent } from './cursor-trashing/cursor-trashing.component';
import { FlowTrackerComponent } from './flow-tracker/flow-tracker.component';
import { RageClickComponent } from './rage-click/rage-click.component';
import { RandomScrollingComponent } from './random-scrolling/random-scrolling.component';
import { WrapperTable } from './wrapper-table/wrapper-table';

@NgModule({
	declarations: [
		AppComponent,
		RageClickComponent,
		CursorTrashingComponent,
		RandomScrollingComponent,
		FlowTrackerComponent,
		WrapperTable
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CdkTableModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatSortModule,
		MatTableModule,
		MatToolbarModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

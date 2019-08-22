// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// material modules
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule, MatDatepickerIntl } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialPreviewModule } from '../../partials/content/general/material-preview/material-preview.module';
import {
	MatAutocompleteModule,
	MatNativeDateModule,
	MatFormFieldModule,
	MatInputModule,
	MatRadioModule,
	MatButtonModule,
	MatCardModule,
	MatChipsModule,
	MatSelectModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatIconModule,
	MatSliderModule,
	MatPaginatorModule,
	MatSortModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatStepperModule,
	MatToolbarModule,
	MatDividerModule,
	MatTabsModule,
	MatTableModule,
	MatTooltipModule,
	MatListModule,
	MatGridListModule,
	MatButtonToggleModule,
	MatBottomSheetModule,
	MatExpansionModule,
	MatMenuModule,
	MatTreeModule,
	MAT_BOTTOM_SHEET_DATA,
	MatBottomSheetRef,
	MAT_DATE_LOCALE,
	MAT_DATE_FORMATS,

} from '@angular/material';
// pages
import { ShowOnMapComponent } from './show-on-map.component';
import { ShowOnMap7MinComponent } from './show-on-map-7min/show-on-map-7min.component';
import { ShowOnMap7MinService } from './show-on-map-7min/show-on-map-7min.service';
import { ShowOnMap3MinComponent } from './show-on-map-3min/show-on-map-3min.component';
import { ShowOnMap3MinService } from './show-on-map-3min/show-on-map-3min.service';
import { ShowOnMap5MinComponent } from './show-on-map-5min/show-on-map-5min.component';
import { ShowOnMap5MinService } from './show-on-map-5min/show-on-map-5min.service';

import { ShowOnMapCustomMinComponent } from './show-on-map-custommin/show-on-map-custommin.component';
import { ShowOnMapCustomMinService } from './show-on-map-custommin/show-on-map-custommin.service';
import { ShowOnMapStdbsanComponent } from './show-on-map-stdbscan/show-on-map-stdbscan.component';
import { ShowOnMapStdbscanService } from './show-on-map-stdbscan/show-on-map-stdbscan.service';
import { STDbscanService } from './show-on-map-stdbscan/stdbscan-algo.service';
@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		MatInputModule,
		MatFormFieldModule,
		MatDatepickerModule,
		MatAutocompleteModule,
		MatListModule,
		MatSliderModule,
		MatCardModule,
		MatSelectModule,
		MatButtonModule,
		MatIconModule,
		MatNativeDateModule,
		MatSlideToggleModule,
		MatCheckboxModule,
		MatMenuModule,
		MatTabsModule,
		MatTooltipModule,
		MatSidenavModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatTableModule,
		MatGridListModule,
		MatToolbarModule,
		MatBottomSheetModule,
		MatExpansionModule,
		MatDividerModule,
		MatSortModule,
		MatStepperModule,
		MatChipsModule,
		MatPaginatorModule,
		MatDialogModule,
		MatRippleModule,
		CoreModule,
		CommonModule,
		MatRadioModule,
		MatTreeModule,
		MatButtonToggleModule,
		PartialsModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialPreviewModule,
		RouterModule.forChild([
			{
				path: '',
				component: ShowOnMap7MinComponent
			},
			{
				path: '3',
				component: ShowOnMap3MinComponent
			},
			{
				path: '5',
				component: ShowOnMap5MinComponent
			},
			{
				path: '7',
				component: ShowOnMap7MinComponent
			},
			{
				path: 'custom',
				component: ShowOnMapCustomMinComponent
			},
			{
				path: 'stdbscan',
				component: ShowOnMapStdbsanComponent
			},
		]),
	],
	providers: [ShowOnMap7MinService, ShowOnMap5MinService, ShowOnMap3MinService, ShowOnMapCustomMinService, ShowOnMapStdbscanService, STDbscanService],
	declarations: [
		ShowOnMapComponent,
		ShowOnMap7MinComponent,
		ShowOnMap5MinComponent,
		ShowOnMap3MinComponent,
		ShowOnMapCustomMinComponent,
		ShowOnMapStdbsanComponent,
	]
})
export class ShowOnMapModule {
}

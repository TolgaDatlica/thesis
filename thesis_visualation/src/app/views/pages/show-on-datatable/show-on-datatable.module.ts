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
import { ShowOnDataTableComponent } from './show-on-datatable.component';
import { ShowOnDataTableStdbsanComponent } from './show-on-datatable-stdbscan/show-on-datatable-stdbscan.component';
import { ShowOnDataTableStdbscanService } from './show-on-datatable-stdbscan/show-on-datatable-stdbscan.service';
import { STDbscanService } from '../show-on-map/show-on-map-stdbscan/stdbscan-algo.service';
import { ShowOnDataTableClusterSummaryComponent } from './show-on-datatable-clustersummary/show-on-datatable-clustersummary.component';
import { ShowOnDataTableClusterSummaryService } from './show-on-datatable-clustersummary/show-on-datatable-clustersummary.service';

import { ShowOnDataTableClustersComponent } from './show-on-datatable-clusters/show-on-datatable-clusters.component';
import { ShowOnDataTableClustersService } from './show-on-datatable-clusters/show-on-datatable-clusters.service';

import { ShowOnDataTableClusterSummaryWeekBaseComponent } from './show-on-datatable-clustersummaryweekbase/show-on-datatable-clustersummaryweekbase.component';
import { ShowOnDataTableClusterSummaryWeekBaseService } from './show-on-datatable-clustersummaryweekbase/show-on-datatable-clustersummaryweekbase.service';
import { ExcelService } from '../../../services/excel.service';
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
				component: ShowOnDataTableStdbsanComponent
			},
			{
				path: 'stdbscan',
				component: ShowOnDataTableStdbsanComponent
			},
			{
				path: 'clustersummary',
				component: ShowOnDataTableClusterSummaryComponent
			},
			{
				path: 'clusters',
				component: ShowOnDataTableClustersComponent
			},
			{
				path: 'clustersummaryweekbase',
				component: ShowOnDataTableClusterSummaryWeekBaseComponent
			},
			
		]),
	],
	providers: [ShowOnDataTableStdbscanService, STDbscanService, ShowOnDataTableClusterSummaryService, ShowOnDataTableClustersService, ShowOnDataTableClusterSummaryWeekBaseService,
	ExcelService],
	declarations: [
		ShowOnDataTableComponent,
		ShowOnDataTableStdbsanComponent,
		ShowOnDataTableClusterSummaryComponent,
		ShowOnDataTableClustersComponent,
		ShowOnDataTableClusterSummaryWeekBaseComponent
	]
})
export class ShowOnDataTableModule {
}

// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './base/base.component';
import { ErrorPageComponent } from './content/error-page/error-page.component';
// Auth
import { AuthGuard } from '../../../core/auth';

const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path: 'showonmap',
				loadChildren: () => import('app/views/pages/show-on-map/show-on-map.module').then(m => m.ShowOnMapModule)
			},
			{
				path: 'labeledresults',
				loadChildren: () => import('app/views/pages/labeled-results/labeled-results.module').then(m => m.LabeledResultsModule)
			},
			{
				path: 'showondatatable',
				loadChildren: () => import('app/views/pages/show-on-datatable/show-on-datatable.module').then(m => m.ShowOnDataTableModule)
			},
			{
				path: 'builder',
				loadChildren: () => import('app/views/themes/demo1/content/builder/builder.module').then(m => m.BuilderModule)
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {
}

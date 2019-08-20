// Angular
import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ShowOnDataTableStdbscanService } from './show-on-datatable-stdbscan.service';
import { STDbscanService } from '../../show-on-map/show-on-map-stdbscan/stdbscan-algo.service';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'showondatatablestdbscan',
	templateUrl: './show-on-datatable-stdbscan.component.html',
	styleUrls: ['show-on-datatable-stdbscan.component.scss'],
})
export class ShowOnDataTableStdbsanComponent implements OnInit, AfterViewInit {
	// datatable bilgileri
	displayedColumns = ['Enlem', 'Boylam', 'ZamanNumbered', 'Zaman', 'cluster'];
	dataSource: MatTableDataSource<ClusterData>;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	//
	minInterval = 60;
	// Map initliaze kullanılanlar
	timeIntervalArray = [3,5,7,8,9,10,11,12,13,14,15,20,25,30,60];
	epsilon = 400;
	epsilon2 = 200;
	minPoints = 7;
	currentSpatialData = [];
	resultClusters = [];
	constructor(private renderer: Renderer2, private elementRef: ElementRef, private _service: ShowOnDataTableStdbscanService, private activatedRoute: ActivatedRoute,
		private stbscanService: STDbscanService) {
			this.activatedRoute.queryParams.subscribe(params => {
				  let minInterval = params['min'] ? params['min']  : 3;
				  this.minInterval = minInterval;
			  });
			  this.dataSource = new MatTableDataSource([]);
	}
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}
	ngOnInit(): void {
		this.minInterval = 60;
	}

	run() {
		this._service.getSpatialData(this.minInterval).subscribe(res => {
			this.currentSpatialData = res;
			this.resultClusters = this.stbscanService.runAlgorithm(res, {
                eps1: this.epsilon, // kilometers
                eps2: this.epsilon2, // minutes
                minPoints: this.minPoints
			})
			console.log(this.currentSpatialData);
			console.log(this.resultClusters);
			let counter = 0;
			this.currentSpatialData.forEach(element => {
				element.cluster = this.resultClusters[counter];
				counter ++;
			});
			console.log(this.currentSpatialData);
			this.dataSource = new MatTableDataSource(this.currentSpatialData);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
		
	}
}
export interface ClusterData {
	Enlem: number;
	Boylam: number;
	ZamanNumbered: number;
	Zaman: string;
	cluster: number;
  }

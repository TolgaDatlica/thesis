// Angular
import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FirstDataService, LabeledResultData } from './first-data.service'
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
	selector: 'firstdata',
	templateUrl: './first-data.component.html',
	styleUrls: ['first-data.component.scss'],
})
export class FirstDataComponent implements OnInit, AfterViewInit {
	// datatable bilgileri
	displayedColumns = ['VeriPaketiSayisi', 'VeriGondermeSikligi', 'Epsilon1', 'Epsilon2', 'MinPoints'];
	dataSource: MatTableDataSource<LabeledResultData>;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	//
	minInterval = 60;
	// Map initliaze kullanılanlar
	timeIntervalArray = [3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 25, 30, 60];
	datasets = [ {name: '1. Hafta', value: 'week1'},
	{name: '2. Hafta', value: 'week2'},
	{name: '3. Hafta', value: 'week3'},
	{name: '4. Hafta', value: 'week4'}]
	epsilon = 400;
	epsilon2 = 200;
	minPoints = 7;
	selecteddatasets = [];
	currentSpatialData = [];
	resultClusters = [];
	constructor(private renderer: Renderer2, private elementRef: ElementRef, private _service: FirstDataService, private activatedRoute: ActivatedRoute) {
		this.activatedRoute.queryParams.subscribe(params => {
			let minInterval = params['min'] ? params['min'] : 3;
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
		this.dataSource = new MatTableDataSource(this._service.getLabeledResultsData());
	}

	run() {
		const selecteddatasetsCount = this.selecteddatasets.length;
		let selecteddatasetsCounter = 0;
		let tempDatasetArray = [];
		// this.selecteddatasets.forEach(selectedDataset => {
		// 	this._service.getSpatialDataWeekBase(selectedDataset, this.minInterval).subscribe(res => {
		// 		selecteddatasetsCounter ++;
		// 		tempDatasetArray = tempDatasetArray.concat(res);
		// 		if(selecteddatasetsCount === selecteddatasetsCounter) {
		// 			debugger;
		// 			this.runAlgorithm(tempDatasetArray);
		// 		}
		// 	});
		// });
		// this._service.getSpatialData(this.minInterval).subscribe(res => {
		
		// });

	}
	
}


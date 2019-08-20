// Angular
import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ShowOnDataTableClustersService } from './show-on-datatable-clusters.service'
import { STDbscanService } from '../../show-on-map/show-on-map-stdbscan/stdbscan-algo.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
	selector: 'showondatatableclusters',
	templateUrl: './show-on-datatable-clusters.component.html',
	styleUrls: ['show-on-datatable-clusters.component.scss'],
})
export class ShowOnDataTableClustersComponent implements OnInit, AfterViewInit {
	// datatable bilgileri
	displayedColumns = ['Enlem', 'Boylam', 'ZamanNumbered', 'ZamanString', 'Zaman', 'cluster', 'Adres'];
	dataSource: MatTableDataSource<ClusterData>;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	//
	minInterval = 60;
	// Map initliaze kullanılanlar
	timeIntervalArray = [3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 25, 30, 60];
	epsilon = 400;
	epsilon2 = 200;
	minPoints = 7;
	currentSpatialData = [];
	resultClusters = [];
	constructor(private renderer: Renderer2, private elementRef: ElementRef, private _service: ShowOnDataTableClustersService, private activatedRoute: ActivatedRoute,
		private stbscanService: STDbscanService) {
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
				counter++;
			});
			console.log(this.currentSpatialData);
			this.currentSpatialData.forEach(element => {
				element.Adres = element["Son Adres Bilgisi "];
				const tempMaxZaman = this.withoutTimmeOffset(element.ZamanNumbered);
				let maxMoment;
				maxMoment = moment(new Date(1970,1,1,0,0,0,0)).add(element.ZamanNumbered, 'minutes');
				element.ZamanString = this.dayConverter(maxMoment.weekday()) + ' ' + moment(tempMaxZaman).format('HH:mm');
				
			});
			this.dataSource = new MatTableDataSource(this.currentSpatialData);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;

		});

	}
	dayConverter(weeokOfDay) {
		switch (weeokOfDay) {
			case 0:
				return "Pazar";
				break;
			case 1:
				return "Pazartesi";
				break;
			case 2:
				return "Salı";
				break;
			case 3:
				return "Çarşamba";
				break;
			case 4:
				return "Perşembe";
				break;
			case 5:
				return "Cuma";
				break;
			case 6:
				return "Cumartesi";
				break;

			default:
				break;
		}
	}
	withoutTimmeOffset(min): Date {
		var date = new Date(min * 60 * 1000)
		var userTimezoneOffset = date.getTimezoneOffset() * 60000 * -1;
		return new Date(date.getTime() - userTimezoneOffset);
	}
}
export interface ClusterData {
	Enlem: number;
	Boylam: number;
	ZamanNumbered: number;
	Zaman: string;
	MinZaman: string;
	MaxZaman: string;
	ZamanString: string;
	Adres: string;
	cluster: number;
}

// Angular
import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ShowOnDataTableClusterSummaryService } from './show-on-datatable-clustersummary.service';
import { STDbscanService } from '../../show-on-map/show-on-map-stdbscan/stdbscan-algo.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
	selector: 'showondatatableclustersummary',
	templateUrl: './show-on-datatable-clustersummary.component.html',
	styleUrls: ['show-on-datatable-clustersummary.component.scss'],
})
export class ShowOnDataTableClusterSummaryComponent implements OnInit, AfterViewInit {
	// datatable bilgileri
	displayedColumns = ['Enlem', 'Boylam', 'MinZaman', 'MaxZaman', 'cluster', 'Adres'];
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
	constructor(private renderer: Renderer2, private elementRef: ElementRef, private _service: ShowOnDataTableClusterSummaryService, private activatedRoute: ActivatedRoute,
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
			console.log('Örüntüler');
			let flags = [], output = [], l = this.currentSpatialData.length, i;
			for (i = 0; i < l; i++) {
				if (flags[this.currentSpatialData[i].cluster]) continue;
				flags[this.currentSpatialData[i].cluster] = true;
				output.push(this.currentSpatialData[i]);
			}
			let resultOfMinMaxCluster = [];
			output.forEach(uniqueClusters => {
				const resultFiltered = this.currentSpatialData.filter(filterElement => {
					return filterElement.cluster === uniqueClusters.cluster;
				});
				let min, max;
				resultFiltered.forEach(elementmin => {
					if (!min) { min = elementmin; return; }
					if (min.ZamanNumbered > elementmin.ZamanNumbered) {
						min = elementmin;
					}
				});
				console.log("Cluster number: " + uniqueClusters.cluster + " min: " + min.ZamanNumbered);
				uniqueClusters.MinZamanNumbered = min.ZamanNumbered;
				const tempMinZaman = this.withoutTimmeOffset(min.ZamanNumbered);
				let minMoment;
				minMoment = moment(new Date(1970,1,1,0,0,0,0)).add(min.ZamanNumbered, 'minutes');
				uniqueClusters.MinZaman = this.dayConverter(minMoment.weekday()) + ' ' + moment(tempMinZaman).format('HH:mm');

				resultFiltered.forEach(elementmmax => {
					if (!max) { max = elementmmax; return; }
					if (max.ZamanNumbered < elementmmax.ZamanNumbered) {
						max = elementmmax;
					}
				});
				console.log("Cluster number: " + uniqueClusters.cluster + " max: " + max.ZamanNumbered);
				uniqueClusters.MaxZamanNumbered = max.ZamanNumbered;
				const tempMaxZaman = this.withoutTimmeOffset(max.ZamanNumbered);
				let maxMoment;
				maxMoment = moment(new Date(1970,1,1,0,0,0,0)).add(max.ZamanNumbered, 'minutes');
				uniqueClusters.MaxZaman = this.dayConverter(maxMoment.weekday()) + ' ' + moment(tempMaxZaman).format('HH:mm');

				uniqueClusters.Adres = uniqueClusters["Son Adres Bilgisi "];
				resultOfMinMaxCluster.push(uniqueClusters);


			});
			console.log('result...');
			console.log(resultOfMinMaxCluster);


			this.dataSource = new MatTableDataSource(resultOfMinMaxCluster);
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
	Adres: string;
	cluster: number;
}

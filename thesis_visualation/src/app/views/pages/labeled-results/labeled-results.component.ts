// Angular
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
@Component({
	selector: 'labeled-results',
	templateUrl: './labeled-results.component.html',
	styleUrls: ['labeled-results.component.scss'],
})
export class LabeledResultsComponent implements OnInit {
	constructor(private renderer: Renderer2, private elementRef: ElementRef) {
	}

	ngOnInit(): void {
	}
}

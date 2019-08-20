import { BehaviorSubject, Observable, Subject, from, throwError } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable()
export class FirstDataService {
    constructor(
        private http: HttpClient
    ) {
    }
    public getLabeledResultsData(): Array<LabeledResultData> {
        return [
            { VeriPaketiSayisi: 5558, VeriGondermeSikligi: 5, Epsilon1: 1500, Epsilon2: 30, MinPoints:20 },
            { VeriPaketiSayisi: 2950, VeriGondermeSikligi: 7, Epsilon1: 1500, Epsilon2: 45, MinPoints:18 },
            { VeriPaketiSayisi: 2915, VeriGondermeSikligi: 8, Epsilon1: 1000, Epsilon2: 45, MinPoints:18 },
            { VeriPaketiSayisi: 2904, VeriGondermeSikligi: 9, Epsilon1: 1000, Epsilon2: 45, MinPoints:17 },
            { VeriPaketiSayisi: 2894, VeriGondermeSikligi: 10, Epsilon1: 2000, Epsilon2: 40, MinPoints:15 },
        ]
    }
}
export interface LabeledResultData {
	VeriPaketiSayisi: number;
	VeriGondermeSikligi: number;
	Epsilon1: number;
	Epsilon2: number;
	MinPoints: number;
}

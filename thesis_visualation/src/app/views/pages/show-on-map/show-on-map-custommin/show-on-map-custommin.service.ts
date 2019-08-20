import { BehaviorSubject, Observable, Subject, from, throwError } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ShowOnMapCustomMinService {
    constructor(
        private http: HttpClient
    ) {
    }
    public getSpatialData(interval): Observable<any> {
        let apiUrl = './assets/data/spatial/weekall/' + interval + '.json';
        return this.http.get(apiUrl)
            .pipe(catchError(
                e => throwError(e)
            )
            );
    }
    public getColorIcon(clusternumber: any) {
        let result = { Color: '(0,0,0)', Icon: 'assets/error.png' };
        switch (clusternumber) {
            case 0: {
                result = { Color: '(100, 100, 100)', Icon: 'assets/gaming0.png' };
                break;
            }
            case 1: {
                result = { Color: '(200, 200, 200)', Icon: 'assets/gaming1.png' };
                break;
            }
            case 2: {
                result = { Color: '(300, 300, 300)', Icon: 'assets/gaming2.png' };
                break;
            }
            case 3: {
                result = { Color: '(100, 200, 300)', Icon: 'assets/gaming3.png' };
                break;
            }
            case 4: {
                result = { Color: '(200, 200, 300)', Icon: 'assets/gaming4.png' };
                break;
            }
            case 5: {
                result = { Color: '(200, 100, 300)', Icon: 'assets/gaming5.png' };
                break;
            }
            case 6: {
                result = { Color: '(300, 200, 300)', Icon: 'assets/gaming6.png' };
                break;
            }
            case 7: {
                result = { Color: '(250, 200, 100)', Icon: 'assets/gaming7.png' };
                break;
            }
            case 8: {
                result = { Color: '(100, 200, 100)', Icon: 'assets/gaming8.png' };
                break;
            }
            case 9: {
                result = { Color: '(300, 100, 300)', Icon: 'assets/gaming9.png' };
                break;
            }
            case 10: {
                result = { Color: '(150, 250, 150)', Icon: 'assets/gaming10.png' };
                break;
            }
            case 99: {
                result = { Color: '(150, 100, 100)', Icon: 'assets/center1.png' };
                break;
            }
            default: {
                result = { Color: '(0,0,0)', Icon: 'assets/error.png' };
                break;
            }
        }
        return result;
    }

}

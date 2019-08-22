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
            {HaftaSayisi: 4, VeriPaketiSayisi: 5558, VeriGondermeSikligi: 5, Epsilon1: 1500, Epsilon2: 30, MinPoints:20 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 2950, VeriGondermeSikligi: 7, Epsilon1: 1500, Epsilon2: 45, MinPoints:18 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 2915, VeriGondermeSikligi: 8, Epsilon1: 1000, Epsilon2: 45, MinPoints:18 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 2904, VeriGondermeSikligi: 9, Epsilon1: 1000, Epsilon2: 45, MinPoints:17 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 2894, VeriGondermeSikligi: 10, Epsilon1: 2000, Epsilon2: 40, MinPoints:15 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 2889, VeriGondermeSikligi: 11, Epsilon1: 2000, Epsilon2: 40, MinPoints:15 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 2831, VeriGondermeSikligi: 12, Epsilon1: 2000, Epsilon2: 40, MinPoints:15 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 2423, VeriGondermeSikligi: 13, Epsilon1: 2000, Epsilon2: 40, MinPoints:13 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 1997, VeriGondermeSikligi: 14, Epsilon1: 2000, Epsilon2: 50, MinPoints:11 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 1969, VeriGondermeSikligi: 15, Epsilon1: 2000, Epsilon2: 45, MinPoints:11 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 1693, VeriGondermeSikligi: 20, Epsilon1: 2000, Epsilon2: 59, MinPoints:10 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 1407, VeriGondermeSikligi: 25, Epsilon1: 2000, Epsilon2: 65, MinPoints:9 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 1193, VeriGondermeSikligi: 30, Epsilon1: 1500, Epsilon2: 71, MinPoints:8 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 635, VeriGondermeSikligi: 60, Epsilon1: 800, Epsilon2: 140, MinPoints:4 },
        
            {HaftaSayisi: 4, VeriPaketiSayisi: 5558, VeriGondermeSikligi: 5, Epsilon1: 600, Epsilon2: 20, MinPoints:7 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 2864, VeriGondermeSikligi: 10, Epsilon1: 600, Epsilon2: 26, MinPoints:7 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 1969, VeriGondermeSikligi: 15, Epsilon1: 800, Epsilon2: 35, MinPoints:7 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 1969, VeriGondermeSikligi: 15, Epsilon1: 1000, Epsilon2: 35, MinPoints:7 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 1693, VeriGondermeSikligi: 20, Epsilon1: 1000, Epsilon2: 35, MinPoints:7 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 1407, VeriGondermeSikligi: 25, Epsilon1: 600, Epsilon2: 35, MinPoints:6 },

            {HaftaSayisi: 4, VeriPaketiSayisi: 1693, VeriGondermeSikligi: 20, Epsilon1: 800, Epsilon2: 45, MinPoints:7 },
            {HaftaSayisi: 4, VeriPaketiSayisi: 1693, VeriGondermeSikligi: 20, Epsilon1: 400, Epsilon2: 55, MinPoints:7 },

            // 1,2,4. haftalar
            // {HaftaSayisi: 3, VeriPaketiSayisi: 2184, VeriGondermeSikligi: 10, Epsilon1: 1500, Epsilon2: 20, MinPoints:4 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1266, VeriGondermeSikligi: 20, Epsilon1: 1500, Epsilon2: 35, MinPoints:4 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1056, VeriGondermeSikligi: 25, Epsilon1: 1500, Epsilon2: 40, MinPoints:4 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 901, VeriGondermeSikligi: 30, Epsilon1: 1500, Epsilon2: 45, MinPoints:4 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 476, VeriGondermeSikligi: 60, Epsilon1: 1500, Epsilon2: 70, MinPoints:4 },

            // {HaftaSayisi: 3, VeriPaketiSayisi: 4205, VeriGondermeSikligi: 5, Epsilon1: 1500, Epsilon2: 15, MinPoints:5 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 2184, VeriGondermeSikligi: 10, Epsilon1: 1500, Epsilon2: 30, MinPoints:5 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1266, VeriGondermeSikligi: 20, Epsilon1: 1500, Epsilon2: 40, MinPoints:5 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1056, VeriGondermeSikligi: 25, Epsilon1: 1500, Epsilon2: 50, MinPoints:5 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 901, VeriGondermeSikligi: 30, Epsilon1: 1500, Epsilon2: 60, MinPoints:5 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 476, VeriGondermeSikligi: 60, Epsilon1: 1500, Epsilon2: 90, MinPoints:5 },

            // {HaftaSayisi: 3, VeriPaketiSayisi: 4205, VeriGondermeSikligi: 5, Epsilon1: 1000, Epsilon2: 15, MinPoints:6 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 2184, VeriGondermeSikligi: 10, Epsilon1: 600, Epsilon2: 30, MinPoints:6 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1266, VeriGondermeSikligi: 20, Epsilon1: 600, Epsilon2: 50, MinPoints:6 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1056, VeriGondermeSikligi: 25, Epsilon1: 600, Epsilon2: 40, MinPoints:6 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 901, VeriGondermeSikligi: 30, Epsilon1: 600, Epsilon2: 45, MinPoints:6 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 476, VeriGondermeSikligi: 60, Epsilon1: 600, Epsilon2: 70, MinPoints:6 },

            // {HaftaSayisi: 3, VeriPaketiSayisi: 4205, VeriGondermeSikligi: 5, Epsilon1: 1000, Epsilon2: 20, MinPoints:8 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 2184, VeriGondermeSikligi: 10, Epsilon1: 1000, Epsilon2: 40, MinPoints:8 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1484, VeriGondermeSikligi: 15, Epsilon1: 1000, Epsilon2: 50, MinPoints:8 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1266, VeriGondermeSikligi: 20, Epsilon1: 1000, Epsilon2: 55, MinPoints:8 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1056, VeriGondermeSikligi: 25, Epsilon1: 1000, Epsilon2: 65, MinPoints:8 },            
            // {HaftaSayisi: 3, VeriPaketiSayisi: 901, VeriGondermeSikligi: 30, Epsilon1: 1000, Epsilon2: 70, MinPoints:8 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 476, VeriGondermeSikligi: 60, Epsilon1: 1000, Epsilon2: 140, MinPoints:8 },

            // {HaftaSayisi: 3, VeriPaketiSayisi: 4205, VeriGondermeSikligi: 5, Epsilon1: 1000, Epsilon2: 25, MinPoints:9 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 2184, VeriGondermeSikligi: 10, Epsilon1: 1000, Epsilon2: 40, MinPoints:9 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1484, VeriGondermeSikligi: 15, Epsilon1: 1000, Epsilon2: 50, MinPoints:9 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1266, VeriGondermeSikligi: 20, Epsilon1: 1000, Epsilon2: 60, MinPoints:9 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1056, VeriGondermeSikligi: 25, Epsilon1: 1000, Epsilon2: 70, MinPoints:9 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 901, VeriGondermeSikligi: 30, Epsilon1: 1000, Epsilon2: 90, MinPoints:9 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 476, VeriGondermeSikligi: 60, Epsilon1: 1000, Epsilon2: 160, MinPoints:9 },

            // {HaftaSayisi: 3, VeriPaketiSayisi: 4205, VeriGondermeSikligi: 5, Epsilon1: 1000, Epsilon2: 25, MinPoints:10 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 2184, VeriGondermeSikligi: 10, Epsilon1: 1000, Epsilon2: 40, MinPoints:10 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1484, VeriGondermeSikligi: 15, Epsilon1: 1000, Epsilon2: 45, MinPoints:10 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1266, VeriGondermeSikligi: 20, Epsilon1: 1000, Epsilon2: 51, MinPoints:10 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1056, VeriGondermeSikligi: 25, Epsilon1: 2000, Epsilon2: 70, MinPoints:10 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 901, VeriGondermeSikligi: 30, Epsilon1: 2000, Epsilon2: 100, MinPoints:10 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 476, VeriGondermeSikligi: 60, Epsilon1: 2000, Epsilon2: 180, MinPoints:10 },

            // {HaftaSayisi: 3, VeriPaketiSayisi: 4205, VeriGondermeSikligi: 5, Epsilon1: 1000, Epsilon2: 25, MinPoints:11 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 2184, VeriGondermeSikligi: 10, Epsilon1: 1000, Epsilon2: 45, MinPoints:11 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1484, VeriGondermeSikligi: 15, Epsilon1: 2000, Epsilon2: 60, MinPoints:11 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1266, VeriGondermeSikligi: 20, Epsilon1: 2000, Epsilon2: 75, MinPoints:11 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1056, VeriGondermeSikligi: 25, Epsilon1: 2500, Epsilon2: 90, MinPoints:11 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 901, VeriGondermeSikligi: 30, Epsilon1: 1500, Epsilon2: 100, MinPoints:11 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 476, VeriGondermeSikligi: 60, Epsilon1: 1500, Epsilon2: 200, MinPoints:11 },

            // {HaftaSayisi: 3, VeriPaketiSayisi: 4205, VeriGondermeSikligi: 5, Epsilon1: 1500, Epsilon2: 35, MinPoints:15 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 2184, VeriGondermeSikligi: 10, Epsilon1: 1500, Epsilon2: 60, MinPoints:15 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1484, VeriGondermeSikligi: 15, Epsilon1: 1500, Epsilon2: 80, MinPoints:15 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1266, VeriGondermeSikligi: 20, Epsilon1: 1500, Epsilon2: 100, MinPoints:15 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1056, VeriGondermeSikligi: 25, Epsilon1: 1500, Epsilon2: 115, MinPoints:15 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 901, VeriGondermeSikligi: 30, Epsilon1: 1500, Epsilon2: 130, MinPoints:15 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 476, VeriGondermeSikligi: 60, Epsilon1: 1500, Epsilon2: 220, MinPoints:15 },

            // {HaftaSayisi: 3, VeriPaketiSayisi: 4205, VeriGondermeSikligi: 5, Epsilon1: 1500, Epsilon2: 40, MinPoints:20 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 2184, VeriGondermeSikligi: 10, Epsilon1: 1500, Epsilon2: 75, MinPoints:20 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1484, VeriGondermeSikligi: 15, Epsilon1: 1500, Epsilon2: 80, MinPoints:20 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1266, VeriGondermeSikligi: 20, Epsilon1: 1500, Epsilon2: 85, MinPoints:20 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1056, VeriGondermeSikligi: 25, Epsilon1: 1500, Epsilon2: 130, MinPoints:20 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 901, VeriGondermeSikligi: 30, Epsilon1: 1500, Epsilon2: 160, MinPoints:20 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 476, VeriGondermeSikligi: 60, Epsilon1: 1500, Epsilon2: 200, MinPoints:20 },

            // // 1,3,4. haftalar
            // {HaftaSayisi: 3, VeriPaketiSayisi: 4164, VeriGondermeSikligi: 5, Epsilon1: 1500, Epsilon2: 40, MinPoints:20 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 2168, VeriGondermeSikligi: 10, Epsilon1: 1800, Epsilon2: 60, MinPoints:15 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1969, VeriGondermeSikligi: 15, Epsilon1: 2000, Epsilon2: 75, MinPoints:14 },
            // {HaftaSayisi: 3, VeriPaketiSayisi: 1693, VeriGondermeSikligi: 20, Epsilon1: 2000, Epsilon2: 65, MinPoints:11 },
            //kullanılacak olan 1,3,4. haftalar
            {HaftaSayisi: 3, VeriPaketiSayisi: 4164, VeriGondermeSikligi: 5, Epsilon1: 800, Epsilon2: 25, MinPoints:10 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 2168, VeriGondermeSikligi: 10, Epsilon1: 1000, Epsilon2: 35, MinPoints:8 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 1473, VeriGondermeSikligi: 15, Epsilon1: 1200, Epsilon2: 40, MinPoints:7 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 1257, VeriGondermeSikligi: 20, Epsilon1: 1400, Epsilon2: 50, MinPoints:7 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 1048, VeriGondermeSikligi: 25, Epsilon1: 1000, Epsilon2: 60, MinPoints:6 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 892, VeriGondermeSikligi: 30, Epsilon1: 1000, Epsilon2: 70, MinPoints:6 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 476, VeriGondermeSikligi: 60, Epsilon1: 800, Epsilon2: 90, MinPoints:4 },
            //
            //kullanılacak olan 1,2,4. haftalar
            {HaftaSayisi: 3, VeriPaketiSayisi: 4205, VeriGondermeSikligi: 5, Epsilon1: 800, Epsilon2: 25, MinPoints:10 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 2184, VeriGondermeSikligi: 10, Epsilon1: 1000, Epsilon2: 35, MinPoints:8 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 1484, VeriGondermeSikligi: 15, Epsilon1: 1200, Epsilon2: 40, MinPoints:7 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 1266, VeriGondermeSikligi: 20, Epsilon1: 1400, Epsilon2: 50, MinPoints:7 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 1056, VeriGondermeSikligi: 25, Epsilon1: 1000, Epsilon2: 60, MinPoints:6 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 901, VeriGondermeSikligi: 30, Epsilon1: 1000, Epsilon2: 70, MinPoints:6 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 476, VeriGondermeSikligi: 60, Epsilon1: 800, Epsilon2: 90, MinPoints:4 },
            //
            //kullanılacak olan 1,2,3. haftalar
            {HaftaSayisi: 3, VeriPaketiSayisi: 4113, VeriGondermeSikligi: 5, Epsilon1: 1200, Epsilon2: 25, MinPoints:10 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 2156, VeriGondermeSikligi: 10, Epsilon1: 1400, Epsilon2: 35, MinPoints:8 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 1465, VeriGondermeSikligi: 15, Epsilon1: 1400, Epsilon2: 45, MinPoints:6 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 1292, VeriGondermeSikligi: 20, Epsilon1: 1400, Epsilon2: 50, MinPoints:6 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 1066, VeriGondermeSikligi: 25, Epsilon1: 1200, Epsilon2: 60, MinPoints:6 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 889, VeriGondermeSikligi: 30, Epsilon1: 1000, Epsilon2: 70, MinPoints:6 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 477, VeriGondermeSikligi: 60, Epsilon1: 1000, Epsilon2: 90, MinPoints:4 },
            //
            //kullanılacak olan 2,3,4. haftalar
            {HaftaSayisi: 3, VeriPaketiSayisi: 4192, VeriGondermeSikligi: 5, Epsilon1: 1400, Epsilon2: 30, MinPoints:11 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 2174, VeriGondermeSikligi: 10, Epsilon1: 1600, Epsilon2: 35, MinPoints:8 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 1485, VeriGondermeSikligi: 15, Epsilon1: 1600, Epsilon2: 45, MinPoints:7 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 1264, VeriGondermeSikligi: 20, Epsilon1: 1600, Epsilon2: 50, MinPoints:7 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 1051, VeriGondermeSikligi: 25, Epsilon1: 1200, Epsilon2: 60, MinPoints:6 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 897, VeriGondermeSikligi: 30, Epsilon1: 1000, Epsilon2: 70, MinPoints:6 },
            {HaftaSayisi: 3, VeriPaketiSayisi: 476, VeriGondermeSikligi: 60, Epsilon1: 1000, Epsilon2: 90, MinPoints:4 },
            //
        ]

    }
}
export interface LabeledResultData {
    HaftaSayisi: number;
	VeriPaketiSayisi: number;
	VeriGondermeSikligi: number;
	Epsilon1: number;
	Epsilon2: number;
	MinPoints: number;
}

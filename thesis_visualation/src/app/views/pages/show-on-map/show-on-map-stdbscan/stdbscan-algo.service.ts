import { BehaviorSubject, Observable, Subject, from, throwError } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
@Injectable()
export class STDbscanService {
    features;
    clusters;
    status;
    options;
    constructor() {
    }
    // processFeatures(features) {
    //     features = tf.tensor(features);
    //     console.log(features.print());
    //     features = tf.ones([features.shape[0], 1]).concat(features, 1);
    //     console.log(features.print());
    //     // features = this.standardize(features);
    //     return features;
    // }
    // standardize(features) {
    //     const { mean, variance } = tf.moments(features, 0);
    
    //     this.mean = mean;
    //     this.variance = variance;
    
    //     return features.sub(mean).div(variance.pow(0.5));
    // }
    runAlgorithm(features, options){
        this.features = features;
        this.clusters = [];
        this.status = []
        this.options = options;
        
      this.features.forEach(element => {
        element.Boylam = parseFloat(element.Boylam);
        element.Enlem = parseFloat(element.Enlem);
        element.ZamanNumbered = element.Zaman ? ((moment(element.Zaman, 'DD.MM.YYYY HH:mm:ss').toDate()).getDay() * 24 * 60) + ((moment(element.Zaman, 'DD.MM.YYYY HH:mm:ss').toDate()).getHours() * 60) + ((moment(element.Zaman, 'DD.MM.YYYY HH:mm:ss').toDate()).getMinutes()) : 0;
      });
      return this.coreAlgorithm();
    }
    coreAlgorithm(){
        this.status = [];
        this.clusters = [];

        for (var i = 0; i < this.features.length; i++) {
            if (this.status[i] === undefined) {
                this.status[i] = 0; //visited and marked as noise by default
                var neighbours = this.get_region_neighbours(i);
                var num_neighbours = neighbours.length;
                
                if (num_neighbours < this.options.minPoints) {
                    this.status[i] = 0; //noise
                } else {
                    this.clusters.push([]); //empty new cluster
                    var cluster_idx = this.clusters.length;
                    this.expand_cluster(i, neighbours, cluster_idx);
                }
            }
        }

    return this.status;

    }
    get_region_neighbours(point_idx) {
        var neighbours = [];
        var d = this.features[point_idx];

        for (var i = 0; i < this.features.length; i++) {
            if (point_idx === i) {
                continue;
            }
            if (( Math.abs(this.features[i].ZamanNumbered - d.ZamanNumbered) <= this.options.eps2) && parseFloat(this.haversine_distance(this.features[i], d)) <= parseFloat(this.options.eps1)) {
                neighbours.push(i);
            }
        }

        return neighbours;
}
 expand_cluster(point_idx, neighbours, cluster_idx) {
    this.clusters[cluster_idx - 1].push(point_idx); //add point to cluster
    this.status[point_idx] = cluster_idx;	//assign cluster id

    for (var i = 0; i < neighbours.length; i++) {
        var curr_point_idx = neighbours[i];
        if (this.status[curr_point_idx] === undefined) {
            this.status[curr_point_idx] = 0; //visited and marked as noise by default
            var curr_neighbours = this.get_region_neighbours(curr_point_idx);
            var curr_num_neighbours = curr_neighbours.length;
            if (curr_num_neighbours >= this.options.minPoints) {
                this.expand_cluster(curr_point_idx, curr_neighbours, cluster_idx);
            }
        }

        if (this.status[curr_point_idx] < 1) { // not assigned to a cluster but visited (= 0)
            this.status[curr_point_idx] = cluster_idx;
            this.clusters[cluster_idx - 1].push(curr_point_idx);
        }
    }
}
    haversine_distance(point1, point2) {
        // default 4 sig figs reflects typical 0.3% accuracy of spherical model
        if (typeof precision === 'undefined') {
            var precision = 4;
        }

        var R = 6371;
        var lat1 = point1.Enlem * Math.PI / 180,
            lon1 = point1.Boylam * Math.PI / 180;
        var lat2 = point2.Enlem * Math.PI / 180,
            lon2 = point2.Boylam * Math.PI / 180;

        var dLat = lat2 - lat1;
        var dLon = lon2 - lon1;

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c * 1000;

        return d.toPrecision(precision);
}
}
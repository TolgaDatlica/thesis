export class PageConfig {
	public defaults: any = {
		showondatatable: {
			clustersummaryweekbase: {
				page: {
					title: 'Haftalık Bazlı Kümeler',
					desc: 'Hafta Seçimi ile Küme Özeti',
					subheader: true
				}			
			},
			stdbscan: {
				page: {
					title: 'ST-DBSCAN',
					desc: 'ST-DBSCAN sonuçlarının tabloda gösterir',
					subheader: true
				}
			},
			clustersummary: {
				page: {
					title: 'Küme Özetleri',
					desc: 'Küme ÖZetlerini gösterir',
					subheader: true
				}
			},
			clusters: {
				page: {
					title: 'Kümeler',
					desc: 'Kümeleri gösterir',
					subheader: true
				}
			}
		},
		labeledresults: {
			firstdata: {
				page: {
					title: 'Sonuçlar',
					desc: 'Etiketli Sonuçların Listesi',
					subheader: true
				}
			}
		},
		dashboard: {
			page: {
				'title': 'Dashboard',
				'desc': 'Latest updates and statistic charts'
			},
		},
		showonmap: {
			stdbscan: {
				page: {
					title: 'ST-DBSCAN',
					desc: 'ST-DBSCAN sonuçlarının haritada gösterir',
					subheader: true
				}
			},
			custom: {
				page: {
					title: 'Harita',
					desc: 'Haritada gösterir',
					subheader: true
				}
			}
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}

export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Dashboards',
					root: true,
					alignment: 'left',
					page: 'dashboard',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Sonuçları Göster',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Sonuçlar',
							page: '/labeledresults/firstdata'
						}
					]
				},
				{
					title: 'Tabloda Göster',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'ST-DBSCAN',
							page: '/showondatatable/stdbscan'
						},
						{
							title: 'Küme Özeti',
							page: '/showondatatable/clustersummary'
						},
						{
							title: 'Kümeler',
							page: '/showondatatable/clusters'
						},
						{
							title: 'Haftalık Bazlı Kümeler',
							page: '/showondatatable/clustersummaryweekbase'
						},
					]
				},
				{
					title: 'Haritada Göster',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'ST-DBSCAN',
							page: '/showonmap/stdbscan'
						},
						{
							title: 'Süre Seçimi',
							page: '/showonmap/custom'
						},
					]
				},
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: 'dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{ section: 'Sonuçlar' },
				{
					title: 'Sonuçları Göster',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'Sonuçlar',
							page: '/labeledresults/firstdata'
						},
					]
				},
				{ section: 'Tablolar' },
				{
					title: 'Tabloda Göster',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'ST-DBSCAN',
							page: '/showondatatable/stdbscan'
						},
						{
							title: 'Küme Özeti',
							page: '/showondatatable/clustersummary'
						},
						{
							title: 'Kümeler',
							page: '/showondatatable/clusters'
						},
						{
							title: 'Haftalık Bazlı Kümeler',
							page: '/showondatatable/clustersummaryweekbase'
						},
					]
				},
				{ section: 'Harita' },
				{
					title: 'Haritada Göster',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'ST-DBSCAN',
							page: '/showonmap/stdbscan'
						},
						{
							title: 'Süre Seçimi',
							page: '/showonmap/custom'
						}
					]
				}
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}

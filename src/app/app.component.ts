import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorInfo } from 'tuxa/dist/shared/models/behavior-info.model';
import { DataEmitter } from 'tuxa/dist/shared/models/data-emitter.model';
import { FlowEvent } from './flow-tracker/flow-tracker.component';
import { TuxaService } from './tuxa.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'tuxa-testapp';
	cSel = 'rage-click';
	public displayedColumns: string[] = [
		'date',
		'type',
		'id',
		'textContent',
		'url',
	];
	public dataSource = new MatTableDataSource<FlowEvent>();
	public logs = new Array<FlowEvent>();

	@ViewChild('sort') sort: MatSort;

	constructor(private tuxaService: TuxaService) {}

	ngOnInit() {
		this.dataSource.data = [];
		this.logs = [];
		this.tuxaService.behaviors$.subscribe((dE: DataEmitter<BehaviorInfo>) => {
			this.logs.push({
				date: dE.data.date,
				type: dE.data.name,
				id:
					dE.data.element.getAttribute('id') ??
					dE.data.element.getAttribute('aria-label'),
				textContent: null,
				url: dE.data.url,
			});
			this.dataSource.data = this.logs
		});

		const logsDiv = document.getElementById('analysisLog');
		setInterval(() => {
			logsDiv.scrollTop = logsDiv.scrollHeight;
		}, 100);
	}

	ngOnDestroy() {
		this.dataSource.data = [];
		this.logs = [];
		this.tuxaService.stop();
	}

	public clearLogs() {
		this.dataSource.data = [];
		this.logs = [];
	}

	public selectC(selected: string) {
		this.cSel = selected;
	}
}

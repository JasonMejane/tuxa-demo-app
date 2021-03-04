import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DataEmitter } from 'tuxa/dist/shared/models/data-emitter.model';
import { EventLog } from 'tuxa/dist/shared/models/event-log.model';
import { TuxaService } from '../tuxa.service';

export interface FlowEvent {
	date: Date;
	type: string;
	id: string;
	textContent: string;
	url: string;
}

@Component({
	selector: 'app-flow-tracker',
	templateUrl: './flow-tracker.component.html',
	styleUrls: ['./flow-tracker.component.scss'],
})
export class FlowTrackerComponent implements OnInit, OnDestroy {
	public displayedColumns: string[] = [
		'date',
		'type',
		'id',
		'textContent',
		'url',
	];
	public dataSource = new MatTableDataSource<FlowEvent>();
	public logs = new Array<FlowEvent>();

	private clearTimer: any;
	private subscriptions: Subscription[] = [];

	@ViewChild('sort') sort: MatSort;

	constructor(private tuxaService: TuxaService) {}

	ngOnInit(): void {
		this.startTimer();
	}

	ngOnDestroy(): void {
		this.dataSource.data = [];
		this.logs = [];
		this.stopSubscriptions();
		clearInterval(this.clearTimer);
	}

	public startTracker() {
		this.logs = [];
		this.dataSource.data = this.logs;
		this.subscriptions.push(
			this.tuxaService.flowEvents$.subscribe(
				(eL: DataEmitter<EventLog>) => {
					this.logs.push({
						date: eL.data.date,
						type: eL.data.type,
						id:
							eL.data.element.getAttribute('id') ??
							eL.data.element.getAttribute('aria-label'),
						textContent:
							eL.data.element.textContent ??
							eL.data.element.getAttribute('placeholder'),
						url: eL.data.url,
					});
					this.dataSource.data = this.logs;
				}
			)
		);
		this.startTimer();
	}

	public stopTracker() {
		this.stopSubscriptions();
		clearInterval(this.clearTimer);
	}

	private startTimer() {
		const logsDiv = document.getElementById('flowLogs');
		this.clearTimer = setInterval(() => {
			logsDiv.scrollTop = logsDiv.scrollHeight;
		}, 100);
	}

	private stopSubscriptions() {
		this.subscriptions.forEach((subscription) =>
			subscription.unsubscribe()
		);
		this.subscriptions = [];
	}
}

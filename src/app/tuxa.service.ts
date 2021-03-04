import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tuxa } from 'tuxa';
import { takeUntil } from 'rxjs/operators';
import { Config } from 'tuxa/dist/shared/config/config';
import { DataEmitter } from 'tuxa/dist/shared/models/data-emitter.model';
import { EventLog } from 'tuxa/dist/shared/models/event-log.model';
import { BehaviorInfo } from 'tuxa/dist/shared/models/behavior-info.model';

@Injectable({
	providedIn: 'root',
})
export class TuxaService {
	public behaviors$ = new Subject<DataEmitter<BehaviorInfo>>();
	public flowEvents$ = new Subject<DataEmitter<EventLog>>();

	private tuxa: Tuxa;
	private config = new Config();
	private unsubscriber$ = new Subject<void>();
	private flowUnsubscriber$ = new Subject<void>();

	constructor() {
		this.tuxa = new Tuxa(this.config);
		this.tuxa.start();
		this.subscribeToTuxa();
	}

	public stop(): void {
		this.destroy(this.behaviors$);
		this.destroy(this.flowEvents$);
		this.unsubscriber$.next();
		this.destroy(this.unsubscriber$);
		this.flowUnsubscriber$.next();
		this.destroy(this.flowUnsubscriber$);
		this.tuxa.stop();
	}

	private destroy<T>(s$: Subject<T>): void {
		s$.complete();
		s$ = new Subject<T>();
	}

	private emit<T>(s$: Subject<T>, data: T): void {
		s$.next(data);
	}

	private subscribeToTuxa(): void {
		this.tuxa.behaviors$
			.pipe(takeUntil(this.unsubscriber$))
			.subscribe((dE: DataEmitter<BehaviorInfo>) => {
				this.emit(this.behaviors$, dE);
			});
		this.tuxa.flowEvents$
			.pipe(takeUntil(this.flowUnsubscriber$))
			.subscribe((eL: DataEmitter<EventLog>) => {
				this.emit(this.flowEvents$, eL);
			});
	}
}

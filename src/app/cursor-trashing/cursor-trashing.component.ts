import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cursor-trashing',
	templateUrl: './cursor-trashing.component.html',
	styleUrls: ['./cursor-trashing.component.scss'],
})
export class CursorTrashingComponent {
	public loading: boolean;

	constructor() {}

	public displayLoader() {
		this.loading = true;
	}
}

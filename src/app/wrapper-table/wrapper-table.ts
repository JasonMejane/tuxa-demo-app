import { DataSource } from '@angular/cdk/collections';
import {
	AfterContentInit,
	Component,
	ContentChild,
	ContentChildren,
	Input,
	QueryList,
	ViewChild,
} from '@angular/core';
import {
	MatColumnDef,
	MatHeaderRowDef,
	MatNoDataRow,
	MatRowDef,
	MatTable,
} from '@angular/material/table';

/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 */
@Component({
	selector: 'wrapper-table',
	templateUrl: 'wrapper-table.html',
	styles: [
		`
			table {
				width: 100%;
			}
		`,
	],
})
export class WrapperTable<T> implements AfterContentInit {
	@ContentChildren(MatHeaderRowDef) headerRowDefs: QueryList<MatHeaderRowDef>;
	@ContentChildren(MatRowDef) rowDefs: QueryList<MatRowDef<T>>;
	@ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;
	@ContentChild(MatNoDataRow) noDataRow: MatNoDataRow;

	@ViewChild(MatTable, { static: true }) table: MatTable<T>;

	@Input() columns: string[];
	@Input() dataSource: DataSource<T>;

	ngAfterContentInit() {
		this.columnDefs.forEach((columnDef) =>
			this.table.addColumnDef(columnDef)
		);
		this.rowDefs.forEach((rowDef) => this.table.addRowDef(rowDef));
		this.headerRowDefs.forEach((headerRowDef) =>
			this.table.addHeaderRowDef(headerRowDef)
		);
		this.table.setNoDataRow(this.noDataRow);
	}
}

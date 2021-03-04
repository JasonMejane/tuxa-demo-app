import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CursorTrashingComponent } from './cursor-trashing.component';

describe('CursorTrashingComponent', () => {
	let component: CursorTrashingComponent;
	let fixture: ComponentFixture<CursorTrashingComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [CursorTrashingComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CursorTrashingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

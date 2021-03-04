import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RageClickComponent } from './rage-click.component';

describe('RageClickComponent', () => {
	let component: RageClickComponent;
	let fixture: ComponentFixture<RageClickComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [RageClickComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RageClickComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

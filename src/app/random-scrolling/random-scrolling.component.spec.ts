import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RandomScrollingComponent } from './random-scrolling.component';

describe('RandomScrollingComponent', () => {
	let component: RandomScrollingComponent;
	let fixture: ComponentFixture<RandomScrollingComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [RandomScrollingComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RandomScrollingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

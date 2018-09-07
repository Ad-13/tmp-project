import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mainContentComponent } from './main-content.component';

describe('mainContentComponent', () => {
    let component: mainContentComponent;
    let fixture: ComponentFixture<mainContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [mainContentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(mainContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});

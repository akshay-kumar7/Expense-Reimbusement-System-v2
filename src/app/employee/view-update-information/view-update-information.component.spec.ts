import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpdateInformationComponent } from './view-update-information.component';

describe('ViewUpdateInformationComponent', () => {
  let component: ViewUpdateInformationComponent;
  let fixture: ComponentFixture<ViewUpdateInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUpdateInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUpdateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

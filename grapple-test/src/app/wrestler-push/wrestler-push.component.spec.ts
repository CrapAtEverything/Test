import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrestlerPushComponent } from './wrestler-push.component';

describe('WrestlerPushComponent', () => {
  let component: WrestlerPushComponent;
  let fixture: ComponentFixture<WrestlerPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrestlerPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrestlerPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

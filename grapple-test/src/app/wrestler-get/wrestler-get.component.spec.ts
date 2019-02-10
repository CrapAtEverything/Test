import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrestlerGetComponent } from './wrestler-get.component';

describe('WrestlerGetComponent', () => {
  let component: WrestlerGetComponent;
  let fixture: ComponentFixture<WrestlerGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrestlerGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrestlerGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

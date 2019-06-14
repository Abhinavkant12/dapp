import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaCoinComponent } from './meta-coin.component';

describe('MetaCoinComponent', () => {
  let component: MetaCoinComponent;
  let fixture: ComponentFixture<MetaCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

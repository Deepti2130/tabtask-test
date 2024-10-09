import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIfComponent } from './tab-if.component';

describe('TabIfComponent', () => {
  let component: TabIfComponent;
  let fixture: ComponentFixture<TabIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

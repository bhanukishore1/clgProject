import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitactoeComponent } from './titactoe.component';

describe('TitactoeComponent', () => {
  let component: TitactoeComponent;
  let fixture: ComponentFixture<TitactoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitactoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitactoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

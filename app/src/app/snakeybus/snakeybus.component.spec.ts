import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeybusComponent } from './snakeybus.component';

describe('SnakeybusComponent', () => {
  let component: SnakeybusComponent;
  let fixture: ComponentFixture<SnakeybusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakeybusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakeybusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

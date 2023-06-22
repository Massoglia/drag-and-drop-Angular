import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaComponent } from './tarea.component';

describe('TareaComponent', () => {
  let component: TareaComponent;
  let fixture: ComponentFixture<TareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaComponent ]
    })
    .compileComponents();
  });




  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareaComponent]
    });
    fixture = TestBed.createComponent(TareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

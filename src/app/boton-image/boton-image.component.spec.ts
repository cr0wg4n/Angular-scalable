import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonImageComponent } from './boton-image.component';

describe('BotonImageComponent', () => {
  let component: BotonImageComponent;
  let fixture: ComponentFixture<BotonImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

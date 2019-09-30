import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurtiClothingComponent } from './kurti-clothing.component';

describe('KurtiClothingComponent', () => {
  let component: KurtiClothingComponent;
  let fixture: ComponentFixture<KurtiClothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurtiClothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurtiClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

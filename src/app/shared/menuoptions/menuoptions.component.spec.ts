import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuoptionsComponent } from './menuoptions.component';

describe('MenuoptionsComponent', () => {
  let component: MenuoptionsComponent;
  let fixture: ComponentFixture<MenuoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

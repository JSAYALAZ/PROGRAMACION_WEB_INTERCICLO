import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriasMainPage } from './asesorias-main-page';

describe('AsesoriasMainPage', () => {
  let component: AsesoriasMainPage;
  let fixture: ComponentFixture<AsesoriasMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoriasMainPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsesoriasMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

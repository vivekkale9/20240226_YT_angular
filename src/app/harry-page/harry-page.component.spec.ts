import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryPageComponent } from './harry-page.component';

describe('HarryPageComponent', () => {
  let component: HarryPageComponent;
  let fixture: ComponentFixture<HarryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

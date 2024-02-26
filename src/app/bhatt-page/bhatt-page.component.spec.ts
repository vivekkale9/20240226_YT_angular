import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhattPageComponent } from './bhatt-page.component';

describe('BhattPageComponent', () => {
  let component: BhattPageComponent;
  let fixture: ComponentFixture<BhattPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BhattPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BhattPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

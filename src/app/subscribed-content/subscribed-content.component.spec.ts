import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedContentComponent } from './subscribed-content.component';

describe('SubscribedContentComponent', () => {
  let component: SubscribedContentComponent;
  let fixture: ComponentFixture<SubscribedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribedContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscribedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

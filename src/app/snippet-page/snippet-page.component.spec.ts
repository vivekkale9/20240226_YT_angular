import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetPageComponent } from './snippet-page.component';

describe('SnippetPageComponent', () => {
  let component: SnippetPageComponent;
  let fixture: ComponentFixture<SnippetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnippetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

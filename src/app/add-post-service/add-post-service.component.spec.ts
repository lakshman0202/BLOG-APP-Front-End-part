import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostServiceComponent } from './add-post-service.component';

describe('AddPostServiceComponent', () => {
  let component: AddPostServiceComponent;
  let fixture: ComponentFixture<AddPostServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPostServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsComponentComponent } from './announcements-component.component';

describe('AnnouncementsComponentComponent', () => {
  let component: AnnouncementsComponentComponent;
  let fixture: ComponentFixture<AnnouncementsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

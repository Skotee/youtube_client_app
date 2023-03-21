import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStatsBarComponent } from './video-stats-bar.component';

describe('VideoStatsBarComponent', () => {
  let component: VideoStatsBarComponent;
  let fixture: ComponentFixture<VideoStatsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoStatsBarComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(VideoStatsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

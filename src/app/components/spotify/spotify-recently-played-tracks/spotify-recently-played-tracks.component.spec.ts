import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyRecentlyPlayedTracksComponent } from './spotify-recently-played-tracks.component';

describe('SpotifyRecentlyPlayedTracksComponent', () => {
  let component: SpotifyRecentlyPlayedTracksComponent;
  let fixture: ComponentFixture<SpotifyRecentlyPlayedTracksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpotifyRecentlyPlayedTracksComponent]
    });
    fixture = TestBed.createComponent(SpotifyRecentlyPlayedTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

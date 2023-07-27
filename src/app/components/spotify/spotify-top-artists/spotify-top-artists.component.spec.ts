import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyTopArtistsComponent } from './spotify-top-artists.component';

describe('SpotifyTopArtistsComponent', () => {
  let component: SpotifyTopArtistsComponent;
  let fixture: ComponentFixture<SpotifyTopArtistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpotifyTopArtistsComponent]
    });
    fixture = TestBed.createComponent(SpotifyTopArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

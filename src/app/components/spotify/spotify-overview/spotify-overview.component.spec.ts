import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyOverviewComponent } from './spotify-overview.component';

describe('SpotifyOverviewComponent', () => {
  let component: SpotifyOverviewComponent;
  let fixture: ComponentFixture<SpotifyOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpotifyOverviewComponent]
    });
    fixture = TestBed.createComponent(SpotifyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

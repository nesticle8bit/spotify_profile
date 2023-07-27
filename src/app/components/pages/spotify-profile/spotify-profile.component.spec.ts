import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyProfileComponent } from './spotify-profile.component';

describe('SpotifyProfileComponent', () => {
  let component: SpotifyProfileComponent;
  let fixture: ComponentFixture<SpotifyProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpotifyProfileComponent]
    });
    fixture = TestBed.createComponent(SpotifyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

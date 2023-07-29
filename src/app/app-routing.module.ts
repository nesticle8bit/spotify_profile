import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyProfileComponent } from './components/pages/spotify-profile/spotify-profile.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SpotifyTopArtistsComponent } from './components/spotify/spotify-top-artists/spotify-top-artists.component';
import { SpotifyTopTracksComponent } from './components/spotify/spotify-top-tracks/spotify-top-tracks.component';
import { SpotifyRecentlyPlayedTracksComponent } from './components/spotify/spotify-recently-played-tracks/spotify-recently-played-tracks.component';
import { SpotifyPlaylistsComponent } from './components/spotify/spotify-playlists/spotify-playlists.component';

const routes: Routes = [
  { path: '', component: SpotifyProfileComponent },
  { path: 'login', component: LoginComponent },

  { path: 'artists', component: SpotifyTopArtistsComponent },
  { path: 'tracks', component: SpotifyTopTracksComponent },
  { path: 'recent', component: SpotifyRecentlyPlayedTracksComponent },
  { path: 'playlists', component: SpotifyPlaylistsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

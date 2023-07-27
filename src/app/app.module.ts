import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { SpotifyOverviewComponent } from './components/spotify/spotify-overview/spotify-overview.component';
import { SpotifyTopArtistsComponent } from './components/spotify/spotify-top-artists/spotify-top-artists.component';
import { SpotifyTopTracksComponent } from './components/spotify/spotify-top-tracks/spotify-top-tracks.component';
import { SpotifyRecentlyPlayedTracksComponent } from './components/spotify/spotify-recently-played-tracks/spotify-recently-played-tracks.component';
import { SpotifyPlaylistsComponent } from './components/spotify/spotify-playlists/spotify-playlists.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SpotifyProfileComponent } from './components/pages/spotify-profile/spotify-profile.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, SpotifyOverviewComponent, SpotifyTopArtistsComponent, SpotifyTopTracksComponent, SpotifyRecentlyPlayedTracksComponent, SpotifyPlaylistsComponent, LoginComponent, SpotifyProfileComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

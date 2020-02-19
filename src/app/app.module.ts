import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Routes
import { AppRoutingModule } from './app-routing.module';

// NG PIPES
import { TruncateTextPipe } from './pipes/truncate-text.pipe';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnimeComponent } from './components/anime/anime.component';
import { AnimeItemComponent } from './components/anime/anime-item/anime-item.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { AnimeSearchTabComponent } from './components/anime/anime-search-tab/anime-search-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AnimeComponent,
    AnimeItemComponent,
    TruncateTextPipe,
    UsersComponent,
    PostsComponent,
    AnimeSearchTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

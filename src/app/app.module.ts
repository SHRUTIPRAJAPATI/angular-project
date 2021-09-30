import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatMenuModule } from '@angular/material/menu';
import { ImagegalleryComponent } from './imagegallery/imagegallery.component';
import { ImageService } from './image.service';
 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ImagegalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatDividerModule,
    MatTabsModule,
    MatMenuModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

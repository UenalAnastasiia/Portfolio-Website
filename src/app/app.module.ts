import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioWorksComponent } from './portfolio-works/portfolio-works.component';
import { ProjectSlackComponent } from './works/project-slack/project-slack.component';
import { ProjectSharkyComponent } from './works/project-sharky/project-sharky.component';
import { ProjectCrmComponent } from './works/project-crm/project-crm.component';
import { ContactComponent } from './contact/contact.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ImprintComponent } from './imprint/imprint.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectCtrackComponent } from './works/project-ctrack/project-ctrack.component';
import { ProjectJoinComponent } from './works/project-join/project-join.component';
import { ProjectWtrackComponent } from './works/project-wtrack/project-wtrack.component';
import { ProjectVideoflixComponent } from './works/project-videoflix/project-videoflix.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioWorksComponent,
    ProjectSlackComponent,
    ProjectSharkyComponent,
    ProjectCrmComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    ProjectCtrackComponent,
    ProjectJoinComponent,
    ProjectWtrackComponent,
    ProjectVideoflixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

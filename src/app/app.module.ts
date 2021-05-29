import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { SetOrganizationComponent } from './set-organization/set-organization.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, RouterModule.forRoot([
    {path:'', component: HomeComponent},
    {path:'SetOrganization',component: SetOrganizationComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, SetOrganizationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

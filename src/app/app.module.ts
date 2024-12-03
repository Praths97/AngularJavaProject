import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RoleComponent } from './Components/role/role.component';
import { UserComponent } from './Components/user/user.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,RoleComponent,UserComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers:[provideHttpClient()]
})
export class AppModule { }

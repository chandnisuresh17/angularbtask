import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TaskComponent,
    TasksComponent,
    // ServicesComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

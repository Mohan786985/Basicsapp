import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { testComponent } from './test/test.component';
// import { CustomerSignupComponent } from './customer-signup/customer-signup.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

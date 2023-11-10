import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildrendataComponent } from './childrendata/childrendata.component';
import { testcomponent } from './test.component';
import { testifcomponent } from './testif.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildrendataComponent,
    testcomponent,
    testifcomponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

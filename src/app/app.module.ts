import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildrendataComponent } from './childrendata/childrendata.component';
import { testcomponent } from './test.component';

@NgModule({
  declarations: [AppComponent, ChildrendataComponent, testcomponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

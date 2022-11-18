import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastryDetailsComponent } from './pastry-details/pastry-details.component';
import { TagColorPipe } from './pipes/tag-color.pipe';
import { DoThingDirective } from './directives/do-thing.directive';

@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PastryDetailsComponent,
    TagColorPipe,
    DoThingDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

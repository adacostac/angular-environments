import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { environment } from '../environment';
import { ConfigToken } from './libreria/resources/config';

@NgModule({
  providers: [
    {
      provide: ConfigToken,
      useValue: {
        apiURL: environment.apiURL,
        color: 'red',
      },
    },
  ],
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

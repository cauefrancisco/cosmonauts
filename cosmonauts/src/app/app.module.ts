import { LOCALE_ID, NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FORMERR } from 'dns';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { CustomPaginatorInt } from './datas/costum-paginator';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    FormBuilder,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: MatPaginatorIntl, useValue: CustomPaginatorInt },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor },

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

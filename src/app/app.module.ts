import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app-component/app.component';
import {COMPONENTS} from './components/components';
import {StoreModule} from '@ngrx/store';
import {AppState} from '../store/app-state';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {TabMenuModule} from 'primeng/tabmenu';

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabMenuModule,
    DialogModule,
    StoreModule.forRoot(AppState)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

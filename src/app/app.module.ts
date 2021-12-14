import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { createCustomElement } from '@angular/elements';
import { AnnouncementsComponentComponent } from './components/announcements-component/announcements-component.component';

@NgModule({
  declarations: [
    FirstComponentComponent,
    AnnouncementsComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [FirstComponentComponent],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const firstElment = createCustomElement(FirstComponentComponent, {
       injector: this.injector,
    });
    const announcementsElment = createCustomElement(AnnouncementsComponentComponent, {
      injector: this.injector,
   });
    customElements.define('first-element', firstElment);
    customElements.define('announcements-element', announcementsElment);
  }

 }
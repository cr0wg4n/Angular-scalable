import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule} from './Material';
import { BotonImageComponent } from './boton-image/boton-image.component';

@NgModule({
  declarations: [AppComponent, BotonImageComponent],
  imports: [BrowserModule, HttpClientModule,MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

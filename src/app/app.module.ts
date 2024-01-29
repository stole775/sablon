import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Dodajte ReactiveFormsModule ovde
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartphoneDetailComponent } from './smartphone-detail/smartphone-detail.component';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';
import { CreateSmartphoneComponent } from './create-smartphone/create-smartphone.component';
import { HttpClientModule } from '@angular/common/http';
import { EditSmartphoneComponent } from './edit-smartphone/edit-smartphone.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartphoneDetailComponent,
    SmartphoneListComponent,
    CreateSmartphoneComponent,
    EditSmartphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

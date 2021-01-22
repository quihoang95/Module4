import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { PetComponent } from './pet/pet.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { HackernewsComponent } from './hackernews/hackernews.component';
import { LikeComponent } from './like/like.component';


@NgModule({
  declarations: [		
    AppComponent,
      FontSizeEditorComponent,
      PetComponent,
      CalculatorComponent,
      ColorPickerComponent,
      HackernewsComponent,
      LikeComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

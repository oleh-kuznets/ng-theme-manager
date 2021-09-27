import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThemesService } from './themes.service';

@NgModule({
  imports: [CommonModule],
  providers: [ThemesService]
})
export class ThemesModule { }

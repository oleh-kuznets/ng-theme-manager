import { Component, OnInit } from '@angular/core';
import { ThemeList } from './themes/themes.model';
import { ThemesService } from './themes/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(
    private themesService: ThemesService
  ) { }

  public ngOnInit(): void {
    this.themesService.initTheme();
  }

  public onThemeChange(theme: string): void {
    this.themesService.setTheme(theme);
    this.themesService.initTheme();
  }

}

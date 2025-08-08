import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent implements OnInit {
  theme: 'light' | 'dark' = 'light';

  ngOnInit(): void {
    // تحميل النمط من localStorage عند التهيئة
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    this.theme = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
  }
}

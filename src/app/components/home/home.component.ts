import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Article {
description: any;
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

@Component({
  selector: 'app-home',
  imports: [ RouterModule , CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  articles: Article[] = [
    {
      id: 1,
      title: 'أين يذهب الإنسان عندما يجد أن جميع الأماكن لا تناسبه؟',
      date: 'August 8, 2025',
      image: 'https://images.unsplash.com/photo-1754404053324-8f910c2b7e2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      excerpt: 'فيه وقت بييجي، تلاقي كل الأماكن ألوانها باهتة...',
      content: 'النص الكامل للمقال هنا ...',
      description: undefined
    },
    // ...مقالات أخرى...
  ];
}


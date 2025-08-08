import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // الصفحة الرئيسية
  { path: 'article/:id', component: ArticleDetailsComponent }, // تفاصيل المقال

];

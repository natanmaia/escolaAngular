import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ProfessorComponent } from './pages/professor/professor.component';

const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },

  {
    path: 'pages', component: PagesComponent,

    children: [
      { path: 'professor', component: ProfessorComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

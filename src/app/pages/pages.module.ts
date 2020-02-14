import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { ProfessorComponent } from './professor/professor.component';
import { ProfessorViewComponent } from './professor/professor-view/professor-view.component';

@NgModule({
  declarations: [PagesComponent, ProfessorComponent, ProfessorViewComponent],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PagesModule { }

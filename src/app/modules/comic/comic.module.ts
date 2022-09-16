import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComicRoutingModule } from './comic-routing.module';
import { ListaComponent } from './components/lista/lista.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { RouterModule } from '@angular/router';
import { ComicService } from './services/comic.service';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    ListaComponent,
    DetalleComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ComicRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ComicService,
  ]
})
export class ComicModule { }

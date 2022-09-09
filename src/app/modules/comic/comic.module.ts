import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ComicRoutingModule } from './comic-routing.module';
import { ListaComponent } from './components/lista/lista.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { RouterModule } from '@angular/router';
import { ComicService } from './services/comic.service';


@NgModule({
  declarations: [
    ListaComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    ComicRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    ComicService,
  ]
})
export class ComicModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicService } from '../../services/comic.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  selectedComic;

  constructor(
    private _comicService: ComicService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.params['id'];
    this.getComicById(id);
  }

  getComicById(id) {
    this._comicService.getComicById(id).subscribe(
      (comic) => {
        this.selectedComic = comic;
      },
      (error) => console.error(error),
    );
  }

}

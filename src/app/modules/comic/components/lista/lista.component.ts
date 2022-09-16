import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComicService } from '../../services/comic.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  showModal: boolean = false;
  series = [];
  comicToEdit: any = undefined;

  constructor(
    private _comicService: ComicService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.getComicList();
  }

  getComicList() {
    this._comicService.getAllComics().subscribe(
      (comics) => {
        this.series = comics;
      },
      (error) => console.error(error),
    );
  }

  goToDetails(id: string) {
    this._router.navigate([`/comics/${id}`]);
  }

  openModal() {
    this.showModal = true;
    this.comicToEdit = undefined;
  }

  listenFormButtons(event: boolean) {
    this.showModal = event;
    this.getComicList();
  }

  edit(comic) {
    this.showModal = true;
    this.comicToEdit = comic;
  }
}

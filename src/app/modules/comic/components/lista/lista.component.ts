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
  series = [
    {
      id: '1',
      nombre: 'The sandman',
      imagen: 'https://2.bp.blogspot.com/-Mz27kqWmoV0/Vpy5pxYCeTI/AAAAAAAABPc/ha_1ICJdAgc/s1600-Ic42/3.jpg',
      comics: [
        {
          nombre: 'Preludios y nocturnos 1',
          imagen: '',

        }
      ],
    },
    {
      id: '1',
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
    {
      id: '1',
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
    {
      id: '1',
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
    {
      id: '1',
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
    {
      id: '1',
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
    {
      id: '1',
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
    {
      id: '1',
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
    {
      id: '1',
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
  ];

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
        console.log('quejesto', comics)
      },
      (error) => {
        console.error("No se han encontrado comics");
      }
    );
  }

  goToDetails(id: string) {
    this._router.navigate([`/comics/${id}`]);
  }

  openModal() {
    this.showModal = true;
  }

  listenFormButtons(event: boolean) {
    this.showModal = event;
  }
}

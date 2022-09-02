import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  series = [
    {
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
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
    {
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
    {
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
    {
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
    {
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
    {
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
    {
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
    {
      nombre: 'Guardianes de la galaxia',
      imagen: 'https://readcomiconline.li/Uploads/Etc/1-24-2019/8267214307147.jpg',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

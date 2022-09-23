import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";

import { ListaComponent } from './lista.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ComicService } from '../../services/comic.service';
import { of } from 'rxjs';

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;
  let comicService: ComicService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
    })
    .compileComponents();
    comicService = TestBed.inject(ComicService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllComics on init', () => {
    const spy = jest.spyOn(comicService, 'getAllComics')
    .mockImplementation(() => {
      return of([]);
    });

    component.getComicList();

    expect(spy).toHaveBeenCalled();
  });

  it('should call "openModal"', () => {
    const spy = jest.spyOn(component, 'openModal');

    component.openModal();

    expect(spy).toHaveBeenCalled();
  });

  it('should call "listenFormButtons"', () => {
    const spy = jest.spyOn(component, 'listenFormButtons');

    component.listenFormButtons(true);

    expect(spy).toHaveBeenCalledWith(true);
  });

  it('should call "edit"', () => {
    const comicToEdit = {
      id: 1,
      name: 'The Sandman',
      realName: null,
      characteristic: 'Maestro de los sueños',
      description: 'The Sandman fue un comic creado por Neil Gaman y publicado por DC Comics',
      debutYear: 1989,
      numberIssues: 75,
      imageUrl: 'https://2.bp.blogspot.com/-Mz27kqWmoV0/Vpy5pxYCeTI/AAAAAAAABPc/ha_1ICJdAgc/s1600-Ic42/3.jpg',
    };

    const spy = jest.spyOn(component, 'edit');

    component.edit(comicToEdit);

    expect(spy).toHaveBeenCalledWith(comicToEdit);
  });
});

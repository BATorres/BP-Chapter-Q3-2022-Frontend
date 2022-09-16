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
});

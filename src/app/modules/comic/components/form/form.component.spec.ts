import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { FormComponent } from './form.component';
import { ComicService } from '../../services/comic.service';
import { of } from 'rxjs';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let compiled: HTMLElement;
  let comicService: ComicService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpClientTestingModule ],
    })
    .compileComponents();
    comicService = TestBed.inject(ComicService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit "sendModalResponse" with value false when click in "Cancelar" button', () => {
    jest.spyOn(component.sendModalResponse, 'emit');

    let buttonDelete = compiled.querySelector('[data-test=btn-cancel]');
    buttonDelete?.dispatchEvent(new Event('click'));

    expect( component.sendModalResponse.emit ).toHaveBeenCalledWith(false);
  });

  it('should call "createComic" service when data is undefined', () => {
    const spy = jest.spyOn(comicService, 'createComic')
    .mockImplementation(() => {
      return of([]);
    });

    component.submit();

    expect(spy).toHaveBeenCalled();
  });

  it('should call "updateComic" service when data is different from undefined', () => {
    component.data = {
      id: 1,
      name: 'The Sandman',
      realName: null,
      characteristic: 'Maestro de los sueños',
      description: 'The Sandman fue un comic creado por Neil Gaman y publicado por DC Comics',
      debutYear: 1989,
      numberIssues: 75,
      imageUrl: 'https://2.bp.blogspot.com/-Mz27kqWmoV0/Vpy5pxYCeTI/AAAAAAAABPc/ha_1ICJdAgc/s1600-Ic42/3.jpg',
    };
    const spy = jest.spyOn(comicService, 'updateComic')
    .mockImplementation(() => {
      return of([]);
    });

    component.submit();

    expect(spy).toHaveBeenCalled();
  });
});

import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

import { ComicService } from './comic.service';
import { environment } from '../../../../environments/environment';

describe('ComicService', () => {
  let service: ComicService;
  let httpTestingController: HttpTestingController;
  let apiURL: string = environment.url;

  const newComic = {
    id: null,
    name: 'Spiderman',
    realName: 'Peter Parker',
    characteristic: 'Spider powers',
    description: 'The one and only',
    debutYear: 1975,
    numberIssues: 300,
    imageUrl: 'url',
  };

  const foundComic = {
    id: 1,
    name: 'The Sandman',
    realName: null,
    characteristic: 'Master of dreams',
    description: 'Endless, king of dreams',
    debutYear: 1989,
    numberIssues: 75,
    imageUrl: 'url',
  };

  const editComic = {
    id: 2,
    name: 'Spiderman',
    realName: 'Peter J. Parker',
    characteristic: 'Spider powers',
    description: 'The one and only',
    debutYear: 1975,
    numberIssues: 300,
    imageUrl: 'url',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ComicService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should call getAllComics", (done) => {
    const mockDataDto: any = [];
    const mockDataResponse: any = [];

    service.getAllComics()
      .subscribe((data: any) => {

        expect(data)
          .toEqual(mockDataResponse)

        done();
      });

    const url = `${apiURL}`;
    const req = httpTestingController.expectOne(url);
    const request = req.request;

    expect(
      request.method
    ).toEqual('GET');

    req.flush(mockDataDto);
  });

  it("should call getComicById", (done) => {
    const mockDataDto: any = foundComic;

    const mockDataResponse: any = foundComic;

    service.getComicById('1')
      .subscribe((data: any) => {

        expect(data)
          .toEqual(mockDataResponse)

        done();
      });

    const url = `${apiURL}/1`;
    const req = httpTestingController.expectOne(url);
    const request = req.request;

    expect(
      request.method
    ).toEqual('GET');

    req.flush(mockDataDto);
  });

  it("should call createComic", (done) => {
    const mockDataDto: any = newComic;

    const mockDataResponse: any = newComic;

    service.createComic(mockDataDto)
      .subscribe((data: any) => {

        expect(data)
          .toEqual(mockDataResponse)

        done();
      });

    const url = `${apiURL}`;
    const req = httpTestingController.expectOne(url);
    const request = req.request;

    expect(
      request.method
    ).toEqual('POST');

    req.flush(mockDataDto);
  });

  it("should call updateComic", (done) => {
    const mockDataDto: any = editComic;

    const mockDataResponse: any = editComic;

    service.updateComic(mockDataDto)
      .subscribe((data: any) => {

        expect(data)
          .toEqual(mockDataResponse)

        done();
      });

    const url = `${apiURL}/2`;
    const req = httpTestingController.expectOne(url);
    const request = req.request;

    expect(
      request.method
    ).toEqual('PUT');

    req.flush(mockDataDto);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpClientTestingModule ],
    })
    .compileComponents();
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
});

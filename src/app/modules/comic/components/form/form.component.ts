import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComicService } from '../../services/comic.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() data: any;
  @Output() sendModalResponse: EventEmitter<any> = new EventEmitter(); 
  form: FormGroup;
  disabled: boolean = true;

  constructor(
    private _formBuilder: FormBuilder,
    private _comicService: ComicService,
  ) { }

  ngOnInit(): void {
    this.setForm();

    if (this.data !== undefined) {
      this.form.patchValue({...this.data});
    }
  }

  setForm() {
    this.form = this._formBuilder.group({
      id: null,
      name: [null, Validators.required],
      realName: null,
      characteristic: [null, Validators.required],
      description: [null, Validators.required],
      debutYear: [null, Validators.required],
      numberIssues: [null, Validators.required],
      imageUrl: [null, Validators.required],
    });
  }

  submit() {
    if (this.data !== undefined) {
      this._comicService.updateComic(this.form.value).subscribe(
        (response) => {
          this.sendModalResponse.emit(false);
        },
        (error) => console.error(error)
      );
    } else {
      this._comicService.createComic(this.form.value).subscribe(
        (response) => {
          this.sendModalResponse.emit(false);
        },
        (error) => console.error(error)
      );
    }   
  }

  cancel() {
    this.sendModalResponse.emit(false);
  }
}

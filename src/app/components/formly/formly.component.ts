import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.css'],
})
export class FormlyComponent implements OnInit {
  form = new FormGroup({});
  @Input() model: any;
  @Input() fields: FormlyFieldConfig[] = [];
  @Input() textButton: string = 'Guardar';
  @Output() submit: EventEmitter<unknown> = new EventEmitter();

  onSubmit() {}

  constructor() {}

  ngOnInit(): void {}
}

import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import * as json from './modal-options-table';
import { FormModalComponent } from './form-modal/form-modal.component';
import { FormModalService } from '../../../../../projects/truly-ui/src/components/form/modes/modal/form-modal.service';

let counter = 0;

@Component({
  selector: 'app-form-modaldemo',
  templateUrl: './form-modaldemo.component.html',
  styleUrls: ['./form-modaldemo.component.scss']
})
export class FormModaldemoComponent implements OnInit {

  public reactive = 'HTML';

  public dataModalOptions;

  constructor( private factory: ComponentFactoryResolver, private formModalService: FormModalService ) { }

  ngOnInit() {
    this.dataModalOptions = json.ModalOptions;
  }

  openModalForm() {
    this.formModalService.create(FormModalComponent, this.factory, 'FORM_TESTE-' + counter++ ).then((result) => {
      console.log('Result', result);
    });
  }

}

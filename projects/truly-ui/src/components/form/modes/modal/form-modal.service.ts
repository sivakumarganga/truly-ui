import { ComponentFactoryResolver, Injectable, Type } from '@angular/core';
import { ModalManagerService } from '../../../modal/services/modal-manager.service';

@Injectable()
export class FormModalService {

  constructor( public modalManager: ModalManagerService ) {}

  create( component: Type<any>, factory: ComponentFactoryResolver, identifier: string = '' ) {
    return new Promise(( resolve ) => {
      return this.modalManager.createModal( component, factory, identifier ).then((data) => {
        resolve(data);
      });
    });
  }
}

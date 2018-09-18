import { ModalManagerService } from './modal-manager.service';
import { ComponentFactoryResolver, Injectable, Type } from '@angular/core';

@Injectable()
export class ModalService {

  constructor( private modalManager: ModalManagerService ) {
    console.log('ModalService' );
  }

  create( component: Type<any>, factory: ComponentFactoryResolver, identifier: string  ) {
   return this.modalManager.createModal( component, factory, identifier );
  }
}

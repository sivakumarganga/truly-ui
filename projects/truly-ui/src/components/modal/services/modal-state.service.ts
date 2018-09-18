import { ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, Injectable, Type } from '@angular/core';
import { TlModal } from '../modal';
import { TlBackdrop } from '../../core/components/backdrop/backdrop';
import { ContainerModalService } from '../addons/container-modal/container-modal.service';
import { Subject } from 'rxjs';



@Injectable()
export class ModalStateService {

  public componentList = [];

  public subject = new Subject();

  private eventCallback: Array<EventEmitter<any>>;

  private identifierCount = 0;

  private identifier: string;

  private activeModal: ComponentRef<any>;

  private head = new Subject();

  constructor( private containerModal: ContainerModalService ) {}

  generateNewEventCallback( identifier = this.generateIdentifier() ) {
    this.identifier = identifier;
    this.eventCallback = { ...this.eventCallback, [identifier]: new EventEmitter() };
    return this.identifier;
  }

  eventCallbackSubscribe( identifier ) {
    return this.eventCallback[identifier];
  }

  setActiveModal( componentRef?: ComponentRef<any> ) {
    this.activeModal = componentRef;
    this.head.next( { activeModal: this.activeModal } );
  }


  private generateIdentifier() {
    return  'MODAL-' + this.identifierCount ++;
  }

}

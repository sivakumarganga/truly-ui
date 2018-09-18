import { ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, Injectable, Type } from '@angular/core';
import { ConfirmationOptions } from '../../dialog/dialog-confirmation/confirmation-options';
import { InfoOptions } from '../../dialog/dialog-info/info-options';
import { AlertOptions } from '../../dialog/dialog-alert/alert-options';
import { ErrorOptions } from '../../dialog/dialog-error/error-options';
import { ModalStateService } from './modal-state.service';
import { ContainerModalService } from '../addons/container-modal/container-modal.service';
import { TlModal } from '../modal';
import { Subject } from 'rxjs';
import { ComponentFactory } from '../../../../../../node_modules/@angular/core/src/linker/component_factory';
import { TlBackdrop } from '../../core/components/backdrop/backdrop';

export type DialogOptions = InfoOptions | ConfirmationOptions | AlertOptions | ErrorOptions;

let lastZIndex = 0;

@Injectable()
export class DialogManagerService {

  private view;

  private subject = new Subject();

  constructor( private modalState: ModalStateService, private containerModal: ContainerModalService) {}

  create( component: Type<any>, factoryResolver: ComponentFactoryResolver, message: string, options: DialogOptions) {

  return new Promise( resolve => {

    this.view = this.containerModal.getView();

    // setComponentModal
    const identifier =  this.modalState.generateNewEventCallback();
    const componentModalFactory = factoryResolver.resolveComponentFactory( TlModal );
    const componentModal = this.view.createComponent( componentModalFactory );
    this.modalState.componentList.push( { componentRef: componentModal, identifier: identifier } );
    this.subject.next( componentModal );
    ( <TlModal>componentModal.instance ).setServiceControl( this );
    ( <TlModal>componentModal.instance ).setComponentRef( componentModal );
    this.modalState.setActiveModal( componentModal );


    // injectComponentToModal
    const componentInjectedFactory = factoryResolver.resolveComponentFactory( component );
    const componentRefInjected = ( <TlModal>componentModal.instance ).body.createComponent( componentInjectedFactory );
    const modalOptions = Reflect.getOwnMetadata( 'annotations', Object.getPrototypeOf( componentRefInjected.instance ).constructor );
    // this.handleBackDrop( factoryResolver );
    (componentRefInjected.instance).message = message;
    this.setDialogOptions( options, componentRefInjected.instance );
    ( <TlModal>componentModal.instance ).status = 'MAX';
    ( <TlModal>componentModal.instance ).setOptions( modalOptions[ 0 ] );

    lastZIndex++;
    ( <TlModal>componentModal.instance ).modal.nativeElement.style.zIndex = lastZIndex;

    this.modalState.eventCallbackSubscribe( identifier ).subscribe( ( result: any ) => {
      resolve( result );
    });
  });
  }

  private existOptions( options ) {
    if (options === undefined) {
      return false;
    }
    return Object.keys(options).length > 0;
  }

  private setDialogOptions( options, componentInjected ) {
    if ( !this.existOptions( options ) ) {
      return;
    }
    Object.keys( options ).forEach( ( value ) => {
      componentInjected[ value ] = options[ value ];
    } );
  }

  setZIndex( componentRef?: ComponentRef<any>, element?: ElementRef ) {
    this.setActiveModal( componentRef );
    lastZIndex = this.getHighestZIndexModals( this.getZIndexModals() );
    element.nativeElement.style.zIndex = lastZIndex + 1;
  }

  private getZIndexModals() {
    const maxZIndex = [];
    const modals = document.querySelectorAll( 'tl-modal' );
    for ( let index = 0; index < modals.length; index++ ) {
      const element: any = modals[ index ];
      maxZIndex.push( element.firstElementChild.style.zIndex );
    }
    return maxZIndex;
  }

  private getHighestZIndexModals( arrayModals: Array<any> ) {
    return Math.max.apply( Math, arrayModals );
  }

  private setActiveModal( componentRef?: ComponentRef<any> ) {
    this.activeModal = componentRef;
    this.head.next( { activeModal: this.activeModal } );
  }

}

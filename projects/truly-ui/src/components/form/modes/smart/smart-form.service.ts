import { Injectable, Type } from '@angular/core';
import { ModalManagerService } from '../../../modal/services/modal-manager.service';
import { ModalConfig, ModalConfiguration } from '../../../modal/interfaces/modal-config';
import { ModalResult } from '../../../core/enums/modal-result';
import { ActionsModal } from '../../../core/enums/actions-modal';

@Injectable()
export class SmartFormService {

  public modalConfiguration: ModalConfiguration;

  constructor( public modalManager: ModalManagerService ) {}

  create( component: Type<any>, modalConfiguration: ModalConfig ) {

    this.modalConfiguration = Object.assign(new ModalConfiguration(), modalConfiguration);

    return new Promise(( resolve ) => {
      return this.modalManager.createModal( component, modalConfiguration.factory, modalConfiguration.identifier ).then((data) => {
        resolve( data );

        if ( data['mdResult'] === ModalResult.MRCANCEL
          || data === ModalResult.MRCLOSE
          || !this.modalConfiguration.actions ) {
          return;
        }
        switch ( this.modalConfiguration.executeAction ) {
          case ActionsModal.INSERT:
            if ( !this.modalConfiguration.actions.insertCall ) {
               this.throwError( 'INSERT' );
            }
            this.modalConfiguration.actions.insertCall( data['data'] );
            break;
          case ActionsModal.DELETE:
            if ( !this.modalConfiguration.actions.deleteCall ) {
              this.throwError( 'DELETE' );
            }
            break;
          case ActionsModal.UPDATE:
            if ( !this.modalConfiguration.actions.updateCall ) {
              this.throwError( 'UPDATE' );
            }
            this.modalConfiguration.actions.updateCall( data['data'] );
            break;
          case ActionsModal.VIEW:
            if ( !this.modalConfiguration.actions.viewCall ) {
              this.throwError( 'VIEW' );
            }
            this.modalConfiguration.actions.viewCall( data['data'] );
            break;
        }
      });
    });
  }


  throwError( type: string ) {
    throw new Error( 'Callback ' + type + ' not implemented' );
  }

}

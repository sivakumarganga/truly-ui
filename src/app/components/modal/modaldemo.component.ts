import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { NewModalComponent } from './newmodal/newModal.component';

import * as json from './modal-dataproperties.json';
import * as jsonEvt from './modal-dataevents.json';
import { slideToLeft } from '../../shared/animations/router.animations';
import { ModalOptions } from '../../../../projects/truly-ui/src/components/modal/interfaces/modal-options';
import { ModalManagerService } from '../../../../projects/truly-ui/src/components/modal/services/modal-manager.service';
import { ModalService } from '../../../../projects/truly-ui/src/components/modal/services/modal.service';

@Component( {
  selector: 'app-modal',
  templateUrl: './modaldemo.component.html',
  animations: [ slideToLeft()  ],
  styleUrls: [ './modaldemo.component.scss' ],
  providers: [ ModalService ]
} )
export class ModalDemoComponent {

  public index: number;
  public modalOptions: ModalOptions;

  public modalprop;
  public modalevts;
  public modalResult;


  constructor( private modalService: ModalService, private compiler: ComponentFactoryResolver) {
    this.modalevts = jsonEvt.dataEvents;
    this.modalprop = json.dataProperties;
  }

  modal1() {
    this.modalService.create( NewModalComponent, this.compiler, 'FORM1' )
      .then( ( modalResult ) => {
        console.log( modalResult );
      });
    //
    // this.modalService.on('show', ( event ) => {
    //   console.log('Show Modal', event);
    // });
  }
}

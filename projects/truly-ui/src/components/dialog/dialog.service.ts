/*
 MIT License

 Copyright (c) 2018 Temainfo Software

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
import { Injectable, ComponentFactoryResolver } from '@angular/core';

import { TlDialogInfo } from './dialog-info/dialog-info';
import { TlDialogAlert } from './dialog-alert/dialog-alert';
import { TlDialogError } from './dialog-error/dialog-error';
import { TlDialogConfirmation } from './dialog-confirmation/dialog-confirmation';

import { ConfirmationOptions } from './dialog-confirmation/confirmation-options';
import { ErrorOptions } from './dialog-error/error-options';
import { AlertOptions } from './dialog-alert/alert-options';
import { InfoOptions } from './dialog-info/info-options';
import { DialogManagerService } from '../modal/services/dialog-manager.service';

@Injectable()
export class DialogService {

    constructor( private dialogManager: DialogManagerService, private factoryResolver: ComponentFactoryResolver ) {}

    info( message: string, options?: InfoOptions ) {
        return this.dialogManager.create( TlDialogInfo, this.factoryResolver, message, options );
    }

    confirmation( message: string, callback: Function, options?: ConfirmationOptions) {
        // this.modalService.createModalDialog( TlDialogConfirmation, this.factoryResolver, callback );
        // if (options) {
        //     this.modalService.componentInjected.instance.defaultOK = options.defaultOK;
        // }
        // this.modalService.componentInjected.instance.message = message;
        // this.setDialogOptions( options );
    }

    alert( message: string, callback: Function, options?: AlertOptions ) {
        // this.modalService.createModalDialog( TlDialogAlert, this.factoryResolver, callback );
        // this.modalService.componentInjected.instance.message = message;
        // this.setDialogOptions( options );
    }

    error( message: string, callback?: Function, options?: ErrorOptions ) {
        // this.modalService.createModalDialog( TlDialogError, this.factoryResolver, callback );
        // this.modalService.componentInjected.instance.message = message;
        // this.setDialogOptions( options );
    }

}

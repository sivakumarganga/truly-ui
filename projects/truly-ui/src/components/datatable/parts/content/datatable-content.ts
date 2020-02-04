'use strict';
/*
 MIT License

 Copyright (c) 2019 Temainfo Software

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

import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Inject, Input, OnChanges,
  OnInit, SimpleChanges
} from '@angular/core';
import { TlDatatableRow } from '../row/datatable-row';
import { TlDatatableCell } from '../cell/datatable-cell';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { TlDatatable } from '../../datatable';

@Component( {
  selector: 'tl-datatable-content',
  templateUrl: './datatable-content.html',
  styleUrls: [ './datatable-content.scss', '../../datatable.scss' ],
  entryComponents: [ TlDatatableRow, TlDatatableCell ],
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class TlDatatableContent implements OnInit {

  @Input('dataSource') dataSource: Array<any> | Observable<Array<any>> | DataSource<any>;

  constructor( @Inject( forwardRef( () => TlDatatable ) ) public dt: TlDatatable) {}

  ngOnInit(): void {}


}
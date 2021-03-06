import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {HighlightJsModule} from 'ngx-highlight-js';

import {ShortcutDemoRoutingModule} from './shortcutdemo-routing.module';
import {ShortcutDemoComponent} from './shortcutdemo.component';
import { ButtonModule } from '../../../../projects/truly-ui/src/components/button';
import { ShowcaseCardModule } from '../../shared/components/showcase-card/showcase-card.module';
import { ShowcaseTablePropertiesModule } from '../../shared/components/showcase-table-properties/showcase-table-properties.module';
import { ShowcaseTableEventsModule } from '../../shared/components/showcase-table-events/showcase-table-events.module';
import { DialogModule } from '../../../../projects/truly-ui/src/components/dialog/index';
import { ShortcutModule } from '../../../../projects/truly-ui/src/components/shortcut/index';
import { ShowcaseHeaderModule } from '../../shared/components/showcase-header/showcase-header.module';

@NgModule({
  declarations: [
    ShortcutDemoComponent
  ],
  imports: [
    ShortcutModule.forRoot({ disableClass: 'ngx-disabled' }),
    ShortcutDemoRoutingModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    DialogModule,
    HighlightJsModule,
    ShowcaseCardModule,
    ShowcaseTablePropertiesModule,
    ShowcaseTableEventsModule,
    ShowcaseHeaderModule
  ],
  exports: [
    ShortcutDemoComponent
  ]
})
export class ShortcutDemoModule {}

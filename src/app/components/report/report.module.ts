import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { ReportComponent } from './report.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ClipboardModule,
        MaterialModule,
    ],
    declarations: [
        ReportComponent,
    ],
    entryComponents: [
        ReportComponent
    ],
    exports: [
        ReportComponent,
    ],
})
export class ReportModule {
}

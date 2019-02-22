import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgeBoxModule } from '@henrik/components/knowledge.box.module';
import { MatDialogModule } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DemoModal } from '@henrik/modals/demo.modal/demo.modal';
import { ButtonHenrikModule } from '@henrik/components/button.henrik.module';

@NgModule({
    imports: [
        CommonModule,
        KnowledgeBoxModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        ButtonHenrikModule,
        MatInputModule
    ],
    declarations: [DemoModal],
    entryComponents: [DemoModal],
    exports: [DemoModal]
})

export class DemoModalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgeBoxModule } from '@henrik/components/knowledge.box.module';
import { MatDialogModule } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginModal } from '@henrik/modals/login.modal/login.modal';
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
    declarations: [LoginModal],
    entryComponents: [LoginModal],
    exports: [LoginModal]
})

export class LoginModalModule { }

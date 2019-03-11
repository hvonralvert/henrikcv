import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

import { MakModal } from '@henrik/modals/mak.modal/mak.modal';
import { ButtonHenrikModule } from '@henrik/components/button.henrik.module';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        ButtonHenrikModule,
    ],
    declarations: [MakModal],
    entryComponents: [MakModal],
    exports: [MakModal]
})

export class MakModalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AboutPage } from '@henrik/pages/about/about.page';

import { WhatBoxModule } from '@henrik/components/what.box.module';
import { RealtimeBoxModule } from '@henrik/components/realtime.box.module';


const routes: Routes = [
    {
        path: '',
        component: AboutPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        WhatBoxModule,
        RealtimeBoxModule
    ],
    declarations: [AboutPage],
    exports: [AboutPage]
})

export class AboutPageModule { }

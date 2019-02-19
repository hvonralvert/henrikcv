import { Component, OnInit } from '@angular/core';

import { AdminKnowledgeService } from '@henrik/services/admin.knowledge.service';

import { Subject } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  providers: [AdminKnowledgeService]
})
export class AdminPage implements OnInit {


  ngUnsubscribe$: Subject<void> = new Subject();

  constructor(public knowServ: AdminKnowledgeService) {
  }

  ngOnInit() {
  }

  addNewKnowledges() {
    this.knowServ.addNewKnows();
  }


}

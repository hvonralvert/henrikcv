import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


import { AuthService } from '@henrik/services/auth.service';

export interface IButton {
  Text: string;
  Active: boolean;
  Order: number;
}

export interface ISellPoint {
  Header: string;
  Paragraphs: string[];
  ImgURL: string;
  Active: false;
  Order: number;
}

@Component({
  selector: 'app-mak-modal',
  templateUrl: './mak.modal.html',
  styleUrls: ['./mak.modal.scss']
})
export class MakModal {


  buttons: IButton[] = [
    {
      Text: 'Medlemsregister',
      Active: true,
      Order: 0
    },
    {
      Text: 'Ekonomi',
      Active: false,
      Order: 1
    },
    {
      Text: 'Mailutskick',
      Active: false,
      Order: 2
    },
    {
      Text: 'Flera org.',
      Active: false,
      Order: 3
    },
    {
      Text: 'Nya Medlemmar',
      Active: false,
      Order: 4
    }
  ];


  SellPoints: ISellPoint[] = [
    {
      Header: 'Medlemsregister',
      Paragraphs: [
        'Smart register som ger en snabb överblick över hela organisationen och visar när det finns ofullständiga uppgifter. ',
        'Det är enkelt att hantera både medlemmar och användare. ',
        'Medlemmar kan ha relationer till varandra.',
        'Olika medlemstyper såsom t.ex. stödmedlemmar.'
      ],
      Order: 0,
      ImgURL: './assets/mak.medlemsregister.png',
      Active: false
    },
    {
      Header: 'Ekonomi',
      Paragraphs: [
        'Snabb och enkel hantering av organisationens fakturor.',
        'Snabbt och enkelt att hantera fakturorna.',
        'Maila fakturor direkt genom systemet.',
        'Systemet skickar automatiskt ut nya fakturor när medlemskapen skall förnyas.'
      ],
      Order: 1,
      ImgURL: './assets/mak.ekonomi.png',
      Active: false
    },
    {
      Header: 'Mailutskick',
      Paragraphs: [
        'Enkelt skapa snygga mailutskick som fungerar i alla inboxar.',
        'Följ bland annat statistik på hur många som läst mailutskicken.',
        'Mailutskicken kommer från eran domän och går att svara på om så önskas.'
      ],
      Order: 2,
      ImgURL: './assets/mak.mail.png',
      Active: false
    },
    {
      Header: 'Flera organisationer',
      Paragraphs: [
        'Systemet är byggt för att kunna hantera sub-organisationer.',
        'Suborgansiationerna kan vara helt separata med t.ex egna mailadresser, bankgironummer etc.',
        'Vid borttagning av suborganisationer flyttas enkelt medlemmar och data över till en annan organisation.'
      ],
      Order: 3,
      ImgURL: './assets/mak.suborg.png',
      Active: false
    },
    {
      Header: 'Nya medlemmar',
      Paragraphs: [
        'Snygg registreringssida som nya medlemmar kan registrera sig med. ',
        'Vid ny registrering skickas automatiskt en faktura ut till mailadressen. ',
        'Den suborganisation som medlem registrerar sig hos får också notificationsmail om registreringen.'
      ],
      Order: 4,
      ImgURL: './assets/mak.register.png',
      Active: false
    }
  ]

  SellPoints_act: ISellPoint = this.SellPoints[0];

  constructor(
    public dialogRef: MatDialogRef<MakModal>,
    public authServ: AuthService
  ) { }


  buttonClick(button: IButton) {
    for (const butt of this.buttons) {
      butt.Active = butt.Text === button.Text ? true : false;
    }

    for (const sellpoint of this.SellPoints) {
      if (sellpoint.Order === button.Order) {
        this.SellPoints_act = sellpoint;
      }
    }
  }

  CloseDialog(): void {
    this.dialogRef.close();
  }

}

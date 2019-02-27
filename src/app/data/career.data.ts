import { ICareer, IParamInfoBox } from '@henrik/interfaces/app.interfaces';

export const CareerData: ICareer[] = [
    {
        Title: 'Developer / Founder',
        LoggoURL: './assets/career/ralva.png',
        CompanyName: 'Ralva Affärsutveckling AB',
        Time: 'Nov 2016 - Nu    2 år 4 mån',
        TextArray: [
            {
                Header: 'GroupCaller',
                Text: [
                    'Ralva utvecklar och konsultar inom IOT-system och Front End utveckling.  ',
                ]
            },
            {
                Header: 'Funktion',
                Text: [
                    'Min roll är grundare och utvecklare på bolaget. Jag har främst sysslat med Javascript ramverk både på Front End och Back End. IOT-enheterna programmeras med C++ med Arduino biblioteken. Hårdvaran är designad av mig och producerad i Kina.'
                ]
            }
        ]
    },
    {
        Title: 'Teknisk chef',
        LoggoURL: './assets/career/almhaga.png',
        CompanyName: 'Almhaga AB',
        Time: 'Apr 2015 - Nov 2016    1 år 8 mån',
        TextArray: [

            {
                Header: 'Funktion',
                Text: [
                    'Jag utvecklade system i VBA (Visua Basic) mot både kvalite och ekonomi. Koncernspråket var dålig till mycket dålig Engelska, vilket ställde krav på tydlighet och välgjorda grafiska kvaltiestsystem samt grafiska ekonomiska system.',
                    'Ex. produktionsekonomisystemet generade linjestatistik och ekonomiska rapporter, grafer och underlag för den konternuerliga driften och verskamhetsutvecklingen.',
                    'Photoshop och andra grafiska verktyg användes mycket, på grund av förståelsen var minimal vid skriftligt språk.'
                ]
            },
            {
                Header: 'GroupCaller',
                Text: [
                    'Almhaga AB är skandinaviens ledande producent av Allium råvaror. Almhaga förser hela marknaden från Industri, HORECA till konsument.',
                ]
            }
        ]
    },
    {
        Title: 'Affärsutvecklare',
        LoggoURL: './assets/career/foteviks.png',
        CompanyName: 'Foteviks svenska AB',
        Time: 'Okt 2011 - Nov 2016    5 år 2 mån',
        TextArray: [

            {
                Header: 'Funktion',
                Text: [
                    'I rollen som säljare så utvecklade jag säljmaterialet efterhand som vi lärde oss kunderna, applikationerna samt våran egen produkt. Här ingick bland annat reklamutskick, säljmaterial, hemsidor.',
                    'För bolagstyrningen så användes med fördel VBA 6 (Visual Basic Applications) för att kunna hantera produktionsplaneringar, produktionsstyrning, försäljning och kvalitetssystem,'
                ]
            },
            {
                Header: 'GroupCaller',
                Text: [
                    'Foteviks förser livsmedelsindustrin med sina världsunika Alliumingredienser. Bland kunderna hittar vi skandinaviskt ledande livsmedelsproducenter.',
                ]
            }
        ]
    },
    {
        Title: 'Magisteruppsats',
        LoggoURL: './assets/career/lindab.png',
        CompanyName: 'Magisteruppsats',
        Time: 'Dec 2010 - Aug 2011    9 mån',
        TextArray: [
            {
                Header: 'GroupCaller',
                Text: [
                    'Lindab AB är skandinaviens ledande ventaliton och plåt leverantör till byggsektorn.',
                ]
            },
            {
                Header: 'Funktion',
                Text: [
                    '',
                    'Vi analyserade logitstikkedjan på koncernnivå för att utvärdera diverse tilltänkta förändringar i logistikkedjan.',
                    'Förändringarna testades i ett simuleringsverktyg som vi byggde i Matlab.'
                ]
            }
        ]
    }
];




export const MyCareerHistory: IParamInfoBox = {
    Header: 'Karriärshistorik',
    TextArray: [
        {
            Header: 'Hur kom jag hit',
            Text: [
                'Sammanfattnignsvis har karriären handlat mycket om tydlighet, struktur och effektivitet. Jag har sen 2011 programmerat en del VBA för att senare år gått över till heltid Javascript/Typescript.',
            ]
        },
        {
            Text: ['Då jag har utvecklat och implementerat många rutiner också kring systemen vilket borgare för god förståelse när ett system ger avkastning och dess möjligheter samt begränsningar.'
            ]
        }
    ]
};
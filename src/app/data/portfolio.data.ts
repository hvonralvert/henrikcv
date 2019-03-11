import { IPortfolio } from '@henrik/interfaces/app.interfaces';

export const PortfolioData: IPortfolio[] = [
    {
        Header: 'GroupCaller',
        Loggo: './assets/groupcaller.png',
        TextArray: [
            {
                Header: 'GroupCaller',
                Text: [
                    'GroupCaller är ett project manegement system som kombineras med den egenutvecklade hårdvaran. Systemet tillåter att man kan vara med i flera organisationer och att man kan byta organisation on the fly.',
                ]
            },
            {
                Header: 'Funktion',
                Text: [
                    'Systemet är en hybridlösning med både webb-app och IOS samt Android appar. Grafiskt och prestandan är satt utefter Iphone 5s då den inte är tänkt för modeller äldre (samt svagare) än så.',
                    ' Det är ett realtidssystem.'
                ]
            },
            {
                Header: 'Techstack',
                Text: [
                    'Typescript, Angular 2+, Ionic, Firebase',
                ]
            }
        ],
        ProductImage: './assets/groupcaller2.png',
        ButtonText: 'Ta mig till GroupCaller',
        Link: 'www.ralva.se',
        DemoModalData: {
            anv: 'demo@ralva.se',
            los: 'demo16',
            Header: 'Groupcaller - Demo',
            GotToText: ' Gå till GroupCaller',
            PanelClass: 'groupcallerModal',
            url: 'https://groupcaller2.firebaseapp.com/loginpagedesktop'
        },
        DemoType: 'groupcaller',
        ColorDark: '#032d59',
        ColorLight: '#054b95',
        cssClass: 'goupCallerbutton'
    },
    {
        Header: 'Din Medlem',
        Loggo: './assets/dinmedlem_loggo.png',
        TextArray: [
            {
                Header: 'Din Medlem',
                Text: [
                    'Din Medlem är ett system för föreningar som hanterar faktureringar, mailutskick samt medlemskap och medlemsregister.',
                ]
            },
            {
                Header: 'Techstack',
                Text: [
                    'Typescript, Angular 2+, Ionic, Firebase',
                ]
            }
        ],
        ProductImage: './assets/dinmedlem.png',
        ButtonText: 'Ta mig till Din Medlem',
        Link: 'www.dinmedlem.se',
        DemoModalData: {
            anv: 'demo@dinmedlem.se',
            los: 'demo16',
            Header: 'Din Medlem - Demo',
            GotToText: 'Mer om Din Medlem',
            PanelClass: 'dinmedlemModal',
            url: 'https://makalosa-demo.firebaseapp.com'
        },
        DemoType: 'dinmedlem',
        ColorDark: '#3b6115',
        ColorLight: '#20932c',
        cssClass: 'dinmedlemButton'
    },
    {
        Header: 'Mitt eget bröllop',
        Loggo: './assets/rongaralvert_loggo.png',
        TextArray: [
            {
                Header: 'RongaRalvert.com',
                Text: [
                    'Hemsidan för mitt eget bröllop som visar på liten annan typ av design. Också realtidssystem med firebase som backend.',
                ]
            },
            {
                Header: 'Techstack',
                Text: [
                    'Typescript, Angular 2+, Firebase',
                ]
            }
        ],
        ProductImage: './assets/rongaralvert.png',
        ButtonText: 'Ta mig till rongaralvert.com',
        Link: 'https://rongaralvert.com/',
        ColorDark: '#b87511af',
        ColorLight: '#d49432af',
        cssClass: 'wedding'
    }
];



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
                    'Systemet är en hybridlösning med både webb-app och IOS samt Android appar. Grafiskt och prestandan är satt utefter Iphone 5s då den inte är tänkt för modeller äldre (samt svagare) än så. ',
                    'Det är ett realtidssystem.'
                ]
            },
            {
                Header: 'Techstack',
                Text: [
                    'Typescript, Angular 2+, Ionic, Firebase',
                ]
            }
        ],
        ProductImage: './assets/GroupCallerScreens.png',
        ButtonText: 'Ta mig till GroupCaller',
        Link: 'www.ralva.se'
    },
    {
        Header: 'Din Medlem',
        Loggo: './assets/groupcaller.png',
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
        ProductImage: './assets/GroupCallerScreens.png',
        ButtonText: 'Ta mig till Din Medlem',
        Link: 'www.dinmedlem.se'
    },
    {
        Header: 'Mitt eget bröllop',
        Loggo: './assets/groupcaller.png',
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
        ProductImage: './assets/GroupCallerScreens.png',
        ButtonText: 'Ta mig till rongaralvert.com',
        Link: 'www.dinmedlem.se'
    }
];



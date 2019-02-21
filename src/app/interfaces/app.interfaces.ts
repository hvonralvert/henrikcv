export interface IPageLink {
    Name: string;
    Description: string;
    Icon?: string;
    SVG?: string;
    PNG?: string;
    Active: boolean;
    Page: string;
}

export interface IInfoParam {
    Header?: string;
    Text?: string[];
}

export interface IParamInfoBox {
    Header: string;
    Text?: string;
    TextArray?: IInfoParam[];
}

export type IKnowLedgeType = 'language' | 'software' | 'career' | 'hardware' | 'tools';
export type IKnowCatType = 'language' | 'softtools' | 'graphtools' | 'backend' | 'other' | 'softdev' | 'graphdes' | 'iot' | 'mechengineer' | 'orgdev';


export interface IPortfolio {
    Header: string;
    Loggo: string;
    TextArray?: IInfoParam[];
    ButtonText: string;
    ProductImage: string;
    Link: string;
}


export interface ICareer {
    Title: string; // my title,
    CompanyName: string;
    LoggoURL: string;
    Time: string;
    TextArray: IInfoParam[];
}


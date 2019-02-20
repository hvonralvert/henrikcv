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
export type IKnowCatType = 'frontend' | 'backend' | 'other';


export interface IPortfolio {
    Header: string;
    Loggo: string;
    TextArray?: IInfoParam[];
    ButtonText: string;
    ProductImage: string;
    Link: string;
}



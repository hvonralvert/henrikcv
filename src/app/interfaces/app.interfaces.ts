export interface IPageLink {
    Name: string;
    Description: string;
    Icon?: string;
    SVG?: string;
    PNG?: string;
    Active: boolean;
    Page: string;
}

export interface IParamInfoBox {
    Header: string;
    Text?: string;
    TextArray?: string[];
}

export type IKnowLedgeType = 'language' | 'software' | 'career' | 'hardware' | 'tools';
export type IKnowCatType = 'frontend' | 'backend' | 'other';



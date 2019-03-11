import { IKnowLedgeType, IKnowCatType } from './app.interfaces';

export interface IKnowledge {
    Text: string; // the name
    Img?: string; // the png image
    Stars: number; // stars how good i know it
    key?: string; // key for the doc
    Order?: number; // order in which they are sorted
    // KnowledgeType: IKnowLedgeType; // several knowledgetypes
    Catogery: IKnowCatType[];
    state:'show'|'hide';
}



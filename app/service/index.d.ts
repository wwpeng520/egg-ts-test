import news from './news';

declare module 'egg' {
    export interface IService {
        news: News;
    }
}
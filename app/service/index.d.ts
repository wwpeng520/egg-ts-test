import news from './news';
import Tvseason from './tvseason';

declare module 'egg' {
    export interface IService {
        news: News;
        tvseason: Tvseason;
    }
}
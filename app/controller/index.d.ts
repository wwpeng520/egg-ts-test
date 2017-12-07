import NewsController from './news';
import TVSeasonController from './tvseason';

declare module 'egg' {
    export interface IController {
        news: NewsController;
        tvseason: TVSeasonController;
    }
}

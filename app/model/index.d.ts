import * as Sequelize from "sequelize";
import { INewsInstance, INews} from  './news';

declare module 'egg' {
    export interface Application {
        model: Sequelize.Sequelize & {
            News: Sequelize.Model<INewsInstance, INews>
            Tvseason: Sequelize.Model<ITVSeasonInstance, ITVSeason>
        };
    }
}
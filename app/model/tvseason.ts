// import { Sequelize, sequelize } from '../core/db_manager';
import * as Sequelize from "sequelize";
import { Application } from 'egg';

interface ITVSeason {
    id?: number,
    name?: string,
    showName?: string,
    country?: string,
    currentSeason?: number,
    seasonsCount?: number,
    episodesCount?: number,
    directors?: object,
    casts?: object,
    summary?: string,
    isTV?: boolean,
    poster?: string,
    genres?: Array<string>,
    otherNames?: Array<string>,
    releaseDate?: string,
    isOver?: boolean,
    language?: string,
    orgiName?: string,
    network?: string,
    subtype?: string,
    tvType?: string,
    year?: number,
    runtime?: string,
    doubanScore?: number,
    doubanRateCount?: number ,
    doubanData?: object,
    doubanId?: string,
    IMDBId?: string,
    IMDBScore?: number,
    IMDBData?: object,
    extra?: object,
    createdAt?: Date,
    updatedAt?: Date
}

interface ITVSeasonInstance extends ITVSeason, Sequelize.Instance<ITVSeason> {

}

let schema = {
    id: { type: Sequelize.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: true, showName: "名称" },
    showName: { type: Sequelize.STRING, allowNull: true, showName: "展示名称" },
    country: { type: Sequelize.STRING, allowNull: true, showName: "国家" },
    currentSeason: { type: Sequelize.INTEGER, allowNull: true, showName: "季数" },
    seasonsCount: { type: Sequelize.INTEGER, allowNull: true, showName: "多少季" },
    episodesCount: { type: Sequelize.INTEGER, allowNull: true, showName: "多少集" },
    directors: { type: Sequelize.JSONB, allowNull: true, showName: "导演" },
    casts: { type: Sequelize.JSONB, allowNull: true, showName: "演员" },
    summary: { type: Sequelize.TEXT, allowNull: true, showName: "简介" },
    isTV: { type: Sequelize.BOOLEAN, allowNull: true, showName: "类型" },
    poster: { type: Sequelize.STRING, allowNull: true, showName: "海报" },
    subtype: { type: Sequelize.STRING, allowNull: true, showName: "海报" },
    genres: { type: Sequelize.ARRAY(Sequelize.STRING), allowNull: true, showName: "类型" },
    otherNames: { type: Sequelize.ARRAY(Sequelize.STRING), allowNull: true, showName: "其他名字" },
    releaseDate: { type: Sequelize.STRING, allowNull: true, showName: "发布时间" },
    isOver: { type: Sequelize.BOOLEAN, allowNull: true, showName: "是否完结" },
    language: { type: Sequelize.STRING, allowNull: true, showName: "语言" },
    orgiName: { type: Sequelize.STRING, allowNull: true, showName: "原名字" },
    network: { type: Sequelize.STRING, allowNull: true, showName: "发行商" },
    tvType: { type: Sequelize.STRING, allowNull: true, showName: "tv类别" },
    year: { type: Sequelize.INTEGER, allowNull: true, showName: '发行年份' },
    runtime: { type: Sequelize.STRING, allowNull: true, showName: "单集时长(分钟)" },
    doubanScore: { type: Sequelize.FLOAT, allowNull: true, showName: "豆瓣评分" },
    doubanRateCount: { type: Sequelize.INTEGER, allowNull: true, showName: "豆瓣评分人数" },
    doubanData: { type: Sequelize.JSONB, allowNull: true, showName: "豆瓣数据" },
    doubanId: { type: Sequelize.STRING, allowNull: false, showName: "豆瓣Id" },
    IMDBId: { type: Sequelize.STRING, allowNull: true, showName: "IMDB Id" },
    IMDBScore: { type: Sequelize.FLOAT, allowNull: true, showName: "IMDB评分" },
    IMDBData: { type: Sequelize.JSONB, allowNull: true, showName: "豆瓣数据" },
    extra: { type: Sequelize.JSONB, allowNull: true, showName: "其他" },
}


const schemaOption = {
    classMethods: {
        // getTVSeason: () => {
        //     return {
        //         isRegisterDataAdmin: true,
        //         className: "配置信息",
        //         displayList: ["id", "key", "value", "state"],
        //         searchableList: ["key", "value"],
        //         editableList: ["key", "value", "valueType", "state"],
        //         autoCreatedList: ["id", "createdAt", "updatedAt"],
        //     };
        // },
    },
    indexes: [
        {
            unique: false,
            fields: ['name'],
        },
        {
            unique: false,
            fields: ['showName'],
        },
        {
            unique: true,
            fields: ['doubanId'],
        },
    ],
};

export { ITVSeason, ITVSeasonInstance };

export default (app: Application) => {
  let tvseason = app.model.define<ITVSeasonInstance, ITVSeason>('TVSeason', schema, schemaOption);
  app.logger.info(`model TV seasons loaded`)
  return tvseason;
}

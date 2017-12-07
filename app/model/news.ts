import * as Sequelize from "sequelize";
import { Application } from 'egg';

interface INews {
    id?: number;
    siteName?: string;
    siteSlug?: string;
    postId?: number;
    authorName: string;
    url?: string;
    title?: string;
    content?: string;
    summary?: string;
    cover?: string;
    summaryAuto?: string;
    publishDate?: Date;
    isShow?: boolean;
    isCart?: boolean;
    extra?: object;
    language?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface INewsInstance extends INews, Sequelize.Instance<INews> {
}

const schema = {
    id: { type: Sequelize.INTEGER, unique: true, autoIncrement: true, primaryKey: true, displayName: 'id' },
    siteName: { type: Sequelize.STRING, allowNull: true, displayName: '站点名称' },
    siteSlug: { type: Sequelize.STRING, allowNull: true, displayName: '站点slug' },
    authorName: { type: Sequelize.STRING, allowNull: true, displayName: '作者' },
    postId: { type: Sequelize.STRING, allowNull: true, displayName: 'postId' },
    url: { type: Sequelize.TEXT, allowNull: false },
    title: { type: Sequelize.TEXT, allowNull: false, displayName: '标题' },
    summary: { type: Sequelize.TEXT, allowNull: true },
    cover: { type: Sequelize.TEXT, allowNull: true },
    content: { type: Sequelize.TEXT, allowNull: true },
    summaryAuto: { type: Sequelize.TEXT, allowNull: true },
    publishDate: { type: Sequelize.DATE, allowNull: true },
    isShow: { type: Sequelize.BOOLEAN, allowNull: true },
    isCart: { type: Sequelize.BOOLEAN, allowNull: true },
    extra: { type: Sequelize.JSONB, allowNull: true },
    language: {type: Sequelize.STRING, allowNull: true, displayName: '语言' },
};

const schemaOption = {
    indexes: [
        {
            unique: false,
            fields: ['publishDate']
        },
        {
            unique: false,
            fields: ['siteSlug']
        },
        {
            unique: false,
            fields: ['language']
        }
    ],
    timestamps: true
};

export { INews, INewsInstance }

export default (app: Application) => {
    let news = app.model.define<INewsInstance, INews>('News', schema, schemaOption);
    // News.classLevelMethod = function () {
    //     return 'foo';
    // };

    // // Adding an instance level method
    // News.prototype.instanceLevelMethod = function () {
    //     return 'bar';
    // };
    app.logger.info(`model news loaded`)
    return news;
}

import { Service, Context } from 'egg';
import {INewsInstance} from "../model/news"
const NewsAttributes = ['id', 'title', 'summary', 'summaryAuto', 'url', 'siteName', 'siteSlug',
    'language', 'authorName', 'publishDate'];

export default class News extends Service {
    constructor(ctx: Context) {
        super(ctx);
    }

    async list(lastId: number) {
        let result:INewsInstance[];
        if (lastId < 0) {
            result = await this.app.model.News.findAll({
                where:{
                    isShow:true,
                    isCart:true,
                },
                limit: 20,
                order: [["publishDate", "desc"]],
                attributes: NewsAttributes
            })
        } else {
            let lastDate =  new Date( lastId );
            result = await this.app.model.News.findAll({
                where: {
                    publishDate: {
                        $lt: lastDate
                    },
                    isShow:true,
                    isCart:true,
                },
                limit: 20,
                order: [["publishDate", "desc"]],                
                attributes: NewsAttributes
            })
        }
        this.app.logger.info(`result length ${result.length}`)
        if (result.length > 0) {
            let lastId = result[result.length - 1].publishDate.getTime();
            return {
                data: result,
                links: {
                    next: `/api/news?last_id=${lastId}`
                }
            };
        } else {
            return {
                data: [],
                links: {
                }
            };
        }
    }

}
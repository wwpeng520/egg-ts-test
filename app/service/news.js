"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const NewsAttributes = ['id', 'title', 'summary', 'summaryAuto', 'url', 'siteName', 'siteSlug',
    'language', 'authorName', 'publishDate'];
class News extends egg_1.Service {
    constructor(ctx) {
        super(ctx);
    }
    async list(lastId) {
        let result;
        if (lastId < 0) {
            result = await this.app.model.News.findAll({
                where: {
                    isShow: true,
                    isCart: true,
                },
                limit: 20,
                order: [["publishDate", "desc"]],
                attributes: NewsAttributes
            });
        }
        else {
            let lastDate = new Date(lastId);
            result = await this.app.model.News.findAll({
                where: {
                    publishDate: {
                        $lt: lastDate
                    },
                    isShow: true,
                    isCart: true,
                },
                limit: 20,
                order: [["publishDate", "desc"]],
                attributes: NewsAttributes
            });
        }
        this.app.logger.info(`result length ${result.length}`);
        if (result.length > 0) {
            let lastId = result[result.length - 1].publishDate.getTime();
            return {
                data: result,
                links: {
                    next: `/api/news?last_id=${lastId}`
                }
            };
        }
        else {
            return {
                data: [],
                links: {}
            };
        }
    }
}
exports.default = News;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBdUM7QUFFdkMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzFGLFVBQVUsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFN0MsVUFBMEIsU0FBUSxhQUFPO0lBQ3JDLFlBQVksR0FBWTtRQUNwQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFjO1FBQ3JCLElBQUksTUFBc0IsQ0FBQztRQUMzQixFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZDLEtBQUssRUFBQztvQkFDRixNQUFNLEVBQUMsSUFBSTtvQkFDWCxNQUFNLEVBQUMsSUFBSTtpQkFDZDtnQkFDRCxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDaEMsVUFBVSxFQUFFLGNBQWM7YUFDN0IsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxRQUFRLEdBQUksSUFBSSxJQUFJLENBQUUsTUFBTSxDQUFFLENBQUM7WUFDbkMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDdkMsS0FBSyxFQUFFO29CQUNILFdBQVcsRUFBRTt3QkFDVCxHQUFHLEVBQUUsUUFBUTtxQkFDaEI7b0JBQ0QsTUFBTSxFQUFDLElBQUk7b0JBQ1gsTUFBTSxFQUFDLElBQUk7aUJBQ2Q7Z0JBQ0QsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ2hDLFVBQVUsRUFBRSxjQUFjO2FBQzdCLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0QsTUFBTSxDQUFDO2dCQUNILElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUscUJBQXFCLE1BQU0sRUFBRTtpQkFDdEM7YUFDSixDQUFDO1FBQ04sQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDO2dCQUNILElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxFQUNOO2FBQ0osQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0NBRUo7QUFsREQsdUJBa0RDIn0=
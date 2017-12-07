import { Service, Context } from 'egg';
import { ITVSeasonInstance } from "../model/tvseason";

export default class Tvseason extends Service {
  constructor(ctx: Context) {
    super(ctx);
  }

  async list() {
    let result: ITVSeasonInstance[];
    result = await this.app.model.Tvseason.findAll({
      attributes: ["id", "showName", "country", "genres", "year", "runtime", "doubanScore", "summary", "createdAt"],
      limit: 12
    });
    return result
  }

}
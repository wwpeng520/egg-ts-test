import { Service, Context } from 'egg';

export default class Tvseason extends Service {
    constructor(ctx: Context) {
        super(ctx);
    }

    async list() {
      const result = await this.app.model.Tvseason.findAll({
        limit: 12
      });
      return result
    }

}
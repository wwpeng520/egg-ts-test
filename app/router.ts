import { Application } from 'egg';

export default (app: Application) => {
    const controller = app.controller;
    // app.redirect('/', '/api/news');
    app.get('/api/news', controller.news.list);
    app.get('/tvseasons/top12', controller.tvseason.getTop12);
    app.get('/tvseasons/:id', controller.tvseason.getById);
};
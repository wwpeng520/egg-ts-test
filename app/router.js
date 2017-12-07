"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const controller = app.controller;
    // app.redirect('/', '/api/news');
    app.get('/api/news', controller.news.list);
    app.get('/tvseasons/top12', controller.tvseason.getTop12);
    app.get('/tvseasons/:id', controller.tvseason.getById);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0JBQWUsQ0FBQyxHQUFnQixFQUFFLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUNsQyxrQ0FBa0M7SUFDbEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNELENBQUMsQ0FBQyJ9
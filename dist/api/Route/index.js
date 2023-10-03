"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const user_1 = require("./user");
const routes = () => {
    const router = (0, express_1.Router)();
    router.get('/', (_req, res) => {
        res.send('Welcome to stack_overflow');
    });
    router.use('/api/users', user_1.userRoutes);
    return router;
};
exports.routes = routes;
//# sourceMappingURL=index.js.map
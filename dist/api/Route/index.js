"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const user_1 = require("./user");
const profile_1 = require("./profile");
const question_1 = require("./question");
const tag_1 = require("./tag");
const answer_1 = require("./answer");
const routes = () => {
    const router = (0, express_1.Router)();
    router.get('/', (_req, res) => {
        res.send('Welcome to stack_overflow');
    });
    router.use('/api/users', user_1.userRoutes);
    router.use('/api/user/profile', profile_1.profileRoutes);
    router.use('/api/questions', question_1.questionRoutes);
    router.use('/api/tags', tag_1.tagRoutes);
    router.use('/api/answers', answer_1.answerRoutes);
    return router;
};
exports.routes = routes;
//# sourceMappingURL=index.js.map
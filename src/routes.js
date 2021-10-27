import React from 'react';
import Wrapper from './pageWrapper';
import Index from './App';
import BlogEditor from './BlogEditor';
import BlogArticle from './BlogArticle';

const route = {
    path: '/',
    label: '首页',
    component: Wrapper,
    routes: [
        {
            exact: true,
            path: '/',
            component: Index,
        },
        {
            path: '/blog_editor',
            component: BlogEditor,
        },
        {
            path: '/blog_article',
            component: BlogArticle,
        },
    ],
};

export default route;

import React from 'react';
import Wrapper from './pageWrapper';
import Index from './App';
import BlogEditor from './BlogEditor';
import Blog2_2 from './blog2-2';
import Blog3 from './blog3';

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
    ],
};

export default route;

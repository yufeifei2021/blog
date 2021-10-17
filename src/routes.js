import React from 'react';

import Blog1 from './blog1';
import Blog2_1 from './blog2-1';
import Blog2_2 from './blog2-2';
import Blog3 from './blog3';

const route = {
    path: '/',
    label: '首页',
    component: Blog1,
    routes: [
        {
            path: '/child_1',
            label: '第一个子组件',
            component: Blog2_1,
            routes: [
                {
                    path: '/child_1/child_1_1',
                    label: '深层子组件',
                    component: Blog3,
                }
            ]
        },
        {
            path: '/child_2',
            label: '第二个子组件',
            component: Blog2_2, 
        }
    ]
}
export default route;
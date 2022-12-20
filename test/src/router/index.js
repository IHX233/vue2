import VueRouter from "vue-router";
import Count from '../pages/count'
import CountOne from '../pages/count1'
import Num from '../pages/num'
import Word from '../pages/word'
export default new VueRouter({
    routes: [{
            path: '/count',
            component: Count
        },
        {
            path: '/count1',
            component: CountOne,
            children: [{
                    path: 'num',
                    component: Num
                },
                {
                    path: 'word',
                    component: Word
                }
            ]
        }
    ]
})
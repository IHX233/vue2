import VueRouter from "vue-router";
import Count from '../components/count'
import CountOne from '../components/count1'
export default new VueRouter({
    routes: [{
            path: '/count',
            component: Count
        },
        {
            path: '/count1',
            component: CountOne
        }
    ]
})
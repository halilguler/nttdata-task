import { lazy } from 'react';
import Paths from '../constant/path';

const Home = lazy(() => import('../pages/Home/Home'));

const routes = [
    {
        name: 'home',
        path: Paths.HOME,
        Component: Home,
        Fallback: null,
    },
]

export default routes;

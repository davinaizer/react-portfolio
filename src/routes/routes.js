import { About, Home, Contact, Resume, Work } from '../containers';
import { WorkInfo } from '../components';

const AppData = require('../config/config.json');
const routes = [
    { path: '/', title: 'Home', Component: Home, isVisible: false },
    { path: '/about', title: 'About', Component: About },
    {
        path: '/work',
        title: 'Work',
        Component: Work,
        data: { data: AppData.works },
    },
    {
        path: '/work/:id',
        title: 'Work',
        Component: WorkInfo,
        isVisible: false,
        data: { data: AppData.works },
    },
    { path: '/resume', title: 'Resume', Component: Resume },
    { path: '/contact', title: 'Contact', Component: Contact },
];

export default routes;

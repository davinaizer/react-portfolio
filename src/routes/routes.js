import { About, Home, Contact, Resume, Work } from '../containers';
import { WorkInfo } from '../components';

const AppData = require('../App.json');
const routes = [
    { path: '/', title: 'Home', Component: Home, isVisible: false },
    { path: '/about', title: 'About', Component: About },
    {
        path: '/work',
        title: 'Work',
        Component: Work,
        data: { data: AppData.work },
    },
    {
        path: '/work/:id',
        title: 'Work',
        Component: WorkInfo,
        isVisible: false,
        data: { data: AppData.work },
    },
    { path: '/resume', title: 'Resume', Component: Resume },
    { path: '/contact', title: 'Contact', Component: Contact },
];

export default routes;

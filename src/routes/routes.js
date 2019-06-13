import { About, Home, Contact, Resume, Work } from '../containers';
import { WorkInfo } from '../components';

const routes = [
    { path: '/', title: 'Home', Component: Home, isVisible: false },
    { path: '/about', title: 'About', Component: About },
    {
        path: '/work',
        title: 'Work',
        Component: Work,
    },
    {
        path: '/work/:id',
        title: 'Work',
        Component: WorkInfo,
        isVisible: false,
    },
    { path: '/resume', title: 'Resume', Component: Resume },
    { path: '/contact', title: 'Contact', Component: Contact },
];

export default routes;

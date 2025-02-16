import { LayoutWrapper } from '@/components/Layout/MainLayoutContainer';
import Home from '@/pages/Home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([{ element: <LayoutWrapper />, children: [{ path: '/', element: <Home /> }] }]);

export default router;

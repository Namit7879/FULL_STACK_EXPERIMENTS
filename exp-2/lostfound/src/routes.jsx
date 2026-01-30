import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import ReportItem from './pages/ReportItem';
import ViewItems from './pages/ViewItems';
import MyClaims from './pages/MyClaims';
import AdminDashboard from './pages/AdminDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'report', element: <ReportItem /> },
      { path: 'items', element: <ViewItems /> },
      { path: 'claims', element: <MyClaims /> },
      { path: 'admin', element: <AdminDashboard /> },
    ],
  },
]);

export default router;

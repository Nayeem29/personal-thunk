import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../layout/Admin/Dashboard';
import Main from '../layout/Main/Main';
import AddContent from '../pages/admin/AddContent';
import ContentList from '../pages/admin/ContentList';
import Content from '../pages/Main/Content';
import History from '../pages/Main/History';
import Home from '../pages/Main/Home';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'content/:id',
        element: <Content />
      },
      {
        path: 'history',
        element: <History />
      }
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard',
        element: <ContentList />
      },
      {
        path: 'addContent',
        element: <AddContent />
      }
    ]
  }
])
export default route;
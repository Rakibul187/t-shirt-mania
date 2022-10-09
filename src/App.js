import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Orders from './Components/Orders/Orders';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: async () => fetch('tshirt.json'),
          element: <Home></Home>
        },
        {
          path: 'orders', element: <Orders></Orders>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

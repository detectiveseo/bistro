import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Components/Pages/Home/Home';
import Menu from './Components/Pages/Menu/Menu';
import Shop from './Components/Pages/Shop/Shop';

const Router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: ([
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "menu",
                    element: <Menu></Menu>
                },
                {
                    path: "shop",
                    element: <Shop></Shop>
                }
            ]
    )
}])

export default Router;
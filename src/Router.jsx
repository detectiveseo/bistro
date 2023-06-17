import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Components/Pages/Home/Home';
import Menu from './Components/Pages/Menu/Menu';
import Shop from './Components/Pages/Shop/Shop';
import Order from './Components/Pages/Order/Order';
import CreateAndLogin from './Components/Pages/Account/CreateAndLogin';
import Dasboard from './Components/Pages/Dashboard/Dasboard';

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
                },
                {
                    path: "order/:category",
                    element: <Order></Order>
                },
                {
                    path: "login",
                    element: <CreateAndLogin></CreateAndLogin>
                },
                {
                    path: "dashboard",
                    element: <Dasboard></Dasboard>
                }
            ]
    )
}])

export default Router;
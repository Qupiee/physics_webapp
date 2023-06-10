import Account from "./Components/Account";
import Authorization from "./Components/Authorization";
import Registration from "./Components/Registration";
import Main from "./Components/Main";
import Tasks from "./Components/Tasks";
import Theory from "./Components/Theory";

const AppRoutes = [
    {
        path: '/',
        element: <Main />

    },
    {
        path: '/theory',
        element: <Theory />
    },
    {
        path: '/tasks',
        element: <Tasks />
    },
    {
        path: '/account',
        element: <Account />
    },
    {
        path: '/authorization',
        element: <Authorization />
    },
    {
        path: '/registration',
        element: <Registration />
    }
]

export default AppRoutes;

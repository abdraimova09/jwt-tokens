import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

const Routing = () => {
    let PUBLIC_ROUTES = [
        {
            link: '/signin',
            element: <SignIn />,
            id: 1,
        },
        {
            link: '/signup',
            element: <SignUp />,
            id: 2,
        },
    ];

    return (
        <Routes>
            {PUBLIC_ROUTES.map((item) => (
                <Route key={item.id} path={item.link} element={item.element} />
            ))}
        </Routes>
    );
};

export default Routing;
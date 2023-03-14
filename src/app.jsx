import React from 'react';
import {
    Routes,
    Route,
    Outlet,
    NavLink,
} from "react-router-dom";
import {
    FaBook,
    FaHome,
} from 'react-icons/fa';
import {
    Layout,
    Sidebar,
} from 'marcinpl87-library';
import Home from './pages/home';

const getNavLink = (url) => {
    return ({children}) => (
        <NavLink
            className={({isActive}) =>
                isActive
                    ? "active"
                    : ""
            }
            to={url}
        >
            {children}
        </NavLink>
    );
};

export default () => (
    <Layout
        sidebar={Sidebar}
        menu={[
            {
                anchor: "Home",
                iconComp: FaHome,
                linkComp: getNavLink("/"),
            },
            {
                anchor: "Subpage",
                iconComp: FaBook,
                linkComp: getNavLink("/test-url2"),
            },
        ]}
    >
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route index element={<Home />} />
                <Route path="test-url2" element={<div>Sub Page</div>} />
            </Route>
        </Routes>
    </Layout>
);

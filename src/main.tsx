import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from './features/auth/index.tsx';
import NotFoundPage from './features/not-found/index.tsx';
import ProfilePage from './features/profile/index.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/profile',
        element: <ProfilePage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

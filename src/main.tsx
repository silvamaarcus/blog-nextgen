import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from './features/auth/index.tsx';
import NotFoundPage from './features/not-found/index.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
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

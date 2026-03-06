import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AddPostPage from './features/add-post';
import LoginPage from './features/auth';
import NotFoundPage from './features/not-found';
import ProfilePage from './features/profile';

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
        path: '/addPost',
        element: <AddPostPage />,
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

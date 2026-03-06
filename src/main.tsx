import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from './features/auth';
import NotFoundPage from './features/not-found';
import PostPage from './features/post';
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
        path: '*',
        element: <NotFoundPage />,
    },
    {
        path: '/post/:postId',
        element: <PostPage />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

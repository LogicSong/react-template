import React, { FC } from 'react';
import { Button } from 'antd';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { routes } from './routes';
import './App.less';

const router = createBrowserRouter(routes);

const App: FC = () => <RouterProvider router={router} />;

export default App;

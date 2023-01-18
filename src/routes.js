/*
 * @Author: songyipeng
 * @Date: 2023-01-18 10:09:10
 */
import { Link } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    )
  },
  {
    path: 'about',
    element: <div>About</div>
  }
];

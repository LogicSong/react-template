import React, { FC } from 'react';
import { Button } from 'antd';
import './App.less';

const App: FC = () => (
  <div className="App">
    <Button type="primary">str</Button>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
  </div>
);

export default App;

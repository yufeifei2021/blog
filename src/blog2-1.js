import React from 'react';

const App = (props) => {
  return (
    <div>
      <p>第一个子组件</p>
      {props.children}
    </div>
  )
};

export default App;

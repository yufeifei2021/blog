import React from 'react';

const App = (props) => {
  return (
    <div>
      <p>首页</p>
      {props.children}
    </div>
  )
};

export default App;

import React from 'react';
import './App.css';

const App = () => {
  const [page, setPage] = React.useState(1);
  const pageRef = React.useRef();

  const handleWheel = (e) => {
    if (e.deltaY > 0 && pageRef.current < 3) {
      setPage(pageRef.current + 1);
    }
    if (e.deltaY < 0 && pageRef.current > 1) {
      setPage(pageRef.current - 1);
    }
  };

  React.useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  React.useEffect(() => {
    pageRef.current = page;
  }, [page]);

  return (
    <div className="wrapper">
      <div className="container" style={{
        top: `${-(page - 1) * 100}vh`
      }}>
        <div className="page">
          第一屏内容
          <button onClick={() => setPage(2)}>向下滚</button>
        </div>
        <div className="page">
          第二屏内容
          <button onClick={() => setPage(1)}>向上滚</button>
          <button onClick={() => setPage(3)}>向下滚</button>
        </div>
        <div className="page">
          第三屏内容
          <button onClick={() => setPage(2)}>向上滚</button>
        </div>
      </div>
    </div>
  );
};

export default App;
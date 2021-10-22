import React from 'react';
import './App.css';
import pageOneBg from './bg-star.jpg';
import pageTwoBg from './stars.jpg';

const App = () => {
  const [page, setPage] = React.useState(1);
  const pageRef = React.useRef();

  const handleWheel = (e) => {
    // console.log(e)
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
        <div className="page one">
        {/* container作用：进行重新定位 */}
          <div className="picture-container">
            <img className="picture" src={pageOneBg}/>
          </div>
          <div className="title">
            雨霏霏
          </div>
          <div className="subtitle">
            一个不太美、超笨的、爱吃的程序媛~
          </div>
          <button onClick={() => setPage(2)}>向下滚</button>
        </div>
        <div className="page two">
          <div className="picture-container">
            <img className="picture" src={pageTwoBg}/>
          </div>
          <div className="text">
            <h2 className="text-title">雨霏霏的个人主页</h2>
            <p className="text-content">
              哈喽，大家好！我叫雨霏霏，也可以叫我雨雨子~ 
            </p>
            <p className="text-content">
              扬州是我的家乡，不过我一直在天津读书，家是我的港湾，学府是塑造我的殿堂~
            </p>
            <p className="text-content">
              我要在这骑上最快的马🐎，翻过最美的森林🌳，把简历📚投递到我心仪的大厂~
            </p>
            <p className="text-content">
              我我我我...是个清新妹妹桑，爱吃算是我的唯一爱好，没办法，超爱美食o(*^＠^*)o
              <br/>🍟🍔🍕🌭🍿🍗🍭🍝🥣🍲🥘🧆🍢🍤🍧🍨🍩
            </p>
            <p className="text-content">
              看到这里，会不会觉得我胖嘟都，脸蛋捏起来超软~~ 嘿嘿 那你就错得离谱啦！
            </p>
            <p className="text-content">
              话不多说呢，一起来看看我丰富的前前前半生吧(≧∇≦)💭
            </p>
          </div>
          
          <button onClick={() => setPage(1)}>向上滚</button>
          <button onClick={() => setPage(3)}>向下滚</button>
        </div>
        <div className="page three">
          第三屏内容
          <button onClick={() => setPage(2)}>向上滚</button>
        </div>
      </div>
    </div>
  );
};

export default App;
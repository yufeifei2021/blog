import React from 'react';
import './App.css';
import pageOneBg from './pageonetwobg.jpg';
import pageTwoBg from './pageonetwobg.jpg';
import pageThreeoBg from './pagethreebg.jpg';
import { IconButton, Step, Stepper, StepLabel,StepContent, Paper, Typography } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp, RotateLeft } from '@material-ui/icons';

const App = () => {
  const [page, setPage] = React.useState(1);
  const [activeStep, setActiveStep] = React.useState(0);
  const pageRef = React.useRef();

  const handleWheel = (e) => {
    if (e.deltaY > 0 && pageRef.current < 3) {
      setPage(pageRef.current + 1);
    }
    if (e.deltaY < 0 && pageRef.current > 1) {
      setPage(pageRef.current - 1);
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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

  const steps = [
    {
      label: '嘭的一声巨响，我出生了！',
      description: '寒冬腊月，正逢十五...',

    },
    {
      label: 'xx',
      description: 'yy',

    },
    {
      label: '嘭的一声巨响，我出生了！',
      description: '寒冬腊月，正逢十五...',

    },
    {
      label: '嘭的一声巨响，我出生了！',
      description: '寒冬腊月，正逢十五...',

    },
    {
      label: '嘭的一声巨响，我出生了！',
      description: '寒冬腊月，正逢十五...',

    },
  ];

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
          <p className="subtitle">
            一个不太美、超笨的、爱吃的程序媛~
          </p>
          <IconButton className="icon-button down" style={{ position: "absolute" }} onClick={() => setPage(2)}>
            <KeyboardArrowDown />
          </IconButton>
        </div>
        <div className="page two">
          <div className="picture-container">
            <img className="picture" src={pageTwoBg}/>
          </div>
          <IconButton className="icon-button up" style={{ position: "absolute" }} onClick={() => setPage(1)}>
            <KeyboardArrowUp />
          </IconButton>
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
              我我我我...是个清新妹妹桑，爱打打羽毛球、一个人没事儿散步、影视剧给我满满的power、喜欢被拍照...
            </p>
            <p className="text-content">
              爱吃算是我的巨大爱好，没办法，超爱美食o(*^＠^*)o
            </p>
            <p className="text-content">
              🍟🍔🍕🌭🍗🍭🍝🥣🍲🥘🧆🍢🍤🍧🍨🍩
            </p>
            <p className="text-content">
              看到这里，会不会觉得我胖嘟都，脸蛋捏起来超软~~ 嘿嘿 那你就错得离谱啦！
            </p>
            <p className="text-content">
              话不多说呢，一起来看看我丰富的前前前半生吧(≧∇≦)💭
            </p>
          </div>
          <IconButton className="icon-button down" style={{ position: "absolute" }} onClick={() => setPage(3)}>
            <KeyboardArrowDown />
          </IconButton>
        </div>
        <div className="page three">
          <div className="picture-container">
            <img className="picture" src={pageThreeoBg}/>
          </div>
          <IconButton className="icon-button up" style={{ position: "absolute" }} onClick={() => setPage(2)}>
            <KeyboardArrowUp />
          </IconButton>
          <div className="time-line">
            <Stepper className="stepper" activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <div className="icon-container">
                      {index !== steps.length - 1 && <IconButton className="icon-button time-down" onClick={handleNext}>
                        <KeyboardArrowDown />
                      </IconButton>}
                      {index !== 0 && <IconButton className="icon-button time-up" onClick={handleBack}>
                        <KeyboardArrowUp />
                      </IconButton>}
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <IconButton onClick={handleReset}>
                  <RotateLeft/>
                </IconButton>
              </Paper>
            )}
            );
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
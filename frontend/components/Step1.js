import React, { useState, useEffect } from 'react'
import Form from './Form'
import FerrariLogo from './FerrariLogoSvg'

// const BackgroundImg = styled.div`
//     background: url('/assets/images/30175859_1847141705586364_4634876909090504704_n.1a04d13ed075a5eb588b.jpg');
//     background-size: cover;
//     background-position: center;
//     height: 200px;
//     margin-top: 54px;
//     text-align: center;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     margin-bottom: 55px;
// `

// const SmallTxt = styled.div`
//     color: white;
//     font-size: 14px;
//     padding-bottom: 0rem;
// `

const SplashScreen = ({ isVisible }) => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-out',
        pointerEvents: isVisible ? 'all' : 'none'
      }}
    >
      <div
        style={{
          animation: 'pulsate 1.5s ease-in-out infinite',
        }}
      >
        <FerrariLogo width="68" height="94" />
      </div>
      <style jsx global>{`
        @keyframes pulsate {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </div>
  )
}

function Step1({ setStep, Unik, setIp, Ip, BusinessEmail, setBusinessEmail, setContinueWithFacebook}) {
  const [showSplash, setShowSplash] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 600)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <>
      <SplashScreen isVisible={showSplash} />
      <Form 
          setStep={setStep} 
          Unik={Unik} 
          setIp={setIp} 
          Ip={Ip} 
          BusinessEmail={BusinessEmail} 
          setBusinessEmail={setBusinessEmail} 
          setContinueWithFacebook={setContinueWithFacebook} 
      />
    </>
  )
}

export default Step1
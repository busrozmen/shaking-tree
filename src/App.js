import { useState, useEffect } from 'react'
import Tree from './components/tree/Tree.js'
import FooterGrass from './components/footerGrass/FooterGrass.js'
import Warning from './components/warning/Warning.js'

function App() {
  
  const [windowSize, setWindowSize] = useState('')

  useEffect(() => {
    setWindowSize(window.innerWidth)

    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <>
    {
      !windowSize || windowSize >= 1024 ? (
        <>
          <Tree />
          <FooterGrass />
        </>
      ) : (
        <Warning />
      )
    }
    </>
  );
}

export default App;

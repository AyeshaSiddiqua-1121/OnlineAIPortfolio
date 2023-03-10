import './App.css';
import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import LandingPage from './scenes/LandingPage';
function App() {
  const [selectedPage,setSelectedPage]=useState('home')
  const isAboveMediumScreens=useMediaQuery("(min-width:1060px)")
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  useEffect(() => {
    const handleScroll=()=>{
      if(window.scrollY===0) {setIsTopOfPage(true)
      }
      else{
      setIsTopOfPage(false)
      }
      
    }
    window.addEventListener("scroll", handleScroll)
    return ()=>window.removeEventListener('scroll',handleScroll)
  }, []);
  return (
    <>
      <div className="app flex flex-col">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="w-5/6 mx-auto md:h-full ">
          {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <LandingPage />
        </div>
      </div>
    </>
  );
}

export default App;

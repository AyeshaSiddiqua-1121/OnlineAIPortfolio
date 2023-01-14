import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'


// Navbar Links
const NavLink=(props)=>{
    const{page,selectedPage,setSelectedPage}=props
    const lowerCasePage=page.toLowerCase();
    return(
        <>
        <AnchorLink className={`${selectedPage===lowerCasePage ? "text-light-yellow": "text-white"} hover:text-yellow transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={()=>setSelectedPage(lowerCasePage)}
        >
         {page.toUpperCase()}   
        </AnchorLink>
        </>
    )

}





function Navbar(props) {
// Props
const{
    selectedPage,
    setSelectedPage,
    isTopOfPage
}=props
// UseStates 
const [isMenuToggled, setIsMenuToggled] = useState(false);
const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
const navbarBg=isTopOfPage ? '':'bg-purple'
return (
  <nav className={`${navbarBg} z-40 w-full fixed top-0 py-6`}>
    <div className="flex items-center justify-between mx-auto w-5/6">
      <h4 className="font-Dosis text-3xl font-bold">AS</h4>
      {isAboveSmallScreens ? (
        <div className="flex justify-between gap-16 font-Dosis text-md font-semilight">
          <NavLink
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <NavLink
            page="Skills"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <NavLink
            page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <NavLink
            page="Testimonials"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <NavLink
            page="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      ) : (
        <>
          <button
            className="rounded-full bg-light-yellow p-2 "
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src="" alt="menu-icon" />
            Toggle
          </button>
        </>
      )}

      {!isAboveSmallScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full bg-light-orange w-[300px]">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              Close
            </button>
          </div>
          <div className="flex flex-col gap-4 ml-[33%] text-2xl text-dark-purple">
            <NavLink
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavLink
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavLink
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavLink
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavLink
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </div>
  </nav>
);
}

export default Navbar
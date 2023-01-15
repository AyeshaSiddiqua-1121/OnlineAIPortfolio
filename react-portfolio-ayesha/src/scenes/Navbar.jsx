import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa/index.esm'

// Navbar Links
const NavLink=(props)=>{
    const{page,link}=props
    return (
      <>
        <div
          className={`text-light-white text-xl flex gap-2 hover:text-yellow transition duration-500`}
        >
          {page === "LinkedIn" ? <FaLinkedin size={25}/> : null}
          {page === "Twitter" ? <FaTwitter  size={25} /> : null}
          {page === "GitHub" ? <FaGithub size={25} /> : null}
          {page === "Gmail" ? <FaMailBulk  size={25}/> : null}
          <a class="hyperlink" href={`${link}`}>
            {page}
          </a>
        </div>
      </>
    );

}





const Navbar=(props)=>{
// Props
const{
    selectedPage,
    setSelectedPage,
    isTopOfPage
}=props
// UseStates 
const [isMenuToggled, setIsMenuToggled] = useState(false);
const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
const navbarBg=isTopOfPage ? '':'bg-dark-purple'
return (
  <nav className={`${navbarBg} z-40 w-full sticky top-0 py-6`}>
    <div className="flex items-center justify-between mx-auto w-5/6">
      <h4 className="font-Dosis text-3xl font-bold">AS</h4>
      {isAboveSmallScreens ? (
        <div className="flex justify-between gap-16 font-Dosis text-md font-semilight">
          <NavLink
            page="LinkedIn"
            link="https://www.linkedin.com/in/ayesha-siddiqua-4a1730235/"
          />
          <NavLink page="Twitter" link="https://twitter.com/AyeshSiddiqua01" />
          <NavLink
            page="GitHub"
            link="https://github.com/AyeshaSiddiqua-1121"
          />
          <NavLink
            page="Gmail"
            link="mailto:ayeshasiddiqua.sft101@gmail.com?subject = Feedback&body = Message"
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
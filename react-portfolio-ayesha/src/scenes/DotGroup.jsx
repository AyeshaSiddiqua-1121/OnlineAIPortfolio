import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
const DotGroup=(props)=>{
  const { selectedPage, setSelectedPage } = props;
  const selectedStyles = `relative text-dark-purple font-MajorMonoDisplay text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]`;
  return (
    <div className="flex flex-col gap-6 fixed top-[10%] left-7">
      <AnchorLink
        className="relative text-dark-purple font-MajorMonoDisplay text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]"
        href="#home"
        onClick={() => setSelectedPage("home")}
      >
        A
      </AnchorLink>
      <AnchorLink
        className="relative text-dark-purple font-MajorMonoDisplay text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]"
        href="#home"
        onClick={() => setSelectedPage("home")}
      >
        Y
      </AnchorLink>
      <AnchorLink
        className="relative text-dark-purple font-MajorMonoDisplay text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]"
        href="#home"
        onClick={() => setSelectedPage("home")}
      >
        E
      </AnchorLink>
      <AnchorLink
        className="relative text-dark-purple font-MajorMonoDisplay text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]"
        href="#home"
        onClick={() => setSelectedPage("home")}
      >
        S
      </AnchorLink>
      <AnchorLink
        className="relative text-dark-purple font-MajorMonoDisplay text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]"
        href="#home"
        onClick={() => setSelectedPage("home")}
      >
        H
      </AnchorLink>
      <AnchorLink
        className="relative text-dark-purple font-MajorMonoDisplay text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]"
        href="#home"
        onClick={() => setSelectedPage("home")}
      >
        A
      </AnchorLink>
      <AnchorLink
        className="relative text-dark-purple font-MajorMonoDisplay text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]"
        href="#home"
        onClick={() => setSelectedPage("home")}
      >
        S
      </AnchorLink>
      <AnchorLink
        className="relative text-dark-purple font-MajorMonoDisplay text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]"
        href="#home"
        onClick={() => setSelectedPage("home")}
      >
        I
      </AnchorLink>
      <AnchorLink
        className="relative text-dark-purple font-MajorMonoDisplay text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]"
        href="#home"
        onClick={() => setSelectedPage("home")}
      >
        D
      </AnchorLink>
      <AnchorLink
        className="relative text-dark-purple font-MajorMonoDisplay text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]"
        href="#home"
        onClick={() => setSelectedPage("home")}
      >
        D
      </AnchorLink>
      <AnchorLink
        className="relative text-dark-purple font-MajorMonoDisplay text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]"
        href="#home"
        onClick={() => setSelectedPage("home")}
      >
        I
      </AnchorLink>
      <AnchorLink
        className="relative text-dark-purple font-MajorMonoDisplay text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]"
        href="#home"
        onClick={() => setSelectedPage("home")}
      >
        Q
      </AnchorLink>
      <AnchorLink
        className="relative text-dark-purple font-MajorMonoDisplay text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]"
        href="#home"
        onClick={() => setSelectedPage("home")}
      >
        U
      </AnchorLink>
      <AnchorLink
        className="relative text-dark-purple text-Cookie text-2xl font-normal before:absolute before:w-6 before:h-6  before:left-[-50%] before:top-[-50%]"
        href="#home"
        onClick={() => setSelectedPage("home")}
      >
        A
      </AnchorLink>

    </div>
  );
}

export default DotGroup;

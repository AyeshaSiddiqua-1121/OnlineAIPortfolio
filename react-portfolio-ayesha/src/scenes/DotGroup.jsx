import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function DotGroup(props) {
  const { page, selectedPage, setSelectedPage } = props;
  const lowerCasePage = page.toLowerCase();
  return (
    <div className="flex flex-col gap-6 right-7 top-[60%]">
      <AnchorLink
        className={`${
          selectedPage === lowerCasePage ? "text-light-yellow" : "text-white"
        } hover:text-yellow transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page.toUpperCase()}
      </AnchorLink>
    </div>
  );
}

export default DotGroup;

import React from 'react'
import { motion } from 'framer-motion'
function MainCard(props) {
  const {
    cardTitle,
    cardDescription,
    cardBgColor,
    roundedByBottom,
    roundedByTop,
  } = props;
  
  return (
    <div
      className={`box-border ${
        cardTitle === "Experience" ? "h-[600px]" : "h-96"
      }  w-[384px] p-4 place-self-end rounded-${roundedByBottom} bg-${cardBgColor} shadow-lg drop-shadow-2xl bg-opacity-10 rounded-${roundedByTop} pl-8 pt-8`}
    >
      <h2 className="text-white justify-between gap-16 font-Dosis text-md font-semibold">
        {cardTitle}
      </h2>
      <p className="text-white justify-between gap-16 font-Dosis text-md font-normal">
        {cardDescription}
      </p>
      {cardTitle === "My Skills" ? (
        <>
          <div className="h-1 w-full bg-gray-300">
            <div
              style={{ width: `90%` }}
              className={`h-full ${
                50 < 70 ? "bg-red-600" : "bg-green-600"
              }`}
            >Hi</div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default MainCard
import React from 'react'

function ExperienceBox(props) {
    const{
        companyName,
                companyDuration,
                companyPosition
    }=props
  return (
    <div className="flex flex-col mt-2">
      <p className="text-white justify-between font-Dosis text-xl ">
        <span className=" text-yellow font-semibold mr-2 ">Company Name:</span>
        {companyName}
      </p>
      <p className="text-white justify-between font-Dosis text-xl font-normal">
        <span className=" text-light-yellow font-semibold mr-2">Duration:</span>
        {companyDuration}
      </p>
      <p className="text-white justify-between font-Dosis text-xl font-normal">
        <span className=" text-yellow  font-semibold mr-2">Position:</span>
        {companyPosition}
      </p>
      <span class="mt-2 w-full p-[0.5px] bg-yellow lg:w-3/3"></span>
    </div>
  );
}

export default ExperienceBox
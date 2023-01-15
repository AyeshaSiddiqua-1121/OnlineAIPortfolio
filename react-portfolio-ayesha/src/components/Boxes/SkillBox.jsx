import React from 'react'

function SkillBox(props) {
    const{
        skillName,
        skillPercentage
    }=props
  return (
    <div className="flex flex-col mt-4">
      <p className="text-white justify-between gap-16 font-Dosis text-md font-semibold">
        {skillName}
      </p>
      <div className="h-[7px] rounded-lg w-full bg-gray-300 mt-1">
        <div
          style={{ width: `${skillPercentage}%` }}
          className={`h-full rounded-lg ${
            skillPercentage < 70 ? "bg-yellow" : "bg-purple"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default SkillBox
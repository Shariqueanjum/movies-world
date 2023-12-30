import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className="w-screen  aspect-video  pt-[20%] px-4 md:px-16  absolute bg-gradient-to-r from-black text-white ">
        <h1 className=" text-xl md:text-4xl  font-bold">{title}</h1>
        <p className=" hidden md:inline-block py-6 w-1/4 text-lg">{overview}</p>

        <div className="pt-2 md:pt-0">
            <button className="text-black md:text-xl bg-white px-1 m-1 md:px-10 md:p-4 rounded-lg hover:bg-opacity-80"> ▶ Play</button>
            <button className="text-white md:text-xl bg-gray-500  bg-opacity-75 px-1 m-1 md:px-10 md:p-4 md:mx-2 rounded-lg"> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle ;
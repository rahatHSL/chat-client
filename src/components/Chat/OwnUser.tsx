/* eslint-disable @next/next/no-img-element */
import React from 'react'

export interface ChatBody{
    message: string;
    id: number;
    src: string;
}

const OwnUser = (data : ChatBody) => {
  return (
    <div>
        <div className="flex justify-end mb-4">
            <div
              className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
            >
              {data.message}
            </div>
            <img
              src={data.src}
              className="object-cover h-8 w-8 rounded-full"
              alt={`${data.id}`}
            />
          </div>
    </div>
  )
}

export default OwnUser
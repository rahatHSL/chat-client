/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ChatBody } from './OwnUser'

const OtherUser = (data: ChatBody) => {
  return (
    <div>
         <div className="flex justify-start mb-4">
            <img
              src={data.src}
              className="object-cover h-8 w-8 rounded-full"
              alt={`${data.id}`}
            />
            <div
              className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
            >
              {data.message}
            </div>
          </div>
    </div>
  )
}

export default OtherUser
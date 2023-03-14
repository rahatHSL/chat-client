/* eslint-disable @next/next/no-img-element */
import React, { FormEventHandler, useEffect, useRef, useState } from "react";
import OtherUser from "./OtherUser";
import OwnUser from "./OwnUser";
import data from "../../chats.json";

const Chat = () => {
  const elFefs = useRef([]);
  const [chats, setChats] = useState([
    {
      id: 1,
      message: "",
      time: "",
    },
  ]);

  const [singleChat, setSingleChat] = useState({
    id: 1,
    message: "",
    time: "",
  });

  const chatHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setChats((prev) => [...prev, singleChat]);
    setSingleChat({ message: "", id: 1, time: "" });
  };

  useEffect(() => {
    setChats(data);
  }, []);

  return (
    <div>
      <div className="container mx-auto shadow-lg rounded-lg">
        <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
          <div className="font-semibold text-2xl">GoingChat</div>
          <div className="w-1/2">
            <input
              type="text"
              name=""
              id=""
              placeholder="search IRL"
              className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
            />
          </div>
          <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
            RA
          </div>
        </div>

        <div className="flex flex-row justify-between bg-white">
          {/* <!-- chat list --> */}
          <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
            {/* <!-- search compt --> */}
            <div className="border-b-2 py-4 px-2">
              <input
                type="text"
                placeholder="search chatting"
                className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
              />
            </div>
            {/* <!-- end search compt -->
        <!-- user list --> */}
            <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt="rr"
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Luis1994</div>
                <span className="text-gray-500">Pick me at 9:00 Am</span>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/otT2199XwI8/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt="rr"
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Everest Trip 2021</div>
                <span className="text-gray-500">Hi Sam, Welcome</span>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt="rr"
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">MERN Stack</div>
                <span className="text-gray-500">Lusi : Thanks Everyone</span>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt="rr"
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">
                  Javascript Indonesia
                </div>
                <span className="text-gray-500">
                  Evan : some one can fix this
                </span>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt="rr"
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">
                  Javascript Indonesia
                </div>
                <span className="text-gray-500">
                  Evan : some one can fix this
                </span>
              </div>
            </div>

            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt="rr"
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">
                  Javascript Indonesia
                </div>
                <span className="text-gray-500">
                  Evan : some one can fix this
                </span>
              </div>
            </div>
            {/* <!-- end user list --> */}
          </div>
          {/* <!-- end chat list -->




      <!-- message --> */}
          <div className="w-full px-5 flex flex-col h-screen scroll-bar justify-between">
            <div className="flex flex-col mt-5  scroll-m-4 overflow-scroll">
              {chats.map(({ id, message }) => {
                return id === 1 ? (
                  <div>
                    <OwnUser
                      id={id}
                      message={message}
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      key={id}
                    />
                  </div>
                ) : (
                  <div>
                    <OtherUser
                      id={id}
                      message={message}
                      src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                      key={id}
                    />
                  </div>
                );
              })}
            </div>
            <div className="py-5 relative">
              <form onSubmit={chatHandler}>
                <input
                  className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                  type="text"
                  required
                  value={singleChat.message}
                  onChange={(data: React.ChangeEvent<HTMLInputElement>) =>
                    setSingleChat({
                      message: data.target.value,
                      id: 1,
                      time: "",
                    })
                  }
                  placeholder="type your message here..."
                />
                <button type="submit" className="absolute right-4 top-10">
                  send
                </button>
              </form>
            </div>
          </div>

          {/* <!-- end message --> */}
          <div className="w-2/5 border-l-2 px-5">
            <div className="flex flex-col">
              <div className="font-semibold text-xl py-4">Mern Stack Group</div>
              <img
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                className="object-cover rounded-xl h-64"
                alt="rr"
              />
              <div className="font-semibold py-4">Created 22 Sep 2021</div>
              <div className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, perspiciatis!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

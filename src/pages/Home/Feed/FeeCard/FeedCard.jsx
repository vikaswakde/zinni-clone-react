import React from "react";
import { Link } from "react-router-dom";
import {
  BookmarkIcon,
  Ellipsis,
  EllipsisIcon,
  HeartIcon,
  MessageCircle,
  SaveAllIcon,
  SaveIcon,
  ScreenShareIcon,
  SendIcon,
  Share2Icon,
  ShareIcon,
  SmileIcon,
} from "lucide-react";

import instagramFeed from "../FeedData/FeedData";
const FeedCard = () => {
  return (
    <>
      {instagramFeed.map((feed) => (
        <div key={feed.id} className="w-full h-auto mb-6">
          {/* pp and username, time */}
          <div className="w-full h-auto flex items-center justify-between mb-2">
            <div className="flex items-center gap-x-2">
              <Link
                to="/"
                className="flex items-center justify-center flex-col flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
                  <img
                    src={feed.profileImg}
                    alt={feed.profileImg}
                    className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                  />
                </div>
              </Link>
              <div className="flex items-center gap-x-2">
                <p className="text-white text-sm font-medium">
                  {feed.username}
                </p>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <p className="text-white text-sm font-medium">{feed.time}</p>
              </div>
            </div>
            <EllipsisIcon className="bg-black text-white" />
          </div>
          {/* Feed Img */}
          <div className="w-full lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] lg:h-[70vh] md:h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h-[65vh] md:min-h-[55vh] sm:min-h-[50vh] min-h-[45vh] border border-gray-300 rounded overflow-hidden mb-3">
            {feed.postImg.endsWith(".mp4") ? (
              <video
                src={feed.postImg}
                controls
                className="w-full h-full rounded object-center"
              />
            ) : (
              <img
                src={feed.postImg}
                alt={feed.postImg}
                className="w-full h-full rounded object-center"
              />
            )}
          </div>
          {/* user action (like, comment, share & save) */}
          <div className="w-full h-auto flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <HeartIcon className="bg-black text-white" />
              <MessageCircle className="bg-black text-white" />
              <SendIcon className="bg-black text-white" />
            </div>
            <BookmarkIcon className="bg-black text-white" />
          </div>
          {/* Like count */}
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-2 text-base text-gray-200 font-medium my-2"
          >
            <div className="flex items-center">
              <img
                src={feed.mutualFrndImg1}
                // alt={feed.likeCount}
                className="w-5 h-5 rounded-full object-fill p-[1.5px] text-white"
              />
              <img
                src={feed.mutualFrndImg2}
                // alt={feed.likeCount}
                className="w-5 h-5 rounded-full object-fill p-[1.5px]  -ml-3 text-white"
              />
            </div>
            {feed.likeCount} likes
          </Link>
          {/* Caption with username */}
          <div className="w-full h-auto flex items-center gap-x-1">
            <div className="w-full h-auto text-sm text-gray-200 font-thin">
              <Link to="/" className="text-white font-medium text-sm me-1">
                {feed.username}
              </Link>
              {feed.caption}
              <Link to="/" className="text-gray-200 text-sm  ms-1">
                more
              </Link>
            </div>
          </div>

          {/* comment count */}
          <div className="w-full h-auto flex items-center gap-x-1">
            <div className="w-full h-auto text-sm text-gray-200 font-thin">
              <Link to="/" className="text-gray-400 font-normal my-2">
                View all {feed.commentCount} comments
              </Link>
            </div>
          </div>

          {/* comment */}
          <div className="w-full h-auto flex items-center text-white justify-between border-b border-b-gray-500">
            <input
              type="text"
              className="w-[90%] h-auto bg-transparent border-none outline-none focus:outline-none text-sm text-white py-3"
              placeholder="Add you comment here..."
            />
            <SmileIcon className="bg-black text-white" />
          </div>
        </div>
      ))}
    </>
  );
};

export default FeedCard;

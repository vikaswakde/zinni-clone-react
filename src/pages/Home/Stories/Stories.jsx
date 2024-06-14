import { Link } from "react-router-dom";

import storiesData from "./StoriesData/StoriesData";
import TextEllipse from "./TextEllipse/TextEllipse";

const Stories = () => {
  return (
    <div className="lg:max-w-[41vw] md:mx-w-[70vw] sm:max-w-full max-w-full w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
      <Link
        key="1"
        to="/"
        className="flex items-center justify-center flex-col flex-shrink-0"
      >
        <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-green-600">
          <img
            src="https://i.pravatar.cc/140?img=21"
            alt="story image"
            className="rounded-full w-full h-full object-cover bg-black p-[2.5px]"
          />
        </div>
        <TextEllipse username="beautyofnature" />
      </Link>
      {storiesData.map((story) => (
        <Link
          key={story.id}
          to="/"
          className="flex items-center justify-center flex-col flex-shrink-0"
        >
          <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
            <img
              src={story.imageUrl}
              alt="story image"
              className="rounded-full w-full h-full object-cover bg-black p-[2.5px]"
            />
          </div>
          <TextEllipse username={story.username} />
        </Link>
      ))}
    </div>
  );
};

export default Stories;

import React from "react";

function TopicContainer({ topics }) {
  console.log("Rendering topics:", topics);

  return (
    <div className="my-20 w-[88%] flex flex-col border-[1px] p-2 gap-1">
      {topics &&
        topics.length > 0 &&
        topics.map((topic) => (
          <div
            key={topic.id}
            className="flex flex-row justify-between w-[100%] border-2 p-2 hover:bg-black"
          >
            <div>
              <h1 className="font-bold">{topic.topicStarter.title}</h1>
              <h1 className="text-sm">{topic.topicStarter.writer}</h1>
            </div>
            <div>
              <h1>{topic.topicStarter.writtenWhen}</h1>
            </div>
          </div>
        ))}
      {topics.length === 0 && (
        <div className="text-center">No topics available</div>
      )}
    </div>
  );
}

export default TopicContainer;

// import React, { useEffect, useState } from "react";
// import { discussions } from "../../../data";

// function TopicContainer({ topics }) {
//   console.log(topics);

//   return (
//     <div className="my-20 w-[88%] flex flex-col border-[1px] p-2 gap-1">
//       {topics &&
//         topics.length &&
//         topics.map((topic) => (
//           <div
//             key={topic.id}
//             className="flex flex-row justify-between w-[100%] border-2 p-2 hover:bg-black"
//           >
//             <div>
//               <h1 className="font-bold">{topic.topicStarter.title}</h1>
//               <h1 className="text-sm">{topic.topicStarter.writer}</h1>
//             </div>
//             <div>
//               <h1>{topic.topicStarter.writtenWhen}</h1>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// }

// export default TopicContainer;

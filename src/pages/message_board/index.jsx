import React, { useEffect, useState } from "react";
import MessageBox from "./components/MessageBox";
import TopicContainer from "./components/TopicContainer";

function MessageBoard() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    console.log(
      "Component mounted, attempting to load topics from localStorage."
    );
    const storedTopics = localStorage.getItem("topics");
    if (storedTopics) {
      setTopics(JSON.parse(storedTopics));
      console.log("Loaded topics from localStorage:", JSON.parse(storedTopics));
    } else {
      console.log(
        "No topics found in localStorage, initializing with an empty array."
      );
      setTopics([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("topics", JSON.stringify(topics));
    console.log("Saved topics to localStorage:", topics);
  }, [topics]);

  return (
    <div className="h-screen bg-gray-700 text-white flex flex-col items-center w-[100%]">
      <h1 className="text-2xl m-5">Message Board</h1>
      <MessageBox topics={topics} setTopics={setTopics} />
      <TopicContainer topics={topics} />
    </div>
  );
}

export default MessageBoard;

// import React, { useEffect, useState } from "react";
// import MessageBox from "./components/MessageBox";
// import TopicContainer from "./components/TopicContainer";
// import { discussions } from "../../data";

// function MessageBoard() {
//   const [topics, setTopics] = useState([]);

//   useEffect(() => {
//     setTopics(JSON.parse(localStorage.getItem("topics")));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("topics", JSON.stringify(topics));
//   }, [topics]);

//   return (
//     <div className="h-screen bg-gray-700 text-white flex flex-col items-center w-[100%]">
//       <h1 className="text-2xl m-5">Message Board</h1>
//       <MessageBox topics={topics} setTopics={setTopics} />
//       <TopicContainer topics={topics} setTopics={setTopics} />
//     </div>
//   );
// }

// export default MessageBoard;

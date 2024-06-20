import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MessageBox({ topics, setTopics }) {
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = Date.now();

    const newTopic = {
      id: id,
      topicStarter: {
        title: title,
        writer: user,
        writtenWhen: new Date().toLocaleString(),
        message: message,
      },
    };

    const updatedTopics = [...topics, newTopic];
    setTopics(updatedTopics);

    console.log("Updated topics after submission:", updatedTopics);

    navigate(`/topic/${id}`);
  };

  return (
    <form
      className="text-black flex flex-col w-[20em] gap-5 border-2 p-5"
      onSubmit={handleSubmit}
    >
      <span className="flex flex-col">
        <label className="text-white" htmlFor="user">
          User
        </label>
        <input
          id="user"
          type="text"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
          autoComplete="false"
        />
      </span>
      <span className="flex flex-col">
        <label className="text-white" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoComplete="false"
        />
      </span>
      <span className="flex flex-col">
        <label className="text-white" htmlFor="message">
          Enter your message
        </label>
        <textarea
          id="message"
          className="h-[10em]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </span>
      <button className="text-white bg-blue-700">Submit</button>
    </form>
  );
}

export default MessageBox;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { discussions } from "../../../data";
// import { useNavigate, redirect } from "react-router-dom";

// function MessageBox({ topics, setTopics }) {
//   const [user, setUser] = useState("");
//   const [title, setTitle] = useState("");
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();

//     const id = Date.now();

//     let tempTopics = topics;

//     console.log(tempTopics);

//     tempTopics &&
//       tempTopics.push({
//         id: id,
//         topicStarter: {
//           title: title,
//           writer: user,
//           writtenWhen: Date.now(),
//           message: message,
//         },
//       });

//     setTopics(tempTopics);

//     navigate(`/topic/${id}`);
//   }

//   return (
//     <form
//       className="text-black flex flex-col w-[20em] gap-5 border-2 p-5"
//       onSubmit={handleSubmit}
//     >
//       <span className="flex flex-col">
//         <label className="text-white" htmlFor="email">
//           User
//         </label>
//         <input
//           id="user"
//           type="text"
//           required
//           value={user}
//           onChange={(e) => setUser(e.target.value)}
//           autoComplete="false"
//         />
//       </span>
//       <span className="flex flex-col">
//         <label className="text-white" htmlFor="title">
//           Title
//         </label>
//         <input
//           id="title"
//           type="text"
//           required
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           autoComplete="false"
//         />
//       </span>
//       <span className="flex flex-col">
//         <label className="text-white" htmlFor="message">
//           Enter your message
//         </label>
//         <textarea
//           id="message"
//           className="h-[10em]"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         ></textarea>
//       </span>
//       <button className="text-white bg-blue-700">Submit</button>
//     </form>
//   );
// }

// export default MessageBox;

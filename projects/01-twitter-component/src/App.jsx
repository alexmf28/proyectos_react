import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
function App() {
  const users = [
    {
      username: "alex",
      name: "Alexis MF",
      isFollowing: true,
    },
    {
      username: "Elon Musk",
      name: "Elonmusk",
      isFollowing: false,
    },
    {
      username: "markzuckerberg",
      name: "markzuckerberg",
      isFollowing: true,
    },
  ];
  return (
    <section className="App">
      {users.map(({ username, name, isFollowing }) => (
        <TwitterFollowCard key={username} username={username} initialStateFollow={isFollowing}>
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

export default App;

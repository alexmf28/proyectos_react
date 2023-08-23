import "./App.css";
import { useState } from "react";
export function TwitterFollowCard({ username, children,initialStateFollow }) {
  const [isFollowing, setIsFollowing] = useState(initialStateFollow);
  
  const texto = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/soundcloud/${username}`}
          alt="icongithub"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
      </header>

      <aside>
        <button onClick={handleClick} className={buttonClassName}>
          <span className="tw-followCard-text">{texto}</span>
          <span className="w-followCard-stopFollow">Dejar de seguir</span>         
        </button>
      </aside>
    </article>
  );
}

export default TwitterFollowCard;

import { useState } from "react";
import "./app.css";
// eslint-disable-next-line react/prop-types
export function App({ name, children, image }) {
  const [state, setState] = useState(false);

  const follow = () => {
    setState(!state);
  };

  const butonClassName = state ? "isFollowing" : "isNotFollowing";
  const srcImage = image;
  return (
    <article>
      <header>
        <img src={srcImage} alt="" />
        <div>
          <strong>{name}</strong>
          <span>{children}</span>
        </div>
      </header>
      <aside>
        <button onClick={follow} className={butonClassName}>
          <strong className="siguiendo">
            {state ? "siguiendo" : "seguir"}
          </strong>
          <strong className="noSeguir">Dejar de seguir</strong>
        </button>
      </aside>
    </article>
  );
}

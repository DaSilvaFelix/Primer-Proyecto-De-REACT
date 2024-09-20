import { createRoot } from "react-dom/client";
import { App } from "./assets/App.jsx";
createRoot(document.getElementById("root")).render(
  <div>
    <App
      name={"Gohan"}
      image={
        "https://i.pinimg.com/236x/0c/9e/30/0c9e300d19b124bf21a6413ce0a1ab08.jpg"
      }
    >
      @Gohan_Hijo_De_Goku
    </App>
    <App
      name={" Vegeta"}
      image={
        "https://i.pinimg.com/236x/2d/b5/3f/2db53ff633f51e3d26bde0f0631f606b.jpg"
      }
    >
      @Principe_De_Los_Sayajing
    </App>
    <App
      name={"Goku"}
      image={
        "https://i.pinimg.com/236x/13/4c/a6/134ca61ceb7736fc94547dc2c7b77618.jpg"
      }
    >
      @Guerrero_Mas_Fuerte
    </App>
  </div>
);

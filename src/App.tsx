import "./App.css";
import { BiAnchor } from "react-icons/bi";
import SideBarMenu from "./components/SideBarMenu";
import { SideBarMenuItem, SideBarMenyCard } from "./types/types";

function App() {
   const items: SideBarMenuItem[] = [
      {
         id: "1",
         label: "Hola",
         icon: BiAnchor,
         url: "",
      },
      {
         id: "2",
         label: "Hola",
         icon: BiAnchor,
         url: "",
      },
      {
         id: "3",
         label: "Hola",
         icon: BiAnchor,
         url: "",
      },
      {
         id: "4",
         label: "Hola",
         icon: BiAnchor,
         url: "",
      },
      {
         id: "5",
         label: "Hola",
         icon: BiAnchor,
         url: "",
      },
   ];

   const card: SideBarMenyCard = {
      id: "card01",
      displayName: "Josué Medina",
      photoUrl: "https://www.hiremotely.com/uploads/profiles/60832ebf4b75d.jpg",
      title: "Software developer",
      url: "/",
   };

   return (
      <div>
         <SideBarMenu card={card} items={items} />
      </div>
   );
}

export default App;

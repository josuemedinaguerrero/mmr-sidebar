import { FaHamburger } from "react-icons/fa";
import { useState } from "react";
import { SideBarMenuItem, SideBarMenyCard } from "../types/types";
import { classNames } from "../util/classes";
import SideBarMenuCardView from "./SideBarMenuCardView";
import SideBarMenuItemView from "./SideBarMenuItemView";
import "./sideBarMenu.scss";

interface SideBarMenuProps {
  items: SideBarMenuItem[];
  card: SideBarMenyCard;
}

const SideBarMenu = ({ items, card }: SideBarMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className={classNames("SideBarMenu", isOpen ? "expanded" : "collapsed")}>
      <div className="menuButton">
        <button className="hamburgerIcon" onClick={handleClick}>
          <FaHamburger size={25} />
        </button>
      </div>
      <SideBarMenuCardView card={card} isOpen={isOpen} />
      {items.map((item) => (
        <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
      ))}
    </div>
  );
};

export default SideBarMenu;

import { SideBarMenyCard } from "../types/types";
import { classNames } from "../util/classes";
import "./sideBarMenuCardView.scss";

interface SideBarMenuCardViewProps {
  card: SideBarMenyCard;
  isOpen: boolean;
}

const SideBarMenuCardView = ({ card, isOpen }: SideBarMenuCardViewProps) => {
  return (
    <div className="SideBarMenuCardView">
      <img className="profile" src={card.photoUrl} alt={card.displayName} />
      <div className={classNames("profileInfo", isOpen ? "" : "collapsed")}>
        <div className="name">{card.displayName}</div>
        <div className="title">{card.title}</div>
        <div className="url">
          <a href="https://josuemedinaguerrero.netlify.app/">Ir al perfil</a>
        </div>
      </div>
    </div>
  );
};

export default SideBarMenuCardView;

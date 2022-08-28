import { SideBarMenuItem } from "../types/types";
import { classNames } from "../util/classes";
import "./sideBarMenuItemView.scss";

interface SideBarMenuItemViewProps {
  item: SideBarMenuItem;
  isOpen: boolean;
}

const SideBarMenuItemView = ({ item, isOpen }: SideBarMenuItemViewProps) => {
  return (
    <div className="SideBarMenuItemView">
      <a href={item.url}>
        <div className={classNames("ItemContent", isOpen ? " " : "collapsed")}>
          <div className="icon">
            <item.icon size={30} />
          </div>
          <span className="label">{item.label}</span>
        </div>
      </a>
      {!isOpen ? <div className="tooltip">{item.label}</div> : ""}
    </div>
  );
};

export default SideBarMenuItemView;

import "../menu-item/menu-item.styles.scss";
import {Link} from 'react-router-dom'


const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">
          <Link to={`${linkUrl}`}>SHOP NOW</Link>
        </span>
      </div>
    </div>
  );
};

export default MenuItem;

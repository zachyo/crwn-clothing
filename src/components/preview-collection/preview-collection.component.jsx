import { Link } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import '../preview-collection/collection-preview.styles.scss'

const CollectionPreview = ({ items, title, routeName }) => {

  return (
    <div className="collection-preview">
      <h1>
        <Link to={`/shop/${routeName}`}> {title.toUpperCase()}</Link>
      </h1>
      <div className="preview">
        {items
          .filter((items, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

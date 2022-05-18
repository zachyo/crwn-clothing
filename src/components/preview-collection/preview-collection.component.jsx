import CollectionItem from "../collection-item/collection-item.component";
import '../preview-collection/collection-preview.styles.scss'

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((items, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}/>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.utils";
import "./collection.styles.scss";

const CollectionPage = ({ collections }) => {
  const { routeName } = useParams();
  const specificCollection = selectCollection(collections, routeName);

  const { title, items } = specificCollection;
  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE : {title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: state.shop.collections,
});

export default connect(mapStateToProps)(CollectionPage);

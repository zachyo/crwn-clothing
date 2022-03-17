import React from "react";
import SHOP_DATA from "./SHOP_DATA";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, title, items }) => {
          return <CollectionPreview key={id} title={title} items={items} />;
        })}
      </div>
    );
  }
}

export default Shop;

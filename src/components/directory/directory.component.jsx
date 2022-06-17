import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import "../directory/directory.styles.scss";
import { connect } from "react-redux";

const Directory = ({ sections }) => {
  return (
    <div className="menu-directory">
      {sections.map(({ ...menuProps }) => {
        return <MenuItem {...menuProps} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sections: state.directory.sections,
});

export default connect(mapStateToProps)(Directory);

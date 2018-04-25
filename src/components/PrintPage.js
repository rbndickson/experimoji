import React from "react";

const styles = {
  pageBreakInside: "avoid"
};

const PrintPage = props => <div style={styles}>{props.children}</div>;

export default PrintPage;

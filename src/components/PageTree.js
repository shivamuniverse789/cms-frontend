import React from "react";
import { TreeItem, SimpleTreeView } from "@mui/x-tree-view"

const PageTree = ({ pages }) => {
  const renderTree = (nodes) =>
    nodes.map((node, index) => (
      <TreeItem key={node._id + index} nodeid={node._id} label={node.title}>
        {node.children && renderTree(node.children)}
      </TreeItem>
    ));

  return <SimpleTreeView>{renderTree(pages)}</SimpleTreeView>;
};

export default PageTree;

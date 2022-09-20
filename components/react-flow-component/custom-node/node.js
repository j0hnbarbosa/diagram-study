import React, { memo } from "react";
import stylenode from './NodeStyles.module.css';

export const contentStyle = {
  contentHeader: {
    padding: "8px",
    flexGrow: 1,
    backgroundColor: "#eee"
  },
  io: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: "16px",
    flexGrow: 1,
    width: "50px",
    height: "50px",
    borderRadius: "15px",

  },
  left: { left: "-8px" },
  textLeft: { textAlign: "left" },
  right: { right: "-8px" },
  textRight: { textAlign: "right" },
  handle: {
    widht: "10px", // Does not work
    height: "5px",
    margin: "auto",
    background: "#ddd",
    border: "2px solid #ddd",
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px"
  }
};

const style = {
  body: {
    display: "flex",
    transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    border: "0px solid #bbb",
    fontSize: "10pt",
    borderRadius: "50%",
    backgroundColor: "#90CDF4",
    clipPath: "circle(50%)",
    color: "#FFF",

  },
  selected: {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
  },
  title: {
    position: "relative",
    padding: "8px 32px",
    flexGrow: 1,
    backgroundColor: "#eee"
  },
  contentWrapper: {
    padding: "8px",
  }
};

const Node = ({
  selected,
  color,
  content
}) => {
  let customTitle = { ...style.title };
  if (color) customTitle.backgroundColor = color;

  return (
    <div style={{ ...style.body, ...(selected ? style.selected : []) }}>
      <div style={style.contentWrapper}>
        {content}
      </div>
    </div>
  );
};

export default memo(Node);

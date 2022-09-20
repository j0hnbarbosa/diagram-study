import React, { memo } from "react";
// import * as R from "ramda";
import { Handle } from "react-flow-renderer";
import Node, { contentStyle as style } from "./node";

const isValidConnection = (connection) => {
  return R.last(R.split("__", connection.target)) === "data";
};

const CustomNode = ({ data, selected }) => {
  return (

    data &&
    data.outputs &&
    data.outputs.map((element, indice) => (
      <Node
        key={indice}
        label={data.label}
        selected={selected}
        color={"LemonChiffon"}
        content={
          <>
            <span style={style.io} key={indice}>
              {console.log(element)}
              {element.label}
              {!element?.hideHandleLeft && <Handle
                type="target"
                position="left"
                id={element.idLeft}
                style={{ ...style.handle, ...style.left }}
              // isValidConnection={isValidConnection}
              />}
              {!element?.hideHandleRight && <Handle
                type="source"
                position="right"
                id={element.idRight}
                style={{ ...style.handle, ...style.right }}
              // isValidConnection={isValidConnection}
              />}
            </span>
          </>
        }
      />
    ))
  );
};

export default memo(CustomNode);

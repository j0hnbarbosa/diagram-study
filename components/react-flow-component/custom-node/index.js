import React, { memo } from "react";
// import * as R from "ramda";
import { Handle } from "react-flow-renderer";
import Node, { contentStyle as style } from "./node";

const isValidConnection = (connection) => {
  return R.last(R.split("__", connection.target)) === "data";
};

const CustomNode = ({ data, selected }) => {
  return (
    <Node
      label={data.label}
      selected={selected}
      color={"LemonChiffon"}
      content={
        <>
          <div style={style.io}>
            {"Source"}
            <Handle
              type="source"
              position="right"
              id="o__data"
              style={{ ...style.handle, ...style.right }}
              isValidConnection={isValidConnection}
            />
          </div>

          {data &&
            data.outputs &&
            data.outputs.map((element, indice) => (
              <div style={style.io} key={indice}>
                {element.label}
                <Handle
                  type="source"
                  position="right"
                  id="o__data"
                  style={{ ...style.handle, ...style.right }}
                  isValidConnection={isValidConnection}
                />
              </div>
            ))}
        </>
      }
    />
  );
};

export default memo(CustomNode);

import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import Node, { contentStyle as style } from "./node";
import stylenode from './NodeStyles.module.css';

const CustomNode = ({ data, selected }) => {
  const { output = {} } = data;

  if (!data) {
    return <></>
  }

  return (
    <>
      <Node
        key={data.id}
        label={data.label}
        selected={selected}
        color={"LemonChiffon"}
        content={
          <>
            <span style={style.io}>
              {console.log(output)}
              <span>{data.label}</span>
              {!output?.hideHandleLeft && <Handle
                type="target"
                position="left"
                id={output.idLeft}
                style={{ ...style.handle, ...style.left }}
              />}
              {!output?.hideHandleRight && <Handle
                type="source"
                position="right"
                id={output.idRight}
                style={{ ...style.handle, ...style.right }}
              />}
            </span>
          </>
        }
      />
      <div className={stylenode.labelPosition}>{output.label}</div>
    </>
  );
};

export default memo(CustomNode);

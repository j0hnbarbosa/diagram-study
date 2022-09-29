import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import Node, { contentStyle as style } from "./node";
import stylenode from './NodeStyles.module.scss';

const CustomNode = ({ data, selected }) => {
  if (!data) {
    return <></>
  }

  const { output = {} } = data;

  return (
    <div className={`nodrag ${stylenode.noCursor}`}>
      <Node
        key={data.id}
        label={data.label}
        selected={selected}
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
                isConnectable={false}
              />}
              {!output?.hideHandleRight && <Handle
                type="source"
                position="right"
                id={output.idRight}
                style={{ ...style.handle, ...style.right }}
                isConnectable={false}
              />}
            </span>
          </>
        }
      />
      <div className={`${stylenode.labelPosition}`}>{output.label}</div>
    </div>
  );
};

export default memo(CustomNode);

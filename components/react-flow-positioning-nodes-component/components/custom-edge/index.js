import React from 'react';
import { getBezierPath } from 'reactflow';
import { IoMdCube } from 'react-icons/io'

const foreignObjectSize = 20;

function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd,
}) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />

      {/* < foreignObject
        width="50"
        height="50"
        x={labelX - foreignObjectSize / 2}
        y={labelY - foreignObjectSize  / 2}
        // className={styles["edgebutton-foreignobject"]}
        requiredExtensions="http://www.w3.org/1999/xhtml"
        style={{ zIndex: '999' }}
      >

        <IoMdCube size={20} />

      </foreignObject> */}

      <text>
        <textPath
          href={`#${id}`}
          style={{ fontSize: '12px' }}
          startOffset="50%"
          textAnchor="middle"
        >
          {data.text}
        </textPath>
      </text>

    </>
  );
}

export default CustomEdge;
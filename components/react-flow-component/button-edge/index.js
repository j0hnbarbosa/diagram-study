import React, { memo, useCallback, useContext } from 'react';
import { getBezierPath, getEdgeCenter } from 'react-flow-renderer';

import styles from './ButtonEdgeStyles.module.css';

import CardMessage from '../card-message';
import { ComponentContext } from '../context';

const foreignObjectSize = 40;

function ButtonEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const {
    handleCurrentEdgeClicked,
    currentEdge,
    ...rest
  } = useContext(ComponentContext)



  const onEdgeClick = useCallback((evt) => {
    evt.stopPropagation();
    const value = currentEdge === id ? null : id;

    const coord = {
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    };

    handleCurrentEdgeClicked(value, coord)
  }, [currentEdge, handleCurrentEdgeClicked, id, sourcePosition, sourceX, sourceY, targetPosition, targetX, targetY]);

  console.log("rest", rest)
  console.log("currentEdge", currentEdge)

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />

      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        className={styles["edgebutton-foreignobject"]}
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div className={styles["container-button"]}>
          <button className={styles["edgebutton"]}
            onClick={onEdgeClick}>
            <span className={styles["label-text"]}>
              ?
            </span>
          </button>
        </div>
      </foreignObject>

      {console.log(currentEdge === id)}
      {currentEdge === id && (
        < foreignObject
          width="194"
          height="150"
          x={edgeCenterX}
          y={-36}
          // className={styles["edgebutton-foreignobject"]}
          requiredExtensions="http://www.w3.org/1999/xhtml"
          style={{ zIndex: '99999' }}
        >
          <CardMessage />

        </foreignObject>)}

    </>
  );
}

export default memo(ButtonEdge);

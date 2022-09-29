import React, { memo, useCallback, useContext, useMemo } from 'react';
import { getBezierPath, getEdgeCenter } from 'react-flow-renderer';

import styles from './ButtonEdgeStyles.module.scss';

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
  data = {},
  ...rest
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
    handleShowCenterCard,
    currentEdge,
  } = useContext(ComponentContext);

  const { centerCard } = data;

  const edgeSelected = useMemo(() => currentEdge === id ? null : id, [currentEdge, id])


  const onEdgeClick = useCallback((evt) => {
    evt.stopPropagation();

    const coord = {
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    };
    if (centerCard) {
      handleShowCenterCard(true)
    } else {
      handleCurrentEdgeClicked(edgeSelected, coord);
    }
  }, [centerCard, edgeSelected, handleCurrentEdgeClicked, handleShowCenterCard, sourcePosition, sourceX, sourceY, targetPosition, targetX, targetY]);

  const handleOnClose = useCallback(() => {
    handleCurrentEdgeClicked(null, null);
  }, [handleCurrentEdgeClicked]);

  console.log("rest", rest)
  console.log("currentEdge", currentEdge)

  return (
    <>
      <path
        id={id}
        style={edgeSelected ? { zIndex: "999" } : style}
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
      {!centerCard && currentEdge === id && (
        < foreignObject
          width="160"
          height="150"
          x={edgeCenterX - foreignObjectSize / 2}
          y={edgeCenterY - foreignObjectSize / 2}
          // className={styles["edgebutton-foreignobject"]}
          requiredExtensions="http://www.w3.org/1999/xhtml"
          style={{ zIndex: '999' }}
        >
          <CardMessage onClose={handleOnClose} />

        </foreignObject>)}

    </>
  );
}

export default memo(ButtonEdge);

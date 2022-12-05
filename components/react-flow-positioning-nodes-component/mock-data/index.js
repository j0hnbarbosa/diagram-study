import _ from 'lodash';
import { id } from 'paths-js/ops';
import { MarkerType } from 'reactflow';

import { mockValues } from './mock-nodes';

let nextId = 0;

const generateId = () => {
  nextId += 1;
  return `node-id-${nextId}`;
}


export const initPositionNodes = () => {
  const SIDE = { LEFT: 'LEFT', RIGHT: 'RIGHT' };

  const nodesList = { root: {}, [SIDE.LEFT]: [], [SIDE.RIGHT]: [] };

  const nodesFormated = [];
  const nodesEdges = [];

  const DISTANCE_X = 300;
  const DISTANCE_Y = 200;


  let nextLeftDistanceX = DISTANCE_X * -1;
  let nextRightDistanceX = DISTANCE_X;

  const distanceLeftLevel_X = {};
  const distanceRightLevel_X = {};

  const formatNode = (values, side, posX) => {
    nodesFormated.push({
      id: `${values.id}`,
      type: 'customNode',
      data: {
        label: values.label,
        idRight: `right-${values.id}`,
        idLeft: `left-${values.id}`,
        columns: [],
        side,
        parentId: `${values.parentId}`
      },
      position: { x: posX, y: DISTANCE_Y },
    },);
  }

  const formatEdge = () => {
    _.forEach(nodesFormated, (element) => {
      const { id, data } = element;
      const { parentId, idLeft, idRight, side } = data;

      let values = {
        id: `edge-${element.id}`,
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
        animated: true,

      };

      if (side === SIDE.LEFT) {
        values = {
          ...values,
          sourceHandle: idRight,
          targetHandle: `left-${parentId}`,
          source: id,
          target: parentId,
        }

      } if (side === SIDE.RIGHT) {
        values = {
          ...values,
          sourceHandle: idRight,
          targetHandle: `left-${parentId}`,
          source: parentId,
          target: id,
        }
      }
      nodesEdges.push(
        values
      )
    })

    return nodesEdges;
  }

  /**
   * 
   * @param {number} level 
   * @param {array} values 
   * @param {string} side 
   */
  const recursionData = (level, valuesNode, side, parentId) => {

    if (side === SIDE.LEFT && !distanceLeftLevel_X[level]) {
      distanceLeftLevel_X[level] = nextLeftDistanceX;
      nextLeftDistanceX += DISTANCE_X * -1;
    } else if (side === SIDE.RIGHT && !distanceRightLevel_X[level]) {
      distanceRightLevel_X[level] = nextRightDistanceX;
      nextRightDistanceX += DISTANCE_X;
    }

    let posX = 0;

    if (side === SIDE.LEFT) {
      posX = distanceLeftLevel_X[level];
    } else {
      posX = distanceRightLevel_X[level];
    }

    valuesNode.forEach(element => {
      nodesList[side].push({ id: element.id, level, label: element.label });

      const values = { ...element, parentId }

      formatNode(values, side, posX,);
      recursionData(
        level + 1,
        side === SIDE.LEFT ? element.left : element.right,
        side,
        element.id
      );
    });
  }

  nodesList.root = { id: mockValues.id, level: 0, label: mockValues.label };
  formatNode(mockValues, SIDE.LEFT, 0, null)


  recursionData(
    1,
    mockValues.left,
    SIDE.LEFT,
    nodesList.root.id
  );

  recursionData(
    1,
    mockValues.right,
    SIDE.RIGHT,
    nodesList.root.id
  );

  console.log('nodesList', nodesList);

  const groupedNodesLeft = _.groupBy(nodesList[SIDE.LEFT], (element) => element.level);
  const groupedNodesRight = _.groupBy(nodesList[SIDE.RIGHT], (element) => element.level);
  console.log('groupedNodesLeft', groupedNodesLeft)
  console.log('groupedNodesRight', groupedNodesRight)

  const calculatePositionY = () => {
    let newPosY = [];
    const newObjectPosY = {};

    _.forEach([groupedNodesLeft, groupedNodesRight], (elementSide) => {
      _.forEach(elementSide, (elements) => {
        const sizeData = elements.length;
        const center = Math.floor(sizeData / 2);
        let listsPosY = _.times(sizeData, () => ({ y: 0, id: 0 }));
        let posY = 0;

        for (let i = center; i >= 0; i--) {
          listsPosY[i] = {
            y: (posY - DISTANCE_Y) * -1 === 0 ? 0 : (posY - DISTANCE_Y) * -1
          };

          listsPosY[(sizeData - 1) - i] = {
            y: posY
          };

          posY += DISTANCE_Y;
        }

        // listsPosY[center] = { y: 0 };

        console.log('listsPosY', listsPosY);

        _.forEach(elements, (element, index) => {
          listsPosY[index].id = element.id
        })

        newPosY = [...newPosY, ...listsPosY]
      })
    })


    _.forEach(newPosY, (element) => {
      newObjectPosY[element.id] = element
    })

    newObjectPosY[nodesList.root.id] = { y: 0 }

    return newObjectPosY;
  };

  const newListPosY = calculatePositionY();

  // console.log('newListPosY', newListPosY);

  // console.log('groupedNodes', groupedNodes);
  // console.log('nodesFormated', nodesFormated);

  const newNodesFormated = _.map(nodesFormated, (element) => {
    return ({
      ...element,
      position: {
        ...element.position,
        y: newListPosY[element.id].y
      }
    })
  })

  console.log('newNodesFormated', newNodesFormated);

  console.log('mockValues', mockValues)

  const newEdgesFormated = formatEdge();

  console.log('newEdgesFormated', newEdgesFormated)

  return { newNodesFormated, newEdgesFormated };
}

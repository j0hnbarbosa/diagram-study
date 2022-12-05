import _ from 'lodash';
import { id } from 'paths-js/ops';
import { MarkerType } from 'reactflow';

import { mockValues } from './mock-nodes';

let nextId = 0;

const generateId = () => {
  nextId += 1;
  return `node-id-${nextId}`;
}


export const usePositionNodes = () => {

  const nodesList = [];
  const nodesFormated = [];

  const SIDE = { LEFT: 'LEFT', RIGHT: 'RIGHT' };

  const DISTANCE_X = 300;
  const DISTANCE_Y = 200;


  let nextLeftDistanceX = DISTANCE_X * -1;
  let nextRightDistanceX = DISTANCE_Y;

  const distanceLeftLevel_X = {};
  const distanceRightLevel_X = {};

  const formatNode = (values, side, posX) => {
    nodesFormated.push({
      id: values.id,
      type: 'customNode',
      data: {
        label: values.label,
        columns: [],
      },
      position: { x: posX, y: 50 },
    },);
  }

  /**
   * 
   * @param {number} level 
   * @param {array} values 
   * @param {string} side 
   */
  const recursionData = (level, values, side) => {

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

    values.forEach(element => {
      nodesList.push({ id: element.id, level, label: element.label });
      formatNode(element, side, posX);
      recursionData(
        level + 1,
        side === SIDE.LEFT ? element.left : element.right,
        side
      );
    });
  }

  nodesList.push({ id: mockValues.id, level: 0, label: mockValues.label });
  formatNode(mockValues, SIDE.LEFT, 0)

  recursionData(
    1,
    mockValues.left,
    SIDE.LEFT,
  );

  recursionData(
    1,
    mockValues.right,
    SIDE.RIGHT,
  );

  console.log('nodesList', nodesList);

  const groupedNodes = _.groupBy(nodesList, (element) => element.level);
  
  const calculatePositionY = () => {
    let newPosY = [];
    const newObjectPosY = {};

    _.forEach(groupedNodes, (elements) => {
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

    _.forEach(newPosY, (element) => {
      newObjectPosY[element.id] = element
    })

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

  // console.log('newNodesFormated', newNodesFormated);

  console.log('mockValues', mockValues)

  return newNodesFormated;
}

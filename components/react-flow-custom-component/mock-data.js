let nextId = 0;

const generateId = () => {
  nextId += 1;
  return `node-id-${nextId}`;
}

export const initialNodes = [
  {
    id: 'id-source-1',
    type: 'customNode',
    data: {
      label: 'Node 1 A',
      columns:
        [
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-test-1',
            idRight: 'source-right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
        ]
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'id-target-2',
    type: 'customNode',
    data: {
      label: 'Node 2 B',
      columns:
        [
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'target-left-node2-2',
            idRight: 'target-right-node2-2',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
        ]
    },
    position: { x: 0, y: 400 },
  },
  {
    id: generateId(),
    type: 'customNode',
    data: {
      label: 'Node 3 C',
      columns:
        [
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
        ]
    },
    position: { x: 300, y: 200 },
  },
  {
    id: generateId(),
    type: 'customNode',
    data: {
      label: 'Node 4 D',
      columns:
        [
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
        ]
    },
    position: { x: 600, y: 0 },
  },
  {
    id: generateId(),
    type: 'customNode',
    data: {
      label: 'Node 5 E',
      columns:
        [
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
          {
            id: generateId(),
            hideHandleLeft: true,
            idLeft: 'left-node1-1',
            idRight: 'right-node1-1',
            type: "data",
            label: "Origem (DAX)"
          },
        ]
    },
    position: { x: 600, y: 400 },
  }
];

export const initialEdges = [
  {
    id: 'test-edge-id-1',
    data: {
      centerCard: true
    },
    type: 'buttonEdge',
    sourceHandle: 'source-right-node1-1',
    targetHandle: 'target-left-node2-2',
    source: 'id-source-1',
    target: 'id-target-2',
    animated: true
  },
]
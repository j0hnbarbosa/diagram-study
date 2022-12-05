import _ from 'lodash';

export const nodes = {
  node1: { label: 'Node 1', id: 'id-1', left: [], right: [] },
  node2: { label: 'Node 2', id: 'id-2', left: [], right: [] },
  node3: { label: 'Node 3', id: 'id-3', left: [], right: [] },
  node4: { label: 'Node 4', id: 'id-4', left: [], right: [] },
  node5: { label: 'Node 5', id: 'id-5', left: [], right: [] },
  node6: { label: 'Node 6', id: 'id-6', left: [], right: [] },
  node7: { label: 'Node 7', id: 'id-7', left: [], right: [] },
  node8: { label: 'Node 8', id: 'id-8', left: [], right: [] },
  node9: { label: 'Node 9', id: 'id-9', left: [], right: [] },
  node10: { label: 'Node 10', id: 'id-10', left: [], right: [] },
  node11: { label: 'Node 11', id: 'id-11', left: [], right: [] },
  node12: { label: 'Node 12', id: 'id-12', left: [], right: [] },
  node13: { label: 'Node 13', id: 'id-13', left: [], right: [] },
  node14: { label: 'Node 14', id: 'id-14', left: [], right: [] },
  node15: { label: 'Node 15', id: 'id-15', left: [], right: [] },
  node16: { label: 'Node 16', id: 'id-16', left: [], right: [] },
  node17: { label: 'Node 17', id: 'id-17', left: [], right: [] },
  node18: { label: 'Node 18', id: 'id-18', left: [], right: [] },
  node19: { label: 'Node 19', id: 'id-19', left: [], right: [] },
  node20: { label: 'Node 20', id: 'id-20', left: [], right: [] }
};

export const mockValues = {
  ...nodes.node1,
  left: [
    { ...nodes.node2, left: [nodes.node6, nodes.node7] },
    nodes.node3,
    nodes.node4,
    nodes.node5,
  ],
  right: [
    {
      ...nodes.node8, right: [
        {
          ...nodes.node12, right: [
            nodes.node17,
            nodes.node18,
            nodes.node19,
          ]
        },
        nodes.node13,
        {
          ...nodes.node14, right: [
            nodes.node15,
            nodes.node16,
          ]
        }
      ]
    },
    nodes.node9,
    nodes.node10,
    nodes.node11,
  ]
};

// const a = _.times(20, (i) => (
//   `node${i + 1}: { 
//     label: 'Node ${i + 1}', 
//     id: 'id-${'i+1},
//     left: [], right: []
//   }`
// ))

// console.log(a)
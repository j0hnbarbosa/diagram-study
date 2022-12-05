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
  node20: { label: 'Node 20', id: 'id-20', left: [], right: [] },
  node21: { label: 'Node 21', id: 'id-21', left: [], right: [] },
  node22: { label: 'Node 22', id: 'id-22', left: [], right: [] },
  node23: { label: 'Node 23', id: 'id-23', left: [], right: [] },
  node24: { label: 'Node 24', id: 'id-24', left: [], right: [] },
  node25: { label: 'Node 25', id: 'id-25', left: [], right: [] },
  node26: { label: 'Node 26', id: 'id-26', left: [], right: [] },
  node27: { label: 'Node 27', id: 'id-27', left: [], right: [] },
  node28: { label: 'Node 28', id: 'id-28', left: [], right: [] },
  node29: { label: 'Node 29', id: 'id-29', left: [], right: [] },
  node30: { label: 'Node 30', id: 'id-30', left: [], right: [] },
  node31: { label: 'Node 31', id: 'id-31', left: [], right: [] },
  node32: { label: 'Node 32', id: 'id-32', left: [], right: [] },
  node33: { label: 'Node 33', id: 'id-33', left: [], right: [] },
  node34: { label: 'Node 34', id: 'id-34', left: [], right: [] },
  node35: { label: 'Node 35', id: 'id-35', left: [], right: [] },
  node36: { label: 'Node 36', id: 'id-36', left: [], right: [] },
  node37: { label: 'Node 37', id: 'id-37', left: [], right: [] },
  node38: { label: 'Node 38', id: 'id-38', left: [], right: [] },
  node39: { label: 'Node 39', id: 'id-39', left: [], right: [] },
  node40: { label: 'Node 40', id: 'id-40', left: [], right: [] },
  node41: { label: 'Node 41', id: 'id-41', left: [], right: [] },
  node42: { label: 'Node 42', id: 'id-42', left: [], right: [] },
  node43: { label: 'Node 43', id: 'id-43', left: [], right: [] },
  node44: { label: 'Node 44', id: 'id-44', left: [], right: [] },
  node45: { label: 'Node 45', id: 'id-45', left: [], right: [] },
  node46: { label: 'Node 46', id: 'id-46', left: [], right: [] },
  node47: { label: 'Node 47', id: 'id-47', left: [], right: [] },
  node48: { label: 'Node 48', id: 'id-48', left: [], right: [] },
  node49: { label: 'Node 49', id: 'id-49', left: [], right: [] },
  node50: { label: 'Node 50', id: 'id-50', left: [], right: [] }

};

export const mockValues = {
  ...nodes.node1,
  left: [
    {
      ...nodes.node2, left: [
        {
          ...nodes.node6,
          left: [
            nodes.node27,
            nodes.node28,
            nodes.node29,
            nodes.node30,
          ]
        },
        nodes.node7
      ]
    },
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
    {
      ...nodes.node9, right: [
        nodes.node20,
        nodes.node21,
        {
          ...nodes.node22, //right: [nodes.node9]
        },
      ]
    },
    {
      ...nodes.node10, right: [
        nodes.node23,
        nodes.node24,
        nodes.node25,
        nodes.node26,
      ]
    },
    nodes.node11,
  ]
};

// const a = _.times(50, (i) => (
//   `node${i + 1}: {
//     label: 'Node ${i + 1}', 
//     id: 'id-${i + 1}',
//     left: [],
//     right: []
//   }`
// ))

// console.log(a)
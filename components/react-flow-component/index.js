import { useCallback } from 'react';

import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
} from 'react-flow-renderer';

import style from '../../styles/ContainerDiagram.module.css'
import CustomNode from './custom-node';

const nodeTypes = {
  customNode: CustomNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'customNode',
    data: {
      label: 'Node 1',
      outputs: [
        { hideHandleLeft: true, idLeft: 'left-node1-1', idRight: 'right-node1-1', label: "Node 1 A", type: "data" },
        // { firstNode: true, idLeft: 'left-node1-2', idRight: 'right-node1-2', label: "Node 1 B", type: "value" }
      ]
    },
    position: { x: 50, y: 100 },
    className: 'light',
  },
  {
    id: '2',
    type: 'customNode',
    data: {
      label: 'Node 2',
      outputs: [
        // { idLeft: 'left-node2-1', idRight: 'right-node2-1', label: "Node 2 A", type: "data" },
        { idLeft: 'left-node2-2', idRight: 'right-node2-2', label: "Node 2 B", type: "value" }
      ]
    },
    position: { x: 250, y: 100 }, className: 'light'
  },
  {
    id: '3',
    type: 'customNode',
    data: {
      label: 'Node 3',
      outputs: [
        { hideHandleRight: true, idLeft: 'left-node3-1', idRight: 'right-node3-1', label: "Node 3 A", type: "data" },
        // { hideHandleRight: true, idLeft: 'left-node3-2', idRight: 'right-node3-2', label: "Node 3 B", type: "value" },
        // { hideHandleRight: true, idLeft: 'left-node3-3', idRight: 'right-node3-3', label: "Node 3 C", type: "value" },
      ]
    },
    position: { x: 450, y: 25 }, className: 'light'
  },
  {
    id: '3-1',
    type: 'customNode',
    data: {
      label: 'Node 3-1',
      outputs: [
        { idLeft: 'left-node3-2', idRight: 'right-node3-2', label: "Node 3 B", type: "value" },
      ]
    },
    position: { x: 450, y: 100 }, className: 'light'
  },
  {
    id: '3-2',
    type: 'customNode',
    data: {
      label: 'Node 3-2',
      outputs: [
        { hideHandleRight: true, idLeft: 'left-node3-3', idRight: 'right-node3-3', label: "Node 3 C", type: "value" },
      ]
    },
    position: { x: 450, y: 175 }, className: 'light'
  },
  {
    id: '4',
    type: 'customNode',
    data: {
      label: 'Node 4',
      outputs: [
        { hideHandleRight: true, idLeft: 'left-node4-1', idRight: 'right-node4-1', label: "Node 4 A", type: "value" },
      ]
    },
    position: { x: 650, y: 25 }, className: 'light'
  },
];

const initialEdges = [
  // { id: 'e1-2', source: '1', target: '2', animated: true },
  // { id: 'e1-22', source: '1', target: '2' },
  // { id: 'e2-3', source: '2', target: '3' },
  { id: 'e-1', sourceHandle: 'right-node1-1', targetHandle: 'left-node2-2', source: '1', target: '2', animated: true },
  { id: 'e-2', sourceHandle: 'right-node2-1', targetHandle: 'left-node3-1', source: '2', target: '3' },
  { id: 'e-3', sourceHandle: 'right-node2-1', targetHandle: 'left-node3-2', source: '2', target: '3-1' },
  { id: 'e-4', sourceHandle: 'right-node2-1', targetHandle: 'left-node3-3', source: '2', target: '3-2' },
  { id: 'e-4', sourceHandle: 'right-node3-2', targetHandle: 'left-node4-1', source: '3-1', target: '4' },
];

function ReactFlowComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, [setEdges]);

  return (
    <div className={style.container}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        className="react-flow-subflows-example"
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default ReactFlowComponent
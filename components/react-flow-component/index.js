// default styling
import 'reactflow/dist/style.css';
import { useCallback, useState } from 'react';


import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
} from 'reactflow';

import style from '../../styles/ContainerDiagram.module.scss'
import CustomNode from './custom-node';
import ButtonEdge from './button-edge';
import Message from './message';

import { ComponentContext } from './context';
import CardMessage from './card-message';

const nodeTypes = {
  customNode: CustomNode,
};

const edgeTypes = {
  buttonEdge: ButtonEdge,
};

const initialNodes = [
  {
    id: '1',
    type: 'customNode',
    data: {
      label: 'Node 1 A',
      output:
        { hideHandleLeft: true, idLeft: 'left-node1-1', idRight: 'right-node1-1', type: "data", label: "Origem (DAX)" },
    },
    position: { x: 50, y: 100 },
    className: 'light',
  },
  {
    id: '2',
    type: 'customNode',
    data: {
      label: 'Node 2 A',
      output:
        { idLeft: 'left-node2-2', idRight: 'right-node2-2', label: "Processo", type: "value" }

    },
    position: { x: 250, y: 100 }, className: 'light'
  },
  {
    id: '3',
    type: 'customNode',
    data: {
      label: 'Node 3 A',
      output:
        { hideHandleRight: true, idLeft: 'left-node3-1', idRight: 'right-node3-1', label: "Entidade Atual", type: "data" },
    },
    position: { x: 450, y: 0 }, className: 'light'
  },
  {
    id: '3-1',
    type: 'customNode',
    data: {
      label: 'Node 3 B "',
      output:
        { idLeft: 'left-node3-2', idRight: 'right-node3-2', label: "Processo", type: "value" },
    },
    position: { x: 450, y: 100 }, className: 'light'
  },
  {
    id: '3-2',
    type: 'customNode',
    data: {
      label: 'Node 3 C',
      output:
        { hideHandleRight: true, idLeft: 'left-node3-3', idRight: 'right-node3-3', label: "Destino (DAX)", type: "value" },
    },
    position: { x: 450, y: 200 }, className: 'light'
  },
  {
    id: '4',
    type: 'customNode',
    data: {
      label: 'Node 4 A',
      output:
        { hideHandleRight: true, idLeft: 'left-node4-1', idRight: 'right-node4-1', label: "Destino (DAX)", type: "value" },
    },
    position: { x: 650, y: 0 }, className: 'light'
  },
];

const initialEdges = [
  { id: 'e-1', data: { centerCard: true }, zIndex: 1, type: 'buttonEdge', sourceHandle: 'right-node1-1', targetHandle: 'left-node2-2', source: '1', target: '2', animated: true },
  { id: 'e-2', zIndex: 1, type: 'buttonEdge', sourceHandle: 'right-node2-1', targetHandle: 'left-node3-1', source: '2', target: '3' },
  { id: 'e-3', zIndex: 1, type: 'buttonEdge', sourceHandle: 'right-node2-1', targetHandle: 'left-node3-2', source: '2', target: '3-1', animated: true },
  { id: 'e-4', zIndex: 1, type: 'buttonEdge', sourceHandle: 'right-node2-1', targetHandle: 'left-node3-3', source: '2', target: '3-2' },
  { id: 'e-5', zIndex: 1, type: 'buttonEdge', sourceHandle: 'right-node3-2', targetHandle: 'left-node4-1', source: '3-1', target: '4', animated: true },
];


function ReactFlowComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [currentEdge, setCurrentEdge] = useState(null);
  const [showCenterCard, setShowCenterCard] = useState(false);

  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, [setEdges]);

  const handleCurrentEdgeClicked = (value) => {
    console.log("handleCurrentEdgeClicked", value)
    setCurrentEdge(value);
  }

  const handleShowCenterCard = (value) => {
    setShowCenterCard(value);
  };

  const valuesContext = {
    handleCurrentEdgeClicked,
    handleShowCenterCard,
    currentEdge,
  };

  return (
    <ComponentContext.Provider value={valuesContext}>

      <div className={`${style.container}`}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          preventScrolling
        >
          {showCenterCard && (
            <div className={style.containerMessageCard}>
              <CardMessage
                width={200}
                height={204}
                isCardCenter
                onClose={() => handleShowCenterCard(false)}
                isOpen={showCenterCard}
              />
            </div>
          )}

          <MiniMap />
          {/* <Controls /> */}
          <Background />
        </ReactFlow>
      </div>

    </ComponentContext.Provider>
  );
}

export default ReactFlowComponent
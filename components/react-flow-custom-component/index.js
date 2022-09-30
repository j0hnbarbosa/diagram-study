import { useState } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
} from 'react-flow-renderer';

import CustomNode from './components/custom-node';

import { ComponentContext } from './context';

import styles from '../../styles/ContainerDiagram.module.scss'

import {
  initialNodes,
  initialEdges
} from './mock-data';

const nodeTypes = {
  customNode: CustomNode,
}

function ReactFlowCustomComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [showNodeBody, setShowNodeBody] = useState(false);

  const valuesContext = {
    showNodeBody,
    setShowNodeBody
  };

  return (
    <ComponentContext.Provider value={valuesContext}>

      <div className={styles.container}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}

        >

          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>

    </ComponentContext.Provider>
  )
}

export default ReactFlowCustomComponent;
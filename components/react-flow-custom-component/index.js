// default styling
import 'reactflow/dist/style.css';
import { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
} from 'reactflow';

import CustomNode from './components/custom-node';
import CustomEdge from './components/custom-edge';

import { ComponentContext } from './context';

import styles from '../../styles/ContainerDiagram.module.scss'

import {
  initialNodes,
  initialEdges
} from './mock-data';

const nodeTypes = {
  customNode: CustomNode,
}

const edgeTypes = {
  custom: CustomEdge,
};

function ReactFlowCustomComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [showNodeBody, setShowNodeBody] = useState(true);


  const handleHideEdge = (valueEdge, hide = false, side) => {
    let newEdges = edges;

    if (hide) {
      newEdges = edges.filter((element) => {
        if (side === 'left') return element.targetHandle !== valueEdge
        return element.sourceHandle !== valueEdge
      })
    }
    else {
      const valueInitial = initialEdges.find((element) => {
        if (side === 'left') return element.targetHandle === valueEdge
        return element.sourceHandle === valueEdge
      })
      newEdges = [valueInitial]
    }
    console.log(newEdges)
    setEdges(newEdges);
  }

  const valuesContext = {
    showNodeBody,
    setShowNodeBody,
    handleHideEdge,
  };


  return (
    <ComponentContext.Provider value={valuesContext}>

      <div className={styles.container}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
          edgeTypes={edgeTypes}
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
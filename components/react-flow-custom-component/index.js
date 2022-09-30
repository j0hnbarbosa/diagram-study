import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
} from 'react-flow-renderer';

import CustomNode from './components/custom-node';

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
  const [edges] = useNodesState(initialEdges);

  return (
    <div className={styles.container}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        // onNodesChange={onNodesChange}
      >

        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}

export default ReactFlowCustomComponent;
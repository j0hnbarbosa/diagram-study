import createEngine, {
  DefaultNodeModel,
  DiagramModel
} from '@projectstorm/react-diagrams';

import {
  CanvasWidget
} from '@projectstorm/react-canvas-core';

import style from '../../styles/ContainerDiagram.module.css'

function ReactDiagramComponent() {
  // create an instance of the engine with all the defaults
  const engine = createEngine();

  // node 1
  const node1 = new DefaultNodeModel({
    name: 'Node 1',
    color: 'rgb(0,192,255)',
  });
  node1.setPosition(100, 100);
  let port1 = node1.addOutPort('Out');

  // node 2
  const node2 = new DefaultNodeModel({
    name: 'Node 1',
    color: 'rgb(0,192,255)',
  });
  node2.setPosition(200, 100);
  let port2 = node2.addOutPort('Out2');

  // node 3
  const node3 = new DefaultNodeModel({
    name: 'Node 3',
    color: 'rgb(0,192,255)',
  });

  node3.setPosition(300, 200);
  let port3 = node3.addOutPort('Out3');

  // link them and add a label to the link
  const link = port1.link(port2);
  const link2 = port3.link(port2);
  // link.addLabel('Hello World!');

  const model = new DiagramModel();
  model.addAll(node1, node2, node3, link, link2);
  engine.setModel(model);

  return (
    <div
      className={style.container}
    >
      <CanvasWidget engine={engine} />
    </div>
  )
}

export default ReactDiagramComponent
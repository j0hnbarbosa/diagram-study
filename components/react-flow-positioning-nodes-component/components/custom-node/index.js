import { useContext, memo, useCallback, useEffect, useRef } from 'react';
import Header from './header';
import Body from './body';

import styles from './custom-node.module.scss';
import { ComponentContext } from '../../context';


function CustomNode(props) {
  const {
    data = {},
    id,
  } = props;

  const { label, columns } = data

  const {
    showNodeBody,
    setShowNodeBody,
    handleHideEdge,
  } = useContext(ComponentContext)

  let intersectionObserver = useRef();

  const handleShowBody = () => {
    setShowNodeBody((prev) => !prev);
  }

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entrie) => {
      // console.log('handleIntersection', entrie);


      if (!entrie.isIntersecting) {
        // entrie.target.style.backgroundColor = "red"

        if (entrie.target.attributes.idleft.value === "target-left-node3-3") {
          console.log(entrie.target.attributes.idleft.value)
          handleHideEdge('target-left-node3-3', true, 'left');
        } else if (entrie.target.attributes.idright.value === 'source-right-node1-1') {
          handleHideEdge('source-right-node1-1', true, 'right');
        }

        if (entrie.target.attributes.idleft.value === "target-left-node3-12") {
          console.log(entrie.target.attributes.idleft.value)
          handleHideEdge('target-left-node3-12', true, 'left');
        } else if (entrie.target.attributes.idright.value === 'source-right-node1-12') {
          handleHideEdge('source-right-node1-12', true, 'right');
        }
      } else {
        // entrie.target.style.backgroundColor = "lightgreen"

        if (entrie.target.attributes.idleft.value === "target-left-node3-3") {
          console.log(entrie.target.attributes.idleft.value)
          handleHideEdge('target-left-node3-3', false, 'left');
        } else if (entrie.target.attributes.idright.value === 'source-right-node1-1') {
          handleHideEdge('source-right-node1-1', false, 'right');
        }

        if (entrie.target.attributes.idleft.value === "target-left-node3-12") {
          console.log(entrie.target.attributes.idleft.value)
          handleHideEdge('target-left-node3-12', false, 'left');
        } else if (entrie.target.attributes.idright.value === 'source-right-node1-12') {
          handleHideEdge('source-right-node1-12', false, 'right');
        }

      }
    })
  }, [handleHideEdge]);

  const handleConfigIntersectionObserver = useCallback((options) => {
    console.log("ID:", id)
    intersectionObserver.current = new IntersectionObserver(handleIntersection, options);
  }, [handleIntersection, id])

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef && containerRef.current && !intersectionObserver.current) {
      let options = {
        root: containerRef.current,
        rootMargin: '0px',
        threshold: 0.1
      };

      handleConfigIntersectionObserver(options);
    }

  }, [handleConfigIntersectionObserver]);

  return (
    <div className={styles.containerNode} ref={containerRef}>
      <Header
        onShow={handleShowBody}
        show={showNodeBody}
        label={label}
        id={id}
        idLeft={data.idLeft}
        idRight={data.idRight}
      />

      <Body
        show={showNodeBody}
        columns={columns}
        intersectionObserver={intersectionObserver.current}
      />
    </div>
  )
}

export default memo(CustomNode);

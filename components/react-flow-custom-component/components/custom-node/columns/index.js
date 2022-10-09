import { BsGrid3X3Gap } from 'react-icons/bs';
import { Handle } from 'reactflow';

import styles from './columns.module.scss'
import { useEffect, useRef } from 'react';

function Columns({
  label = "",
  hideHandleLeft = true,
  hideHandleRight = true,
  id,
  idLeft,
  idRight,
  onGetRefColumn,
}) {

  const columnRef = useRef();

  useEffect(() => {
    if (columnRef && columnRef.current) {
      onGetRefColumn(columnRef);
    }
  }, [onGetRefColumn]);

  return (
    <div className={styles.container} ref={columnRef} idleft={idLeft} idright={idRight}>
      <BsGrid3X3Gap size={12} />

      <div className={styles.label}>
        {label}
      </div>

      {hideHandleLeft && (
        <Handle
          // id={`${id}-left`}
          type="target"
          position="left"
          id={idLeft}
          className={`${styles.handle} ${styles.left}`}
          isConnectable={false}
        />
      )}

      {hideHandleRight && (
        <Handle
          // id={`${id}-right`}
          type="source"
          position="right"
          id={idRight}
          className={`${styles.handle} ${styles.right}`}
          isConnectable={false}
        />
      )}
    </div>
  )
}

export default Columns
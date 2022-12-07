import { BsGrid3X3Gap } from 'react-icons/bs';
import { Handle } from 'reactflow';

import styles from './columns.module.scss'
import { useEffect, useRef } from 'react';

function Columns({
  onGetRefColumn,
  column,
}) {

  const columnRef = useRef();

  const {
    label,
    id,
    idLeft,
    idRight,
    showHandleLeft = true,
    showHandleRight = true,
  } = column;

  useEffect(() => {
    // if (columnRef && columnRef.current) {
    //   onGetRefColumn(columnRef);
    // }
  }, [onGetRefColumn]);

  return (
    <div className={styles.container} ref={columnRef} idleft={idLeft} idright={idRight}>
      <BsGrid3X3Gap size={12} />

      <div className={styles.label}>
        {label}
      </div>

      {showHandleLeft && (
        <Handle
          // id={`${id}-left`}
          type="target"
          position="left"
          id={idLeft}
          className={`${styles.handle}`}
          isConnectable={false}
        />
      )}

      {showHandleRight && (
        <Handle
          // id={`${id}-right`}
          type="source"
          position="right"
          id={idRight}
          className={`${styles.handle}`}
          isConnectable={false}
        />
      )}
    </div>
  )
}

export default Columns
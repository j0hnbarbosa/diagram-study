import { BsGrid3X3Gap } from 'react-icons/bs';
import { Handle } from "react-flow-renderer";

import styles from './columns.module.scss'

function Columns({
  label = "",
  hideHandleLeft = true,
  hideHandleRight = true,
  id,
  idLeft,
  idRight,
}) {
  return (
    <div className={styles.container} >
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
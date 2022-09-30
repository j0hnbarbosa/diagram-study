import { useState, memo } from 'react';
import Header from './header';
import Body from './body';

import styles from './custom-node.module.scss';

function CustomNode(props) {
  const [showBody, setShowBody] = useState(true);

  console.log('CustomNode props', props)

  const { data = {} } = props;
  const { label, columns } = data

  const handleShowBody = () => {
    setShowBody((prev) => !prev)
  }

  return (
    <div className={styles.containerNode}>
      <Header
        onShow={handleShowBody}
        show={showBody}
        label={label}
      />

      <Body
        show={showBody}
        columns={columns}
      />
    </div>
  )
}

export default memo(CustomNode);

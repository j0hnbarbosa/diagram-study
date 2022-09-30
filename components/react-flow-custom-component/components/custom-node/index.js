import { useContext, memo } from 'react';
import Header from './header';
import Body from './body';

import styles from './custom-node.module.scss';
import { ComponentContext } from '../../context';

function CustomNode(props) {
  console.log('CustomNode props', props)

  const {
    data = {},
  } = props;

  const { label, columns } = data

  const {
    showNodeBody,
    setShowNodeBody,
  } = useContext(ComponentContext)

  const handleShowBody = () => {
    setShowNodeBody((prev) => !prev);
  }

  return (
    <div className={styles.containerNode}>
      <Header
        onShow={handleShowBody}
        show={showNodeBody}
        label={label}
      />

      <Body
        show={showNodeBody}
        columns={columns}
      />
    </div>
  )
}

export default memo(CustomNode);

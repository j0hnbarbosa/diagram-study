import { useEffect, useRef } from 'react';
import styles from './body.module.scss';
import Columns from '../columns';
import _ from 'lodash';

function Body({
  show = false,
  columns,
  intersectionObserver,
}) {

  if (!show || !columns || columns.length === 0 || !intersectionObserver) {
    return <></>
  }

  const handleGetRefColumn = (ref) => {
    intersectionObserver.observe(ref.current);
  }

  // console.log(listObserve);

  return (
    <div className={`nodrag nopan nowheel ${styles.scroll} ${styles.container}`}>
      <div>

        {columns.map((element) => (
          <Columns
            onGetRefColumn={handleGetRefColumn}
            key={element.id}
            label={element.label}
            id={element.id}
            idLeft={element.idLeft}
            idRight={element.idRight}
          />
        ))}

      </div>
    </div>
  )
}

export default Body
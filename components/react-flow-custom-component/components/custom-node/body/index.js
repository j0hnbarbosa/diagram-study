import PropTypes from 'prop-types';
import styles from './body.module.scss';
import Columns from '../columns';
import _ from 'lodash';

const initialColumns = _.times(25, (indice) => (
  <Columns
    key={indice}
    text={`Columns ${indice}`}
  />
));

function Body({
  show = false,
  columns,
}) {

  if (!show || !columns || columns.length === 0) {
    return <></>
  }

  return (
    <div className={`nodrag nopan nowheel ${styles.scroll} ${styles.container}`}>
      {columns.map((element) => (
        <Columns
          key={element.id}
          label={element.label}
          id={element.id}
        />
      ))}
    </div>
  )
}

export default Body
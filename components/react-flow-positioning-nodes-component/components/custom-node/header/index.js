import PropTypes from 'prop-types';

import {
  BsChevronDown,
  BsChevronUp,
  BsFillGrid3X3GapFill
} from 'react-icons/bs';
import { ComponentContext } from '../../../context';

import styles from './header.module.scss';

function Header({
  onShow = () => { },
  show = false,
  label = "",
}) {

  return (
    <div className={styles.containerHeader}>
      <div className={styles.containerLeft}>
        <BsFillGrid3X3GapFill size={14} />
        <div className={styles.title}>
          {label}
        </div>
      </div>

      <div
        onClick={onShow}
        className={styles.containerChevron}
      >
        {show ? <BsChevronDown /> : <BsChevronUp />}
      </div>
    </div>
  )
}

Header.propTypes = {
  onShow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default Header
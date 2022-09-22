import style from './styles.module.css';

function CardMessage({
  linkpage = "",
  linkDocumentation = "",
  header = "",
  onClose,
}) {
  return (
    <div className={`nowheel react-flow__edge react-flow__edge-buttonEdge nopan ${style.container}`}>
      <div onClick={onClose} className={style.close}>X</div>

      <div className={style.containerScroll}>

        <div className={style.content}>
          <div>
            <span className={`${style.textLink} ${style.centerText}`}>
              Example showing:
            </span>
            <div className={`${style.description}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula scelerisque magna et semper. Nulla facilisi. Integer dolor sapien, euismod a sodales a, tincidunt ac magna.
            </div>
          </div>
          <div>
            <span className={`${style.textLink} ${style.centerText}`}>
              Data Info:
            </span>
            <div className={`${style.description}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula scelerisque magna et semper. Nulla facilisi. Integer dolor sapien, euismod a sodales a, tincidunt ac magna.
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardMessage;

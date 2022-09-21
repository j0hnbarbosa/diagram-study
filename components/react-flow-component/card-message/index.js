import style from './styles.module.css';

function CardMessage({
  linkpage = "",
  linkDocumentation = "",
  header = "",
}) {
  return (
    <div className={style.container}>
      <div className={style.containerHeader}>
        <span className={style.header}>{header}</span>
      </div>

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
  )
}

export default CardMessage;

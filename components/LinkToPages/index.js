import style from './styles.module.scss';

function LinkToPages({
  linkpage = "",
  linkPageCustom = "",
  linkPagePosition = "",
  linkDocumentation = "",
  header = "",
}) {
  return (
    <div className={style.container}>
      <div className={style.containerHeader}>
        <span className={style.header}>{header}</span>
      </div>

      <span className={style.centerText}>
        <a href={linkpage} className={style.textLink}>
          Page Example
        </a>
      </span>

      {linkPageCustom &&
        (<span className={style.centerText}>
          <a href={linkPageCustom} className={style.textLink}>
            Page Example Custom
          </a>
        </span>)}
      
      {linkPagePosition &&
        (<span className={style.centerText}>
          <a href={linkPagePosition} className={style.textLink}>
            Page Example Postion Nodes
          </a>
        </span>)}

      <span className={style.centerText}>
        <a href={linkDocumentation} target='_blank' rel="noreferrer noopener" className={style.textLink}>
          Documentation page
        </a>
      </span>
    </div>
  )
}

export default LinkToPages;

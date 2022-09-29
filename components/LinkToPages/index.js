import style from './styles.module.scss';

function LinkToPages({
  linkpage = "",
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

      <span className={style.centerText}>
        <a href={linkDocumentation} target='_blank' rel="noreferrer noopener" className={style.textLink}>
          Documentation page
        </a>
      </span>
    </div>
  )
}

export default LinkToPages;

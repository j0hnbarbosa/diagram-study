import style from './styles.module.scss';

function CardMessage({
  onClose,
  isCardCenter = false,
  isOpen = false,
}) {
  return (
    <div className={`nowheel nodrag nopan ${style.container} ${isCardCenter ? style.cardCenter : ''} ${!isOpen ? style.paddingNormal : ''}`}>
      <div onClick={onClose} className={`${style.close} ${isCardCenter ? style.cardClose : ''}`}>X</div>

      <div className={style.containerScroll}>

        <div className={`${isCardCenter ? style.cardContent : style.content}`}>
          <div>
            <span className={`${style.textLink} ${style.centerText} ${isCardCenter ? style.cardCenterLink : ''}`}>
              Example showing:
            </span>
            <div className={`${style.description} ${isCardCenter ? style.cardCenterDescription : ''}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula scelerisque magna et semper. Nulla facilisi. Integer dolor sapien, euismod a sodales a, tincidunt ac magna.
            </div>
          </div>
          <div>
            <span className={`${style.textLink} ${style.centerText} ${isCardCenter ? style.cardCenterLink : ''}`}>
              Data Info:
            </span>
            <div className={`${style.description} ${isCardCenter ? style.cardCenterDescription : ''}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis dui id tellus tempor tincidunt. Etiam eget aliquam erat, ac laoreet leo. Suspendisse facilisis tincidunt scelerisque. Nunc elit est, tristique vel urna a, iaculis blandit nulla. Mauris diam est, egestas a vestibulum ac, imperdiet vitae leo. Mauris ullamcorper nisl sapien, in pulvinar quam pulvinar sed. Proin porttitor scelerisque dapibus. Nulla nec vestibulum dui. Maecenas tempor velit at urna sodales faucibus. Ut rutrum vel sapien euismod pellentesque.

              Sed gravida, turpis at consectetur ullamcorper, augue nunc egestas orci, at consectetur ante est rutrum odio. Ut sem felis, blandit mattis neque vel, porttitor consectetur enim. Sed non faucibus elit. Aenean non euismod ex. Vestibulum sem sapien, tincidunt eu arcu at, ultricies hendrerit nisi. Nullam ac diam consequat, porta mauris in, sodales justo. Vestibulum mattis massa ac malesuada tristique. Fusce sed purus condimentum, ultrices lectus vitae, cursus ante. Duis imperdiet nisl at risus mollis auctor. In elementum est non urna consequat, ac efficitur nibh hendrerit. Vivamus vestibulum dolor eu lorem convallis, a blandit diam porta. In ligula risus, lacinia non nibh ut, dignissim placerat diam. Pellentesque egestas ante at elit pellentesque pellentesque. Phasellus lobortis egestas justo, nec semper arcu placerat at. Vestibulum sagittis ultrices pulvinar. Integer elementum justo mi, nec rutrum leo gravida quis.
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardMessage;

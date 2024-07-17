import logoHeader from '../../assets/logoHeader.png'
import Style from './Footer.module.css'

function Footer() {
  return (
    <footer className={Style.footer}>
      <img src={logoHeader} alt='Logo Aluraflix' />
      <p className={Style.footerP}>by Sebastian Guavita</p>
    </footer>
  )
}

export default Footer

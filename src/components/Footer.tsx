import { getImageByKey, ImageKey } from "../getImageByKey"

const Footer = () => {
  const socialLinks: { key: ImageKey; href: string }[] = [
    { key: "vk", href: "https://vk.com/maximyspopov" },
    { key: "gitHub", href: "https://vk.com/maximyspopov" },
    { key: "tm", href: "https://t.me/Reqmber" },
  ]
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {socialLinks.map((link, index) => (
              <li className="social__item" key={index}>
                <a href={link.href}>{getImageByKey(link.key)}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

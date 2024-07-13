// social data
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'

export default function Socials() {
  return (
    <ul className="flex items-center justify-center gap-x-[30px]">
      <li>
      </li>
      <li>
        <a href="https://www.instagram.com/sanderinktattoo/">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="https://wa.me/5521965077687">
          <FaWhatsapp />
        </a>
      </li>
    </ul>
  )
}

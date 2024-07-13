import { useEffect } from 'react'
// components
import Socials from './Socials'

export default function NavMobile({ closeMenuOnClick, setMobileNav }) {
  // closeMenuOnClick controla se o menu deve ser fechado ao clicar em uma opção

  // função para lidar com o clique em uma opção do menu
  const handleClick = () => {
    // verifica se o menu deve ser fechado ao clicar em uma opção
    if (closeMenuOnClick) {
      // fecha o menu
      setMobileNav(false)
    }
  }

  return (
    <nav className="flex flex-col w-full h-full overflow-hidden justify-evenly">
      <ul className="flex flex-col items-center justify-center py-6 mb-8 gap-y-6">
        <li>
          <a className="text-2xl uppercase font-primary" href="#home" onClick={handleClick}>
            Home
          </a>
        </li>
        <li>
          <a className="text-2xl uppercase font-primary" href="#about" onClick={handleClick}>
            Sobre
          </a>
        </li>
        <li>
          <a className="text-2xl uppercase font-primary" href="#gallery" onClick={handleClick}>
            Galeria
          </a>
        </li>
        <li>
          <a className="text-2xl uppercase font-primary" href="#special" onClick={handleClick}>
            Especialidades
          </a>
        </li>
        <li>
          <a className="text-2xl uppercase font-primary" href="#contact" onClick={handleClick}>
            Contato
          </a>
        </li>
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { MobileMenuContainer } from './menu-container'
import { Button } from '@/components/ui/button'
import { List, X } from '@phosphor-icons/react'

export function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen((state) => !state)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <>
      <div className="relative z-[999] flex h-8 w-max items-center sm:hidden">
        <Button className="flex items-center gap-2 rounded-full bg-neutral-50" variant={"outline"} size={"icon"} onClick={toggleMenu}>
          {!isOpen ? <List size={20} /> : <X size={20}/>}
        </Button>
      </div>

      <MobileMenuContainer onClose={closeMenu} isOpen={isOpen} />
    </>
  )
}

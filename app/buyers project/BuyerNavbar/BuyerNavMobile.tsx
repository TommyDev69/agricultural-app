import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

interface BuyerNavMobileProps {
  isOpen: boolean
  onToggle: () => void
}

export default function BuyerNavMobile({ isOpen, onToggle }: BuyerNavMobileProps) {
  return (
    <div className="lg:hidden">
        <button type="button" onClick={onToggle} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close menu' : 'Open menu'} className="inline-grid h-10 w-10 shrink-0 place-items-center rounded-md text-lg leading-none text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400">
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="h-5 w-5" fixedWidth />
        </button>
    </div>
    
  )
}

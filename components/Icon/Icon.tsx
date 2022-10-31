import { IconProps } from './Icon.props'

import ArrowDown from './icons/arrow-down.svg'
import Arrow from './icons/arrow.svg'
import User from './icons/user.svg'
import Menu from './icons/menu.svg'
import Search from './icons/search.svg'
import Favorites from './icons/favorites.svg'
import Compare from './icons/compare.svg'
import Cart from './icons/cart.svg'
import Star from './icons/star.svg'
import CallService from './icons/call-service.svg'
import Hall from './icons/hall.svg'
import Help from './icons/help.svg'
import Personal from './icons/personal.svg'

export const Icon = ({ name, className }: IconProps): JSX.Element => {
  switch (name) {
    case 'arrow-down':
      return <>{<ArrowDown className={className} />}</>
    case 'arrow':
      return <>{<Arrow className={className} />}</>
    case 'user':
      return <>{<User className={className} />}</>
    case 'menu':
      return <>{<Menu className={className} />}</>
    case 'search':
      return <>{<Search className={className} />}</>
    case 'compare':
      return <>{<Compare className={className} />}</>
    case 'favorites':
      return <>{<Favorites className={className} />}</>
    case 'cart':
      return <>{<Cart className={className} />}</>
    case 'star':
      return <>{<Star className={className} />}</>
    case 'hall':
      return <>{<Hall className={className} />}</>
    case 'personal':
      return <>{<Personal className={className} />}</>
    case 'callSerice':
      return <>{<CallService className={className} />}</>
    case 'help':
      return <>{<Help className={className} />}</>

    default:
      return <></>
  }
}

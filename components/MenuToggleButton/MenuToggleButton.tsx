import { FC, memo } from 'react'

import { ToggleMenuIcon } from '@/components'

export interface IMenuToggleButtonProps {
  onButtonClick: () => void
}

export const MenuToggleButton: FC<IMenuToggleButtonProps> = memo(
  ({ onButtonClick }: IMenuToggleButtonProps) => {
    return (
      <button
        aria-label="Toggle Menu"
        className="lg:hidden h-full focus:outline-none focus:shadow-outline"
        onClick={onButtonClick}
      >
        <ToggleMenuIcon />
      </button>
    )
  }
)

MenuToggleButton.displayName = 'MenuToggleButton'

export default MenuToggleButton

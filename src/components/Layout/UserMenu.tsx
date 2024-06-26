import { useEffect, useState } from 'react';
import ButtonIcon from 'components/atoms/ButtonIcon';

import styled from 'styled-components';
import UserInfo from './UserInfo';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuState(newState?: boolean) {
    setIsOpen(newState || !isOpen);
  }

  useEffect(() => {
    function onMenuClose(ev: MouseEvent | KeyboardEvent) {
      const { target } = ev;
      if (target instanceof HTMLElement && !target?.closest('[data-user-menu]')) setIsOpen(false);
      if (ev instanceof KeyboardEvent && ev?.code === 'Escape') setIsOpen(false);
    }

    document.addEventListener('click', onMenuClose);
    document.addEventListener('keydown', onMenuClose);

    return () => {
      document.removeEventListener('click', onMenuClose);
      document.removeEventListener('keydown', onMenuClose);
    };
  }, []);

  return (
    <MenuContainer data-user-menu>
      <ButtonIcon icon={'personOutlined'} size="30px" iconSize="80%" variant="def" onClick={() => handleMenuState()} />

      <UserInfo isOpen={isOpen} onClose={() => handleMenuState()} />
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default UserMenu;

import ButtonIcon from 'components/atoms/ButtonIcon';
import SideBarOptions from './SideBarOptions';
import ToggleThemeMode from './Actions/ChangeTheme';
import ActionAppExit from './Actions/ActionAppExit';
import { useSideBar } from './SideBarProvider';
import styled, { css } from 'styled-components';
import { useMemo } from 'react';

type SideBarProps = {
  havePermission?: boolean;
};
const SideBar: React.FC<SideBarProps & React.HTMLAttributes<HTMLDivElement>> = ({ havePermission, ...props }) => {
  const { isOpen, onTogglerClick, handleOptionsState, sideBarButtons, sideBarButtonsBottom, RightSideContent } =
    useSideBar();

  const renderMain = useMemo(() => {
    return (
      sideBarButtons &&
      sideBarButtons
        .filter(el => (havePermission ? el : !el.corp))
        .map(item => (
          <StyledButtonIcon
            key={item?.iconId}
            iconId={item?.iconId}
            title={item?.title}
            iconSize="20px"
            variant="pointerLeft"
            isActive={item?.title === RightSideContent?.title}
            onClick={() => handleOptionsState && handleOptionsState(item)}
          />
        ))
    );
  }, [RightSideContent?.title, handleOptionsState, havePermission, sideBarButtons]);

  const renderBottom = useMemo(() => {
    return (
      sideBarButtonsBottom &&
      sideBarButtonsBottom
        .filter(el => (havePermission ? el : !el.corp))
        .map(item => (
          <StyledButtonIcon
            key={item?.iconId}
            iconId={item?.iconId}
            title={item?.title}
            iconSize="20px"
            variant="pointerLeft"
            isActive={item?.title === RightSideContent?.title}
            onClick={() => handleOptionsState && handleOptionsState(item)}
          />
        ))
    );
  }, [RightSideContent?.title, handleOptionsState, havePermission, sideBarButtonsBottom]);
  return (
    <StyledSideBar isOpen={!!isOpen} className="SideBar" {...props} data-sidebar>
      <MenuToggler isOpen={!!isOpen} onClick={onTogglerClick} />

      <SideBarContainer className="SideBarContainer">
        <Content isOpen={!!isOpen} className="Content">
          <Top>
            <ToggleThemeMode />
          </Top>

          <Middle className="Middle">
            {/* <MiddleToggler variant="def" iconId="actionsH" iconSize="24px" onClick={() => handleMiddleOpen()} /> */}

            <MiddleButtons className="MiddleButtons">{renderMain}</MiddleButtons>
          </Middle>

          <Bottom>
            {renderBottom}
            <ActionAppExit />
          </Bottom>
        </Content>

        <SideBarOptions />
      </SideBarContainer>
    </StyledSideBar>
  );
};

interface SideBarState {
  isOpen: boolean;
  options?: any[] | null;
}

const sideBarCompWidth = '36px';
const sideBarCompWidthMobile = '50px';

const StyledSideBar = styled.div<SideBarState>`
  display: grid;
  grid-template-columns: ${({ isOpen }) => (isOpen ? 'min-content' : '4px')} 1fr;

  width: fit-content;
  /* max-width: 40px; */
  height: 100%;

  position: relative;
  z-index: 500;

  fill: ${({ theme }) => theme.fillColorHeader};
  color: ${({ theme }) => theme.fontColorHeader};
  background-color: ${({ theme }) => theme.sideBarBackgroundColor};

  /* max-width: 54px; */
  /* @media screen and (min-width: 480px) { */
  max-width: 40px;
  /* } */
`;
const SideBarContainer = styled.div`
  display: grid;
  grid-template-columns: min-content max-content;

  height: 100%;
  width: 100%;

  max-height: 100%;
  /* overflow: hidden; */
`;
const Content = styled.div<SideBarState>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 32px 1fr min-content;

  position: relative;

  max-width: 0;
  height: 100%;
  max-height: 100%;
  min-width: ${({ isOpen }) => (isOpen ? sideBarCompWidth : '0')};

  overflow: hidden;

  border-right: ${({ theme, isOpen }) => (isOpen ? `1px solid ${theme.sideBarBorderColor}` : '0 solid transparent')};
  background-color: ${({ theme }) => theme.sideBarBackgroundColor};
  transition: min-width ${({ theme }) => theme.globals.timingFunctionLong};
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* height: 100%; */
  /* width: ${sideBarCompWidthMobile};
  @media screen and (min-width: 480px) { */
  width: ${sideBarCompWidth};
  /* } */
`;

const Middle = styled.div`
  height: 100%;
  max-height: 100%;
  overflow: auto;

  border-top: 1px solid ${({ theme }) => theme.sideBarBorderColor};
  border-bottom: 1px solid ${({ theme }) => theme.sideBarBorderColor};

  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  /* width: ${sideBarCompWidthMobile};
  @media screen and (min-width: 480px) { */
  width: ${sideBarCompWidth};
  /* } */
`;
const MiddleButtons = styled.div<{ isMiddleOpen?: boolean }>`
  /* max-height: 0; */
  overflow: hidden;

  position: relative;

  /* @media screen and (max-height: 480px) {
    position: absolute;
    top: 0;
    left: 50%;

    overflow: auto;
    max-height: 100%;
  } */
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 12px;

  /* width: ${sideBarCompWidthMobile};
  @media screen and (min-width: 480px) { */
  width: ${sideBarCompWidth};
  /* } */
`;

const MenuToggler = styled.button<SideBarState>`
  width: 4px;
  height: 100%;
  padding: 0;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  border-style: none;

  background-color: ${({ isOpen, theme }) => (isOpen ? theme.sideBarBorderColor : theme.sideBarTogglerBackgroundColor)};
  border-right: ${({ theme, isOpen }) => (!isOpen ? `1px solid ${theme.sideBarBorderColor}` : `1px solid transparent`)};
  //transition: all ${({ theme }) => theme.globals.timingFunctionMain};
`;

const isActiveCss = css`
  color: ${({ theme }) => theme.accentColor.base};
  background-color: ${({ theme }) => theme.backgroundColorLight};

  &::before {
    height: 80%;
    background-color: ${({ theme }) => theme.accentColor.base};
  }
`;
const StyledButtonIcon = styled(ButtonIcon)<{ isActive: boolean }>`
  width: 100%;
  height: 32px;

  border-radius: 0;
  border: 0;

  ${({ isActive }) => (isActive ? isActiveCss : null)}
`;

export default SideBar;

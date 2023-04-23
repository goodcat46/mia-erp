import { ISidebarOptionsItem } from 'components/SideBarLeft/SideBarProvider';
import { appSettings } from './appSettings.data';
import directories from './directories.data';
import { iconId } from '../img/sprite/iconId.data';
import { raports } from './raports.data';
// import Notifications from '../components/SideBarContent/Notifications';
import Directories from 'components/SideBarContent/Directories';
import Raports from 'components/SideBarContent/Raports/Raports';
import CompanySettings from '../components/SideBarContent/CompanySettings';
import { comapnySettings } from './companySettings.data';

export const sideBarButtons: ISidebarOptionsItem[] = [
  { iconId: iconId.folder, maxWidth: '', options: directories, title: 'Довідники', RenderComponent: Directories },
  { iconId: iconId.assignmentOutlined, maxWidth: '', options: raports, title: 'Звіти', RenderComponent: Raports },
  { iconId: iconId.bank, maxWidth: '', options: comapnySettings, title: 'Компанія', RenderComponent: CompanySettings },
];
export const sideBarButtonsBottom: ISidebarOptionsItem[] = [
  // { iconId: iconId.notifications, maxWidth: '480px', options: [], title: 'Сповіщення', RenderComponent: Notifications },
  { iconId: iconId.settings, maxWidth: '', options: appSettings, title: 'Налаштування', RenderComponent: () => <></> },
];

const sideBarLeftData = {
  sideBarButtons,
  sideBarButtonsBottom,
};

export default sideBarLeftData;
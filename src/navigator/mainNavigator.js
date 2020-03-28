import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList23554Navigator from '../features/ArticleList23554/navigator';
import ArticleList23553Navigator from '../features/ArticleList23553/navigator';
import ArticleList23552Navigator from '../features/ArticleList23552/navigator';
import ArticleList23520Navigator from '../features/ArticleList23520/navigator';
import ArticleList23519Navigator from '../features/ArticleList23519/navigator';
import ArticleList23518Navigator from '../features/ArticleList23518/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList23554: { screen: ArticleList23554Navigator },
ArticleList23553: { screen: ArticleList23553Navigator },
ArticleList23552: { screen: ArticleList23552Navigator },
ArticleList23520: { screen: ArticleList23520Navigator },
ArticleList23519: { screen: ArticleList23519Navigator },
ArticleList23518: { screen: ArticleList23518Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

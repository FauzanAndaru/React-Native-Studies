import React from 'react';
import { Text, View, Image } from 'react-native';
import {AppHeader, AppContent} from './AppCustomComponentsClass'
import AppCustomComponentFooter from './AppCustomComponentFooter'
const AppClass = () => {
return (
<View>
<AppHeader/>
<AppContent/>
<AppCustomComponentFooter/>
</View>
)
}
export default AppClass;
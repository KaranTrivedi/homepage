// import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Heading,
  // Image,
  View,
} from "@aws-amplify/ui-react";

import { 
  Card,
  Button,
  ConfigProvider,
  theme
} from 'antd';
import 'antd/dist/reset.css';

function App({ signOut })
{
  return (
    <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
    }}
  >
    <View className="App">
      <Card>
        {/* <Image src={logo} className="App-logo" alt="logo" /> */}
        <h1 level={1}>We now have Auth!</h1>
        <div className="App">
          <Button type="primary">Button</Button>
        </div>
        <Button type="primary" onClick={signOut}>Sign Out</Button>
      </Card>
    </View>
      </ConfigProvider>

  );
}

export default withAuthenticator(App);
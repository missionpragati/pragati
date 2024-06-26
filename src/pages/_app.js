import Layout from '@/component/layout'
import '@/styles/globals.css'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import {store} from "../redux/store";
import {
  persistStore,
} from 'redux-persist'
import mainpage from '@/component/mainpage';
import LayoutComming from '@/component/layoutcomming';

let persistor = persistStore(store)

export default function App({ Component, pageProps }) {
  return (
    
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> 
      <LayoutComming> <Component {...pageProps} /></LayoutComming>
     </PersistGate>
    
  </Provider>)

}

import { RecoilRoot } from 'recoil';
import SideBar from '../components/SideBar';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div className='flex'>
        <SideBar />

        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}

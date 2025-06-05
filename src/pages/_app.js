import '../styles/globals.css';
import { geistSans, geistMono } from '../lib/fonts';

export default function App({ Component, pageProps }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}

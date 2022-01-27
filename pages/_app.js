import '../styles/globals.css';
import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from '../components/Menu';

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
      transition={{ duration: 0.4 }}
    >
      <Component {...pageProps} />
      <Menu />
    </motion.div>
  );
}

export default MyApp;

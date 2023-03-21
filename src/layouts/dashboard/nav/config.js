// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/home',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: icon('ic_user'),
  },
  {
    title: 'Control',
    path: '/control',
    icon: icon('ic_cart'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
];

export default navConfig;

import BarChartIcon from '@material-ui/icons/BarChart';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

export default [
  {
    items: [
      {
        title: 'Dashboards',
        href: '/dashboards',
        icon: DashboardIcon,
      },
      {
        title: 'Management',
        href: '/management',
        icon: BarChartIcon,
      },
      {
        title: 'Advocates',
        href: '/advocates',
        icon: PeopleIcon,
      },
    ],
  },
];

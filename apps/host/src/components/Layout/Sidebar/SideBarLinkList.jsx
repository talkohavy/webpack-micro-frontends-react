import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import SideBarLinkItem from './SideBarLinkItem';

const routesRaw = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/books',
    text: 'Books',
  },
  {
    to: '/about',
    text: 'Error Boundary',
  },
  {
    to: '/dynamic',
    text: 'Dynamic Import',
  },
];

export default function SideBarLinkList() {
  const { pathname } = useLocation();

  const routes = useMemo(
    () =>
      routesRaw.map(({ to, text }) => ({
        to,
        text,
        isActive: to === pathname,
      })),
    [pathname],
  );

  return (
    <nav className='flex flex-col items-start justify-start'>
      {routes.map(({ to, text, isActive }) => (
        <SideBarLinkItem key={text} to={to} text={text} isActive={isActive} />
      ))}
    </nav>
  );
}

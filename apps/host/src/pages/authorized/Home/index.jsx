import Home from 'mf_home/Home';

// const Home = React.lazy(() => import('mf_home/Home')) // <--- or use a dynamic import. The above is a static import.

export default function HomePage() {
  return (
    <div>
      <div>Main</div>
      <Home />
      <div>window</div>
    </div>
  );
}

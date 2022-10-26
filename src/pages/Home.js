import Showcase from '../components/cards/Showcase';
import { useAuth } from '../context/auth';

export default function Home() {
  const [auth, setAuth] = useAuth();
  return (
    <div>
      <Showcase title='Hello React'></Showcase>;
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  );
}

import Link from 'next/link';
import {FC} from 'react';

const HomePage: FC = () => {
  return (
    <div className='flex flex-col'>
      This is the homepage
      <Link href={'/profile'}>To User profile</Link>
    </div>
  );
};

export default HomePage;

import type { NextPage } from 'next';
import Highlighter from '../Components/Highlighter';

const Home: NextPage = () => {
  const words = [
    '__Lorem',
    '__ipsum',
    '__dolor',
    '--sit',
    '++amet',
    '__consectetur',
    '--adipisicing',
    '--elit.',
    '++Necessitatibus',
    '++repudiandae',
    '__dignissimos',
    '__ratione?',
  ];

  return (
    <div className='flex w-full h-screen justify-center'>
      <div className='flex justify-between items-start mt-40 max-w-3xl w-full '>
        <Highlighter words={words} mode='--' />
        <Highlighter words={words} mode='++' />
      </div>
    </div>
  );
};

export default Home;

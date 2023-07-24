import Image from 'next/image';
import logoImage from '../../assets/images/logo.png';

const Logo = () => (
  <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    CREI
    <Image src={logoImage} alt='CREI' className="ml-1 inline-block h-8 w-8 md:h-10 md:w-10" />
  </span>
);

export default Logo;

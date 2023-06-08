import { useEffect, useState } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

export default function ScrollToTop() {
  const [goToTop, setgoToTop] = useState(false);
  const showBtn = () => {
    if (window.scrollY > 200) {
      setgoToTop(true);
    } else {
      setgoToTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', showBtn);
    return () => {
      window.removeEventListener('scroll', showBtn);
    };
  }, []);

  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button
      onClick={toTop}
      aria-label='Click here to scroll to top'
      className={ goToTop ? 'fixed lg:right-14 right-4 bottom-10 lg:bottom-14 z-50 rounded-full bg-base-100 text-pink-500 h-20 w-20 transition-all duration-300' : 'hidden'}>
      <IoIosArrowDropupCircle className='w-full h-full'/>
    </button>
  );
}

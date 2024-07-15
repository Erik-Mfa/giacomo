import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full py-10" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))' }}>
      <nav className="flex justify-center">
        <ul className="flex text-lg w-full justify-center" style={{ fontFamily: '"Syne", sans-serif' }}>
          <li>
            <a href="#who-is-james"
               className="hover:text-gray-400 transform hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
               style={{  fontSize: '35px', padding: '20px', marginRight: '50px', display: 'inline-block'}}
               onClick={(e) => { e.preventDefault(); scrollToSection('who-is-james'); }}>
              Who is James
            </a>
          </li>
          <li>
            <a href="#videos"
               className="hover:text-gray-400 transform hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
               style={{  fontSize: '35px', padding: '20px', marginRight: '50px', display: 'inline-block'}}
               onClick={(e) => { e.preventDefault(); scrollToSection('videos'); }}>
              Videos
            </a>
          </li>
          <li>
            <a href="#what-he-will-teach"
               className="hover:text-gray-400 transform hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
               style={{  fontSize: '35px', padding: '20px', marginRight: '50px', display: 'inline-block'}}
               onClick={(e) => { e.preventDefault(); scrollToSection('what-he-will-teach'); }}>
              What He Will Teach
            </a>
          </li>
          <li>
            <a href="#contact"
               className="hover:text-gray-400 transform hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
               style={{  fontSize: '35px', padding: '20px', display: 'inline-block'}}
               onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

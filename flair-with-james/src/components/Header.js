import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="p-4 absolute w-full">
      <nav className="container mx-auto flex justify-center">
        <ul className="flex space-x-8 text-lg" style={{ fontFamily: '"Syne", sans-serif', marginTop: '20px' }}>
          <li>
            <a href="#who-is-james"
               className="hover:text-gray-400 transition duration-300 ease-in-out cursor-pointer"
               style={{ color: '#ea580c', fontSize: '35px', padding: '20px', marginRight: '50px'}}
               onClick={(e) => { e.preventDefault(); scrollToSection('who-is-james'); }}>
              Who is James
            </a>
          </li>
          <li>
            <a href="#videos"
               className="hover:text-gray-400 transition duration-300 ease-in-out cursor-pointer"
               style={{ color: '#ea580c', fontSize: '35px', padding: '20px', marginRight: '50px'}}
               onClick={(e) => { e.preventDefault(); scrollToSection('videos'); }}>
              Videos
            </a>
          </li>
          <li>
            <a href="#what-he-will-teach"
               className="hover:text-gray-400 transition duration-300 ease-in-out cursor-pointer"
               style={{ color: '#ea580c', fontSize: '35px', padding: '20px', marginRight: '50px'}}
               onClick={(e) => { e.preventDefault(); scrollToSection('what-he-will-teach'); }}>
              What He Will Teach
            </a>
          </li>
          <li>
            <a href="#contact"
               className="hover:text-gray-400 transition duration-300 ease-in-out cursor-pointer"
               style={{ color: '#ea580c', fontSize: '35px', padding: '20px', marginRight: '50px'}}
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

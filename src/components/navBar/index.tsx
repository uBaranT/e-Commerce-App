import React from 'react';
import Container from '../container'; // Gerekli Bootstrap bileşenlerini içe aktarıyoruz
import { useNavigate } from 'react-router-dom'; // React Router'dan useNavigate'yi içe aktarıyoruz

interface Link {
  id: number;
  name: string;
  link: string;
}

const links: Link[] = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'About', link: '/about' },
  // Diğer sayfa bağlantılarını burada tanımlayabilirsiniz
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = (link: string) => {
    navigate(link);
  };

  return (
    <div className="styled-navbar">
      <Container>
        <div className="navbar-content">
          <div className="navbar-left">
            <img src="/logo.png" alt="Logo" className="logo" />
          </div>
          <ul className="styled-navbar-list">
            {links.map((item) => (
              <li
                className="styled-navbar-list-item"
                key={item.id}
                onClick={() => handleRedirect(item.link)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="search-bar">
          {/* Search bar bileşenini buraya ekleyin */}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

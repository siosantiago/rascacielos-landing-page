import Link from 'next/link';
import type { CSSProperties } from 'react';


export default function Nav() {
  const navStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 32px',
    maxWidth: '1120px',
    margin: '0 auto',
  };

  const titleStyle: CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#0f172a',
    letterSpacing: 0.5,
  };

  const menuStyle: CSSProperties = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  };

  const menuItemStyle: CSSProperties = {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#4b5563',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <nav style={navStyle}>
      <Link href="/../" style={titleStyle}>
        RASCACIELOS
      </Link>
      <div style={menuStyle} className="hidden md:flex">
        <button style={menuItemStyle}>LEARN MORE</button>
        <button style={menuItemStyle}>ABOUT US</button>
        <Link href="/contact_us" style={menuItemStyle}>
          CONTACT US
        </Link>
        <button style={menuItemStyle}>JOIN WAITLIST</button>
      </div>
    </nav>
  );
}

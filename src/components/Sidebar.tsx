// src/components/Sidebar.tsx
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  const menuItems = [
    { to: '/', icon: '⛩️', label: 'Trang Chủ' },
    { to: '/kanji', icon: '📝', label: 'Học Kanji N5' },
    { to: '/nihongo', icon: '📋', label: 'Học Tiếng Nhật' },
    { to: '/katakana', icon: '🎴', label: 'Luyện Katakana' },
    { to: '/listening', icon: '🎧', label: 'Luyện Nghe N5' },
    { to: '/grammar', icon: '📖', label: 'Ngữ Pháp N5' },
    { to: '/jlpt', icon: '🏆', label: 'Thi Thử JLPT' },
    { to: '/plan', icon: '📅', label: 'Kế Hoạch Học' },
    { to: '/guide', icon: '💡', label: 'Hướng Dẫn' },
  ];

  return (
    <aside className="sidebar no-print">
      <NavLink to="/" className="sidebar-brand">
        ⛩️ <span>Học Tiếng Nhật</span>
      </NavLink>
      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'active' : ''}`
            }
          >
            <span style={{ fontSize: 16 }}>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

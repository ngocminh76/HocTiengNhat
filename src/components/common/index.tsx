// src/components/common/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  padding?: string | number;
  style?: React.CSSProperties;
}

export function Card({ children, padding = '18px 20px', style }: CardProps) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      borderRadius: 14,
      padding,
      border: '1px solid var(--border)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      ...style
    }}>
      {children}
    </div>
  );
}

// src/components/common/Badge.tsx
interface BadgeProps {
  icon?: string;
  label: string;
  color?: string;
  style?: React.CSSProperties;
}

export function Badge({ icon, label, color = 'var(--text)', style }: BadgeProps) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--bg-panel)',
      padding: '4px 10px',
      borderRadius: 20,
      fontSize: 12,
      fontWeight: 700,
      color,
      ...style
    }}>
      {icon && <span>{icon}</span>}
      {label}
    </div>
  );
}

// src/components/common/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  icon?: string;
}

export function Button({ variant = 'secondary', icon, children, style, className, ...props }: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '12px 24px',
    borderRadius: 12,
    fontSize: 14,
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.15s',
    border: 'none',
    ...style
  };

  if (variant === 'primary') {
    baseStyle.background = 'var(--gold)';
    baseStyle.color = '#000';
  } else if (variant === 'outline') {
    baseStyle.background = 'transparent';
    baseStyle.border = '1px solid var(--border)';
    baseStyle.color = 'var(--text)';
  } else if (variant === 'ghost') {
    baseStyle.background = 'transparent';
    baseStyle.color = 'var(--mute)';
  } else {
    baseStyle.background = 'var(--bg-panel)';
    baseStyle.color = 'var(--text)';
  }

  return (
    <button style={baseStyle} className={className} {...props}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

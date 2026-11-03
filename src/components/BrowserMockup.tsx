import type { ReactNode } from 'react';

export function BrowserMockup({ children }: { children: ReactNode }) {
    return (
        <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            border: '1px solid var(--border-color)',
            background: 'var(--card-bg)',
            width: '100%'
        }}>
            {/* Шапка браузера */}
            <div style={{
                background: 'rgba(0,0,0,0.1)',
                padding: '12px 16px',
                display: 'flex',
                gap: '8px',
                borderBottom: '1px solid var(--border-color)'
            }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
            </div>

            {/* Сюда мы вставляем слайдер (children) */}
            {children}
        </div>
    );
}
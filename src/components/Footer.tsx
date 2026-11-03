export function Footer() {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '30px 20px',
            borderTop: '1px solid var(--border-color)',
            color: 'var(--text-muted)',
            fontSize: '14px'
        }}>
            <p>
                © {new Date().getFullYear()} Дарья. Сделано с душой и на React 💖
            </p>
        </footer>
    );
}
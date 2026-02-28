import Link from 'next/link';
import styles from './Footer.module.css';

const WA_NUMBER = '5491100000000';
const WA_MSG = encodeURIComponent('Hola! Quiero consultar sobre sus figuras de yeso artesanales.');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                {/* Columna 1: Logo e info */}
                <div className={styles.col}>
                    <div className={styles.logo}>
                        <span className={styles.logoIcon}>✦</span>
                        <span>
                            <strong>Arte en Yeso</strong>
                            <small>San Miguel, Buenos Aires</small>
                        </span>
                    </div>
                    <p className={styles.tagline}>
                        Figuras artesanales en yeso hechas a mano con amor desde San Miguel. Producción propia, personalizaciones y envíos en zona norte del GBA.
                    </p>
                    {/* Redes sociales */}
                    <div className={styles.redes}>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.red} aria-label="Instagram">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.red} aria-label="Facebook">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={`${styles.red} ${styles.redWa}`} aria-label="WhatsApp">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Columna 2: Navegación */}
                <div className={styles.col}>
                    <h4>Secciones</h4>
                    <ul className={styles.links}>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/catalogo">Catálogo</Link></li>
                        <li><Link href="/catalogo?cat=religioso">Figuras Religiosas</Link></li>
                        <li><Link href="/catalogo?cat=souvenirs">Souvenirs</Link></li>
                        <li><Link href="/catalogo?cat=kits">Kits DIY</Link></li>
                        <li><Link href="/catalogo?cat=decoracion">Decoración</Link></li>
                    </ul>
                </div>

                {/* Columna 3: Empresa */}
                <div className={styles.col}>
                    <h4>Empresa</h4>
                    <ul className={styles.links}>
                        <li><Link href="/nosotros">Sobre Nosotros</Link></li>
                        <li><Link href="/mayoristas">Ventas Mayoristas</Link></li>
                        <li><Link href="/blog">Blog & Inspiración</Link></li>
                        <li><a href={WA_URL} target="_blank" rel="noopener noreferrer">Contacto WhatsApp</a></li>
                    </ul>
                </div>

                {/* Columna 4: Contacto */}
                <div className={styles.col}>
                    <h4>Dónde encontrarnos</h4>
                    <ul className={styles.contacto}>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                            </svg>
                            San Miguel, Provincia de Buenos Aires, Argentina
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                            </svg>
                            Envíos a zona norte GBA
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                            </svg>
                            Lun–Sáb: 9:00 – 18:00 hs
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`container ${styles.bottom}`}>
                <p>© 2025 Arte en Yeso San Miguel. Todos los derechos reservados. Hecho con ♥ en Argentina.</p>
                <p>Figuras artesanales en yeso · San Miguel · Zona norte GBA</p>
            </div>
        </footer>
    );
}

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Link from 'next/link';

export default function AdminLogin() {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Autenticación simple de demo
        if (usuario === 'admin' && contrasena === 'arteenyeso') {
            localStorage.setItem('admin_auth', 'true');
            router.push('/admin/productos');
        } else {
            setError('Usuario o contraseña incorrectos.');
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                {/* Header de la tarjeta */}
                <div className={styles.cardHeader}>
                    <Link href="/" className={styles.brandLink}>
                        <span className={styles.brandIcon}>🏺</span>
                        <span className={styles.brandName}>ABU CREACIONES</span>
                    </Link>
                    <Link href="/" className={styles.siteLink}>Ir al Sitio →</Link>
                </div>

                <div className={styles.cardBody}>
                    <h1 className={styles.title}>Bienvenido al Taller Digital</h1>
                    <p className={styles.subtitle}>Iniciá sesión para gestionar tus productos y pedidos</p>

                    {error && <div className={styles.errorMsg}>{error}</div>}

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="usuario">Usuario</label>
                            <input
                                id="usuario"
                                type="text"
                                placeholder="admin"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="contrasena">Contraseña</label>
                            <input
                                id="contrasena"
                                type="password"
                                placeholder="••••••••"
                                value={contrasena}
                                onChange={(e) => setContrasena(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.btnLogin}>
                            Ingresar al Panel
                        </button>
                    </form>

                    <div className={styles.links}>
                        <a href="#" className={styles.textLink}>¿Olvidaste tu contraseña?</a>
                        <a href="#" className={styles.textLink}>Solicitar acceso</a>
                    </div>
                </div>

                <div className={styles.cardFooter}>
                    <p>© {new Date().getFullYear()} Arte en Yeso San Miguel. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    );
}

'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data/data';
import styles from './page.module.css';

export default function AdminProductos() {
    const router = useRouter();
    const [items, setItems] = useState([]);
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined' && !localStorage.getItem('admin_auth')) {
            router.push('/admin/login');
        }

        const staticItems = products;
        const customItems = JSON.parse(localStorage.getItem('abu_custom_products') || '[]');
        setItems([...staticItems, ...customItems]);
    }, []);

    const filtrados = items.filter(p =>
        p.name?.toLowerCase().includes(busqueda.toLowerCase())
    );

    const handleDelete = (id) => {
        if (confirm('¿Estás seguro de que querés eliminar este producto?')) {
            const customItems = JSON.parse(localStorage.getItem('abu_custom_products') || '[]');
            const newCustom = customItems.filter(p => String(p.id) !== String(id));
            localStorage.setItem('abu_custom_products', JSON.stringify(newCustom));

            setItems([...products, ...newCustom]);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_auth');
        router.push('/admin/login');
    };

    return (
        <div className={styles.layout}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.sidebarBrand}>
                    <span className={styles.sidebarIcon}>🏺</span>
                    <span className={styles.sidebarTitle}>Arte en Yeso</span>
                </div>
                <nav className={styles.sidebarNav}>
                    <Link href="/" className={styles.navItem}>🏠 Inicio</Link>
                    <Link href="/admin/productos" className={`${styles.navItem} ${styles.active}`}>📦 Productos</Link>
                    <Link href="/admin/carga-rapida" className={styles.navItem}>⚡ Carga Rápida</Link>
                    <a href="#" className={styles.navItem}>🛒 Pedidos <span className={styles.badge}>3</span></a>
                    <a href="#" className={styles.navItem}>👥 Clientes</a>
                    <a href="#" className={styles.navItem}>⚙️ Configuración</a>
                </nav>
                <div className={styles.sidebarUser}>
                    <div className={styles.userInfo}>
                        <strong>Admin Usuario</strong>
                        <span>admin@arteenyeso.com</span>
                    </div>
                    <button onClick={handleLogout} className={styles.logoutBtn}>Salir</button>
                </div>
            </aside>

            {/* Main */}
            <main className={styles.main}>
                <div className={styles.topBar}>
                    <div>
                        <h1 className={styles.pageTitle}>Gestión de Productos</h1>
                        <p className={styles.pageSubtitle}>Administrá tu inventario y catálogo digital</p>
                    </div>
                    <Link href="/admin/editar/nuevo" className={styles.btnNuevo}>+ Nuevo Producto</Link>
                </div>

                {/* Barra de búsqueda */}
                <div className={styles.searchBar}>
                    <span className={styles.searchIcon}>🔍</span>
                    <input
                        type="text"
                        placeholder="Buscar producto..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>

                {/* Tabla de productos */}
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtrados.length === 0 && (
                                <tr>
                                    <td colSpan="5" className={styles.emptyRow}>No se encontraron productos.</td>
                                </tr>
                            )}
                            {filtrados.map((p) => (
                                <tr key={p.id} className={styles.tableRow}>
                                    <td>
                                        <div className={styles.productCell}>
                                            <div className={styles.productThumb}>
                                                {p.images?.[0]
                                                    ? <img src={p.images[0]} alt={p.name} className={styles.thumbImage} />
                                                    : (p.name?.charAt(0) ?? '?')
                                                }
                                            </div>
                                            <span className={styles.productName}>{p.name}</span>
                                        </div>
                                    </td>
                                    <td><span className={styles.categoryTag}>{p.category}</span></td>
                                    <td className={styles.price}>
                                        {p.price ? `$${p.price.toLocaleString('es-AR')}` : '—'}
                                    </td>
                                    <td className={styles.stock}>{p.stock ?? '—'}</td>
                                    <td>
                                        <div className={styles.actionBtns}>
                                            <Link href={`/admin/editar/${p.id}`} className={styles.btnEdit}>Editar</Link>
                                            <button
                                                onClick={() => handleDelete(p.id)}
                                                className={styles.btnDelete}
                                                disabled={!String(p.id).includes('.') && String(p.id).length <= 5}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data/data';
import styles from './page.module.css';

export default function EditarFigura() {
    const params = useParams();
    const router = useRouter();
    const esNuevo = params.id === 'nuevo';
    const productoBase = esNuevo ? null : products.find(p => String(p.id) === String(params.id));

    const [form, setForm] = useState({
        name: productoBase?.name ?? '',
        category: productoBase?.category ?? 'religioso',
        price: productoBase?.price ?? '',
        stock: productoBase?.stock ?? 'disponible',
        description: productoBase?.description ?? '',
        customizable: productoBase?.customizable ?? false,
    });
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && !localStorage.getItem('admin_auth')) {
            router.push('/admin/login');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // En un proyecto real haría una llamada a API
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className={styles.layout}>
            {/* Sidebar reutilizable */}
            <aside className={styles.sidebar}>
                <div className={styles.sidebarBrand}>
                    <span>🏺</span>
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
            </aside>

            <main className={styles.main}>
                <div className={styles.breadcrumb}>
                    <Link href="/admin/productos" className={styles.breadcrumbLink}>← Volver a Productos</Link>
                </div>

                <h1 className={styles.pageTitle}>
                    {esNuevo ? 'Nuevo Producto' : 'Editar Figura'}: {!esNuevo && <span className={styles.titleAccent}>{productoBase?.name ?? `#${params.id}`}</span>}
                </h1>

                {saved && (
                    <div className={styles.successBanner}>
                        ✅ Los cambios fueron guardados correctamente.
                    </div>
                )}

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGrid}>
                        {/* Panel izquierdo */}
                        <div className={styles.panelMain}>
                            <div className={styles.card}>
                                <h2 className={styles.cardTitle}>Detalles del Producto</h2>

                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Nombre de la figura</label>
                                    <input id="name" name="name" type="text" value={form.name}
                                        onChange={handleChange} placeholder="Ej: Virgen María 30cm" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="description">Descripción</label>
                                    <textarea id="description" name="description" value={form.description}
                                        onChange={handleChange} placeholder="Describí la pieza con detalle..." rows={5} />
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="price">Precio ($)</label>
                                        <input id="price" name="price" type="number" value={form.price}
                                            onChange={handleChange} placeholder="Ej: 5000" min="0" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="stock">Estado / Stock</label>
                                        <input id="stock" name="stock" type="text" value={form.stock}
                                            onChange={handleChange} placeholder="Ej: Disponible" />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.card}>
                                <h2 className={styles.cardTitle}>Imagen Principal</h2>
                                <div className={styles.imageUploadZone}>
                                    <span className={styles.uploadIcon}>📸</span>
                                    <p>Esta imagen se mostrará como portada del producto.</p>
                                    <button type="button" className={styles.btnUpload}>Subir imagen</button>
                                </div>
                            </div>
                        </div>

                        {/* Panel derecho */}
                        <div className={styles.panelSide}>
                            <div className={styles.card}>
                                <h2 className={styles.cardTitle}>Categoría</h2>
                                <div className={styles.formGroup}>
                                    <select name="category" id="category" value={form.category} onChange={handleChange}>
                                        <option value="religioso">Religioso</option>
                                        <option value="decoracion">Decoración</option>
                                        <option value="souvenirs">Souvenirs</option>
                                        <option value="kits">Kits DIY</option>
                                        <option value="hogar">Hogar</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.card}>
                                <h2 className={styles.cardTitle}>Opciones</h2>
                                <label className={styles.checkboxLabel}>
                                    <input type="checkbox" name="customizable" checked={form.customizable}
                                        onChange={handleChange} />
                                    <span>Permite personalización</span>
                                </label>
                            </div>

                            <button type="submit" className={styles.btnGuardar}>
                                💾 Guardar Cambios
                            </button>
                            <Link href="/admin/productos" className={styles.btnCancelar}>Cancelar</Link>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}

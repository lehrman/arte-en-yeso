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

    const [form, setForm] = useState({
        name: '',
        category: 'religioso',
        price: '',
        stock: 'disponible',
        description: '',
        customizable: false,
        images: []
    });
    const [preview, setPreview] = useState(null);
    const [saved, setSaved] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && !localStorage.getItem('admin_auth')) {
            router.push('/admin/login');
        }

        if (!esNuevo) {
            const staticItem = products.find(p => String(p.id) === String(params.id));
            const customItems = JSON.parse(localStorage.getItem('abu_custom_products') || '[]');
            const customItem = customItems.find(p => String(p.id) === String(params.id));

            const item = staticItem || customItem;
            if (item) {
                setForm({
                    name: item.name || '',
                    category: item.category || 'religioso',
                    price: item.price || '',
                    stock: item.stock || 'disponible',
                    description: item.description || '',
                    customizable: item.customizable || false,
                    images: item.images || []
                });
                if (item.images?.[0]) setPreview(item.images[0]);
            }
        }
    }, [params.id, esNuevo]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleFile = (file) => {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result;
                setPreview(base64);
                setForm(prev => ({ ...prev, images: [base64] }));
            };
            reader.readAsDataURL(file);
        }
    };

    const onDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const customItems = JSON.parse(localStorage.getItem('abu_custom_products') || '[]');

        if (esNuevo) {
            const newId = Date.now();
            const newProduct = {
                ...form,
                id: newId,
                slug: form.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') + '-' + newId
            };
            localStorage.setItem('abu_custom_products', JSON.stringify([...customItems, newProduct]));
        } else {
            // Buscamos si es uno custom para actualizarlo
            const index = customItems.findIndex(p => String(p.id) === String(params.id));
            if (index !== -1) {
                customItems[index] = { ...customItems[index], ...form };
                localStorage.setItem('abu_custom_products', JSON.stringify(customItems));
            } else {
                // Si es estático, lo guardamos como nuevo "overwrite" en custom
                const newProduct = { ...form, id: params.id };
                localStorage.setItem('abu_custom_products', JSON.stringify([...customItems, newProduct]));
            }
        }

        setSaved(true);
        setTimeout(() => {
            setSaved(false);
            router.push('/admin/productos');
        }, 1500);
    };

    return (
        <div className={styles.layout}>
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
                </nav>
            </aside>

            <main className={styles.main}>
                <div className={styles.breadcrumb}>
                    <Link href="/admin/productos" className={styles.breadcrumbLink}>← Volver a Productos</Link>
                </div>

                <h1 className={styles.pageTitle}>
                    {esNuevo ? 'Nuevo Producto' : 'Editar Figura'}: {!esNuevo && <span className={styles.titleAccent}>{form.name}</span>}
                </h1>

                {saved && (
                    <div className={styles.successBanner}>
                        ✅ Los cambios fueron guardados correctamente. redirigiendo...
                    </div>
                )}

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGrid}>
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
                                            onChange={handleChange} placeholder="Ej: 5000" min="0" required />
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
                                <div
                                    className={`${styles.imageUploadZone} ${isDragging ? styles.dragging : ''} ${preview ? styles.hasPreview : ''}`}
                                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                    onDragLeave={() => setIsDragging(false)}
                                    onDrop={onDrop}
                                    onClick={() => document.getElementById('fileInput').click()}
                                >
                                    <input
                                        type="file"
                                        id="fileInput"
                                        hidden
                                        accept="image/*"
                                        onChange={(e) => handleFile(e.target.files[0])}
                                    />
                                    {preview ? (
                                        <div className={styles.previewContainer}>
                                            <img src={preview} alt="Vista previa" className={styles.previewImg} />
                                            <div className={styles.previewOverlay}>Cambiar imagen</div>
                                        </div>
                                    ) : (
                                        <>
                                            <span className={styles.uploadIcon}>📸</span>
                                            <p><strong>Subí una imagen</strong> o arrastrala aquí.</p>
                                            <span className={styles.uploadNote}>Recomendado: JPG o PNG em alta resolución.</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={styles.panelSide}>
                            <div className={styles.card}>
                                <h2 className={styles.cardTitle}>Categoría</h2>
                                <select name="category" id="category" value={form.category} onChange={handleChange} className={styles.select}>
                                    <option value="religioso">Religioso</option>
                                    <option value="decoracion">Decoración</option>
                                    <option value="souvenirs">Souvenirs</option>
                                    <option value="kits">Kits DIY</option>
                                    <option value="hogar">Hogar</option>
                                </select>
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

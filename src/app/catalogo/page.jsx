'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/data';
import styles from './page.module.css';

export default function CatalogoPage() {
    const [activeCategory, setActiveCategory] = useState('todos');
    const [filtered, setFiltered] = useState(products);

    useEffect(() => {
        if (activeCategory === 'todos') {
            setFiltered(products);
        } else {
            setFiltered(products.filter((p) => p.category === activeCategory));
        }
    }, [activeCategory]);

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero pequeño */}
                <section className={styles.hero}>
                    <div className="container">
                        <span className="section-tag">Arte en Yeso San Miguel</span>
                        <h1>Nuestro Catálogo</h1>
                        <p>Figuras artesanales en yeso — hechas a mano con amor desde San Miguel, Buenos Aires.</p>
                    </div>
                </section>

                {/* Filtros */}
                <section className={styles.filtrosSection}>
                    <div className={`container ${styles.filtrosWrap}`}>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`${styles.filtroBtn} ${activeCategory === cat.id ? styles.active : ''}`}
                            >
                                {getCategoryIcon(cat.id)} {cat.label}
                                {activeCategory === cat.id && (
                                    <span className={styles.countBadge}>
                                        {cat.id === 'todos' ? products.length : products.filter(p => p.category === cat.id).length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Grid de productos */}
                <section className={styles.gridSection}>
                    <div className="container">
                        {filtered.length === 0 ? (
                            <div className={styles.empty}>
                                <span>🏺</span>
                                <p>No hay productos en esta categoría por el momento.</p>
                            </div>
                        ) : (
                            <>
                                <p className={styles.resultCount}>{filtered.length} producto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}</p>
                                <div className={styles.grid}>
                                    {filtered.map((p) => (
                                        <ProductCard key={p.id} product={p} />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </section>

                {/* Banner mayoristas */}
                <section className={styles.mayoristaBanner}>
                    <div className="container">
                        <div className={styles.bannerInner}>
                            <div>
                                <h2>¿Pedido mayorista o evento?</h2>
                                <p>Producimos desde 20 unidades con precios preferenciales. Comuniones, cumpleaños, casamientos y más.</p>
                            </div>
                            <a href="/mayoristas" className="btn btn-whatsapp btn-lg">Consultar mayorista</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function getCategoryIcon(id) {
    const icons = { todos: '✦', religioso: '🕊️', souvenirs: '🎁', kits: '🎨', decoracion: '🏡' };
    return icons[id] || '✦';
}

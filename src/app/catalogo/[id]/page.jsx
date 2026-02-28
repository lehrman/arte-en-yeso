'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/data';
import styles from './page.module.css';

const CATEGORY_LABELS = {
    religioso: 'Religioso', souvenirs: 'Souvenirs', kits: 'Kits DIY', decoracion: 'Decoración', hogar: 'Hogar',
};

function getCategoryEmoji(cat) {
    const map = { religioso: '🕊️', souvenirs: '🎁', kits: '🎨', decoracion: '🏡', hogar: '🏠' };
    return map[cat] || '✦';
}

export default function ProductoPage() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const customItems = JSON.parse(localStorage.getItem('abu_custom_products') || '[]');
        const allProducts = [...products, ...customItems];

        const found = allProducts.find(
            (p) => (p.slug && p.slug === params.id) || String(p.id) === String(params.id)
        );

        if (found) {
            setProduct(found);
            setRelated(
                allProducts
                    .filter((p) => p.category === found.category && p.id !== found.id)
                    .slice(0, 3)
            );
        }
        setLoading(false);
    }, [params.id]);

    if (loading) {
        return (
            <>
                <Header />
                <main className={styles.main}>
                    <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                        <p>Cargando producto...</p>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    if (!product) {
        return (
            <>
                <Header />
                <main className={styles.main}>
                    <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                        <h1>Producto no encontrado</h1>
                        <p>El producto que buscás no existe o fue eliminado.</p>
                        <Link href="/catalogo" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                            Volver al catálogo
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const price = typeof product.price === 'number' ? product.price : parseFloat(product.price) || 0;
    const hasImage = product.images?.[0];

    const waMsg = encodeURIComponent(
        `Hola! Estoy interesado/a en "${product.name}". ¿Pueden brindarme más información y precio?`
    );
    const waUrl = `https://wa.me/5491162996903?text=${waMsg}`;
    const waPedido = encodeURIComponent(
        `Hola! Quisiera hacer un pedido personalizado de "${product.name}". ¿Podemos coordinar los detalles?`
    );
    const waUrlPedido = `https://wa.me/5491162996903?text=${waPedido}`;

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Breadcrumb */}
                <div className={`container ${styles.breadcrumb}`}>
                    <Link href="/">Inicio</Link> <span>›</span>
                    <Link href="/catalogo">Catálogo</Link> <span>›</span>
                    <Link href={`/catalogo?cat=${product.category}`}>{CATEGORY_LABELS[product.category] || product.category}</Link> <span>›</span>
                    <span>{product.name}</span>
                </div>

                {/* Sección principal */}
                <section className={`container ${styles.productoGrid}`}>
                    {/* Galería */}
                    <div className={styles.galeria}>
                        <div className={styles.mainImage}>
                            {hasImage ? (
                                <img src={hasImage} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                            ) : (
                                <>
                                    <span>{getCategoryEmoji(product.category)}</span>
                                    <span className={`badge badge-${product.category} ${styles.galBadge}`}>
                                        {CATEGORY_LABELS[product.category] || product.category}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Info */}
                    <div className={styles.info}>
                        <h1 className={styles.nombre}>{product.name}</h1>
                        <p className={styles.subtitulo}>{product.subtitle || product.description?.slice(0, 100)}</p>
                        <div className={styles.precioRow}>
                            <span className={styles.precio}>${price.toLocaleString('es-AR')}</span>
                            <span className={product.stock === 'disponible' ? styles.stockOk : styles.stockWarn}>
                                {product.stock === 'disponible' ? '✓ En Stock' : '⚠ Últimas unidades'}
                            </span>
                        </div>
                        <hr className={styles.sep} />

                        <div className={styles.descripcion}>
                            <h3>Descripción</h3>
                            <p>{product.description}</p>
                        </div>

                        {/* Selector de tamaño */}
                        {product.sizes?.length > 1 && (
                            <div className={styles.sizeSelector}>
                                <h4>Tamaño disponible</h4>
                                <div className={styles.sizes}>
                                    {product.sizes.map((s) => (
                                        <span key={s} className={styles.sizeBtn}>{s}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Personalización */}
                        <div className={styles.personalizacion}>
                            <label className={styles.checkLabel}>
                                <input type="checkbox" />
                                <span>¿Querés una personalización? (color, nombre, fecha)</span>
                            </label>
                        </div>

                        {/* CTAs */}
                        <div className={styles.ctas}>
                            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg btn-full">
                                Consultar por WhatsApp
                            </a>
                            <a href={waUrlPedido} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg btn-full">
                                Pedido Personalizado
                            </a>
                        </div>

                        {/* Garantías */}
                        <div className={styles.garantias}>
                            <div className={styles.garantia}><span>🤲</span><span>Producción propia artesanal</span></div>
                            <div className={styles.garantia}><span>📦</span><span>Envíos zona norte GBA</span></div>
                            <div className={styles.garantia}><span>💰</span><span>Pago contra entrega</span></div>
                        </div>
                    </div>
                </section>

                {/* Productos relacionados */}
                {related.length > 0 && (
                    <section className={styles.relacionados}>
                        <div className="container">
                            <div className="section-header">
                                <h2>Te puede interesar</h2>
                                <span className="divider" />
                            </div>
                            <div className={styles.relGrid}>
                                {related.map((p) => <ProductCard key={p.id} product={p} />)}
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/data';
import styles from './page.module.css';

const CATEGORY_LABELS = {
    religioso: 'Religioso', souvenirs: 'Souvenirs', kits: 'Kits DIY', decoracion: 'Decoración',
};

export async function generateMetadata({ params }) {
    const product = products.find((p) => p.slug === params.id);
    if (!product) return { title: 'Producto no encontrado' };
    return {
        title: `${product.name} | Arte en Yeso San Miguel`,
        description: product.description,
    };
}

export async function generateStaticParams() {
    return products.map((p) => ({ id: p.slug }));
}

export default function ProductoPage({ params }) {
    const product = products.find((p) => p.slug === params.id);
    if (!product) notFound();

    const related = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    const waMsg = encodeURIComponent(
        `Hola! Estoy interesado/a en "${product.name}". ¿Pueden brindarme más información y precio?`
    );
    const waUrl = `https://wa.me/5491100000000?text=${waMsg}`;
    const waPedido = encodeURIComponent(
        `Hola! Quisiera hacer un pedido personalizado de "${product.name}". ¿Podemos coordinar los detalles?`
    );
    const waUrlPedido = `https://wa.me/5491100000000?text=${waPedido}`;

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Breadcrumb */}
                <div className={`container ${styles.breadcrumb}`}>
                    <Link href="/">Inicio</Link> <span>›</span>
                    <Link href="/catalogo">Catálogo</Link> <span>›</span>
                    <Link href={`/catalogo?cat=${product.category}`}>{CATEGORY_LABELS[product.category]}</Link> <span>›</span>
                    <span>{product.name}</span>
                </div>

                {/* Sección principal */}
                <section className={`container ${styles.productoGrid}`}>
                    {/* Galería */}
                    <div className={styles.galeria}>
                        <div className={styles.mainImage}>
                            <span>{getCategoryEmoji(product.category)}</span>
                            <span className={`badge badge-${product.category} ${styles.galBadge}`}>
                                {CATEGORY_LABELS[product.category]}
                            </span>
                        </div>
                        <div className={styles.thumbs}>
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className={`${styles.thumb} ${i === 0 ? styles.thumbActive : ''}`}>
                                    <span style={{ fontSize: '1.4rem' }}>{getCategoryEmoji(product.category)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Info */}
                    <div className={styles.info}>
                        <h1 className={styles.nombre}>{product.name}</h1>
                        <p className={styles.subtitulo}>{product.subtitle}</p>
                        <div className={styles.precioRow}>
                            <span className={styles.precio}>${product.price.toLocaleString('es-AR')}</span>
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
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                                </svg>
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

function getCategoryEmoji(cat) {
    const map = { religioso: '🕊️', souvenirs: '🎁', kits: '🎨', decoracion: '🏡' };
    return map[cat] || '✦';
}

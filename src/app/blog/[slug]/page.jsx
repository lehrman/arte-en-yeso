import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { blogPosts } from '@/data/data';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: 'Artículo no encontrado' };
    return {
        title: `${post.title} | Arte en Yeso San Miguel`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function ContentBlock({ block }) {
    switch (block.type) {
        case 'intro':
            return <p className={styles.intro}>{block.text}</p>;
        case 'text':
            return <p className={styles.parrafo}>{block.text}</p>;
        case 'heading':
            return <h2 className={styles.h2}>{block.text}</h2>;
        case 'list':
            return (
                <ul className={styles.lista}>
                    {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            );
        case 'tip':
            return (
                <div className={styles.tipBox}>
                    <span className={styles.tipIcon}>💡</span>
                    <p>{block.text}</p>
                </div>
            );
        case 'callout':
            return (
                <div className={styles.callout}>
                    <p>{block.text}</p>
                    {block.link && (
                        <Link href={block.link} className="btn btn-whatsapp">
                            {block.linkText}
                        </Link>
                    )}
                </div>
            );
        default:
            return null;
    }
}

export default async function ArticuloBlogPage({ params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    const otrosPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
    const WA_NUMBER = '5491162996903';
    const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hola! Leí el artículo "${post.title}" y quisiera consultar sobre sus productos.`)}`;

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Breadcrumb */}
                <div className={`container ${styles.breadcrumb}`}>
                    <Link href="/">Inicio</Link> <span>›</span>
                    <Link href="/blog">Blog</Link> <span>›</span>
                    <span className={styles.breadcrumbCurrent}>{post.title}</span>
                </div>

                <div className={`container ${styles.layout}`}>
                    {/* Artículo principal */}
                    <article className={styles.article}>
                        {/* Cabecera del artículo */}
                        <header className={styles.articleHeader}>
                            <span className={`badge badge-${post.category}`}>{post.categoryLabel}</span>
                            <h1 className={styles.titulo}>{post.title}</h1>
                            <div className={styles.meta}>
                                <span>✍️ {post.author}</span>
                                <span>·</span>
                                <span>📅 {formatDate(post.date)}</span>
                                <span>·</span>
                                <span>⏱ {post.readTime} de lectura</span>
                            </div>
                        </header>

                        {/* Imagen destacada */}
                        <div className={styles.imagenDestacada}>
                            <span>{getCategoryEmoji(post.category)}</span>
                        </div>

                        {/* Cuerpo del artículo */}
                        <div className={styles.cuerpo}>
                            {post.content.map((block, i) => (
                                <ContentBlock key={i} block={block} />
                            ))}
                        </div>

                        {/* Footer del artículo */}
                        <footer className={styles.articleFooter}>
                            <div className={styles.compartir}>
                                <span>¿Te fue útil este artículo?</span>
                                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                                    Consultanos por WhatsApp
                                </a>
                            </div>
                            <div className={styles.tags}>
                                <span>Etiqueta:</span>
                                <span className={`badge badge-${post.category}`}>{post.categoryLabel}</span>
                            </div>
                        </footer>
                    </article>

                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        {/* Acción rápida */}
                        <div className={styles.sideCard}>
                            <div className={styles.sideEmoji}>🏺</div>
                            <h3>¿Te interesa lo que hacemos?</h3>
                            <p>Visitá nuestro catálogo de figuras artesanales en yeso, hechas a mano en San Miguel.</p>
                            <Link href="/catalogo" className="btn btn-primary btn-full">
                                Ver Catálogo
                            </Link>
                            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-full" style={{ marginTop: '8px' }}>
                                Consultar por WhatsApp
                            </a>
                        </div>

                        {/* Otros artículos */}
                        <div className={styles.sideCard}>
                            <h3>Otros artículos</h3>
                            <div className={styles.miniPosts}>
                                {otrosPosts.map((p) => (
                                    <Link key={p.id} href={`/blog/${p.slug}`} className={styles.miniPost}>
                                        <div className={styles.miniPostImg}>
                                            <span>{getCategoryEmoji(p.category)}</span>
                                        </div>
                                        <div className={styles.miniPostInfo}>
                                            <span className={`badge badge-${p.category}`} style={{ fontSize: '0.65rem' }}>{p.categoryLabel}</span>
                                            <p>{p.title}</p>
                                            <span>{formatDate(p.date)}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function getCategoryEmoji(cat) {
    const map = { pintura: '🎨', souvenirs: '🎁', decoracion: '🏡', kits: '🖌️', religioso: '🕊️' };
    return map[cat] || '📝';
}

'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Link from 'next/link';
import { blogPosts } from '@/data/data';
import styles from './page.module.css';

const blogCategories = [
    { id: 'todos', label: 'Todos' },
    { id: 'souvenirs', label: 'Ideas souvenirs religiosos' },
    { id: 'pintura', label: 'Cómo pintar figuras de yeso' },
    { id: 'decoracion', label: 'Decoración artesanal en casa' },
    { id: 'kits', label: 'Tendencias souvenirs cumpleaños' },
];

export default function BlogPage() {
    const featured = blogPosts.find((p) => p.featured);
    const rest = blogPosts.filter((p) => !p.featured);

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className="container">
                        <span className="section-tag">Arte en Yeso San Miguel</span>
                        <h1>Inspiración & Ideas</h1>
                        <p>Tips, tendencias y creatividad artesanal desde San Miguel, Buenos Aires.</p>
                    </div>
                </section>

                {/* Filtros */}
                <section className={styles.filtrosSection}>
                    <div className={`container ${styles.filtrosWrap}`}>
                        {blogCategories.map((c) => (
                            <span key={c.id} className={`${styles.filtroBtn} ${c.id === 'todos' ? styles.active : ''}`}>
                                {c.label}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Artículo destacado */}
                {featured && (
                    <section className={styles.featuredSection}>
                        <div className="container">
                            <div className={styles.featuredCard}>
                                <div className={styles.featuredImage}>
                                    <span>📝</span>
                                    <span className="badge badge-acento">Destacado</span>
                                </div>
                                <div className={styles.featuredInfo}>
                                    <span className={`badge badge-${featured.category}`}>{featured.categoryLabel}</span>
                                    <h2>{featured.title}</h2>
                                    <p>{featured.excerpt}</p>
                                    <div className={styles.featuredMeta}>
                                        <span>{featured.author}</span>
                                        <span>•</span>
                                        <span>{formatDate(featured.date)}</span>
                                    </div>
                                    <Link href={`/blog/${featured.slug}`} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                                        Leer artículo
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Grid de artículos */}
                <section className={`section-padding ${styles.gridSection}`}>
                    <div className="container">
                        <div className={styles.grid}>
                            {rest.map((post) => (
                                <article key={post.id} className={styles.postCard}>
                                    <Link href={`/blog/${post.slug}`} className={styles.postImage}>
                                        <span>📰</span>
                                    </Link>
                                    <div className={styles.postBody}>
                                        <span className={`badge badge-${post.category}`}>{post.categoryLabel}</span>
                                        <Link href={`/blog/${post.slug}`}>
                                            <h3 className={styles.postTitle}>{post.title}</h3>
                                        </Link>
                                        <p className={styles.postExcerpt}>{post.excerpt}</p>
                                        <div className={styles.postMeta}>
                                            <span>{formatDate(post.date)}</span>
                                            <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                                Leer más →
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className={`section-padding ${styles.newsletterSection}`}>
                    <div className="container">
                        <div className={styles.newsletterBox}>
                            <div>
                                <h2>Recibí ideas artesanales en tu email</h2>
                                <p>Tips de pintura, tendencias en souvenirs y novedades de nuestro taller directamente en tu casilla.</p>
                            </div>
                            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                                <input type="email" placeholder="tu@email.com" className={styles.newsletterInput} />
                                <button type="submit" className="btn btn-primary">Suscribirse</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
}

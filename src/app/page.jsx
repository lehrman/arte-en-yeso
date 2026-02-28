import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { products } from '@/data/data';
import styles from './page.module.css';

const WA_NUMBER = '5491100000000';
const WA_MSG = encodeURIComponent('Hola! Me gustaría saber más sobre los talleres y las piezas del catálogo.');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

export default function Home() {
    const featured = products.slice(0, 4);

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* =========== HERO: Taller Acogedor =========== */}
                <section className={`${styles.hero} animate-fadein`}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Arte que transforma tu hogar con calidez</h1>
                        <p className={styles.heroSubtitle}>
                            Descubre piezas de yeso moldeadas a mano con dedicación y el toque rústico de nuestro taller en San Miguel. Cada figura cuenta una historia única.
                        </p>
                        <div className={styles.heroCtas}>
                            <Link href="/catalogo" className="btn btn-primary btn-lg">Explorar Catálogo</Link>
                            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">Hablar con el Taller</a>
                        </div>
                    </div>
                </section>

                {/* =========== ESENCIA TALLERISTA =========== */}
                <section className="section-padding container animate-fadein" style={{ animationDelay: '0.2s' }}>
                    <div className={styles.esenciaGrid}>
                        <div className={styles.esenciaInfo}>
                            <h2 className={styles.sectionTitle}>Nuestra Esencia Tallerista</h2>
                            <p>Materiales naturales y procesos artesanales que inspiran serenidad. Creemos en la belleza de lo hecho con las manos y el valor de lo imperfecto.</p>
                            <Link href="/nosotros" className={styles.textLink}>Ver galería completa <span className={styles.arrow}>→</span></Link>
                        </div>
                        <div className={styles.esenciaCards}>
                            <div className={styles.miniCard}>
                                <h3>Acabados Orgánicos</h3>
                                <p>Inspirados en los matices de la tierra y la piedra natural.</p>
                            </div>
                            <div className={styles.miniCard}>
                                <h3>Texturas Naturales</h3>
                                <p>Combinamos yeso con fibras de papel y lino reciclado.</p>
                            </div>
                            <div className={styles.miniCard}>
                                <h3>Diseño Atemporal</h3>
                                <p>Piezas diseñadas para brindar calma a cualquier espacio.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========== CATÁLOGO DESTACADO =========== */}
                <section className={`section-padding bg-textura animate-fadein`} style={{ animationDelay: '0.4s' }}>
                    <div className="container">
                        <div className="section-header">
                            <h2 className={styles.sectionTitle}>Catálogo de Piezas</h2>
                            <p>Figuras artesanales creadas con dedicación en nuestro taller de San Miguel.</p>
                            <span className="divider" />
                        </div>
                        <div className={styles.productsGrid}>
                            {featured.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                        <div className={styles.verMasWrap}>
                            <Link href="/catalogo" className="btn btn-primary">Ver catálogo completo</Link>
                        </div>
                    </div>
                </section>

                {/* =========== TEASER TALLERES =========== */}
                <section className={`${styles.talleresSection} section-padding animate-fadein`} style={{ animationDelay: '0.6s' }}>
                    <div className="container">
                        <div className={styles.talleresContent}>
                            <h2>¿Quieres aprender el arte del yeso?</h2>
                            <p>Únete a nuestros talleres presenciales en un ambiente acogedor y creativo en el corazón de San Miguel. Aprende desde el moldeado hasta el acabado final.</p>
                            <Link href="/talleres" className="btn btn-primary btn-lg">Ver Próximos Talleres</Link>
                        </div>
                    </div>
                </section>

                {/* =========== BOLETÍN CREATIVO =========== */}
                <section className="section-padding container animate-fadein" style={{ animationDelay: '0.8s' }}>
                    <div className={styles.boletinCard}>
                        <div className={styles.boletinText}>
                            <h3>Boletín Creativo</h3>
                            <p>Recibe novedades de nuevas colecciones y fechas de próximos talleres directamente en tu correo.</p>
                        </div>
                        <form className={styles.boletinForm} onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="tu@email.com" required />
                            <button type="submit" className="btn btn-primary">Suscribirse</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

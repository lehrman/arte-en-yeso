import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FeaturedProducts from '@/components/FeaturedProducts';
import Link from 'next/link';
import styles from './page.module.css';

const WA_NUMBER = '5491100000000';
const WA_MSG = encodeURIComponent('Hola! Me conmovió la historia de Abu Creaciones y me gustaría saber más.');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

export default function Home() {

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* =========== HERO: La Mañana de Domingo =========== */}
                <section className={`${styles.hero} animate-fadein`}>
                    <div className={styles.heroOverlay} />
                    <div className={styles.heroContent}>
                        <span className={styles.abuBadge}>Desde el corazón de la abuela</span>
                        <h1 className={styles.heroTitle}>Donde vive el alma de tu hogar</h1>
                        <p className={styles.heroSubtitle}>
                            ¿Te acuerdas de ese olor a pan recién horneado y la salsa cociéndose lento en una mañana de domingo lluviosa?
                            Atrás de esos vidrios empañados, nacen nuestras creaciones. Piezas de yeso que guardan el calor de un abrazo.
                        </p>
                        <div className={styles.heroCtas}>
                            <Link href="/catalogo" className="btn btn-primary btn-lg">Descubrir Tesoros</Link>
                            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">Ser parte de nuestra historia</a>
                        </div>
                    </div>
                </section>

                {/* =========== HISTORIA Y EMPATÍA =========== */}
                <section className="section-padding container animate-fadein" style={{ animationDelay: '0.2s' }}>
                    <div className={styles.historiaGrid}>
                        <div className={styles.historiaTexto}>
                            <h2 className={styles.sectionTitle}>Cada pieza es una caricia</h2>
                            <p className={styles.pEmotivo}>
                                En **Abu Creaciones**, no fabricamos objetos, rescatamos valores. Cada figura es moldeada a mano, pensando en la mesa compartida, en el rincón de lectura y en la paz que solo se siente en casa.
                            </p>
                            <p>
                                Al elegir una de nuestras creaciones, nos estás ayudando a mantener viva una tradición familiar, un legado de paciencia y amor que se transmite en cada pincelada.
                            </p>
                            <Link href="/nosotros" className={styles.textLink}>Conocé a la Abu <span className={styles.arrow}>→</span></Link>
                        </div>
                        <div className={styles.valoresCards}>
                            <div className={styles.valorCard}>
                                <span className={styles.valorIcon}>🥖</span>
                                <h3>Hecho sin prisa</h3>
                                <p>Como el pan que espera su tiempo, nuestras piezas se secan al aire de San Miguel.</p>
                            </div>
                            <div className={styles.valorCard}>
                                <span className={styles.valorIcon}>👵</span>
                                <h3>Amor de Abuela</h3>
                                <p>Dedicación total en cada detalle, buscando la perfección en lo artesanal.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========== TESOROS DESTACADOS =========== */}
                <section className={`section-padding bg-nostalgic animate-fadein`} style={{ animationDelay: '0.4s' }}>
                    <div className="container">
                        <div className="section-header text-center">
                            <h2 className={styles.sectionTitle}>Tesoros con Historia</h2>
                            <p className={styles.pSubtitle}>Pedacitos de hogar que esperan por vos.</p>
                            <div className={styles.separadorNostalgico}>✦</div>
                        </div>
                        <FeaturedProducts gridClassName={styles.productsGrid} />
                        <div className={styles.verMasWrap}>
                            <Link href="/catalogo" className="btn btn-secondary">Ver toda la colección</Link>
                        </div>
                    </div>
                </section>

                {/* =========== INVITACIÓN AL TALLER =========== */}
                <section className={`${styles.invitacionSection} section-padding animate-fadein`} style={{ animationDelay: '0.6s' }}>
                    <div className="container">
                        <div className={styles.invitacionBox}>
                            <h2>¿Nos ayudás a seguir creando?</h2>
                            <p>Tu apoyo es lo que nos impulsa a seguir horneando sueños. Cada vez que llevás una pieza, te llevás un pedacito de nuestro domingo familiar.</p>
                            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Contactanos y conocenos</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

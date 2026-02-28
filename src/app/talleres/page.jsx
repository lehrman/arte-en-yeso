import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import styles from './page.module.css';
import Link from 'next/link';

export default function Talleres() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={`${styles.talleresHero} animate-fadein`}>
                    <div className="container">
                        <h1 className={styles.title}>Aprende el Arte del Yeso</h1>
                        <p className={styles.subtitle}>Encuentros creativos en nuestro taller de San Miguel. Descubre el placer de crear con tus propias manos.</p>
                    </div>
                </section>

                <section className="section-padding container animate-fadein" style={{ animationDelay: '0.2s' }}>
                    <div className={styles.grid}>
                        <div className={styles.info}>
                            <h2>El Taller San Miguel</h2>
                            <p>Ubicados en el corazón de San Miguel, nuestro taller es un espacio abierto a la experimentación y el aprendizaje. No importa si nunca tocaste el yeso o si ya tenés experiencia; aquí celebramos la belleza de lo imperfecto.</p>
                            <div className={styles.features}>
                                <div className={styles.feature}>
                                    <h3>Ambiente Acogedor</h3>
                                    <p>Un espacio rodeado de herramientas, moldes y la calidez de lo artesanal.</p>
                                </div>
                                <div className={styles.feature}>
                                    <h3>Grupos Reducidos</h3>
                                    <p>Atención personalizada para que puedas avanzar a tu propio ritmo.</p>
                                </div>
                                <div className={styles.feature}>
                                    <h3>Todos los Materiales</h3>
                                    <p>No necesitás traer nada. Nosotros te proveemos desde el yeso hasta los acabados.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            {/* Aquí iría una imagen real del taller */}
                            <div className={styles.fakeImage}>📸 Foto del Taller</div>
                        </div>
                    </div>
                </section>

                <section className="section-padding bg-textura animate-fadein" style={{ animationDelay: '0.4s' }}>
                    <div className="container text-center">
                        <h2>Próximos Encuentros</h2>
                        <div className={styles.agendaGrid}>
                            <div className={styles.agendaItem}>
                                <span className={styles.date}>Sáb 15 Mar</span>
                                <h3>Iniciación al Moldeado</h3>
                                <p>Aprendé las bases: preparación de la mezcla, volcado y desmolde.</p>
                                <span className={styles.price}>$8.500</span>
                            </div>
                            <div className={styles.agendaItem}>
                                <span className={styles.date}>Sáb 22 Mar</span>
                                <h3>Pátinas y Acabados Rústicos</h3>
                                <p>Dale vida a tus piezas con técnicas de pintura y texturas orgánicas.</p>
                                <span className={styles.price}>$9.200</span>
                            </div>
                        </div>
                        <div style={{ marginTop: '3rem' }}>
                            <Link href="https://wa.me/5491100000000" className="btn btn-primary btn-lg">Reservar mi lugar via WhatsApp</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

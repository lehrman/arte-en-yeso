import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import styles from './page.module.css';

export const metadata = {
    title: 'Sobre Nosotros | Arte en Yeso San Miguel',
    description: 'Conocé la historia del emprendimiento artesanal de figuras en yeso de San Miguel. Más de 10 años de producción manual con amor y dedicación.',
};

const pasos = [
    { num: '01', title: 'Diseño y molde', desc: 'Cada figura comienza con el diseño del molde artesanal, creado a medida.' },
    { num: '02', title: 'Colado del yeso', desc: 'El yeso de alta calidad se mezcla y vierte con precisión en cada molde.' },
    { num: '03', title: 'Desmolde y secado', desc: 'Tiempo de fraguado y secado cuidadoso para asegurar la resistencia de la pieza.' },
    { num: '04', title: 'Pintura y detalle', desc: 'Cada figura se pinta a mano con pinturas artesanales y terminados únicos.' },
];

const valores = [
    { icon: '🤲', title: 'Hecho a mano', desc: 'Cada pieza pasa por las manos de nuestros artesanos. No hay dos iguales.' },
    { icon: '❤️', title: 'Con amor y dedicación', desc: 'Detrás de cada figura hay horas de trabajo, paciencia y pasión artesanal.' },
    { icon: '📍', title: 'Orgullo local — San Miguel', desc: 'Producimos en San Miguel y distribuimos por toda la zona norte del GBA.' },
];

export default function NosotrosPage() {
    const WA_URL = 'https://wa.me/5491100000000?text=' + encodeURIComponent('Hola! Quisiera conocer más sobre su emprendimiento de figuras en yeso.');

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero con imagen del taller */}
                <section className={styles.hero}>
                    <div className={styles.heroBg} aria-hidden="true">
                        <span className={styles.heroDecoL}>🏺</span>
                        <span className={styles.heroDecoR}>✦</span>
                    </div>
                    <div className={`container ${styles.heroContent}`}>
                        <span className="section-tag">Nuestra historia</span>
                        <h1>Más de 10 años haciendo<br />arte artesanal en San Miguel</h1>
                        <p>Un emprendimiento familiar nacido de la pasión por el yeso y el arte manual.</p>
                    </div>
                </section>

                {/* Historia */}
                <section className="section-padding">
                    <div className={`container ${styles.historiaGrid}`}>
                        <div className={styles.historiaImagen}>
                            <span>🤲</span>
                            <p className={styles.histImgCaption}>Nuestras manos — San Miguel, Buenos Aires</p>
                        </div>
                        <div className={styles.historiaTexto}>
                            <span className="section-tag">Nació de una pasión</span>
                            <h2>Una historia familiar de artesanía y dedicación</h2>
                            <span className="divider" style={{ margin: '16px 0' }} />
                            <p>
                                Arte en Yeso San Miguel nació hace más de 10 años como un proyecto familiar en el corazón de San Miguel, Provincia de Buenos Aires. Lo que empezó como una pequeña producción artesanal de figuras religiosas para el barrio se fue convirtiendo, de a poco, en un emprendimiento reconocido en toda la zona norte del GBA.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                Cada figura que salimos a vender lleva el sello del trabajo hecho con las manos: el colado del yeso, el desmolde, el lijado, la pintura. Cada detalle pensado y ejecutado con cuidado. Nunca delegamos la calidad.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                Hoy producimos figuras religiosas, souvenirs para eventos y kits para pintar, siempre con la misma esencia: ser una alternativa artesanal y local en un mercado lleno de productos industriales.
                            </p>
                            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '2rem', alignSelf: 'flex-start' }}>
                                Contactarnos por WhatsApp
                            </a>
                        </div>
                    </div>
                </section>

                {/* Proceso */}
                <section className={`section-padding bg-textura`}>
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag">Cómo trabajamos</span>
                            <h2>El proceso de producción</h2>
                            <span className="divider" />
                            <p>Cada figura pasa por 4 etapas de producción 100% artesanal.</p>
                        </div>
                        <div className={styles.pasosGrid}>
                            {pasos.map((p, i) => (
                                <div key={p.num} className={styles.paso}>
                                    <div className={styles.pasoNum}>{p.num}</div>
                                    {i < pasos.length - 1 && <div className={styles.pasoLine} aria-hidden="true" />}
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Galería del taller */}
                <section className="section-padding">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag">Nuestro taller</span>
                            <h2>Donde nace cada pieza</h2>
                            <span className="divider" />
                        </div>
                        <div className={styles.galeriaGrid}>
                            {['🏺', '🎨', '🤲', '✦', '🕊️', '🙏'].map((emoji, i) => (
                                <div key={i} className={styles.galeriaImagen}>
                                    <span>{emoji}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Valores */}
                <section className={`section-padding ${styles.valoresSection}`}>
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag">Lo que nos mueve</span>
                            <h2>Nuestros valores artesanales</h2>
                            <span className="divider" />
                        </div>
                        <div className={styles.valoresGrid}>
                            {valores.map((v) => (
                                <div key={v.title} className={styles.valorCard}>
                                    <span className={styles.valorIcon}>{v.icon}</span>
                                    <h3>{v.title}</h3>
                                    <p>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

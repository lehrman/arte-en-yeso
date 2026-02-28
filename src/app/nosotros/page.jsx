import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import styles from './page.module.css';

export const metadata = {
    title: 'Nuestra Historia | ABU CREACIONES',
    description: 'Conocé el corazón de ABU CREACIONES. Un legado de amor, paciencia y figuras hechas a mano con la calidez de un hogar de abuela.',
};

const pasos = [
    { num: '01', title: 'Amasar el silencio', desc: 'Preparamos el yeso con la calma de quien espera que el pan leve.' },
    { num: '02', title: 'Moldeado con alma', desc: 'Damos forma a cada pieza pensando en el rincón que va a ocupar.' },
    { num: '03', title: 'El roce del tiempo', desc: 'Un secado natural, sin prisas, respetando los ritmos de la naturaleza.' },
    { num: '04', title: 'Pinceladas de amor', desc: 'Cada detalle es pintado a mano, como si fuera una caricia.' },
];

const valores = [
    { icon: '👵', title: 'Legado de Abuela', desc: 'Todo lo que hacemos guarda los valores de honestidad y cariño de nuestra abu.' },
    { icon: '🏠', title: 'Calor de Hogar', desc: 'Nuestras piezas no son objetos, son pedacitos de casa.' },
    { icon: '🌧️', title: 'Paz de Domingo', desc: 'Buscamos transmitir esa serenidad de una tarde de lluvia y charla compartida.' },
];

export default function NosotrosPage() {
    const WA_URL = 'https://wa.me/5491162996903?text=' + encodeURIComponent('Hola! Me emocionó mucho su historia y me gustaría conocer más sobre Abu Creaciones.');

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <span className="section-tag">Nuestras Raíces</span>
                        <h1>Un legado que nació<br />en la mesa de la cocina</h1>
                        <p>ABU CREACIONES es más que un taller; es el abrazo que se queda en tu casa.</p>
                    </div>
                </section>

                <section className="section-padding">
                    <div className={`container ${styles.historiaGrid}`}>
                        <div className={styles.historiaTexto}>
                            <span className="section-tag">Donde todo empezó</span>
                            <h2>La historia de un amor infinito</h2>
                            <p>
                                Todo comenzó entre aromas de salsa y ruidos de cubiertos. Nuestra abuela, con esas manos que sabían de caricias y de trabajo duro, nos enseñó que las cosas más bellas son las que se hacen con tiempo y dedicación.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                ABU CREACIONES nació para rescatar ese sentimiento. En un mundo que corre, nosotros elegimos detenernos. Elegimos el yeso porque es noble, como los abuelos. Elegimos San Miguel porque es nuestro lugar en el mundo, donde los vecinos aún se saludan por el nombre.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                Cada pieza que sale de nuestro taller fue cuidada como si fuera para nuestra propia mesa. Queremos que al verla en tu hogar, sientas ese olor a pan recién horneado y esa paz de los domingos lluviosos.
                            </p>
                            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                                Hablemos del Taller
                            </a>
                        </div>
                        <div className={styles.historiaImagen}>
                            <span>🕯️</span>
                        </div>
                    </div>
                </section>

                <section className={`section-padding bg-nostalgic`}>
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>El Proceso del Cariño</h2>
                            <p>Moldeamos recuerdos, horneamos sueños.</p>
                        </div>
                        <div className={styles.pasosGrid}>
                            {pasos.map((p) => (
                                <div key={p.num} className={styles.paso}>
                                    <div className={styles.pasoNum}>{p.num}</div>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-padding">
                    <div className="container">
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

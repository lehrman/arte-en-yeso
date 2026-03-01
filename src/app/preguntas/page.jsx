import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import styles from './page.module.css';

const WA_NUMBER = '5491162996903';

export default function FAQ() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={`${styles.faqHero} animate-fadein`}>
                    <div className="container">
                        <h1 className={styles.title}>Preguntas Frecuentes</h1>
                        <p className={styles.subtitle}>Conoce más sobre nuestro proceso artesanal y cómo cuidamos cada pieza.</p>
                    </div>
                </section>

                <section className="section-padding container animate-fadein" style={{ animationDelay: '0.2s' }}>
                    <div className={styles.faqList}>
                        <div className={styles.faqItem}>
                            <h3>¿Hacen envíos a GBA Norte?</h3>
                            <p>Sí, realizamos envíos personalizados a todo GBA Norte (Vicente López, San Isidro, San Fernando, Tigre). Utilizamos un servicio especializado en objetos frágiles para asegurar que cada pieza llegue intacta.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>¿Cómo debo cuidar mis piezas de yeso?</h3>
                            <p>Nuestras piezas son de uso decorativo interior. Recomendamos limpiar con un plumero o paño seco. Evitá la humedad excesiva, ya que el yeso es un material poroso.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>¿Cuáles son los tiempos de producción?</h3>
                            <p>Al ser un proceso 100% artesanal, el tiempo estimado es de 7 a 15 días hábiles, dependiendo del diseño y el secado necesario.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3>¿Ofrecen ventas por mayor?</h3>
                            <p>¡Sí! Tenemos planes especiales para talleres de arte y revendedores para pedidos de más de 20 unidades. Escribinos para recibir la lista de precios.</p>
                        </div>
                    </div>
                    <div className={styles.cta}>
                        <p>¿Aún tenés dudas específicas?</p>
                        <a href={`https://wa.me/${WA_NUMBER}`} className="btn btn-primary">Consultar por WhatsApp</a>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

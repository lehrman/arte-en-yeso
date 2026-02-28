'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import styles from './page.module.css';

export default function Contacto() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={`${styles.contactHero} animate-fadein`}>
                    <div className="container">
                        <h1 className={styles.title}>El corazón del arte en San Miguel</h1>
                        <p className={styles.subtitle}>Un espacio acogedor donde cada pieza cuenta una historia de tradición y dedicación.</p>
                    </div>
                </section>

                <section className="section-padding container animate-fadein" style={{ animationDelay: '0.2s' }}>
                    <div className={styles.grid}>
                        <div className={styles.info}>
                            <div className={styles.infoBlock}>
                                <h3>Nuestro Taller</h3>
                                <p>Calle Irigoin S/N, San Miguel</p>
                                <p>Barrio del Arte, Buenos Aires</p>
                            </div>
                            <div className={styles.infoBlock}>
                                <h3>Horario de Atención</h3>
                                <p>Lunes a Sábado: 10:00 - 18:00 hs</p>
                            </div>
                            <div className={styles.whatsappBox}>
                                <h3>Respuesta Inmediata</h3>
                                <p>Si necesitas una cotización rápida o agendar una visita, escribinos por WhatsApp.</p>
                                <a href="https://wa.me/5491162996903" className="btn btn-whatsapp btn-lg">HABLAR POR WHATSAPP</a>
                            </div>
                        </div>

                        <div className={styles.formContainer}>
                            <h2 className={styles.formTitle}>Envíanos un mensaje</h2>
                            <p className={styles.formSubtitle}>¿Tenes un proyecto en mente o queres saber sobre nuestros talleres?</p>
                            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.formGroup}>
                                    <label>Nombre</label>
                                    <input type="text" placeholder="Tu nombre" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Email</label>
                                    <input type="email" placeholder="tu@email.com" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Mensaje</label>
                                    <textarea placeholder="¿En qué podemos ayudarte?" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-full">ENVIAR   MENSAJE</button>
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

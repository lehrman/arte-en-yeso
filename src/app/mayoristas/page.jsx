'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import styles from './page.module.css';

const propuestas = [
    { icon: '📦', title: 'Producción en cantidad', desc: 'Desde 20 unidades iguales o combinadas.' },
    { icon: '💰', title: 'Precios preferenciales', desc: 'Descuentos por volumen desde el primer pedido.' },
    { icon: '🎨', title: 'Personalización incluida', desc: 'Nombre, fecha, colores y diseños a medida.' },
    { icon: '📅', title: 'Tiempos garantizados', desc: 'Entre 7 y 15 días hábiles de producción.' },
    { icon: '🚚', title: 'Entregas zona norte GBA', desc: 'San Miguel, Palermo, Bella Vista, Maschwitz y más.' },
    { icon: '💬', title: 'Asesoramiento directo', desc: 'Te acompañamos desde la idea hasta la entrega.' },
];

const condiciones = [
    { label: 'Pedido mínimo', value: '20 unidades' },
    { label: 'Tiempo de producción', value: '7 – 15 días hábiles' },
    { label: 'Seña requerida', value: '50% del total' },
    { label: 'Pago final', value: 'Contra entrega' },
    { label: 'Zona de entrega', value: 'Zona norte GBA' },
    { label: 'Consulta', value: 'Sin cargo' },
];

const testimonios = [
    {
        nombre: 'Rosario V. — Organiza eventos',
        texto: 'Para el cumpleaños de 15 de mi hija pedí 80 figuras personalizadas. La calidad fue impresionante y llegaron antes de lo prometido. ¡Los sigo eligiendo siempre!',
    },
    {
        nombre: 'Parroquia San José — San Miguel',
        texto: 'Hacemos el pedido de souvenirs para la comunión anual desde hace 3 años. Siempre cumplen con calidad, cantidad y tiempos. Una garantía total.',
    },
];

export default function MayoristasPage() {
    const WA_NUMBER = 'https://wa.me/5491162996903?text=' + encodeURIComponent('Hola! Quiero consultar sobre pedidos mayoristas o para eventos. ¿Pueden darme información?');

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero oscuro */}
                <section className={styles.hero}>
                    <div className={`container ${styles.heroContent}`}>
                        <span className={`badge badge-acento`}>Consulta con la Abu</span>
                        <h1>Llevá nuestra historia<br />a tu evento</h1>
                        <p>Tesoros únicos en yeso artesanal para comuniones, bautismos y momentos especiales. Piezas moldeadas con amor que tus invitados guardarán para siempre.</p>
                        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                            Consultar Pedido Especial
                        </a>
                    </div>
                </section>

                {/* Propuestas de valor */}
                <section className="section-padding">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag">¿Por qué elegirnos?</span>
                            <h2>Tu evento merece lo artesanal</h2>
                            <span className="divider" />
                        </div>
                        <div className={styles.propuestasGrid}>
                            {propuestas.map((p) => (
                                <div key={p.title} className={styles.propuCard}>
                                    <span className={styles.propuIcon}>{p.icon}</span>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Formulario + Condiciones */}
                <section className={`section-padding bg-textura`}>
                    <div className="container">
                        <div className={styles.formGrid}>
                            {/* Formulario */}
                            <div className={styles.formCard}>
                                <h2>Solicitá tu cotización</h2>
                                <p>Completá el formulario y te respondemos en menos de 24 horas con presupuesto sin cargo.</p>
                                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                                    <div className={styles.formRow}>
                                        <div className="form-grupo">
                                            <label htmlFor="may-nombre">Nombre completo *</label>
                                            <input id="may-nombre" type="text" placeholder="Tu nombre" required />
                                        </div>
                                        <div className="form-grupo">
                                            <label htmlFor="may-email">Email *</label>
                                            <input id="may-email" type="email" placeholder="tu@email.com" required />
                                        </div>
                                    </div>
                                    <div className="form-grupo">
                                        <label htmlFor="may-tel">Teléfono / WhatsApp *</label>
                                        <input id="may-tel" type="tel" placeholder="+54 11 xxxx-xxxx" required />
                                    </div>
                                    <div className={styles.formRow}>
                                        <div className="form-grupo">
                                            <label htmlFor="may-tipo">Tipo de evento</label>
                                            <select id="may-tipo">
                                                <option value="">Seleccioná</option>
                                                <option>Comunión</option>
                                                <option>Cumpleaños</option>
                                                <option>Casamiento</option>
                                                <option>Corporativo</option>
                                                <option>Bautismo</option>
                                                <option>Otro</option>
                                            </select>
                                        </div>
                                        <div className="form-grupo">
                                            <label htmlFor="may-cant">Cantidad de piezas</label>
                                            <input id="may-cant" type="number" min="20" placeholder="Mín. 20" />
                                        </div>
                                    </div>
                                    <div className="form-grupo">
                                        <label htmlFor="may-figura">Tipo de figura / descripción</label>
                                        <input id="may-figura" type="text" placeholder="Ej. ángel pequeño personalizable, virgen 15cm..." />
                                    </div>
                                    <div className="form-grupo">
                                        <label htmlFor="may-fecha">Fecha tentativa del evento</label>
                                        <input id="may-fecha" type="date" />
                                    </div>
                                    <div className="form-grupo">
                                        <label htmlFor="may-msg">Mensaje adicional</label>
                                        <textarea id="may-msg" placeholder="Contanos cualquier detalle adicional — colores, texto personalizado, etc."></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-full btn-lg">
                                        Pedir Cotización
                                    </button>
                                </form>
                            </div>

                            {/* Condiciones */}
                            <div className={styles.condiciones}>
                                <h3>Condiciones comerciales</h3>
                                <div className={styles.condList}>
                                    {condiciones.map((c) => (
                                        <div key={c.label} className={styles.condItem}>
                                            <span className={styles.condLabel}>{c.label}</span>
                                            <span className={styles.condValue}>{c.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.waCard}>
                                    <h4>¿Preferís hablar directo?</h4>
                                    <p>Escribinos por WhatsApp y coordinamos los detalles de tu pedido.</p>
                                    <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-full">
                                        Chatear por WhatsApp
                                    </a>
                                </div>

                                {/* Testimonios */}
                                <h3 style={{ marginTop: '2rem' }}>Clientes satisfechos</h3>
                                {testimonios.map((t) => (
                                    <div key={t.nombre} className={styles.testimonioCard}>
                                        <div className={styles.estrellas}>⭐⭐⭐⭐⭐</div>
                                        <p>"{t.texto}"</p>
                                        <strong>{t.nombre}</strong>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}

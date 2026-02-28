import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { products } from '@/data/data';
import styles from './page.module.css';

const WA_NUMBER = '5491100000000';
const WA_MSG = encodeURIComponent('Hola! Quiero consultar sobre sus figuras de yeso artesanales.');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const beneficios = [
    { icon: '🏺', title: 'Producción Propia', desc: 'Fabricamos cada pieza en nuestro taller de San Miguel, sin intermediarios.' },
    { icon: '🤲', title: '100% Artesanal', desc: 'Cada figura es moldeada y pintada a mano con técnicas tradicionales de yeso.' },
    { icon: '🎨', title: 'Personalización', desc: 'Colores, nombres, fechas y tamaños a medida para cada pedido.' },
    { icon: '📦', title: 'Entregas en GBA', desc: 'Envíos propios a toda la zona norte del Gran Buenos Aires.' },
];

const ocasiones = [
    { emoji: '✝️', title: 'Comuniones y Confirmaciones', desc: 'Souvenirs religiosos únicos y personalizables para la primera comunión.' },
    { emoji: '🎂', title: 'Cumpleaños y Eventos', desc: 'Figuras de yeso decorativas para cumpleaños de 15, infantiles y más.' },
    { emoji: '🎄', title: 'Navidad y Pascua', desc: 'Nacimientos, ángeles y figuras religiosas para las fiestas de fin de año.' },
    { emoji: '🏡', title: 'Decoración del Hogar', desc: 'Piezas artesanales únicas para embellecer cada rincón de tu casa.' },
];

const testimonios = [
    { nombre: 'María Elena R.', ciudad: 'San Miguel', texto: 'Pedí los souvenirs para la comunión de mi hija y quedaron hermosos. Superaron mis expectativas — cada detalle es perfecto y muy bien terminado.', estrellas: 5 },
    { nombre: 'Lucas G.', ciudad: 'Palermo, CABA', texto: 'Compré un nacimiento completo para Navidad y la calidad es increíble. Se nota que es artesanal de verdad. Lo recomiendo sin dudas.', estrellas: 5 },
    { nombre: 'Claudia M.', ciudad: 'Bella Vista', texto: 'Pedí figuras para los centros de mesa del bautismo de mi nena. Fueron muy atentos y el resultado fue espectacular. ¡10 puntos!', estrellas: 5 },
];

export default function Home() {
    const featured = products.slice(0, 6);

    return (
        <>
            <Header />
            <main>
                {/* =========== HERO =========== */}
                <section className={`${styles.hero} animate-fadein`}>
                    <div className={styles.heroBg} aria-hidden="true" />
                    <div className={`container ${styles.heroContent}`}>
                        <div className={styles.heroLeft}>
                            <span className={`badge badge-acento ${styles.heroBadge}`}>✦ Hecho a mano en San Miguel</span>
                            <h1 className={styles.heroTitle}>
                                Figuras<br />Artesanales<br />
                                <em>en Yeso</em>
                            </h1>
                            <p className={styles.heroSubtitle}>
                                Religiosas, souvenirs y decoración — producción propia desde San Miguel, Buenos Aires. Cada pieza, única.
                            </p>
                            <div className={styles.heroCtas}>
                                <Link href="/catalogo" className="btn btn-primary btn-lg">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                                    </svg>
                                    Ver Catálogo
                                </Link>
                                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                                    </svg>
                                    Cotizar por WhatsApp
                                </a>
                            </div>
                        </div>
                        <div className={styles.heroRight} aria-hidden="true">
                            <div className={styles.heroArt}>
                                <div className={styles.art1}>🕊️</div>
                                <div className={styles.art2}>🙏</div>
                                <div className={styles.art3}>✦</div>
                            </div>
                        </div>
                    </div>
                    {/* Stat bar */}
                    <div className={`container ${styles.statsBar}`}>
                        <div className={styles.stat}><strong>+500</strong><span>Piezas entregadas</span></div>
                        <div className={styles.statDiv} />
                        <div className={styles.stat}><strong>10+</strong><span>Años de experiencia</span></div>
                        <div className={styles.statDiv} />
                        <div className={styles.stat}><strong>100%</strong><span>Hecho en San Miguel</span></div>
                        <div className={styles.statDiv} />
                        <div className={styles.stat}><strong>⭐⭐⭐⭐⭐</strong><span>Clientes satisfechos</span></div>
                    </div>
                </section>

                {/* =========== BENEFICIOS =========== */}
                <section className="section-padding-sm animate-fadein" style={{ animationDelay: '0.2s' }}>
                    <div className="container">
                        <div className={styles.beneficiosGrid}>
                            {beneficios.map((b) => (
                                <div key={b.title} className={styles.beneficioCard}>
                                    <span className={styles.beneficioIcon}>{b.icon}</span>
                                    <h3>{b.title}</h3>
                                    <p>{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========== PRODUCTOS DESTACADOS =========== */}
                <section className={`section-padding bg-textura animate-fadein`} style={{ animationDelay: '0.4s' }}>
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag">Catálogo</span>
                            <h2>Nuestras Creaciones</h2>
                            <span className="divider" />
                            <p>Figuras religiosas, souvenirs y decoración artesanal pintados a mano — cada pieza es única.</p>
                        </div>
                        <div className={styles.productsGrid}>
                            {featured.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                        <div className={styles.verMasWrap}>
                            <Link href="/catalogo" className="btn btn-primary btn-lg">
                                Ver catálogo completo
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* =========== OCASIONES =========== */}
                <section className="section-padding animate-fadein" style={{ animationDelay: '0.6s' }}>
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag">Por ocasión</span>
                            <h2>Para cada momento</h2>
                            <span className="divider" />
                            <p>Tenemos la pieza artesanal perfecta para cada celebración y ocasión especial.</p>
                        </div>
                        <div className={styles.ocasionesGrid}>
                            {ocasiones.map((o) => (
                                <div key={o.title} className={styles.ocasionCard}>
                                    <span className={styles.ocasionEmoji}>{o.emoji}</span>
                                    <h3>{o.title}</h3>
                                    <p>{o.desc}</p>
                                    <Link href="/catalogo" className="btn btn-outline btn-sm" style={{ marginTop: 'auto' }}>Ver opciones</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========== TESTIMONIOS =========== */}
                <section className={`section-padding bg-textura`}>
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag">Testimonios</span>
                            <h2>Lo que dicen nuestros clientes</h2>
                            <span className="divider" />
                        </div>
                        <div className={styles.testimoniosGrid}>
                            {testimonios.map((t) => (
                                <div key={t.nombre} className={styles.testimonioCard}>
                                    <div className={styles.estrellas}>{'⭐'.repeat(t.estrellas)}</div>
                                    <p className={styles.testimonioTexto}>"{t.texto}"</p>
                                    <div className={styles.testimonioAutor}>
                                        <strong>{t.nombre}</strong>
                                        <span>{t.ciudad}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========== CONTACTO CTA =========== */}
                <section className={`section-padding ${styles.contactSection}`}>
                    <div className="container">
                        <div className={styles.contactGrid}>
                            <div className={styles.contactInfo}>
                                <span className="section-tag">Contacto</span>
                                <h2>¿Tenés una consulta o pedido especial?</h2>
                                <p>Escribinos por WhatsApp o completá el formulario. Respondemos en menos de 24 horas.</p>
                                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                                    </svg>
                                    Escribir por WhatsApp
                                </a>
                                <div className={styles.contactData}>
                                    <p>📍 San Miguel, Provincia de Buenos Aires</p>
                                    <p>🕐 Lun–Sáb: 9:00 – 18:00 hs</p>
                                    <p>🚚 Entregas en toda la zona norte del GBA</p>
                                </div>
                            </div>
                            <form className={styles.contactForm} action="#">
                                <div className={styles.formRow}>
                                    <div className="form-grupo">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input id="nombre" type="text" placeholder="Tu nombre completo" />
                                    </div>
                                    <div className="form-grupo">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="email" placeholder="tu@email.com" />
                                    </div>
                                </div>
                                <div className="form-grupo">
                                    <label htmlFor="telefono">Teléfono / WhatsApp</label>
                                    <input id="telefono" type="tel" placeholder="+54 11 xxxx-xxxx" />
                                </div>
                                <div className="form-grupo">
                                    <label htmlFor="mensaje">Mensaje</label>
                                    <textarea id="mensaje" placeholder="Contanos qué estás buscando — tipo de figura, cantidad, ocasión..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-full btn-lg">
                                    Enviar consulta
                                </button>
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

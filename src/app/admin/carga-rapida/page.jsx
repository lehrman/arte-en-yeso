'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

export default function CargaRapida() {
    const router = useRouter();
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [foto, setFoto] = useState(null);
    const [step, setStep] = useState(1);
    const [guardado, setGuardado] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && !localStorage.getItem('admin_auth')) {
            router.push('/admin/login');
        }
    }, []);

    const handleFoto = (e) => {
        const f = e.target.files?.[0];
        if (f) setFoto(URL.createObjectURL(f));
        setStep(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setGuardado(true);
        setTimeout(() => router.push('/admin/productos'), 2000);
    };

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                {/* Header */}
                <div className={styles.cardHeader}>
                    <span className={styles.brand}>Admin Mamá</span>
                    <Link href="/admin/productos" className={styles.skipLink}>Ir al panel completo →</Link>
                </div>

                <div className={styles.cardBody}>
                    <h1 className={styles.title}>⚡ Carga Rápida</h1>
                    <p className={styles.subtitle}>Hola! 👋 Subí un nuevo producto de yeso en 3 pasos sencillos.</p>

                    {/* Indicador de pasos */}
                    <div className={styles.steps}>
                        <div className={`${styles.step} ${step >= 1 ? styles.stepActive : ''}`}>
                            <span>1</span> Foto
                        </div>
                        <div className={styles.stepLine} />
                        <div className={`${styles.step} ${step >= 2 ? styles.stepActive : ''}`}>
                            <span>2</span> Nombre
                        </div>
                        <div className={styles.stepLine} />
                        <div className={`${styles.step} ${step >= 3 ? styles.stepActive : ''}`}>
                            <span>3</span> Precio
                        </div>
                    </div>

                    {guardado ? (
                        <div className={styles.successMsg}>
                            ✅ ¡Producto publicado! Redirigiendo al panel...
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            {/* Paso 1: Foto */}
                            <label className={styles.uploadZone} htmlFor="foto">
                                {foto
                                    ? <img src={foto} alt="preview" className={styles.preview} />
                                    : <>
                                        <span className={styles.uploadIcon}>📷</span>
                                        <span className={styles.uploadText}>Tocá para abrir la cámara o galería</span>
                                    </>
                                }
                                <input id="foto" type="file" accept="image/*" capture="environment"
                                    onChange={handleFoto} className={styles.fileInput} />
                            </label>

                            {/* Paso 2: Nombre */}
                            <div className={styles.formGroup}>
                                <label htmlFor="nombre">Nombre del producto</label>
                                <input
                                    id="nombre"
                                    type="text"
                                    value={nombre}
                                    onChange={(e) => { setNombre(e.target.value); setStep(3); }}
                                    placeholder="Ej: Ángel de la Guarda 20cm"
                                    onFocus={() => step < 2 && setStep(2)}
                                    required
                                />
                            </div>

                            {/* Paso 3: Precio */}
                            <div className={styles.formGroup}>
                                <label htmlFor="precio">Precio del producto</label>
                                <div className={styles.inputPrefix}>
                                    <span>$</span>
                                    <input
                                        id="precio"
                                        type="number"
                                        value={precio}
                                        onChange={(e) => setPrecio(e.target.value)}
                                        placeholder="Ingresá el valor en pesos. Ej: 5000"
                                        min="0"
                                        required
                                    />
                                </div>
                            </div>

                            <p className={styles.note}>
                                Al subir, el producto será visible instantáneamente en la tienda.
                            </p>

                            <button type="submit" className={styles.btnPublicar}>Publicar Producto</button>
                        </form>
                    )}
                </div>

                <div className={styles.cardFooter}>
                    <p>© {new Date().getFullYear()} Arte en Yeso San Miguel</p>
                </div>
            </div>
        </div>
    );
}

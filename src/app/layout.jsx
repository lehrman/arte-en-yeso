import './globals.css';

export const metadata = {
    title: "ABU CREACIONES — El alma de tu hogar",
    description: "Piezas de yeso hechas a mano con el amor de una abuela. Rescatamos la nostalgia de los domingos en familia y la calidez del hogar en cada creación.",
    keywords:
        'figuras en yeso San Miguel, souvenirs religiosos personalizados, kits para pintar yeso, decoración artesanal en yeso Argentina, figuras de yeso GBA',
    openGraph: {
        title: 'Arte en Yeso San Miguel | Figuras Artesanales',
        description:
            'Figuras religiosas y souvenirs en yeso hechos a mano en San Miguel, Buenos Aires.',
        locale: 'es_AR',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}

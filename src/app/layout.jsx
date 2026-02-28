import './globals.css';

export const metadata = {
    title: 'Arte en Yeso San Miguel | Figuras Artesanales en Yeso',
    description:
        'Figuras religiosas, souvenirs y decoración artesanal en yeso hechas a mano en San Miguel, Provincia de Buenos Aires. Comuniones, cumpleaños, Navidad y más. Envíos zona norte GBA.',
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

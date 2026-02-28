// Datos de productos del catálogo
export const products = [
    {
        id: 1,
        name: "El Ángel que me Cuida",
        slug: "angel-guardian",
        category: "religioso",
        price: 9500,
        stock: "Disponible",
        description: "Pequeñas alas que abrazan el hogar. Una pieza imponente de 45cm, moldeada con la paciencia de quien sabe esperar a que el pan leve en la cocina.",
        images: ["/images/products/angel-45.jpg"],
        sizes: ["45cm"],
        customizable: true,
        tags: ["más amado", "hogar"]
    },
    {
        id: 2,
        name: "Maceta de los Domingos",
        slug: "maceta-domingos",
        category: "hogar",
        price: 3400,
        stock: "Pocas unidades",
        description: "Inspirada en las macetas que la abu cuidaba mientras la salsa se cocía a fuego lento. Textura orgánica que se siente como un abrazo.",
        images: ["/images/products/maceta-organica.jpg"],
        sizes: ["Pequeña", "Mediana"],
        customizable: false,
        tags: ["recuerdo", "vida"]
    },
    {
        id: 3,
        name: "Cáliz Primera Comunión",
        category: "souvenirs",
        price: 3200,
        stock: "Disponible",
        sizes: ["10cm"],
        description: "Souvenir en yeso de cáliz con hostia para Primera Comunión. Base personalizable con nombre y fecha del niño. Presentación individual en cajita de regalo. Pedido mínimo 10 unidades.",
        images: ["/images/products/souvenir-comunion.jpg"],
        customizable: true,
        tags: ["souvenir", "comunión", "personalizable", "regalo"],
        slug: "souvenir-comunion",
    },

];

export const categories = [
    { id: "todos", label: "Todos" },
    { id: "religioso", label: "Religioso" },
    { id: "souvenirs", label: "Souvenirs" },
    { id: "kits", label: "Kits DIY" },
    { id: "decoracion", label: "Decoración" },
];

export const blogPosts = [
    {
        id: 1,
        slug: "como-pintar-figuras-de-yeso-paso-a-paso",
        title: "Cómo pintar figuras de yeso paso a paso",
        excerpt:
            "Aprendé las técnicas básicas para pintar tus figuras de yeso en casa con resultados profesionales. Te contamos los mejores trucos de nuestro taller.",
        category: "pintura",
        categoryLabel: "Cómo pintar figuras de yeso",
        image: "/images/blog/pintura-yeso.jpg",
        date: "2025-01-15",
        author: "Arte en Yeso",
        readTime: "6 min",
        featured: true,
        content: [
            {
                type: "intro",
                text: "Pintar una figura de yeso puede parecer intimidante si nunca lo hacés. Pero con los materiales correctos y un poco de paciencia, cualquier persona puede lograr resultados hermosos. En nuestro taller de San Miguel llevamos más de 10 años trabajando el yeso, y en este artículo te contamos todo lo que aprendimos.",
            },
            {
                type: "heading",
                text: "¿Qué materiales necesitás?",
            },
            {
                type: "list",
                items: [
                    "Figura de yeso sin pintar (blanca o cruda)",
                    "Pinturas acrílicas de buena calidad (recomendamos marcas nacionales como Acrilex o Pincelin)",
                    "Pinceles: uno plano ancho para fondos, uno fino de punta para detalles",
                    "Sellador para yeso (paso previo fundamental)",
                    "Barniz final (mate o brillante según preferencia)",
                    "Paleta o recipiente para mezclar colores",
                    "Vaso de agua y trapos limpios",
                ],
            },
            {
                type: "heading",
                text: "Paso 1: Sellar la figura",
            },
            {
                type: "text",
                text: "El yeso es muy poroso y absorbe la pintura con facilidad. Si saltás este paso, vas a gastar el doble de pintura y el resultado no va a ser uniforme. Aplicá una o dos manos de sellador para yeso (también llamado imprimación o primer) dejando secar bien entre capa y capa. Este paso es la diferencia entre un resultado profesional y uno amateur.",
            },
            {
                type: "tip",
                text: "Truco del taller: si no tenés sellador específico para yeso, podés diluir cola vinílica con agua (70% cola, 30% agua) y darle una mano completa. Dejá secar 24 horas antes de pintar.",
            },
            {
                type: "heading",
                text: "Paso 2: El fondo base",
            },
            {
                type: "text",
                text: "Aplicá la primera capa de color de fondo. Si la figura va a ser mayormente blanca (como una virgen o un ángel), usá blanco acrílico puro. Para tonos carne, mezclá blanco con una pequeña cantidad de ocre y rosa. Siempre aplicá de arriba hacia abajo y dejá secar completamente antes de seguir.",
            },
            {
                type: "heading",
                text: "Paso 3: Capas de color por secciones",
            },
            {
                type: "text",
                text: "Una vez seco el fondo, comenzá a agregar colores por secciones: primero las áreas grandes (ropajes, mantos), luego las áreas intermedias (manos, rostro) y finalmente los pequeños detalles (ojos, flores, bordes dorados). Este orden te evita manchar áreas ya pintadas.",
            },
            {
                type: "tip",
                text: "Para los detalles dorados, usá pintura dorada metálica y un pincel del 0 o 1. Trabajá con el pincel casi seco — cargalo muy poco — para mayor precisión en los bordes.",
            },
            {
                type: "heading",
                text: "Paso 4: Sombreado y profundidad",
            },
            {
                type: "text",
                text: "Este es el secreto de los artesanos profesionales. Mezclá el color base de cada sección con una pequeña cantidad de marrón o negro para crear la versión oscura, y aplicala suavemente en los pliegues y zonas de sombra. Luego, con un pincel limpio y húmedo, difuminá el borde para lograr la transición suave. Esta técnica es lo que da vida y tridimensionalidad a la figura.",
            },
            {
                type: "heading",
                text: "Paso 5: Detalles finales y barniz",
            },
            {
                type: "text",
                text: "Con los colores secos, terminá con los detalles más finos: cejas, pestañas, brillo en los ojos, líneas de contorno. Una vez que estés conforme con el resultado, aplicá dos manos de barniz (mate para un acabado artesanal clásico, o satinado para un acabado más moderno) dejando secar bien entre capas. El barniz protege la figura de la humedad y el polvo.",
            },
            {
                type: "callout",
                text: "¿Querés empezar pero no tenés materiales? Nuestros Kits DIY incluyen una figura sin pintar, set completo de pinturas y pinceles. ¡Todo lo que necesitás en una caja!",
                link: "/catalogo?cat=kits",
                linkText: "Ver Kits DIY →",
            },
        ],
    },
    {
        id: 2,
        slug: "ideas-souvenirs-religiosos-comunion-2025",
        title: "5 ideas de souvenirs religiosos para comuniones en 2025",
        excerpt:
            "Las comuniones merecen un recuerdo especial. Descubrí las piezas de yeso más elegidas para regalar en San Miguel y zona norte del GBA.",
        category: "souvenirs",
        categoryLabel: "Ideas souvenirs religiosos",
        image: "/images/blog/souvenirs-comunion.jpg",
        date: "2025-02-03",
        author: "Arte en Yeso",
        readTime: "5 min",
        featured: false,
        content: [
            {
                type: "intro",
                text: "La Primera Comunión es uno de los momentos más especiales en la vida de un niño y su familia. Los souvenirs son el recuerdo tangible de ese día único. En San Miguel, cada año producimos cientos de piezas artesanales para este sacramento. Te contamos las 5 opciones más elegidas por las familias de la zona norte del GBA.",
            },
            {
                type: "heading",
                text: "1. El Cáliz con Hostia",
            },
            {
                type: "text",
                text: "El símbolo eucarístico por excelencia. Una figurita de yeso en forma de cáliz con la hostia consagrada encima, pintada en blanco y dorado. Se puede personalizar con el nombre del niño y la fecha grabados en la base. Es elegante, significativo y muy buscado. Pedido mínimo: 10 unidades.",
            },
            {
                type: "heading",
                text: "2. El Palomita de la Paz",
            },
            {
                type: "text",
                text: "Una paloma blanca de yeso de 8cm, símbolo del Espíritu Santo. Simple, pura y hermosa. Se puede presentar sobre una pequeña base de madera con el nombre y fecha grabados. Es una de las opciones más económicas sin perder elegancia. Muy elegida por familias que quieren un souvenir discreto y con sentido.",
            },
            {
                type: "heading",
                text: "3. El Ángel de la Guarda personalizado",
            },
            {
                type: "text",
                text: "Sin dudas el favorito de los últimos años. Un mini ángel guardián de 10cm que puede venir con el nombre del niño tallado en la base. Se pinta en blanco yeso o con detalles dorados. También existe la versión con el cabello pintado similar al del niño, que lo hace aún más especial. Es el souvenir más personalizable de nuestra colección.",
            },
            {
                type: "tip",
                text: "Consejo práctico: pedí los souvenirs con al menos 30 días de anticipación. Para comuniones con 50 o más invitados, recomendamos empezar los trámites 45 días antes para garantizar tiempo de personalización.",
            },
            {
                type: "heading",
                text: "4. La Cruz con Corona de Flores",
            },
            {
                type: "text",
                text: "Una pequeña cruz de yeso de 12cm decorada con una corona de rosas o margaritas en relieve. Pintada en blanco con detalles de color en las flores. Es ideal para comuniones con una estética floral o campestre. También funciona como elemento decorativo en el hogar mucho tiempo después del evento.",
            },
            {
                type: "heading",
                text: "5. El Set Cruz + Ángel",
            },
            {
                type: "text",
                text: "Para quienes quieren algo con más presencia, ofrecemos un set de dos piezas: una cruz pequeña y un ángel guardián, presentados juntos en una caja kraft con papel de seda. Tiene un aspecto de regalo premium sin serlo. Muy elegido para comuniones de mayor nivel de producción.",
            },
            {
                type: "callout",
                text: "¿Estás organizando una comunión? Consultanos sin cargo sobre cantidades, personalización y tiempos de entrega.",
                link: "/mayoristas",
                linkText: "Ver pedidos mayoristas →",
            },
        ],
    },
    {
        id: 3,
        slug: "decorar-hogar-con-figuras-de-yeso",
        title: "Cómo decorar tu hogar con figuras de yeso artesanal",
        excerpt:
            "El yeso vuelve con fuerza a la decoración moderna. Conocé cómo incorporar piezas artesanales de San Miguel en tu hogar con estilo.",
        category: "decoracion",
        categoryLabel: "Decoración artesanal en casa",
        image: "/images/blog/deco-hogar.jpg",
        date: "2025-02-20",
        author: "Arte en Yeso",
        readTime: "7 min",
        featured: false,
        content: [
            {
                type: "intro",
                text: "Las figuras de yeso artesanal están viviendo un renacimiento en la decoración de interiores argentina. Lejos de los estereotipos del pasado, hoy se las encuentra en hogares modernos, minimalistas y hasta nórdicos. La clave está en saber cómo integrarlas. Te contamos los mejores tips desde nuestro taller de San Miguel.",
            },
            {
                type: "heading",
                text: "El poder del blanco yeso en la decoración moderna",
            },
            {
                type: "text",
                text: "El color blanco yeso es uno de los neutros más versátiles que existen. No es el blanco frío de los plásticos, sino un blanco cálido con texturas y matices sutiles. Armoniza con cualquier paleta de colores, especialmente con los tonos tierra, arena, verde salvia y madera natural que dominan la decoración contemporánea argentina.",
            },
            {
                type: "heading",
                text: "¿Dónde ubicar las figuras en el hogar?",
            },
            {
                type: "list",
                items: [
                    "Entrada: una figura de ángel o virgen en la entrada del hogar genera una bienvenida con identidad",
                    "Repisa del living: agrupá 3 o 5 piezas de alturas diferentes para crear una composición visual",
                    "Dormitorio: una pequeña virgen o ángel en la mesita de luz crea un ambiente de calma y espiritualidad",
                    "Jardín o patio: las figuras de exterior (San Francisco, jardín de rosas) resisten bien en espacios abiertos cubiertos",
                    "Baño: un pequeño busto o figura decorativa sobre el vanitory puede transformar el espacio",
                ],
            },
            {
                type: "heading",
                text: "La regla del número impar",
            },
            {
                type: "text",
                text: "En decoración, los grupos de objetos en número impar (1, 3, 5) siempre lucen mejor visualmente que los pares. Si querés hacer una composición de figuras de yeso, trabajá con 3 o 5 piezas de diferentes alturas y tamaños. Combiná una figura alta (35-40cm), una mediana (20-25cm) y una pequeña (10-15cm). El resultado es dinámico y profesional.",
            },
            {
                type: "tip",
                text: "Truco decorador: combiná figuras de yeso blancas con elementos de madera natural (bandeja, base, planta) y una vela en tono neutro. Esta tríada crea un vignette (composición decorativa) de alto impacto en cualquier superficie.",
            },
            {
                type: "heading",
                text: "¿Figuras pintadas o en yeso natural?",
            },
            {
                type: "text",
                text: "Las figuras en yeso natural (sin pintar o con acabado mate blanco) funcionan muy bien en interiores modernos y minimalistas. Las pintadas dan un toque más tradicional y artesanal. Para espacios étnicos o boho, el mix de ambas puede resultar muy interesante.",
            },
            {
                type: "callout",
                text: "Encontrá ángeles decorativos, vírgenes y figuras de hogar en nuestro catálogo. Hacemos envíos a toda la zona norte del GBA.",
                link: "/catalogo?cat=decoracion",
                linkText: "Ver decoración →",
            },
        ],
    },
    {
        id: 4,
        slug: "souvenirs-cumpleanos-15-yeso-pintado",
        title: "Souvenirs únicos para cumpleaños de 15 con yeso pintado",
        excerpt:
            "Los quince años se festejan con detalles que quedan para siempre. Descubrí las opciones personalizables en yeso artesanal para este gran momento.",
        category: "souvenirs",
        categoryLabel: "Tendencias souvenirs para cumpleaños",
        image: "/images/blog/cumple-15.jpg",
        date: "2025-03-01",
        author: "Arte en Yeso",
        readTime: "5 min",
        featured: false,
        content: [
            {
                type: "intro",
                text: "Los 15 años son una fiesta que se planifica con meses de anticipación. Cada detalle importa: el vestido, la decoración, los invitados, y por supuesto los souvenirs. En los últimos años, los souvenirs de yeso pintado a mano regresaron con fuerza a las quinceañeras del GBA. Te contamos por qué.",
            },
            {
                type: "heading",
                text: "¿Por qué elegir yeso para los 15?",
            },
            {
                type: "list",
                items: [
                    "Es artesanal y único: a diferencia de los souvenirs industriales, el yeso pintado a mano tiene variaciones naturales que lo hacen especial",
                    "Se puede personalizar completamente: nombre, fecha, colores de la fiesta, tema de la quinceañera",
                    "Tiene durabilidad: un souvenir de yeso bien terminado dura décadas si se cuida",
                    "Precio accesible: permitiendo un souvenir con aspecto premium a precio razonable",
                    "Es local: producido en San Miguel, apoya la economía regional",
                ],
            },
            {
                type: "heading",
                text: "Las figuras más elegidas para quinceañeras",
            },
            {
                type: "text",
                text: "La silueta femenina en vestido de fiesta es la más pedida. Se trata de una figura de 8-10cm que representa a una quinceañera con el vestido del estilo elegido (princesa, sirena, corte A) pintado en los colores de la fiesta. La base siempre lleva el nombre y fecha. Es simple, elegante y muy significativa.",
            },
            {
                type: "text",
                text: "La segunda opción más popular es la mariposa, símbolo de transformación y el paso de niña a mujer. Una mariposa de yeso de 8cm con las alas pintadas en los colores temáticos de la fiesta, con el nombre encima. Perfecta para fiestas de 15 con temas románticos o de naturaleza.",
            },
            {
                type: "tip",
                text: "Tené en cuenta que para pedidos de más de 50 unidades personalizadas con colores específicos, el tiempo estándar de producción es de 15 días hábiles. Organizate con anticipación para evitar el estrés del último momento.",
            },
            {
                type: "heading",
                text: "Cómo presentarlos para que impacten",
            },
            {
                type: "text",
                text: "La presentación del souvenir es tan importante como el souvenir en sí. Les recomendamos a nuestros clientes una bolsa de organza o una cajita kraft con papel de seda, y una tarjeta personalizada con el nombre de la festejada. Esto eleva mucho el impacto visual en la mesa de souvenirs y complementa la estética de la fiesta.",
            },
            {
                type: "callout",
                text: "Consultanos para tu quinceañera. Hacemos entregas en San Miguel, Palermo, Bella Vista y toda la zona norte del GBA.",
                link: "/mayoristas",
                linkText: "Pedir cotización →",
            },
        ],
    },
    {
        id: 5,
        slug: "kits-diy-pintar-yeso-con-ninos",
        title: "Los mejores kits DIY para pintar con niños en casa",
        excerpt:
            "Una actividad creativa, educativa y artística para hacer en familia. Nuestros kits DIY incluyen todo lo que necesitás para una tarde de arte.",
        category: "kits",
        categoryLabel: "Cómo pintar figuras de yeso",
        image: "/images/blog/kit-ninos.jpg",
        date: "2025-03-10",
        author: "Arte en Yeso",
        readTime: "4 min",
        featured: false,
        content: [
            {
                type: "intro",
                text: "En una época en que las pantallas dominan el tiempo libre de los chicos, las actividades manuales ganan cada vez más valor. Pintar figuras de yeso en casa es una actividad que combina creatividad, concentración y orgullo por el resultado propio. Y lo mejor: lo pueden hacer juntos en familia.",
            },
            {
                type: "heading",
                text: "¿Por qué es bueno pintar con niños?",
            },
            {
                type: "list",
                items: [
                    "Desarrolla la motricidad fina: el control del pincel fortalece los músculos de la mano",
                    "Estimula la creatividad: no hay colores correctos e incorrectos — cada niño crea su versión única",
                    "Enseña paciencia: esperar que seque cada capa es una lección de proceso",
                    "Genera orgullo y autoestima: terminar una pieza y contemplar el resultado es poderoso para los chicos",
                    "Crea recuerdos familiares: una tarde de pintura juntos queda en la memoria",
                ],
            },
            {
                type: "heading",
                text: "¿Qué incluye nuestro Kit DIY Básico?",
            },
            {
                type: "text",
                text: "Nuestro Kit DIY Básico está pensado para niños desde 5 años en adelante con supervisión adulta, y desde los 8 años en forma más autónoma. Incluye: una figura de yeso sin pintar (a elección: ángel, virgen o palomita), 6 pinturas acrílicas de colores básicos en pequeños potes, 2 pinceles (uno plano y uno fino) y una pequeña guía de instrucciones con el paso a paso ilustrado.",
            },
            {
                type: "heading",
                text: "El Kit DIY Premium Navidad",
            },
            {
                type: "text",
                text: "Para Navidad ofrecemos un kit especial con el nacimiento completo: 7 figuritas sin pintar (María, José, Niño Jesús, los Reyes Magos y un ángel), pinturas acrílicas ampliadas (12 colores), 3 pinceles y guía de colores sugeridos. Es ideal para pintar en familia durante las vacaciones o como regalo navideño. También es una opción para actividades de jardín de infantes o colegios.",
            },
            {
                type: "tip",
                text: "Sugerencia para el aula: los kits DIY son perfectos para talleres de plástica en colegios primarios. Contactanos para cotizaciones de colegios o grupos — tenemos precios especiales para instituciones educativas.",
            },
            {
                type: "callout",
                text: "Conseguí tu Kit DIY en nuestro catálogo. También podés consultarnos por packs personalizados para cumpleaños infantiles, donde cada nene pinta su propia figura.",
                link: "/catalogo?cat=kits",
                linkText: "Ver Kits DIY →",
            },
        ],
    },
    {
        id: 6,
        slug: "figuras-yeso-recuerdos-casamiento",
        title: "Figuras de yeso como recuerdos de casamiento — ideas y tips",
        excerpt:
            "Los casamientos son una oportunidad perfecta para regalar algo único y artesanal. Te mostramos las piezas más elegidas de nuestro catálogo para bodas.",
        category: "souvenirs",
        categoryLabel: "Tendencias souvenirs para cumpleaños",
        image: "/images/blog/recuerdos-casamiento.jpg",
        date: "2025-03-18",
        author: "Arte en Yeso",
        readTime: "5 min",
        featured: false,
        content: [
            {
                type: "intro",
                text: "Los souvenirs de casamiento son uno de los detalles que más se discuten en la planificación de la boda. ¿Algo útil? ¿Algo estético? ¿Algo personalizado? Las figuras de yeso artesanal logran combinar los tres atributos en una sola pieza. Te contamos las opciones más elegidas por las parejas que nos contactan desde el GBA.",
            },
            {
                type: "heading",
                text: "¿Por qué yeso artesanal para una boda?",
            },
            {
                type: "text",
                text: "La tendencia en casamientos argentinos viene virando hacia lo artesanal, lo local y lo exclusivo. Una pareja que elige souvenirs de yeso pintados a mano está apostando por la originalidad y por apoyar a los artesanos de su comunidad. Además, el yeso blanco parece hecho para las bodas: elegante, neutro, atemporal.",
            },
            {
                type: "heading",
                text: "Los 3 souvenirs de boda más pedidos",
            },
            {
                type: "text",
                text: "El primero es la paloma de la paz con las dos iniciales de los novios grabadas en la base. Clásico, romántico y completamente personalizable. El segundo es la silueta de pareja: dos figuras estilizadas de novios en yeso blanco sobre una base común, con el nombre y fecha de la boda debajo. El tercero son las rosas o corazones de yeso: pequeñas piezas decorativas que los invitados se llevan como recuerdo del día.",
            },
            {
                type: "heading",
                text: "Consideraciones para bodas grandes",
            },
            {
                type: "list",
                items: [
                    "Para 100 invitados o más, pedí cotización con al menos 45 días de anticipación",
                    "Podés mezclar diferentes figuras para agregar variedad (ej. mitad palomas + mitad corazones)",
                    "La personalización con iniciales + fecha es la más elegida por sobre el nombre completo",
                    "Los colores más pedidos para bodas: blanco puro, blanco con dorado, o blanco con detalles en el color de la temática de la boda",
                    "Si el número de invitados supera los 200, te recomendamos coordinar una reunión previa para revisar muestras",
                ],
            },
            {
                type: "tip",
                text: "Tip de producción: para bodas de más de 150 invitados, la paloma de la paz es nuestra figura más rápida de producir. Si los tiempos son ajustados, esta es la opción que mejor se adapta a producción acelerada.",
            },
            {
                type: "callout",
                text: "Contactanos sin compromiso para cotizar los souvenirs de tu boda. Trabajamos con wedding planners de todo el GBA.",
                link: "/mayoristas",
                linkText: "Solicitar cotización →",
            },
        ],
    },
    {
        id: 7,
        slug: "decoracion-artesanal-hogar-argentino",
        title: "Tendencias en decoración artesanal para el hogar argentino",
        excerpt:
            "El arte local y la producción nacional toman protagonismo en la decoración del hogar en Argentina. Descubrí por qué el yeso artesanal está en tendencia.",
        category: "decoracion",
        categoryLabel: "Decoración artesanal en casa",
        image: "/images/blog/tendencias-deco.jpg",
        date: "2025-04-05",
        author: "Arte en Yeso",
        readTime: "6 min",
        featured: false,
        content: [
            {
                type: "intro",
                text: "En los últimos años, el diseño de interiores argentino viene dando un giro hacia lo local, lo artesanal y lo sostenible. Las grandes cadenas de decoración ya no monopolizan las repisas de los hogares del GBA. En su lugar, crecen emprendimientos como el nuestro que ofrecen piezas únicas, hechas a mano y con identidad regional.",
            },
            {
                type: "heading",
                text: "El regreso de la artesanía al hogar moderno",
            },
            {
                type: "text",
                text: "La pandemia aceleró un proceso que ya venía gestándose: el interés por el hogar como espacio de identidad. Las personas empezaron a prestar más atención a los objetos que los rodean, preguntándose quién los hizo, dónde, con qué materiales. Esta nueva conciencia impulsó el mercado de artesanías locales de manera exponencial, y el yeso artesanal se benefició enormemente de esta tendencia.",
            },
            {
                type: "heading",
                text: "¿Qué busca el argentino que decora en 2025?",
            },
            {
                type: "list",
                items: [
                    "Piezas únicas que no se vean iguales a las de todos",
                    "Producción nacional — cada vez más valorada frente a importados",
                    "Estética neutra y versátil que combine con distintos estilos",
                    "Precio accesible sin sacrificar calidad",
                    "Historia detrás del objeto — saber quién lo hizo y cómo",
                    "Posibilidad de personalización",
                ],
            },
            {
                type: "heading",
                text: "Estilos de decoración que adoptan el yeso",
            },
            {
                type: "text",
                text: "El estilo wabi-sabi (japonés, que celebra la imperfección y lo natural) es quizás el que mejor abraza al yeso artesanal: sus irregularidades y texturas son virtudes, no defectos. El estilo mediterráneo, tan de moda en Argentina con sus blancos, terras y maderas, también integra perfectamente las piezas blancas de yeso. Y el estilo boho-chic, con su mezcla ecléctica de texturas y objetos de distintas épocas, le da el lugar perfecto a una virgen o un ángel artesanal.",
            },
            {
                type: "heading",
                text: "San Miguel como polo artesanal del GBA",
            },
            {
                type: "text",
                text: "El partido de San Miguel tiene una tradición artesanal que muchos desconocen. Desde talleres de cerámica hasta producción de yeso, pasando por tejidos y madera, la zona norte del GBA alberga a cientos de artesanos que trabajan para todo el país. En Arte en Yeso San Miguel somos parte de esa trama productiva local, y nos enorgullece poder ofrecer nuestro trabajo a clientes de toda la región.",
            },
            {
                type: "callout",
                text: "Explorá nuestra colección de decoración artesanal en yeso para el hogar. Piezas únicas, hechas a mano en San Miguel.",
                link: "/catalogo?cat=decoracion",
                linkText: "Ver decoración →",
            },
        ],
    },
];

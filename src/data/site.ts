export const wines = [
  {
    id: "404-crianza",
    kind: "Tinto",
    vintage: "2023",
    title: "404 Crianza",
    price: "18 EUR",
    priceValue: 18,
    cycle: "Pago único",
    image: "images/products/wine-404-crianza.svg",
    imageAlt: "Botella 404 Crianza de WineNotFound",
    description:
      "Tempranillo con fruta negra, madera fina y final mineral. El vino que todos buscan después del primer sorbo.",
    ageing: "12 meses",
    bottles: "2.700",
    type: "red",
    tone: "burgundy",
    label: "404",
  },
  {
    id: "null-reserva",
    kind: "Reserva",
    vintage: "2021",
    title: "Null Reserva",
    price: "32 EUR",
    priceValue: 32,
    cycle: "Pago único",
    image: "images/products/wine-null-reserva.svg",
    imageAlt: "Botella Null Reserva de WineNotFound",
    description:
      "Concentrado, profundo y sobrio. Ciruela madura, cacao, hoja de tabaco y una acidez que limpia el paladar.",
    ageing: "18 meses",
    bottles: "980",
    type: "red special",
    tone: "ink",
    label: "NULL",
  },
  {
    id: "cache-miss",
    kind: "Blanco",
    vintage: "2024",
    title: "Cache Miss",
    price: "16 EUR",
    priceValue: 16,
    cycle: "Pago único",
    image: "images/products/wine-cache-miss.svg",
    imageAlt: "Botella Cache Miss de WineNotFound",
    description:
      "Viura y albillo con piel de cítrico, flor seca y salinidad. Fermentado en barrica usada para ganar textura.",
    ageing: "6 meses",
    bottles: "1.450",
    type: "white",
    tone: "amber",
    label: "CACHE",
  },
  {
    id: "fork-rose",
    kind: "Rosado",
    vintage: "2024",
    title: "Fork Rosé",
    price: "15 EUR",
    priceValue: 15,
    cycle: "Pago único",
    image: "images/products/wine-fork-rose.svg",
    imageAlt: "Botella Fork Rosé de WineNotFound",
    description:
      "Garnacha y tempranillo con fruta roja crujiente, flor fresca y un punto salino para aperitivos largos.",
    ageing: "3 meses",
    bottles: "1.200",
    type: "special",
    tone: "burgundy",
    label: "FORK",
  },
  {
    id: "stack-trace",
    kind: "Blanco de parcela",
    vintage: "2023",
    title: "Stack Trace",
    price: "24 EUR",
    priceValue: 24,
    cycle: "Pago único",
    image: "images/products/wine-stack-trace.svg",
    imageAlt: "Botella Stack Trace de WineNotFound",
    description:
      "Viura de zona alta con pera, piel de limón y una crianza discreta que aporta volumen sin tapar la fruta.",
    ageing: "9 meses",
    bottles: "860",
    type: "white special",
    tone: "amber",
    label: "TRACE",
  },
  {
    id: "root-access",
    kind: "Tinto de guarda",
    vintage: "2020",
    title: "Root Access",
    price: "42 EUR",
    priceValue: 42,
    cycle: "Pago único",
    image: "images/products/wine-root-access.svg",
    imageAlt: "Botella Root Access de WineNotFound",
    description:
      "Tempranillo y graciano con ciruela negra, especia fina y tanino pulido para guardar o abrir en comidas especiales.",
    ageing: "20 meses",
    bottles: "640",
    type: "red special",
    tone: "ink",
    label: "ROOT",
  },
  {
    id: "syntax-blanc",
    kind: "Macabeo",
    vintage: "2024",
    title: "Syntax Blanc",
    price: "14 EUR",
    priceValue: 14,
    cycle: "Pago único",
    image: "images/products/wine-syntax-blanc.svg",
    imageAlt: "Botella Syntax Blanc de WineNotFound",
    description:
      "Blanco directo y aromático, con fruta de hueso, hinojo y final limpio para maridar con verduras, pescado y quesos suaves.",
    ageing: "4 meses",
    bottles: "1.080",
    type: "white",
    tone: "amber",
    label: "SYNTAX",
  },
] as const;

export const experiences = [
  {
    number: "01",
    title: "Cata de añadas",
    description:
      "Experiencia pensada para entender cómo cambia un vino con el paso del tiempo. Se prueban varias añadas de una misma referencia y se comparan aromas, textura, evolución en botella y capacidad de guarda.",
    duration: "90 min",
    availability: "Lunes, martes, jueves, viernes, sábados y domingos",
    bestFor: "Personas que quieren aprender a catar con calma.",
    includes: ["4 vinos", "Ficha de cata", "Explicación de añada y crianza"],
  },
  {
    number: "02",
    title: "Maridaje 404",
    description:
      "Sesión gastronómica donde cada vino se acompaña con un bocado diseñado para potenciar su perfil. Se explica por qué funciona cada combinación y cómo aplicar esas ideas en casa.",
    duration: "2 h",
    availability: "Lunes, martes, jueves, viernes, sábados y domingos",
    bestFor: "Grupos que quieren una experiencia más social.",
    includes: ["3 vinos", "4 bocados", "Guía de maridaje"],
  },
  {
    number: "03",
    title: "Visita técnica",
    description:
      "Recorrido detallado por el proceso de elaboración: entrada de uva, depósitos, fermentación, crianza en barrica y control de temperatura. Termina con una cata comentada en sala.",
    duration: "75 min",
    availability: "Grupos reducidos",
    bestFor: "Estudiantes, profesionales o personas muy curiosas.",
    includes: ["Recorrido por bodega", "Sala de barricas", "Cata de 3 vinos"],
  },
  {
    number: "04",
    title: "Restaurante de bodega",
    description:
      "Comida en el restaurante de WineNotFound con menú de temporada. Cada plato se sirve con una referencia de la bodega y una explicación sencilla del maridaje.",
    duration: "2 h 15 min",
    availability: "Lunes, martes, jueves, viernes, sábados y domingos",
    bestFor: "Parejas, celebraciones pequeñas y comidas de empresa.",
    includes: ["Menú degustación", "Maridaje incluido", "Mesa con reserva previa"],
  },
  {
    number: "05",
    title: "Paseo por los viñedos",
    description:
      "Recorrido tranquilo entre parcelas para conocer suelos, orientación, poda y el trabajo de campo antes de entrar en bodega.",
    duration: "60 min",
    availability: "Lunes, martes, jueves, viernes, sábados y domingos",
    bestFor: "Visitantes que quieren empezar la experiencia en el origen de la uva.",
    includes: ["Paseo guiado", "Explicación de viñedo", "Copa final en bodega"],
  },
] as const;

export const serviceCards = [
  {
    title: "Vinos de partida limitada",
    text:
      "Referencias numeradas elaboradas en volúmenes pequeños. Cada botella indica añada, crianza, perfil de sabor y recomendación de servicio.",
    tag: "Producto",
    href: "tienda/",
    benefits: ["Producción controlada", "Botellas numeradas", "Fichas de cata claras"],
  },
  {
    title: "Catas y visitas",
    text:
      "Experiencias guiadas para conocer el viñedo, la sala de depósitos, la nave de barricas y la manera correcta de catar cada referencia.",
    tag: "Servicio",
    href: "reservar/",
    benefits: ["Lenguaje adaptado al grupo", "Cata comentada", "Bonos regalo disponibles"],
  },
  {
    title: "Restaurante de bodega",
    text:
      "Comida con menú de temporada y maridaje WineNotFound. La reserva permite elegir turno, número de adultos y niños.",
    tag: "Restaurante",
    href: "reservar/",
    benefits: ["Turno de comida", "Menú con producto local", "Maridaje explicado"],
  },
  {
    title: "Suscripción privada",
    text:
      "The Missing Bottle List es el club para recibir selecciones periódicas, preventas y contenido exclusivo de la bodega.",
    tag: "Club",
    href: "tienda/#suscripcion",
    benefits: ["Acceso anticipado", "Cajas seleccionadas", "Descuentos en experiencias"],
  },
] as const;

export const shopItems = [
  {
    id: "pack-debug",
    title: "Pack Debug",
    price: "49 EUR",
    priceValue: 49,
    cycle: "Pago único",
    image: "images/products/pack-debug.svg",
    imageAlt: "Pack Debug con dos botellas y ficha de cata",
    text: "Dos botellas 404 Crianza y una ficha de cata para iniciarse en la bodega.",
    benefits: ["2 botellas", "Ficha de cata", "Ideal para regalo"],
  },
  {
    id: "vertical-null",
    title: "Vertical Null",
    price: "120 EUR",
    priceValue: 120,
    cycle: "Pago único",
    image: "images/products/vertical-null.svg",
    imageAlt: "Vertical Null con tres añadas de reserva",
    text: "Selección de tres añadas de reserva para comparar evolución, barrica y guarda.",
    benefits: ["3 añadas", "Notas de guarda", "Caja numerada"],
  },
  {
    id: "entrada-maridaje",
    title: "Entrada Maridaje",
    price: "35 EUR",
    priceValue: 35,
    cycle: "Pago único",
    image: "images/products/entrada-maridaje.svg",
    imageAlt: "Entrada de maridaje con copa y mesa de bodega",
    text: "Reserva individual para una sesión de maridaje 404 en grupo reducido.",
    benefits: ["3 vinos", "4 bocados", "Turno guiado"],
  },
  {
    id: "suscripcion-missing-bottle",
    title: "Suscripción Missing Bottle",
    price: "Desde 19 EUR/mes",
    priceValue: 19,
    cycle: "Mensual",
    image: "images/products/suscripcion-missing-bottle.svg",
    imageAlt: "Caja mensual de suscripción Missing Bottle",
    text: "Alta mensual al club privado con selección de vinos, preventas y ventajas en experiencias.",
    benefits: ["Acceso anticipado", "Caja de temporada", "Prioridad de reserva"],
  },
] as const;

export const subscriptionPlans = [
  {
    id: "lista-inicial",
    title: "Lista Inicial",
    price: "19 EUR/mes",
    priceValue: 19,
    cycle: "Mensual",
    image: "images/gallery-press.png",
    imageAlt: "Material de prensa y club privado WineNotFound",
    text:
      "Plan de entrada para recibir contenido de cata, preventas y prioridad cuando se abren nuevas añadas.",
    benefits: ["Newsletter de bodega", "Preventa 48 h antes", "5% en experiencias"],
  },
  {
    id: "caja-debug",
    title: "Caja Debug",
    price: "39 EUR/mes",
    priceValue: 39,
    cycle: "Mensual",
    image: "images/gallery-subscription.png",
    imageAlt: "Caja de temporada con botellas y notas de cata",
    text:
      "Selección periódica con botellas de temporada, fichas de cata y acceso a sesiones online del equipo.",
    benefits: ["2 botellas por envío", "Fichas impresas", "10% en catas y tienda"],
  },
  {
    id: "reserva-404",
    title: "Reserva 404",
    price: "69 EUR/mes",
    priceValue: 69,
    cycle: "Mensual",
    image: "images/gallery-harvest.png",
    imageAlt: "Selección manual de uva para botellas limitadas",
    text:
      "Suscripción completa con referencias limitadas, cupo prioritario para restaurante y eventos privados.",
    benefits: ["Botellas limitadas", "Mesa prioritaria", "Invitación a catas verticales"],
  },
] as const;

export const faqs = [
  {
    question: "¿Se puede comprar online?",
    answer:
      "Sí. La tienda funciona como solicitud de pedido: el cliente selecciona un pack y recibe confirmación de disponibilidad antes de pagar.",
  },
  {
    question: "¿Cómo reservo una comida?",
    answer:
      "Desde la página Reservar puedes elegir adultos, niños, fecha y turno de comida. Después la bodega confirma disponibilidad.",
  },
  {
    question: "¿Las catas son para principiantes?",
    answer:
      "Sí. Adaptamos el lenguaje al grupo, desde una primera toma de contacto hasta una visita técnica.",
  },
  {
    question: "¿Qué diferencia hay entre cata, visita y maridaje?",
    answer:
      "La cata se centra en los vinos, la visita recorre la bodega y el maridaje combina vinos con bocados o platos seleccionados.",
  },
  {
    question: "¿Hacéis envíos fuera de España?",
    answer:
      "Trabajamos envíos nacionales y revisamos los internacionales caso por caso según normativa y transporte.",
  },
  {
    question: "¿Puedo regalar una experiencia?",
    answer:
      "Sí. Preparamos bonos personalizados con fecha abierta durante seis meses desde la compra.",
  },
  {
    question: "¿Qué incluye una visita técnica?",
    answer:
      "Incluye recorrido por sala de depósitos, nave de barricas, archivo de botellas y cata comentada de tres referencias.",
  },
  {
    question: "¿Qué incluye la suscripción?",
    answer:
      "Depende del plan, pero puede incluir preventas, cajas de vino, fichas de cata, descuentos y prioridad para reservar eventos.",
  },
  {
    question: "¿Puedo cancelar la suscripción?",
    answer:
      "Sí. Al ser una web ficticia, se plantea como una suscripción flexible que se puede pausar o cancelar antes del siguiente ciclo.",
  },
  {
    question: "¿Hay opciones para empresas?",
    answer:
      "Sí. Se pueden preparar catas privadas, comidas de equipo, regalos corporativos y packs personalizados.",
  },
  {
    question: "¿El restaurante admite niños?",
    answer:
      "Sí. El formulario permite indicar niños hasta 12 años para adaptar el espacio y el menú.",
  },
  {
    question: "¿Cuánto tarda la respuesta a una consulta?",
    answer:
      "Respondemos normalmente en menos de 24 horas laborables a través del email indicado en el formulario.",
  },
] as const;

export const blogPosts = [
  {
    date: "12 mayo 2026",
    category: "Guía",
    readTime: "4 min",
    image: "images/gallery-tasting.png",
    title: "Cómo leer una etiqueta sin perderse",
    text: "Una guía breve para entender añada, crianza, parcela y temperatura de servicio.",
    content: [
      "Una etiqueta no debería ser un examen. En WineNotFound la usamos para contar lo esencial: de dónde viene el vino, cómo se ha criado y qué puede esperar quien lo abre.",
      "La añada habla del clima de ese año; la crianza explica el tiempo de reposo y el tipo de recipiente; la temperatura de servicio ayuda a que el vino no parezca más pesado o más plano de lo que es.",
    ],
  },
  {
    date: "28 mayo 2026",
    category: "Bodega",
    readTime: "5 min",
    image: "images/hero-cellar.jpg",
    title: "Barrica usada, vino más preciso",
    text: "Por qué elegimos madera discreta para proteger la fruta y la identidad del viñedo.",
    content: [
      "La barrica no tiene que tapar el vino. Cuando usamos madera de varios vinos anteriores, buscamos textura y estabilidad sin convertir cada copa en una nota de vainilla.",
      "El resultado son tintos con más profundidad y blancos con más volumen, pero siempre con el origen por delante.",
    ],
  },
  {
    date: "9 junio 2026",
    category: "Restaurante",
    readTime: "3 min",
    image: "images/gallery-restaurant.png",
    title: "Por qué un maridaje no es solo juntar vino y comida",
    text: "El restaurante trabaja cada plato desde acidez, textura, grasa y temperatura.",
    content: [
      "Un buen maridaje no busca impresionar con palabras difíciles. Busca que el plato y el vino se ayuden: que la acidez limpie, que la fruta acompañe y que la textura no pelee.",
      "Por eso cada menú cambia con la temporada y se explica en mesa de manera sencilla.",
    ],
  },
  {
    date: "22 junio 2026",
    category: "Viñedo",
    readTime: "4 min",
    image: "images/gallery-vineyard.png",
    title: "Vendimia nocturna y selección manual",
    text: "La uva llega más fresca, se oxida menos y permite decidir mejor en bodega.",
    content: [
      "Vendimiar de noche reduce la temperatura de entrada y protege aromas delicados. Después, la selección manual separa lo que puede formar parte de una partida pequeña.",
      "No se trata de hacerlo más lento porque sí, sino de decidir con menos ruido y más precisión.",
    ],
  },
  {
    date: "5 julio 2026",
    category: "Club",
    readTime: "4 min",
    image: "images/gallery-subscription.png",
    title: "Qué recibe un socio de The Missing Bottle List",
    text: "Preventas, cajas seleccionadas, notas de cata y prioridad para reservar experiencias.",
    content: [
      "La suscripción nace para quienes quieren seguir la bodega más allá de una compra puntual. Cada selección llega con contexto: por qué esa botella, cuándo abrirla y con qué acompañarla.",
      "También permite acceder antes a microvinificaciones y reservar plaza en eventos con menos plazas.",
    ],
  },
] as const;

export const pressPublications = [
  {
    source: "Diario del Vino",
    date: "Abril 2026",
    title: "WineNotFound presenta su primera microvinificación blanca de parcela alta",
    text: "El medio destaca la apuesta por partidas pequeñas y comunicación clara para nuevos consumidores.",
  },
  {
    source: "Gastro Castilla",
    date: "Mayo 2026",
    title: "Una bodega ficticia con restaurante que entiende el maridaje como experiencia",
    text: "Artículo centrado en el menú de temporada, la sala de catas y el papel del equipo de sala.",
  },
  {
    source: "La Revista Local",
    date: "Mayo 2026",
    title: "Null Reserva 2021 recibe una mención por equilibrio entre guarda y frescura",
    text: "La publicación valora el uso contenido de barrica y la acidez del vino.",
  },
  {
    source: "Podcast Mesa y Copa",
    date: "Junio 2026",
    title: "Entrevista al equipo sobre trazabilidad, reservas online y club privado",
    text: "Conversación sobre cómo digitalizar una bodega sin perder cercanía.",
  },
  {
    source: "Agenda Enoturismo",
    date: "Junio 2026",
    title: "WineNotFound abre visitas técnicas para centros educativos",
    text: "La noticia presenta las visitas a depósitos, barricas y archivo de botellas.",
  },
  {
    source: "Newsletter Productores",
    date: "Julio 2026",
    title: "The Missing Bottle List, una suscripción para seguir añadas limitadas",
    text: "Publicación sobre el modelo de club, preventas y cajas seleccionadas.",
  },
] as const;

export const events = [
  {
    day: "06 JUN",
    title: "Cata de añadas 404",
    meta: "19:30 h · Bodega WineNotFound",
  },
  {
    day: "21 JUN",
    title: "Mercado de productores",
    meta: "11:00 h · Plaza del Vino",
  },
  {
    day: "04 JUL",
    title: "Maridaje de verano",
    meta: "20:00 h · Patio de barricas",
  },
  {
    day: "18 JUL",
    title: "Paseo por los viñedos",
    meta: "10:30 h · Finca WineNotFound",
  },
] as const;

export const galleryItems = [
  {
    type: "video",
    title: "Recorrido de bodega",
    text: "Vídeo reciente de WineNotFound para abrir la galería con material local.",
    src: "videos/gallery-whatsapp-20260503-01.mp4",
    poster: "images/gallery-whatsapp-20260503-01.jpeg",
    mime: "video/mp4",
    span: "large",
  },
  {
    type: "video",
    title: "Experiencia WineNotFound",
    text: "Segundo clip vertical con ambiente de bodega, visita y servicio de vino.",
    src: "videos/gallery-whatsapp-20260503-02.mp4",
    poster: "images/gallery-whatsapp-20260503-02.jpeg",
    mime: "video/mp4",
  },
  {
    type: "image",
    title: "Vendimia al amanecer",
    text: "Filas de viñedo y cajas de uva listas para entrar en bodega.",
    src: "images/gallery-whatsapp-20260503-01.jpeg",
  },
  {
    type: "image",
    title: "Mesa de maridaje",
    text: "Servicio completo de copas, platos y menú para una experiencia WineNotFound.",
    src: "images/gallery-whatsapp-20260503-02.jpeg",
  },
  {
    type: "image",
    title: "Ficha de cata guiada",
    text: "Copas numeradas, notas de cata y sesión dirigida en sala de barricas.",
    src: "images/gallery-whatsapp-20260503-03.jpeg",
  },
  {
    type: "image",
    title: "Selección manual de uva",
    text: "Trabajo de mesa para revisar racimos antes de cada partida limitada.",
    src: "images/gallery-whatsapp-20260503-04.jpeg",
  },
  {
    type: "image",
    title: "Suscripción privada",
    text: "Caja de vinos con notas de cata, preventas exclusivas y oferta especial.",
    src: "images/gallery-whatsapp-20260503-05.jpeg",
  },
  {
    type: "image",
    title: "Nuevas cosechas",
    text: "Presentación de temporada con prensa, botellas y uva seleccionada.",
    src: "images/gallery-whatsapp-20260503-06.jpeg",
  },
] as const;

export const values = [
  {
    number: "01",
    title: "Honestidad",
    text: "Explicamos cada vino sin tecnicismos innecesarios y sin prometer lo que no somos.",
  },
  {
    number: "02",
    title: "Origen",
    text: "Trabajamos con parcelas concretas, vendimia manual y decisiones de bodega medidas.",
  },
  {
    number: "03",
    title: "Cercanía",
    text: "Cada visita, pedido o consulta recibe atención directa del equipo.",
  },
] as const;

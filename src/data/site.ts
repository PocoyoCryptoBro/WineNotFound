export const wines = [
  {
    kind: "Tinto",
    vintage: "2023",
    title: "404 Crianza",
    description:
      "Tempranillo con fruta negra, madera fina y final mineral. El vino que todos buscan después del primer sorbo.",
    ageing: "12 meses",
    bottles: "2.700",
    type: "red",
    tone: "burgundy",
    label: "404",
  },
  {
    kind: "Reserva",
    vintage: "2021",
    title: "Null Reserva",
    description:
      "Concentrado, profundo y sobrio. Ciruela madura, cacao, hoja de tabaco y una acidez que limpia el paladar.",
    ageing: "18 meses",
    bottles: "980",
    type: "red special",
    tone: "ink",
    label: "NULL",
  },
  {
    kind: "Blanco",
    vintage: "2024",
    title: "Cache Miss",
    description:
      "Viura y albillo con piel de cítrico, flor seca y salinidad. Fermentado en barrica usada para ganar textura.",
    ageing: "6 meses",
    bottles: "1.450",
    type: "white",
    tone: "amber",
    label: "CACHE",
  },
] as const;

export const experiences = [
  {
    number: "01",
    title: "Cata de añadas",
    description:
      "Experiencia pensada para entender cómo cambia un vino con el paso del tiempo. Se prueban varias añadas de una misma referencia y se comparan aromas, textura, evolución en botella y capacidad de guarda.",
    duration: "90 min",
    availability: "Miércoles y viernes",
    bestFor: "Personas que quieren aprender a catar con calma.",
    includes: ["4 vinos", "Ficha de cata", "Explicación de añada y crianza"],
  },
  {
    number: "02",
    title: "Maridaje 404",
    description:
      "Sesión gastronómica donde cada vino se acompaña con un bocado diseñado para potenciar su perfil. Se explica por qué funciona cada combinación y cómo aplicar esas ideas en casa.",
    duration: "2 h",
    availability: "Sábados",
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
      "Comida o cena en el restaurante de WineNotFound con menú de temporada. Cada plato se sirve con una referencia de la bodega y una explicación sencilla del maridaje.",
    duration: "2 h 15 min",
    availability: "Viernes noche y domingos",
    bestFor: "Parejas, celebraciones pequeñas y comidas de empresa.",
    includes: ["Menú degustación", "Maridaje incluido", "Mesa con reserva previa"],
  },
] as const;

export const serviceCards = [
  {
    title: "Vinos de partida limitada",
    text: "Referencias numeradas, elaboradas en volúmenes pequeños y con información clara sobre añada, crianza y perfil.",
    tag: "Producto",
  },
  {
    title: "Catas y visitas",
    text: "Experiencias guiadas en bodega para entender el viñedo, la crianza y el servicio de cada referencia.",
    tag: "Servicio",
  },
  {
    title: "Club privado",
    text: "Acceso prioritario a ediciones limitadas, catas verticales y reservas antes del lanzamiento público.",
    tag: "Comunidad",
  },
] as const;

export const purchaseSteps = [
  "Elige una referencia o pack en la tienda.",
  "Añádelo a tu solicitud de pedido o pide información comercial.",
  "Confirmamos disponibilidad, transporte y condiciones.",
  "Recibes la confirmación final antes de realizar cualquier pago.",
] as const;

export const shopItems = [
  {
    title: "Pack Debug",
    price: "49 EUR",
    text: "Dos botellas 404 Crianza y una ficha de cata para iniciarse en la bodega.",
  },
  {
    title: "Vertical Null",
    price: "120 EUR",
    text: "Selección de tres añadas de reserva para comparar evolución, barrica y guarda.",
  },
  {
    title: "Entrada Maridaje",
    price: "35 EUR",
    text: "Reserva individual para una sesión de maridaje 404 en grupo reducido.",
  },
] as const;

export const faqs = [
  {
    question: "¿Se puede comprar online?",
    answer:
      "Sí. La tienda funciona como solicitud de pedido: el cliente selecciona un pack y recibe confirmación de disponibilidad antes de pagar.",
  },
  {
    question: "¿Las catas son para principiantes?",
    answer:
      "Sí. Adaptamos el lenguaje al grupo, desde una primera toma de contacto hasta una visita técnica.",
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
    question: "¿Cuánto tarda la respuesta a una consulta?",
    answer:
      "Respondemos normalmente en menos de 24 horas laborables a través del email indicado en el formulario.",
  },
] as const;

export const blogPosts = [
  {
    date: "12 mayo 2026",
    title: "Cómo leer una etiqueta sin perderse",
    text: "Una guía breve para entender añada, crianza, parcela y temperatura de servicio.",
  },
  {
    date: "28 mayo 2026",
    title: "Barrica usada, vino más preciso",
    text: "Por qué elegimos madera discreta para proteger la fruta y la identidad del viñedo.",
  },
] as const;

export const pressNotes = [
  "WineNotFound presenta su primera microvinificación blanca de parcela alta.",
  "La bodega abre visitas técnicas para centros educativos y grupos profesionales.",
  "Null Reserva 2021 recibe una mención local por su equilibrio entre guarda y frescura.",
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

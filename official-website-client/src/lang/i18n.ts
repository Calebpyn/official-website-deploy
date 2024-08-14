import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//All translations
const resources = {
  en: {
    translation: {
      //Common
      contact: "Contact Us",
      go: "Go",

      //Navbar
      language: "Language",
      spanish: "Spanish",
      english: "English",
      services: "Services",
      book: "BOOK",
      consultation: "CONSULTATION",
      real_estate: "Real Estate",
      property_management: "Property Management",
      relocation: "Relocation",
      for_rent: "For Rent",
      for_sale: "For Sale",

      //Homepage
      //- Hero
      thinking: "Thinking",
      about_moving: "about moving",
      to_baja: "to Baja",
      //- Section1
      section_text:
        "We would be more than happy to work with you and for you to be another satisfied client.",
      //- Section 5
      tilte_section5: "Are you planning to move?",
      content_section5:
        "GV BAJA SERVICES is a company that has always gone that extra mile for our clients. Always trying to find the best way, the best answer and solution to whatever situation they find themselves in.  GV Baja Services has a very personal relationship with each client, you become a friend. We strive to show our clients through the quality of our service, how much we value them, hoping that at the end of the process with us, they pass on from being our friend to part of our family. The warmth of this Country embraces you through caring actions and we look out for our clients’ best interests which has been our top priority for over 10 years. Please take the time to read our wonderful reviews and feel free to contact us for further information on any of our services.",
      muchas_gracias: "Muchas Gracias,",
      sign: "Gabriela Victorica Hurtado: CEO GV Baja Services",
      lets_talk: "LET'S TALK",

      //- No need for Section 2

      //- Section3
      why_us: "WHY US?",
      experience: "Experience",
      experience_text:
        "With more than a decade of experience in Real Estate, Relocation, Event Management and Emergency Logistics. GV BAJA SERVICES is well positioned in the Expat community while serving both locals and newcomers.",
      providers: "Providers",
      providers_text:
        "GV BAJA SERVICES has an extensive list of top-notch service providers who are professionals in their given field.",
      bilingual: "Bilingual",
      bilingual_text:
        "GV BAJA SERVICES is 100% bilingual. We communicate thoroughly with our clients and understand their wants and needs.",
      culture: "Culture",
      culture_text:
        "Gabriela is well acquainted with both U.S. and Mexico, she lived in the Los Angeles area for many years before moving to the Baja area. She has the ability and experience to understand the needs and concerns of multiple cultures.",

      //Footer
      all_rights: "All rights reserved by GV Realty",

      //Relocation
      //- Hero
      relocation_hero_title: "Relocation Tours",

      //Section1
      coming_to_baja: "COMING TO BAJA?",
      the_relocation_tour: "The Relocation Tour",
      moving_to_baja: "Moving to Baja",
      text_segment_1:
        "can be a great option for you, but there are obviously many things to think about. I am sure you have many questions and personal concerns, this is normal. We offer",
      bold_text_1:
        "Online Relocation Consultations, Relocation Tours, and Relocation Assistance",
      text_segment_2:
        ", this all depends on what part of the Relocation process you find yourself in. Wherever you are in the Relocation process, we find solutions.",
      text_segment_2_1:
        "The relocation tour is 4 hours and allows you to enjoy a tailored experience of what to expect living in the area. Our service of being your International Concierge is to guide you, answer questions, be available, listen, and welcome you to our wonderful country.",
      text_segment_2_2:
        "You will encounter the sights, sounds, and feelings and envelope your senses in all that Baja has to offer. Our tours are specifically",
      bold_text_2: "tailored to your needs",
      text_segment_3: "so that you are the most important person.",
      text_segment_3_1: "We will see the illustrious",
      bold_text_3: "wineries",
      text_segment_4:
        ", the friendly markets, the local people and communities, the",
      bold_text_4: "beaches",
      text_segment_5: ", the mountains, the",
      bold_text_5: "fisherman port",
      text_segment_6: ", and mainly the",
      bold_text_6: "culture.",
      text_segment_7:
        "For us, this is not a job but a special need to serve our future clients who become friends. We appreciate you choosing us as your relocation specialist.",

      //-Section2
      make_the_move: "Make the move",
      to_baja_s2: "to Baja",
      text_s2: "Be as strategic as the decision itself.",
      //-Section3
      relocation_assistance: "Relocation Assistance",
      text_segment_s3_1: "Moving from one house to another ",
      bold_text_s3_1: "can be stressful ",
      text_segment_s3_2:
        "especially when you are moving from one country to another. ",
      bold_text_s3_2: "I know this first-hand because ",
      text_segment_s3_3:
        "I have been in the same position. GV Baja Services was created out of the necessity to provide ",
      bold_text_s3_3:
        "Expats and foreigners with the tools to live comfortably.",
      text_segment_s3_4: "We do this by communicating with ",
      bold_text_s3_4: "vendors, hosts, ",
      text_segment_s3_5: "and anybody ",
      bold_text_s3_5: "necessary for the relocation process. ",
      text_segment_s3_6: "We have provided our services since ",
      text_segment_s3_7:
        "and have a proven track record. GV Baja Services has built a solid company with a foundation that serving others is the greatest calling. ",
      bold_text_s3_7: "We strategically create a plan ",
      text_segment_s3_8:
        "so that your relocation and transition are smooth as possible.",
      text_segment_s3_9:
        "We don’t like surprises, therefore we plan accordingly and are ready for whatever comes our way!",
      check_our_reviews: "Check out our reviews.",
      bottom_info:
        "Quotes vary and depend on the service needed (moving, transportation, driving, packing, international border crossing, importation, etc).",
      //-Section4
      review_1:
        "Okay, folks, here’s the thing about Gabby: She’s the GREATEST. Full stop. From the very first contact my wife and I had with her - which was several months before our actual arrival in Ensenada - to the day we first walked with her into the rental house that she found for us, she was (and still is) right there with us every single step of the way. People talk about how professional and detail-oriented she is. They’re right. People talk about how honest, reliable, and hard-working she is. They’re right. People talk about how attentive, warm, and kind she is. They’re ABSOLUTELY right. Gabby has not only gone out of her way to help us with situations and circumstances that no one could have foreseen, she has done it with kindness, warmth, grace, and apparently endless patience. The website for her business, GV Baja Services, says, “Your Personal Baja Facilitator & Friend,” and she truly is. In the weeks since we arrived here, I realize that I honestly don’t know what we would have done without Gabby. My wife and I think she is great, and we are both very thankful to know her. She IS a friend. If you are even casually considering moving to the Ensenada area, contact Gabby. And I mean like right now. She’ll make you very glad you did.",
      review_2:
        "My wife and I (and our dog Clyde) just took a relocation tour with Gabby and were VERY glad we did. Everything we've read about her and her services is true: she's warm, friendly, professional, knowledgeable and very insightful. After gathering some information about what we were looking for Gabby knew exactly what areas to show us. You come away from her tour knowing you just made a new friend! We would HIGHLY recommend her tours!!",
      review_3:
        "We had a tour today and Gabrielle and she was great. Great information regarding what we were thinking. Showed us some homes that really caught our attention. Had a fun time with her. Will definitely stay in touch.",
      review_4:
        "Gabby is the ultimate professional. She helped us find a wonderful furnished home to rent in record time and well below our budget. She is fast, effective and efficient, oh and did I mention completely bilingual. She's astute and is so warm and welcoming I would highly recommend her services. She goes above and beyond the call of duty.​",
      //Property Management
      //-Section1
      for_homeowners: "For Homeowners",
      text_segment_pm_s1_1:
        "If you live abroad and wish to have your home in the Baja region, we take the utmost care to professionally manage your property. We will provide monthly detailed reports, bills, maintenance, updates, and immediate 24/7 attention to our guests.",
      text_segment_pm_s1_2:
        "We offer 3 different property management strategies which will maximize the property's intrinsic value.",
      //-Section2
      contact_us_title_1: "How can we best",
      contact_us_title_2: "serve you?",
      //-section3
      review_s3_1:
        "Highly recommended!!!! 5 out of 5 stars! Gabby is the best! It is wonderful having Gabby manage the beautiful home I rent. We have great communication. She is so personable, attentive, professional and capable. She removes any worries we had relocating. Do not hesitate contacting Gabby for your needs. She is a wonderful person to deal with. She is a Godsend! It is a pleasure giving her the highest rating possible!",
      review_s3_2_1:
        "My family and I stayed on a property hosted by Ms. Gabby, this long weekend stay was an amazing experience made possible by her personal attention and perfect hospitality. I am an ex-engineering manager for Marriott Hotels in San Diego, I know what good and bad hospitality looks like and this was above and beyond the best kind! If you are looking for a vacation or you have a place and are looking for a host to manage your property, you will be more than pleased with Ms. Gabby's professionalism. My family and I will look at her when vacationing in Baja again.",
      review_s3_2_2:
        "My family and I stayed at a property where Ms. Gabby is a hostess, that long weekend was a perfect one, made possible by her personalized attention and her perfect hospitality. I am a former engineer for Marriott Hotels in San Diego, I know the difference between good and bad hospitality and on this occasion my family and I received the best treatment. If you are a person looking for a vacation or if you have a property and are looking for a host to take charge, you will be more than satisfied with the professionalism of Ms. Gabby. My family and I will definitely seek her out when we travel in the area again.",

      //Property display
      //-Section1
      title_pd_s1: "GV Baja Realty Agents",
      content_pd_s1:
        "For further information or viewing appointments, you can call or send a message to our phone number or email address.",
      home_details: "HOME DETAILS",
      price: "PRICE",

      //For Sale
      //- Hero
      title_fs: "FEATURED LISTINGS",
      //Property Card
      per_month: "per month",
      //For Rent
      //- Hero
      title_fr: "HOMES FOR RENT & VACATION RENTALS",
      //- Section 2
      review_fs_s2_1:
        "First and foremost, honesty and integrity. Gabriela is the embodiment of both to deal with your real estate transactions. Afterwards, she is very knowledgeable with the housing market and possesses an engaging personality to deal with any issues along the way. Best person to support the sale of my house. Definitely, a jewel.",
      review_fs_s2_2:
        "You can rest assured that Gabby can take care of all of your Baja real estate needs. She is a hustler, intuitive and detail oriented, creating an effortless experience for her clients.She makes a habit of going above and beyond at every turn. Thank you Gabby for your professionalism and taking such excellent care of us!",
    },
  },
  es: {
    translation: {
      //Common
      contact: "Contáctanos",
      go: "Ir",
      //Navbar
      language: "Idioma",
      spanish: "Español",
      english: "Inglés",
      services: "Servicios",
      book: "AGENDAR",
      consultation: "CONSULTA",
      real_estate: "Bienes Raíces",
      property_management: "Administración de Propiedades",
      relocation: "Reubicación",
      for_rent: "En Renta",
      for_sale: "En Venta",

      //Homepage
      //- Hero
      thinking: "Piensas",
      about_moving: "en mudarte",
      to_baja: "a Baja",
      //- Section1
      section_text:
        "Estaremos más que felices de trabajar contigo y que seas otro cliente satisfecho.",
      //- Section5
      tilte_section5: "¿Estás planeando mudarte?",
      content_section5:
        "GV BAJA SERVICES es una empresa que siempre ha dado un paso más por nuestros clientes. Siempre buscando la mejor manera, la mejor respuesta y solución para cualquier situación en la que se encuentren. GV Baja Services tiene una relación muy personal con cada cliente, te conviertes en un amigo. Nos esforzamos por mostrar a nuestros clientes, a través de la calidad de nuestro servicio, cuánto los valoramos, con la esperanza de que al final del proceso con nosotros, pasen de ser nuestros amigos a parte de nuestra familia. La calidez de este país te abraza a través de acciones de cuidado, y velamos por los mejores intereses de nuestros clientes, lo cual ha sido nuestra máxima prioridad durante más de 10 años. Por favor, tómate el tiempo para leer nuestras maravillosas reseñas y no dudes en contactarnos para obtener más información sobre cualquiera de nuestros servicios.",
      muchas_gracias: "Muchas Gracias,",
      sign: "Gabriela Victorica Hurtado: CEO GV Baja Services",
      lets_talk: "HABLEMOS",

      //- No need for Section 2

      //- Section3
      why_us: "¿POR QUÉ NOSOTROS?",
      experience: "Experiencia",
      experience_text:
        "Con más de una década de experiencia en Bienes Raíces, Reubicación, Gestión de Eventos y Logística de Emergencia. GV BAJA SERVICES está bien posicionado en la comunidad de expatriados mientras sirve tanto a locales como a recién llegados.",
      providers: "Proveedores",
      providers_text:
        "GV BAJA SERVICES tiene una extensa lista de proveedores de servicios de primera clase que son profesionales en su campo.",
      bilingual: "Bilingüe",
      bilingual_text:
        "GV BAJA SERVICES es 100% bilingüe. Nos comunicamos a fondo con nuestros clientes y entendemos sus deseos y necesidades.",
      culture: "Cultura",
      culture_text:
        "Gabriela está bien familiarizada con ambos países, EE.UU. y México, vivió en el área de Los Ángeles durante muchos años antes de mudarse al área de Baja. Tiene la capacidad y experiencia para entender las necesidades y preocupaciones de múltiples culturas.",

      //Footer
      all_rights: "Derechos reservados por GV Realty",

      //Relocation
      //- Hero
      relocation_hero_title: "Tours de Reubicación",

      //Section1
      coming_to_baja: "¿VIENES A BAJA?",
      the_relocation_tour: "El Tour de Reubicación",
      moving_to_baja: "Mudarse a Baja",
      text_segment_1:
        "puede ser una gran opción para ti, pero obviamente hay muchas cosas en las que pensar. Estoy seguro de que tienes muchas preguntas y preocupaciones personales, esto es normal. Ofrecemos",
      bold_text_1:
        "Consultas de Reubicación en Línea, Tours de Reubicación y Asistencia de Reubicación",
      text_segment_2:
        ", todo depende de en qué parte del proceso de reubicación te encuentres. Donde sea que estés en el proceso de reubicación, encontramos soluciones.",
      text_segment_2_1:
        " El tour de reubicación dura 4 horas y te permite disfrutar de una experiencia personalizada de lo que puedes esperar viviendo en el área. Nuestro servicio de ser tu Conserje Internacional es guiarte, responder preguntas, estar disponible, escuchar y darte la bienvenida a nuestro maravilloso país.",
      text_segment_2_2:
        "Encontrarás los lugares, sonidos y sensaciones y envolverás tus sentidos en todo lo que Baja tiene para ofrecer. Nuestros tours están específicamente",
      bold_text_2: "adaptados a tus necesidades",
      text_segment_3: "para que seas la persona más importante.",
      text_segment_3_1: "Veremos las ilustres",
      bold_text_3: "bodegas",
      text_segment_4:
        ", los mercados amigables, la gente local y las comunidades, las",
      bold_text_4: "playas",
      text_segment_5: ", las montañas, el",
      bold_text_5: "puerto pesquero",
      text_segment_6: ", y principalmente la",
      bold_text_6: "cultura.",
      text_segment_7:
        "Para nosotros, esto no es un trabajo sino una necesidad especial de servir a nuestros futuros clientes que se convierten en amigos. Agradecemos que nos elijas como tu especialista en reubicación.",
      //-Section2
      make_the_move: "Trasládate",
      to_baja_s2: "a Baja",
      text_s2: "Sé tan estratégico como la decisión misma.",
      //-Section3
      relocation_assistance: "Asistencia de Reubicación",
      text_segment_s3_1: "Mudarse de una casa a otra ",
      bold_text_s3_1: "puede ser estresante ",
      text_segment_s3_2: "especialmente cuando te mudas de un país a otro. ",
      bold_text_s3_2: "Lo sé de primera mano porque ",
      text_segment_s3_3:
        "he estado en la misma posición. GV Baja Services se creó por la necesidad de proporcionar ",
      bold_text_s3_3:
        "a expatriados y extranjeros las herramientas para vivir cómodamente.",
      text_segment_s3_4: "Hacemos esto comunicándonos con ",
      bold_text_s3_4: "proveedores, anfitriones, ",
      text_segment_s3_5: "y cualquier persona ",
      bold_text_s3_5: "necesaria para el proceso de reubicación. ",
      text_segment_s3_6: "Hemos proporcionado nuestros servicios desde ",
      text_segment_s3_7:
        "y tenemos un historial comprobado. GV Baja Services ha construido una empresa sólida con la convicción de que servir a los demás es el mayor llamado. ",
      bold_text_s3_7: "Creamos un plan estratégico ",
      text_segment_s3_8:
        "para que tu reubicación y transición sean lo más suaves posible.",
      text_segment_s3_9:
        "No nos gustan las sorpresas, por lo tanto, planificamos en consecuencia y estamos preparados para lo que venga.",
      check_our_reviews: "Consulta nuestras reseñas.",
      bottom_info:
        "Las cotizaciones varían y dependen del servicio necesario (mudanza, transporte, conducción, embalaje, cruce de fronteras internacionales, importación, etc.).",
      //-Section4
      review_1:
        "Bueno, amigos, aquí está la cosa sobre Gabby: ella es la MEJOR. Punto. Desde el primer contacto que mi esposa y yo tuvimos con ella - que fue varios meses antes de nuestra llegada a Ensenada - hasta el día en que caminamos con ella por primera vez a la casa de alquiler que ella encontró para nosotros, ella estuvo (y todavía está) con nosotros en cada paso del camino. La gente habla de lo profesional y detallista que es. Tienen razón. La gente habla de lo honesta, confiable y trabajadora que es. Tienen razón. La gente habla de lo atenta, cálida y amable que es. Tienen ABSOLUTAMENTE razón. Gabby no solo se ha desviado de su camino para ayudarnos con situaciones y circunstancias que nadie podría haber previsto, lo ha hecho con amabilidad, calidez, gracia y, aparentemente, infinita paciencia. El sitio web de su negocio, GV Baja Services, dice: “Tu facilitadora y amiga personal en Baja”, y realmente lo es. En las semanas desde que llegamos aquí, me doy cuenta de que honestamente no sé qué habríamos hecho sin Gabby. Mi esposa y yo pensamos que es genial, y ambos estamos muy agradecidos de conocerla. Ella ES una amiga. Si estás siquiera considerando mudarte al área de Ensenada, contacta a Gabby. Y quiero decir como ahora mismo. Te hará muy feliz de haberlo hecho.",
      review_2:
        "Mi esposa y yo (y nuestro perro Clyde) acabamos de hacer un tour de reubicación con Gabby y estamos MUY contentos de haberlo hecho. Todo lo que hemos leído sobre ella y sus servicios es cierto: es cálida, amigable, profesional, conocedora y muy perspicaz. Después de recopilar información sobre lo que buscábamos, Gabby sabía exactamente qué áreas mostrarnos. ¡Terminas su tour sabiendo que acabas de hacer una nueva amiga! ¡Recomendaríamos ALTAMENTE sus tours!",
      review_3:
        "Hicimos un tour hoy con Gabrielle y ella fue genial. Nos dio excelente información sobre lo que estábamos pensando. Nos mostró algunas casas que realmente nos llamaron la atención. Pasamos un buen rato con ella. Definitivamente seguiremos en contacto.",
      review_4:
        "Gabby es la profesional definitiva. Nos ayudó a encontrar una casa amueblada maravillosa para alquilar en tiempo récord y muy por debajo de nuestro presupuesto. Es rápida, efectiva y eficiente, ah, y ¿mencioné que es completamente bilingüe? Es astuta y tan cálida y acogedora que recomendaría altamente sus servicios. Va más allá del deber.",
      //Property Management
      //-Section1
      for_homeowners: "Para Propietarios",
      text_segment_pm_s1_1:
        "Si vives en el extranjero y deseas tener tu hogar en la región de Baja, nos encargamos de gestionar tu propiedad de manera profesional con el mayor cuidado. Proporcionaremos informes detallados mensuales, facturas, mantenimiento, actualizaciones y atención inmediata 24/7 a nuestros huéspedes.",
      text_segment_pm_s1_2:
        "Ofrecemos 3 diferentes estrategias de gestión de propiedades que maximizarán el valor intrínseco de la propiedad.",

      //-Section2
      contact_us_title_1: "¿Cómo podemos",
      contact_us_title_2: "servirte mejor?",

      //-section3
      review_s3_1:
        "¡Altamente recomendada! ¡5 de 5 estrellas! ¡Gabby es la mejor! Es maravilloso tener a Gabby gestionando la hermosa casa que alquilo. Tenemos una excelente comunicación. Es muy amigable, atenta, profesional y capaz. Elimina cualquier preocupación que teníamos al reubicarnos. No dudes en contactar a Gabby para tus necesidades. Es una persona maravillosa con la cual tratar. ¡Es una bendición! ¡Es un placer darle la calificación más alta posible!",
      review_s3_2_1:
        "Mi familia y yo nos hospedamos en una propiedad administrada por la Sra. Gabby, y esta estancia de fin de semana largo fue una experiencia increíble gracias a su atención personal y su perfecta hospitalidad. Soy ex gerente de ingeniería de Marriott Hotels en San Diego, sé cómo es la buena y mala hospitalidad, ¡y esta fue, sin duda, la mejor! Si estás buscando unas vacaciones o tienes una propiedad y buscas a alguien que la gestione, estarás más que satisfecho con el profesionalismo de la Sra. Gabby. Mi familia y yo recurriremos a ella cuando volvamos de vacaciones a Baja.",
      review_s3_2_2:
        "Mi familia y yo nos hospedamos en una propiedad donde la Sra. Gabby es anfitriona. Ese fin de semana largo fue perfecto, gracias a su atención personalizada y su hospitalidad impecable. Soy ex ingeniero de Marriott Hotels en San Diego, conozco la diferencia entre buena y mala hospitalidad, y en esta ocasión mi familia y yo recibimos el mejor trato. Si estás buscando unas vacaciones o tienes una propiedad y buscas a alguien que se encargue, estarás más que satisfecho con el profesionalismo de la Sra. Gabby. Mi familia y yo definitivamente la buscaremos cuando volvamos a viajar por la zona.",
      //Property display
      //-Section1
      title_pd_s1: "Agentes de GV Baja Realty",
      content_pd_s1:
        "Para más información o para concertar una cita, puede llamar o enviar un mensaje a nuestro número de teléfono o dirección de correo electrónico.",
      home_details: "DETALLES DEL HOGAR",
      price: "PRECIO",

      //For Sale
      //- Hero
      title_fs: "PROPIEDADES DESTACADAS",
      //Property Card
      per_month: "al mes",
      //For Rent
      //- Hero
      title_fr: "CASAS EN RENTA Y ALQUILERES VACACIONALES",
      //- Section 2
      review_fs_s2_1:
        "Antes que nada, honestidad e integridad. Gabriela es la personificación de ambas cualidades para manejar sus transacciones inmobiliarias. Además, tiene un gran conocimiento del mercado de viviendas y posee una personalidad encantadora para resolver cualquier problema que surja en el camino. La mejor persona para apoyar la venta de mi casa. Definitivamente, una joya.",
      review_fs_s2_2:
        "Puede estar seguro de que Gabby puede encargarse de todas sus necesidades inmobiliarias en Baja. Es una persona trabajadora, intuitiva y orientada a los detalles, creando una experiencia sin esfuerzo para sus clientes. Hace un hábito de ir más allá en cada oportunidad. ¡Gracias, Gabby, por tu profesionalismo y por cuidarnos tan bien!",
    },
  },
};

//i18n Init
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

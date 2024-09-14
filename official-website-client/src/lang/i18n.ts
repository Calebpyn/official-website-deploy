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
      home: "Home",
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
      about_us: "About Us",

      //Homepage
      //- Hero
      thinking: "Making",
      about_moving: "Baja your Home",
      to_baja: "since 2007",
      //- Section1
      section_text:
        "We would be more than happy to work with you and for you to be another satisfied client.",
      //- Section 5
      tilte_section5: "Planning to move to Baja???",
      content_section5:
        "GV BAJA REALTY is a company that has always gone that extra mile for our clients. Always trying to find the best way, we strive to find the best answer and solution to challenging situations. GV Baja Realty has a very personal but professional relationship with each client. We strive to show our clients through the quality of our service, how much we value them. Mexico is a beautiful country that embraces you through caring actions and we look out for our clients best interests which has been our top priority for over 10 years. Please take the time to read our wonderful reviews and feel free to contact us for further information on any of our services.",
      muchas_gracias: "Muchas Gracias,",
      sign: "Gabriela & Justin McEntee",
      lets_talk: "LET'S TALK",

      //- No need for Section 2

      //- Section3
      why_us: "WHY US?",
      experience: "Experience",
      experience_text:
        "With more than a decade of experience in Real Estate, Relocation, Property Management and Airbnb hosting, GV BAJA REALTY is well positioned in both the Expat and Mexican community, serving both locals and newcomers year-round.",
      providers: "Providers",
      providers_text:
        "For over a decade GV BAJA REALTY has built an extensive list of top-notch service providers who are professionals in their given field, who along with GV, will collaborate to simplify your life in Baja.",
      bilingual: "Bilingual",
      bilingual_text:
        "GV BAJA REALTY is 100% bilingual. We communicate thoroughly with our clients and understand their wants and needs.",
      culture: "Culture",
      culture_text:
        "Gabriela is well acquainted with both the United States and Mexico, originally from Mexicali BC, she lived in the Los Angeles area for many years before moving once again to the Baja area. She has the ability and experience to understand the needs and concerns of both cultures.",

      //Footer
      all_rights: "All rights reserved by GV Realty",

      //Relocation
      //- Hero
      relocation_hero_title: "Relocation Tours",

      //Section1
      coming_to_baja: "Considering Baja????",
      the_relocation_tour: "The Relocation Tour",
      moving_to_baja: "",
      text_segment_1:
        "Mexico is a beautiful country and moving to Baja may be a great option for you. There are obviously many factors to consider and evaluate. We are sure you have many questions and personal concerns; this is normal. ",
      bold_text_1:
        "We offer online relocation consultations, relocation tours, and relocation assistance. ",
      text_segment_2:
        "Wherever you are in the relocation process, we listen, relate, and find solutions with you.",
      text_segment_2_1:
        "The relocation tour is 4 hours and allows you to enjoy a tailored experience of what to expect while living in the area. We will see the illustrious wineries, the friendly markets and communities, the beaches, the mountains, the port(possible cruise ships).",
      text_segment_2_2:
        "We will make sure to answer all your questions and concerns as well as provide you with many great tips, do’s and don’ts. Please note that all clients are treated with the utmost confidentiality and respect.",
      bold_text_2: "",
      text_segment_3: "",
      text_segment_3_1: "",
      bold_text_3: "",
      text_segment_4: "",
      bold_text_4: "",
      text_segment_5: "",
      bold_text_5: "",
      text_segment_6: "",
      bold_text_6: "",
      text_segment_7:
        "For us this is not a job but a special need to serve our future clients. We appreciate you choosing us for your relocation assistance.",

      //-Section2
      make_the_move: "MOVING TO BAJA?",
      to_baja_s2: "",
      text_s2: "Be as strategic as the decision itself.",
      //-Section3
      title_r_s3: "COMING TO BAJA?",
      relocation_assistance: "Relocation Assistance",
      text_segment_s3_1:
        "Moving from one house to another can be stressful especially when you are moving from a different country. We know this first-hand because we have been in the same position. GV Baja Realty was created out of the necessity to provide clients with a strategically created plan to make a smooth transition. We do this by communicating with trusted vendors and hosts. We have provided our services since 2007 and have a proven track record. GV Baja Realty has built a solid company with a foundation of serving others.",
      bold_text_s3_1: "",
      text_segment_s3_2: "",
      bold_text_s3_2: "",
      text_segment_s3_3: "",
      bold_text_s3_3: "",
      text_segment_s3_4: "",
      bold_text_s3_4: "",
      text_segment_s3_5: "",
      bold_text_s3_5: "",
      text_segment_s3_6: "",
      text_segment_s3_7: "",
      bold_text_s3_7: "",
      text_segment_s3_8: "",
      text_segment_s3_9:
        "As professionals we plan strategically and are ready for whatever comes our way!",
      check_our_reviews: "Check out our reviews.",
      bottom_info:
        "Quotes vary and depend on the services needed (moving, transportation, driving, packing, international border crossing, importation, etc).",
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
        "If you live abroad and wish to have your home in the Baja region, we take the utmost care to professionally manage your property. We will provide monthly income and expense statement reports as well as updates on maintenance.",
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

      //About us
      //  Secrtion 1
      content_p_1:
        "Buenos Dias, Buenas Tardes, Buenas Noches wherever you are in the world. We are Justin and Gabriela McEntee. We run and own GV Baja Realty. We want to welcome you to our page. We have created material that will help and assist you with Real Estate, Relocation, Property Management and Airbnb services. Our business is located in Ensenada and we are your typical family; it’s us, our kids, our friends and our pets. A note about us, we are very pet friendly because we are pet lovers. We enjoy being active, exercising, going to events, volunteering, traveling, laughing, and experiencing life which we are blessed to have.",
      content_p_2:
        "Our main objective is to answer your questions, assist you to find answers to your questions and to make the process of moving to Baja or visiting Baja, a memorable and exciting adventure. People move to Baja for different reasons. For many they are now calling Baja their home and enjoying the friendliness of the people, the vibrancy of the culture, and let’s not forget the tacos. So come visit us in Baja and we will make a smooth transition for your vacation, extended visit or a possible relocation which may be in your future.",
      content_p_3:
        "We are online creators and can be contacted through Facebook, Instagram, Tik-Tok, Google, and Youtube. Look for our name, GV BAJA REALTY.",

      //Property Management
      //  Section 4
      title_pm_s4_1:
        "Who are we and why should you choose GV Baja Realty for your Property Management needs?",
      content_pm_s4_1:
        "The owners of GV Baja Realty are Gabriela McEntee Victorica, and Justin McEntee. Both of our backgrounds are in sales, marketing, communication, and Real Estate. Gabriela is bi-lingual and has sold many homes, rented homes, and hosted homes in different neighborhoods and Campos in Ensenada. Justin is a licensed realtor from the states and has sold many homes in the U.S.",
      content_pm_s4_1_2:
        "We have been in this business for over a decade. We are honest, reliable, available, and ready to assist you.",
      title_pm_s4_2:
        "Why do we engage in helping Landlords and Tenants with their Property Management?",
      content_pm_s4_2:
        "We at GV Baja Realty love to see homeowners be able to provide housing to renters and to generate income in Baja.  We care about you, your property, and your tenant. And we do it all, so you can focus on the most important things in life.",
      title_pm_s4_3: "Who are Property Management Professionals?",
      content_pm_s4_3:
        "Property management companies are professionals who have the experience to help you get the most out of your real estate investment and to make the process as simple as possible",
      title_pm_s4_4:
        "Our Services included with finding a tenant and the contract enforcement",
      content_pm_s4_4:
        "Our services involve lease preparation, negotiation, signing and lease enforcement, reference check, background check (paid for by the owner), maintenance, translation of the contract, move in and move out.",
      title_pm_s4_5: "How we Market your property to find a potential renter",
      content_pm_s4_5:
        "We aggressively market your property through multiple channels and manage all tenant showings, ensuring maximum visibility and interest from potential tenants.",

      //Real estate info page
      //  Hero
      hero_title: "REAL ESTATE IN BAJA",

      //  Section 1
      content_re_s1:
        "Real Estate is a very particular process in searching for the right home, going through the closing process, and then finally purchasing and owning the home. We know that this purchase can bring more enjoyment, increase your income, provide the ability to own a second home and definitely give you more awesome experiences. If you have been thinking of selling your home or finding a home, then we can help you. We are excited to share our experience with you, go search for properties and make the necessary connections with the owner, builders, and other agents to find a qualified buyer.",

      title_re_s1: "There are two ways to purchase property in Baja:",

      content_re_s1_2:
        "Land Lease: you as the buyer are purchasing a home which sits on a land lease which is owned by the landowner. This option provides the opportunity to own a beautiful home for less. The land lease has a monthly or annual fee which is paid to the land owner. To purchase a home on a land lease, this agreement is between the seller and buyer, seller and land owner, and buyer and land owner. This type of transaction is different for those coming from the states, however here in Baja this is a very traditional type of transaction and purchase. A land lease can be notarized but this is not necessary.",

      content_re_s1_3:
        "Bank Trust: If a home is in Baja and within the Federal zone of 100km of the boundaries of Mexico or inside 50km of the coast of Mexico you will need a Bank Trust to purchase a home. As a foreigner, you can only purchase land or a home on land which is held by a Mexican Bank in a Bank Trust if within the 100km and 50m boundaries. This type of transaction is similar to the states, except a Notary is involved. To facilitate the process, you have the option to hire our real estate attorney to assist you in the real estate transaction. He is a trusted member of the community as well as a real estate and immigration attorney. If you request our attorney, he will assure that the necessary documents are created, signed, approved and that the property is free of liens.",

      //  Section 2
      content_re_s2_1:
        "As professionals we believe in transparency, open communication and finding solutions. Our network includes a real estate and immigration attorney, notary, and translators.",

      content_re_s2_2:
        "Our marketing continues to grow and evolve. Our relationships span from the United States to Mexicali. We have worked diligently to curate and manage our network. We will create, edit and post drone videos to the appropriate social platforms to highlight your home and the surrounding environment to prospective buyers. Also, we create/design reels, stories, posts and utilize Easy Broker and Google Business.Your home will be placed on multiple different social platforms and we will diligently work to sell your home, for the best price and closing terms.",

      content_re_s2_3:
        "We look forward to you contacting us and starting your real estate journey. Gracias",

      //Property Management
      //  Section 5
      title_pm_s5_1: "The top responsibilities of a Property Manager:",
      subtitle_pm_s5_1: "Finding and screening tenants",
      subtitle_pm_s5_2: "Handling leases",
      subtitle_pm_s5_3: "Managing complaints and emergencies",
      subtitle_pm_s5_4: "Dealing with move-ins and move outs.",

      //  Section 6
      title_pm_s6_1: "Option for our Services:",
      content_pm_s6_1:
        "We can oversee a property that is already being rented. In this situation we will communicate with a tenant and landlord. When repairs are necessary, we will facilitate and oversee the completion of said repair and provide documentation for the repairs.",
      content_pm_s6_2:
        "In the situation where the landlord is overseeing their own property, we can offer our bill pay service and additional services on a case by case basis.",
      title_pm_s6_2: "Pricing Structure:",
      content_pm_s6_3:
        "GV Baja Realty offers different pricing structures for each individual homeowner. It depends on how many units will be rented, what services are required by the landlord/homeowner and the duration of the lease. Please send us a message and then we can discuss further.",
      content_pm_s6_4:
        "Price, terms, offerings, availability subject to change. All information deemed reliable, tenant to verify all.",
    },
  },
  es: {
    translation: {
      //Common
      contact: "Contáctanos",
      go: "Ir",
      //Navbar
      home: "Inicio",
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
      about_us: "Sobre Nosotros",

      //Homepage
      //- Hero
      thinking: "Haciendo",
      about_moving: "de Baja tu Hogar",
      to_baja: "desde 2007",
      //- Section1
      section_text:
        "Estaremos más que felices de trabajar contigo y que seas otro cliente satisfecho.",
      //- Section5
      tilte_section5: "¿Planeas mudarte a Baja?",
      content_section5:
        "GV BAJA REALTY es una empresa que siempre ha ido más allá por nuestros clientes. Siempre buscando la mejor manera, nos esforzamos por encontrar la mejor respuesta y solución a situaciones desafiantes. GV Baja Realty mantiene una relación muy personal pero profesional con cada cliente. Nos esforzamos por mostrar a nuestros clientes, a través de la calidad de nuestro servicio, cuánto los valoramos. México es un país hermoso que te acoge con acciones solidarias y velamos por los mejores intereses de nuestros clientes, lo cual ha sido nuestra principal prioridad durante más de 10 años. Por favor, tómate el tiempo de leer nuestras maravillosas reseñas y no dudes en contactarnos para obtener más información sobre cualquiera de nuestros servicios.",
      muchas_gracias: "Muchas Gracias,",
      sign: "Gabriela & Justin McEntee",
      lets_talk: "HABLEMOS",

      //- No need for Section 2

      //- Section3
      why_us: "¿POR QUÉ NOSOTROS?",
      experience: "Experiencia",
      experience_text:
        "Con más de una década de experiencia en Bienes Raíces, Reubicación, Administración de Propiedades y alojamiento en Airbnb, GV BAJA REALTY está bien posicionado tanto en la comunidad expatriada como en la mexicana, sirviendo a locales y recién llegados durante todo el año.",
      providers: "Proveedores",
      providers_text:
        "Durante más de una década, GV BAJA REALTY ha creado una extensa lista de proveedores de servicios de primer nivel, profesionales en su campo, que junto con GV colaborarán para simplificar tu vida en Baja.",
      bilingual: "Bilingüe",
      bilingual_text:
        "GV BAJA REALTY es 100% bilingüe. Nos comunicamos de manera completa con nuestros clientes y entendemos sus deseos y necesidades.",
      culture: "Cultura",
      culture_text:
        "Gabriela está bien familiarizada con tanto Estados Unidos como México. Originaria de Mexicali, B.C., vivió muchos años en el área de Los Ángeles antes de mudarse nuevamente a la región de Baja. Tiene la capacidad y la experiencia para comprender las necesidades y preocupaciones de ambas culturas.",

      //Footer
      all_rights: "Derechos reservados por GV Realty",

      //Relocation
      //- Hero
      relocation_hero_title: "Tours de Reubicación",

      //Section1
      coming_to_baja: "¿Estás considerando Baja?",
      the_relocation_tour: "El Tour de Reubicación",
      moving_to_baja: "",
      text_segment_1:
        "México es un país hermoso y mudarse a Baja puede ser una excelente opción para ti. Hay muchos factores a considerar y evaluar. Estamos seguros de que tienes muchas preguntas y preocupaciones personales; esto es normal. ",
      bold_text_1:
        "Ofrecemos consultas de reubicación en línea, recorridos de reubicación y asistencia en la reubicación. ",
      text_segment_2:
        "Dondequiera que te encuentres en el proceso de reubicación, escuchamos, entendemos y encontramos soluciones contigo.",
      text_segment_2_1:
        "El recorrido de reubicación dura 4 horas y te permite disfrutar de una experiencia personalizada sobre lo que puedes esperar al vivir en la zona. Veremos las ilustres bodegas, los mercados y comunidades amigables, las playas, las montañas y el puerto (posibles barcos de crucero).",
      text_segment_2_2:
        "Nos aseguraremos de responder a todas tus preguntas y preocupaciones, así como de ofrecerte muchos consejos útiles, cosas que hacer y evitar. Ten en cuenta que todos los clientes son tratados con la máxima confidencialidad y respeto.",
      bold_text_2: "",
      text_segment_3: "",
      text_segment_3_1: "",
      bold_text_3: "",
      text_segment_4: "",
      bold_text_4: "",
      text_segment_5: "",
      bold_text_5: "",
      text_segment_6: "",
      bold_text_6: "",
      text_segment_7:
        "Para nosotros, esto no es un trabajo, sino una necesidad especial de servir a nuestros futuros clientes. Agradecemos que nos hayas elegido para tu asistencia en la reubicación.",

      //-Section2
      make_the_move: "¿TE MUDAS A BAJA?",
      to_baja_s2: "",
      text_s2: "Sé tan estratégico como la decisión misma.",
      //-Section3
      title_r_s3: "¿VIENES A BAJA?",
      relocation_assistance: "Asistencia de Reubicación",
      text_segment_s3_1:
        "Mudarse de una casa a otra puede ser estresante, especialmente cuando te mudas desde otro país. Sabemos esto de primera mano porque hemos estado en la misma situación. GV Baja Realty se creó por la necesidad de ofrecer a los clientes un plan estratégicamente elaborado para hacer una transición suave. Lo hacemos comunicándonos con proveedores y anfitriones de confianza. Hemos brindado nuestros servicios desde 2007 y tenemos un historial comprobado. GV Baja Realty ha construido una empresa sólida con una base de servir a los demás.",
      bold_text_s3_1: "",
      text_segment_s3_2: "",
      bold_text_s3_2: "",
      text_segment_s3_3: "",
      bold_text_s3_3: "",
      text_segment_s3_4: "",
      bold_text_s3_4: "",
      text_segment_s3_5: "",
      bold_text_s3_5: "",
      text_segment_s3_6: "",
      text_segment_s3_7: "",
      bold_text_s3_7: "",
      text_segment_s3_8: "",
      text_segment_s3_9:
        "Como profesionales, planeamos estratégicamente y estamos listos para lo que venga.",
      check_our_reviews: "Consulta nuestras reseñas.",
      bottom_info:
        "Las cotizaciones varían y dependen de los servicios requeridos (mudanza, transporte, conducción, embalaje, cruce internacional de fronteras, importación, etc.).",
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
        "Si vives en el extranjero y deseas tener tu casa en la región de Baja, nos encargamos de gestionar tu propiedad con el máximo cuidado y profesionalismo. Te proporcionaremos reportes mensuales de ingresos y gastos, así como actualizaciones sobre el mantenimiento.",
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

      //About us
      //  Section 1
      content_p_1:
        "Buenos días, buenas tardes, buenas noches dondequiera que estés en el mundo. Somos Justin y Gabriela McEntee. Administramos y somos dueños de GV Baja Realty. Queremos darte la bienvenida a nuestra página. Hemos creado material que te ayudará y asistirá con Bienes Raíces, Reubicación, Gestión de Propiedades y servicios de Airbnb. Nuestro negocio está ubicado en Ensenada y somos una familia típica; somos nosotros, nuestros hijos, nuestros amigos y nuestras mascotas. Un dato sobre nosotros, somos muy amigables con las mascotas porque somos amantes de los animales. Nos gusta estar activos, hacer ejercicio, asistir a eventos, ser voluntarios, viajar, reír y disfrutar de la vida, la cual tenemos la bendición de vivir.",
      content_p_2:
        "Nuestro principal objetivo es responder a tus preguntas, ayudarte a encontrar respuestas a tus preguntas y hacer que el proceso de mudarse a Baja o visitar Baja sea una aventura memorable y emocionante. Las personas se mudan a Baja por diferentes razones. Para muchos, ahora llaman a Baja su hogar y disfrutan de la amabilidad de la gente, la vitalidad de la cultura, y no olvidemos los tacos. Así que ven a visitarnos a Baja y haremos que tu transición sea fluida, ya sea para unas vacaciones, una visita prolongada o una posible reubicación en tu futuro.",
      content_p_3:
        "Somos creadores en línea y puedes contactarnos a través de Facebook, Instagram, Tik-Tok, Google y Youtube. Busca nuestro nombre, GV BAJA REALTY.",

      //Property management
      //  Section 4
      title_pm_s4_1:
        "¿Quiénes somos y por qué deberías elegir GV Baja Realty para tus necesidades de gestión de propiedades?",
      content_pm_s4_1:
        "Los propietarios de GV Baja Realty son Gabriela McEntee Victorica y Justin McEntee. Ambos tienen experiencia en ventas, marketing, comunicación y bienes raíces. Gabriela es bilingüe y ha vendido, alquilado y gestionado propiedades en diversos vecindarios y Campos en Ensenada. Justin es un corredor de bienes raíces con licencia en Estados Unidos y ha vendido numerosas propiedades en dicho país.",
      content_pm_s4_1_2:
        "Hemos estado en este negocio por más de una década. Somos honestos, confiables, disponibles y estamos listos para asistirte.",
      title_pm_s4_2:
        "¿Por qué nos dedicamos a ayudar a propietarios e inquilinos con la administración de propiedades?",
      content_pm_s4_2:
        "En GV Baja Realty nos encanta ver cómo los propietarios pueden ofrecer viviendas a los inquilinos y generar ingresos en Baja. Nos preocupamos por ti, tu propiedad y tu inquilino. Hacemos todo para que puedas enfocarte en las cosas más importantes de la vida.",
      title_pm_s4_3:
        "¿Quiénes son los Profesionales en Administración de Propiedades?",
      content_pm_s4_3:
        "Las empresas de administración de propiedades son profesionales con la experiencia necesaria para ayudarte a sacar el máximo provecho de tu inversión inmobiliaria y hacer el proceso lo más simple posible.",
      title_pm_s4_4:
        "Nuestros servicios incluyen la búsqueda de un inquilino y el cumplimiento del contrato",
      content_pm_s4_4:
        "Nuestros servicios incluyen la preparación del contrato de arrendamiento, negociación, firma y ejecución del contrato, verificación de referencias, verificación de antecedentes (pagado por el propietario), mantenimiento, traducción del contrato, entrada y salida.",
      title_pm_s4_5:
        "Cómo promocionamos tu propiedad para encontrar un inquilino potencial",
      content_pm_s4_5:
        "Promocionamos agresivamente tu propiedad a través de múltiples canales y gestionamos todas las visitas de los inquilinos, asegurando la máxima visibilidad e interés de posibles inquilinos.",

      //Real estate info page
      //  Hero
      hero_title: "BIENES RAÍCES EN BAJA",

      //  Section 1
      content_re_s1:
        "El proceso de Bienes Raíces es muy particular, desde la búsqueda de la casa adecuada, pasando por el proceso de cierre, hasta finalmente comprar y ser dueño de la casa. Sabemos que esta compra puede traer más disfrute, aumentar tus ingresos, brindarte la oportunidad de tener una segunda casa y, sin duda, darte experiencias increíbles. Si has estado pensando en vender tu casa o encontrar una nueva, podemos ayudarte. Estamos emocionados de compartir nuestra experiencia contigo, buscar propiedades y hacer las conexiones necesarias con el propietario, constructores y otros agentes para encontrar un comprador calificado.",

      title_re_s1: "Hay dos maneras de comprar propiedad en Baja:",

      content_re_s1_2:
        "Arrendamiento de Terreno: como comprador, estás adquiriendo una casa que se encuentra en un terreno arrendado, cuyo propietario es el dueño del terreno. Esta opción ofrece la oportunidad de poseer una hermosa casa por menos. El arrendamiento de terreno tiene un costo mensual o anual que se paga al dueño del terreno. Para comprar una casa en un terreno arrendado, este acuerdo es entre el vendedor y el comprador, el vendedor y el propietario del terreno, y el comprador y el propietario del terreno. Este tipo de transacción es diferente para quienes vienen de los Estados Unidos; sin embargo, aquí en Baja es un tipo de transacción y compra muy tradicional. Un arrendamiento de terreno puede ser notariado, pero no es necesario.",

      content_re_s1_3:
        "Fideicomiso Bancario: Si una casa está en Baja y dentro de la zona federal de 100 km de las fronteras de México o dentro de 50 km de la costa de México, necesitarás un Fideicomiso Bancario para comprar una casa. Como extranjero, solo puedes comprar un terreno o una casa en un terreno que esté en fideicomiso por un banco mexicano si se encuentra dentro de los límites de 100 km y 50 km. Este tipo de transacción es similar a la de los Estados Unidos, excepto que involucra a un notario. Para facilitar el proceso, tienes la opción de contratar a nuestro abogado de bienes raíces para que te asista en la transacción. Es un miembro de confianza de la comunidad, además de abogado especializado en bienes raíces e inmigración. Si solicitas nuestros servicios, el abogado se encargará de asegurar que los documentos necesarios sean creados, firmados, aprobados y que la propiedad esté libre de gravámenes.",

      //  Section 2

      content_re_s2_1:
        "Como profesionales, creemos en la transparencia, la comunicación abierta y la búsqueda de soluciones. Nuestra red incluye un abogado de bienes raíces e inmigración, un notario y traductores.",

      content_re_s2_2:
        "Nuestro marketing sigue creciendo y evolucionando. Nuestras relaciones abarcan desde los Estados Unidos hasta Mexicali. Hemos trabajado diligentemente para curar y gestionar nuestra red. Crearemos, editaremos y publicaremos videos con drones en las plataformas sociales adecuadas para destacar tu casa y el entorno a posibles compradores. Además, creamos/diseñamos reels, historias, publicaciones y utilizamos Easy Broker y Google Business. Tu casa será colocada en varias plataformas sociales y trabajaremos arduamente para venderla, obteniendo el mejor precio y términos de cierre.",

      content_re_s2_3:
        "Esperamos con ansias que nos contactes y comiences tu viaje en bienes raíces. Gracias.",

      //Property Management
      //  Section 5
      title_pm_s5_1:
        "Las principales responsabilidades de un Administrador de Propiedades:",
      subtitle_pm_s5_1: "Encontrar y seleccionar inquilinos",
      subtitle_pm_s5_2: "Manejo de contratos de arrendamiento",
      subtitle_pm_s5_3: "Gestionar quejas y emergencias",
      subtitle_pm_s5_4: "Manejo de entradas y salidas.",

      //  Section 6
      title_pm_s6_1: "Opción para nuestros Servicios:",
      content_pm_s6_1:
        "Podemos supervisar una propiedad que ya está alquilada. En esta situación, nos comunicaremos con el inquilino y el propietario. Cuando se necesiten reparaciones, facilitaremos y supervisaremos la realización de las mismas y proporcionaremos la documentación correspondiente.",
      content_pm_s6_2:
        "En el caso de que el propietario esté supervisando su propia propiedad, podemos ofrecer nuestro servicio de pago de facturas y servicios adicionales según sea necesario.",
      title_pm_s6_2: "Estructura de Precios:",
      content_pm_s6_3:
        "GV Baja Realty ofrece diferentes estructuras de precios para cada propietario. Depende de cuántas unidades se rentarán, qué servicios requiere el propietario y la duración del contrato de arrendamiento. Envíanos un mensaje y podremos discutir más detalles.",
      content_pm_s6_4:
        "Precios, términos, ofertas y disponibilidad están sujetos a cambios. Toda la información se considera confiable, el inquilino debe verificar todo.",
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

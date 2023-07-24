import {
  IconAffiliate,
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconSitemap,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
  IconRss,
} from '@tabler/icons-react';
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialProps,
} from './types';

import hero2Img from '~/assets/images/hero2.jpg';
import logo from '~/assets/images/logo.png';
import pic1 from '~/assets/images/pic1.png';
import pic2 from '~/assets/images/pic2.png';
import pic3 from '~/assets/images/pic3.png';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'Congo Restoration Earth Initiative »',
    href: 'https://www.crei-rdc.org',
  },
  callToAction2: {
    text: 'Follow @crei_rdc',
    href: 'https://twitter.com/intent/user?screen_name=crei_rdc',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Pages',
      icon: IconChevronDown,
      links: [
        {
          label: 'About us',
          href: '/about',
        },
        {
          label: 'Contact us',
          href: '/contact',
        },
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
        {
          label: 'Terms & Conditions',
          href: '/terms',
        },
      ],
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],

  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Hero data
export const heroData: HeroProps = {
  title: (
    <span id='anime' className='text-yellow-900'>
      <span className='word' >Congo Restoration Earth Initiative</span>
      <span className="sm:whitespace-nowrap">(CREI)</span>
    </span>
  ),
  subtitle: (
    <>
        <span className="text-neutral-50 drop-shadow-lg font-bold decoration-primary-600">
          <span>Congo Restoration Earth Initiative, CREI en sigle</span>
        </span>{' '}       
      <span className='font-semibold text-neutral-50 drop-shadow-2xl'>est une organisation non gouvernementale à but non lucratif 
      qui a pour mission de promouvoir la protection de l’environnement et la 
      conservation de la biodiversité en République Démocratique du Congo...
      </span>
      <span className='mt-40 text-cyan-400'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth="1.5" stroke="currentColor" className='m-auto mt-12 mb-10 animate-bounce w-10 h-10'>
        <path strokeLinecap="round" strokeLinejoin="round" 
        d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </span>
    </>
  )
};
//la protection de l’environnement et la conservation de la biodiversité en République Démocratique du Congo

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'Une bonne gestion de l’environnement est une bonne gestion de la vie',
  subtitle:
    'Congo Restoration Earth Initiative, CREI en sigle, est une organisation non gouvernementale à but non lucratif qui a pour mission de promouvoir la protection de l’environnement et la conservation de la biodiversité en République Démocratique du Congo.',
  callToAction: {
    text: 'View jobs',
    href: 'https://www.linkedin.com/',
    targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: pic3,
    alt: 'Hero crei-rdc',
  },
};

// FAQS data 2
export const faqsData2: FAQsProps = {
  header: {
    title: 'Questions frequemment posées',
    subtitle:
      'Les questions les plus fréquemment posées sur notre organisation et nos activités.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'Qu’est-ce que Congo Restoration Earth Initiative (CREI) ?',
      description: `Congo Restoration Earth Initiative, CREI en sigle, est une organisation non gouvernementale à but non lucratif qui a pour mission de promouvoir la protection de l’environnement et la conservation de la biodiversité en République Démocratique du Congo.`,
    },
    {
      title: 'Quelles sont les activités de CREI ?',
      description: `CREI mène des activités de sensibilisation, de plaidoyer, de recherche et de développement dans le domaine de la protection de l’environnement et de la conservation de la biodiversité en République Démocratique du Congo.`,
    },
    {
      title: "Qu'est-ce que vous faites pour l'environnement ?",
      description: `CREI mène des activités de sensibilisation, de plaidoyer, de recherche et de développement dans le domaine de la protection de l’environnement et de la conservation de la biodiversité en République Démocratique du Congo.`,
    },
    {
      title: "Qu'est-ce que vous faites pour la biodiversité ?",
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'Quelles sont vos réalisations ?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'Comment vous soutenir ?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// CallToAction data
export const callToActionData: CallToActionProps = {
  title: 'Congo Restoration Earth Initiative',
  subtitle:
    'CREI est une organisation non gouvernementale à but non lucratif qui a pour mission de promouvoir la protection de l’environnement et la conservation de la biodiversité en République Démocratique du Congo.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/crei-rdc',
    icon: IconDownload,
  },
  items: [
    {
      title: 'S’inscrire à notre newsletter',
      description: 'Recevez nos dernières nouvelles et mises à jour directement dans votre boîte de réception.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Entrer votre adresse email',
        },
        btn: {
          title: 'S’abonner',
          type: 'submit',
        },
      },
    },
  ],
};

// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnType: 'primary',
  },
};

// Feature data
export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        C&apos;est que nous propose <span className="whitespace-nowrap">CREI</span>
      </>
    ),
    subtitle:
      'La CREI a pour objectifs globaux:',
    highlight: 'objectifs',
  },
  items: [
    {
      title: 'Du developpement',
      description:
        'Développer, diffuser les méthodes et techniques de travail pour favoriser les meilleures pratiques d’aménagement de territoire',
      icon: IconSitemap,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'De l’orientation',
      description:
        'Orienter au moyen d’analyse spatiale la décision des chefs de collectivités ou des acteurs clés de la communauté la meilleure stratégie de gestion de ressources en eau',
      icon: IconArrowsRightLeft,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'De l’Evaluation',
      description:
        'Evaluer la dynamique urbaine et les conséquences de mouvements de population dans l’occurrence des risques naturels',
      icon: IconListCheck,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'De l’organisation',
      description:
        'Organiser des programmes de renforcement de capacité pour booster la recherche-action ',
      icon: IconAffiliate,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'De l’initiation',
      description:
        'Initier dans le cas nécessaire des projets de mise à jour qui visent à cartographier les zones en plein développement.',
      icon: IconComponents,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Feature2 data
export const featuresData2: FeaturesProps = {
  header: {
    title: 'Centre de soutien',
    subtitle: 'A la recherche d’informations ?',
  },
  items: [
    {
      title: 'Avez-vous de questions ?',
      description: 'Consultez notre FAQ',
      icon: IconHelp,
      link: {
        href: '/',
      },
    },
    {
      title: 'Chat en direct',
      description: 'Discutez avec notre équipe',
      icon: IconMessages,
      link: {
        href: '/',
      },
    },
    {
      title: 'Avoir besoin d’aide ?',
      description: 'Parlez à notre équipe de support',
      icon: IconHeadset,
      link: {
        href: '/',
      },
    },
  ],
};

// Feature data 3
export const featuresData3: FeaturesProps = {
  header: {
    title: 'Services',
  },
  items: [
    {
      title: 'Du developpement',
      description:
        'Développer, diffuser les méthodes et techniques de travail pour favoriser les meilleures pratiques d’aménagement de territoire',
      icon: IconSitemap,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'De l’orientation',
      description:
        'Orienter au moyen d’analyse spatiale la décision des chefs de collectivités ou des acteurs clés de la communauté la meilleure stratégie de gestion de ressources en eau',
      icon: IconArrowsRightLeft,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'De l’Evaluation',
      description:
        'Evaluer la dynamique urbaine et les conséquences de mouvements de population dans l’occurrence des risques naturels',
      icon: IconListCheck,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'De l’organisation',
      description:
        'Organiser des programmes de renforcement de capacité pour booster la recherche-action ',
      icon: IconAffiliate,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'De l’initiation',
      description:
        'Initier dans le cas nécessaire des projets de mise à jour qui visent à cartographier les zones en plein développement.',
      icon: IconComponents,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Content data
export const contentData: ContentProps = {
  header: {
    title: 'Notre champ d’action',
    highlight: 'champ d’action',
  },
  content:
    'Notre champ d’action passe par une triple approche : Identification, Diagnostic et Evaluation au travers de 5 champs de transversalité',
  items: [
    {
      title: 'Transversalités I ',
      description:
        'Questions urbaines et risques naturels (Inondation, Glissement de terrain,…) en contexte urbain',
    },
    {
      title: 'Transversalités II ',
      description:
        'Dynamiques des zones périurbaines et aménagement de territoire ',
    },
    {
      title: 'Transversalités III ',
      description:
        'Changement climatique et pratiques agricoles en milieux ruraux ',
    },
  ],
  image: {
    src: pic1,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content2 data
export const content2Data: ContentProps = {
  items: [
    {
      title: 'Transversalités IV ',
      description: 'Gestion intégrée de l’eau (Hydrologie des bassins versants)  et accès à l’eau '
    },
    {
      title: 'Transversalités V ',
      description: 'Analyse documentaire et diagnostic sur les mouvements de population dans l’environnement physique'
    },
    {
      title: 'Le System d’Information Géographique (SIG) ',
      description: 'Le SIG, un outil d’aide à la décision pour les collectivités et les acteurs clés de la communauté et outils de cartographie de terrains'
    },
    {
      title: 'Le lever géologique ',
      description: 'Lever géologique de base et identification des marqueurs géologiques (Environnement physique : la gestion de l’environnement) '
    },
    {
      title: 'Inventaire des risques naturels ',
      description: 'Inventaire des risques dans les zones à intérêt économiques (ville, agglomération, sites d’exploitation minière artisanale ou industrielle,…) '
    },
    {
      title: 'Apport géotechnique ',
      description: 'Apport géotechnique dans les projets de construction (Bâtiments, routes, ponts,…) '
    },
  ],
  image: {
    src: pic2,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data
export const stepsData: StepsProps = {
  header: {
    title: 'Notre mission',
    highlight: 'Mission',
  },
  content:
    'CREI vise à promouvoir l’action de développement à travers le renforcement de l’analyse socio-spatiale dans la prise des décisions dans la gestion du territoire.',
  items: [
    {
      title: 'But 1',
      description:
        'Accompagner techniquement et scientifiquement (cartographie, statistique, et observations de terrain) les projets de développement dans la démarche recherche-action',
      icon: IconArrowDown,
    },
    {
      title: 'But 2',
      description:
        'Evaluer l’impact des modèles d’action sur les questions (géo) environnementales au niveau territorial et intersectoriel ',
      icon: IconArrowDown,
    },
    {
      title: 'But 3',
      description:
        'Informer et sensibiliser les populations et les différents acteurs sur les risques naturels tant en milieux ruraux qu’en milieux urbains.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
      icon: IconCheck,
    },
  ],
  image: {
    src: pic3,
    alt: 'Steps image',
  },
};

// Team data
export const teamData: TeamProps = {
  header: {
    title: 'Notre équipe',
    subtitle:
      'Notre équipe est composée de professionnels de différents horizons, ayant une expérience dans le domaine de la recherche et de l’action pour le développement.',
    // highlight: 'Team',
  },
  teams: [
    {
      name: 'John Doe',
      occupation: 'Geologist',
      image: {
        src: 'https://img.freepik.com/premium-photo/confident-corporate-charm-handsome-young-african-american-businessman-standing-indoors-with-his-arms-folded_590464-31666.jpg?w=740',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Elikya Mokonzi',
      occupation: 'Marketing Manager',
      image: {
        src: 'https://img.freepik.com/premium-photo/businesswoman-with-folded-arms-wearing-glasses_13339-22993.jpg?w=740',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'john Doe',
      occupation: 'Environmental Engineer',
      image: {
        src: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?w=740&t=st=1689341236~exp=1689341836~hmac=afac3529f7691211c19be14db8ce113f61fc5b568b41170da539adf90a0428d9',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'John Doe',
      occupation: 'Geologist and GIS Analyst',
      image: {
        src: 'https://img.freepik.com/premium-photo/nothing-can-be-done-without-hope-confidence-shot-young-man-standing-modern-office_590464-53623.jpg?w=740',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    title: 'Temoinages de nos partenaires',
    subtitle:
      'Nos clients sont nos meilleurs ambassadeurs. Découvrez leurs témoignages. ',
    // highlight: 'Testimonial',
  },
  testimonials: [
    {
      name: 'Tayla Kirsten',
      occupation: 'Marketing Manager',
      comment:
        'Suspendisse mollis ante turpis, ut fermentum nulla finibus ac. Integer ut justo id dolor lobortis pharetra. Integer ultrices leo a nunc ullamcorper commodo. In id nulla et nibh pretium pretium non vel metus. Suspendisse dapibus quis lorem sit amet fermentum. Ut a dapibus justo. In faucibus molestie pretium. Cras eros orci, bibendum fringilla elit at, vehicula maximus eros. Aenean placerat aliquet mi, et pellentesque dolor gravida at.',
      image: {
        src: 'https://img.freepik.com/premium-photo/nothing-can-be-done-without-hope-confidence-shot-young-man-standing-modern-office_590464-53623.jpg?w=740',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Silver Jordan',
      occupation: 'Senior Marketer',
      comment:
        'Mauris semper enim dolor, ac dictum sapien sollicitudin quis. Quisque id pharetra mi. Phasellus eu posuere lectus, vitae rhoncus velit. Nullam imperdiet purus quis dapibus vestibulum. Integer purus ex, hendrerit at elementum non, varius a nibh. Ut eget convallis mi. Morbi mattis, felis sit amet consectetur scelerisque, odio purus ornare sapien, in feugiat lorem tellus et magna. Pellentesque luctus dolor in ornare mattis.',
      image: {
        src: 'https://img.freepik.com/premium-photo/nothing-can-be-done-without-hope-confidence-shot-young-man-standing-modern-office_590464-53623.jpg?w=740',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Kelsey Arden',
      occupation: 'Co-Founder & CEO',
      comment:
        'Sed malesuada rhoncus arcu, sit amet condimentum leo pharetra feugiat. In augue quam, venenatis nec dui in, auctor tempus libero. Aliquam tempus ex id metus viverra blandit. Proin varius venenatis tortor, a pellentesque enim malesuada a. Aliquam lectus magna, interdum eget odio non, consequat imperdiet ipsum.',
      image: {
        src: 'https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?w=740&t=st=1689341236~exp=1689341836~hmac=afac3529f7691211c19be14db8ce113f61fc5b568b41170da539adf90a0428d9',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
  ],
};

// Pricing data
export const pricingData: PricingProps = {
  header: {
    title: 'Nos offres et tarifs',
    subtitle:
      'Choisissez l’offre qui vous convient le mieux. Vous pouvez changer d’offre à tout moment.',
    // highlight: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      value: 29,
      period: 'per month',
      texts: [
        'Etiam in libero',
        'Aenean ac nunc',
        'Cras scelerisque accumsan libero, et volutpat dolor tristique at',
        'In hac habitasse',
      ],
      callToAction: {
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      value: 69,
      period: 'per month',
      texts: ['Proin vel laoreet', 'Ut efficitur egestas', 'Pellentesque ut nibh', 'Donec fringilla sem'],
      callToAction: {
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      value: 199,
      period: 'per month',
      texts: [
        'Curabitur suscipit risus',
        'Aliquam blandit malesuada',
        'Suspendisse sit amet',
        'Suspendisse auctor dui',
      ],
      callToAction: {
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Stats
export const statsData: StatsProps = {
  items: [
    {
      title: 13269,
      description: 'Downloads',
    },
    {
      title: 24.8,
      description: 'Stars',
    },
    {
      title: 1767.77,
      description: 'Forks',
    },
    {
      title: 484000,
      description: 'Users',
    },
  ],
};

// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Contactez-nous',
    subtitle: 'Nous sommes à votre écoute pour toute demande de renseignement.',
    highlight: 'Contact',
  },
  content:
    'Contactez-nous pour toute demande de renseignement. Nous vous répondrons dans les plus brefs délais.',
  items: [
    {
      title: 'Notre adresse',
      description: ['Avenue Patrice Emery Lumumba, Bukavu, RDC'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +243 850299117', 'Mail: crei-rdc@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Nos horaires',
      description: ['Lundi - Vendredi: 08:00 - 17:00', 'Samedi & Dimanche: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Envoyez-nous un message',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'Votre nom',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'email',
        placeholder: 'Votre adresse email',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Votre message...',
    },
    btn: {
      title: 'Envoyer Message',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Contactez-nous',
    subtitle: 'Contactez-nous pour plus d’informations',
    highlight: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: crei-rdc@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Prêt à commencer?',
    description:
      'Contactez-nous pour plus d’informations. Nous vous répondrons dans les plus brefs délais.',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Email address',
      },
    ],
    radioBtns: {
      label: 'La raison de votre contact',
      radios: [
        {
          label: 'Renseignements généraux',
        },
        {
          label: 'Aide technique',
        },
        {
          label: 'Reclamations',
        },
        {
          label: 'Autres',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'Comment pouvons-nous vous aider?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Avez-vous lu et accepté nos conditions générales?',
        value: '',
      },
      {
        label: 'Voulez-vous recevoir des informations sur nos produits et services?',
        value: '',
      },
    ],
    btn: {
      title: 'Envoyer',
      type: 'submit',
    },
  },
};

// Footer data
export const footerData: FooterProps = {
  title: 'crei-rdc',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/crei-rdc' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://crei-rdc.org">
        {' '}
        crei-rdc
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Addresse',
      texts: ['Avenu Patrice E Lumumba, N174', 'Bukavu, RDC'],
    },
    {
      title: 'Phone',
      texts: ['Reception: +243 850299117 ', 'Office: +243 850299117'],
    },
    {
      title: 'Email',
      texts: ['Office: crei-rdc@gmail.com', 'Site: https://crei-rdc.org'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-8 rounded-sm bg-[url(https://res.cloudinary.com/dxwlmbsf9/image/upload/v1689344540/release0.7F_r6mg9s.png)] bg-cover md:-mt-0.5 md:h-6 md:w-8"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://crei-rdc.org">
        {' '}
        crei-rdc
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

import { PortfolioProject, PortfolioCategoryTab } from '@/components/portfolio/types'

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: '4 Bedroom Villa',
    slug: '4-bedroom-villa-1',
    location: 'Meadows, Dubai',
    category: 'fitout',
    images: [
      {
        src: '/portfolio/1/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/1/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/1/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
      {
        src: '/portfolio/1/4.webp',
        alt: 'Modern interior design with premium finishes',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '550 M²',
      details: {
        description:
          'Located in one of the most exclusive residential areas of the city, this elegant four-bedroom villa offers a perfect balance between contemporary design and comfort. With spacious interiors and meticulous finishes, it provides an exceptional living experience.',
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: 'Villa',
          },
          {
            icon: 'size',
            label: 'Size',
            value: '550 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2022',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials:
          "High-end materials, wooden flooring, and soft neutral tones define the villa's elegant aesthetic. Every space has been crafted to combine functionality and warmth, ensuring a refined yet inviting atmosphere.",
        amenitiesColumns: {
          left: ['24-hour security and controlled access.', 'Gym, green areas, and walking paths.'],
          right: [`Smart home system and air conditioning`, `Maintenance fee: $6,500 MXN`],
        },
      },
    },
  },
  {
    id: '2',
    title: '3 Bedroom Apartment',
    slug: '3-bedroom-apartment',
    location: 'Downtown, Dubai',
    category: 'design',
    images: [
      {
        src: '/portfolio/2/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/2/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/2/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
      {
        src: '/portfolio/2/4.webp',
        alt: 'Modern interior design with premium finishes',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '279 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: 'Residence',
          },
          {
            icon: 'size',
            label: 'Size',
            value: '279 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Green areas, gym, and recreational pathways.',
          ],
          right: [
            `Smart home features and climate system.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '3',
    title: 'Penthouse Duplex',
    slug: 'penthouse-duplex',
    location: 'Jumeirah Living, Dubai',
    category: 'design',
    images: [
      {
        src: '/portfolio/3/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/3/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/3/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '420 M²',
      details: {
        description: `Situated in a premium high-rise development, this elegant penthouse duplex offers a sophisticated blend of modern architecture and elevated living. Spacious layouts, panoramic views, and refined finishes create a truly distinctive residential experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: 'Penthouse Duplex',
          },
          {
            icon: 'size',
            label: 'Size',
            value: '420 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `Expansive double-height spaces, natural light, and a warm neutral palette define the penthouse’s contemporary aesthetic. Every area is crafted to maximize comfort, provide flexibility, and emphasize the unique vertical layout of a duplex home.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Private amenities and modern climate systems.',
          ],
          right: [
            `Rooftop lounges, fitness facilities, and relaxation areas.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '4',
    title: 'Villa Landscape',
    slug: 'villa-landscape',
    location: 'Jumeirah Golf Estates, Dubai',
    category: 'fitout',
    images: [
      {
        src: '/portfolio/4/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/4/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/4/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '80 M²',
      details: {
        description: `Designed to complement the villa’s architectural character, this landscape project creates a serene and harmonious outdoor environment. Featuring elegant pathways, curated greenery, and refined water elements, the space offers a tranquil extension of the home’s luxurious living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: 'Villa Landscape',
          },
          {
            icon: 'size',
            label: 'Size',
            value: '80 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `Thoughtfully planned zones, sculpted vegetation, and soft lighting highlight the natural beauty of the outdoor area. Decorative fountains serve as the focal point, adding movement and a calming atmosphere, while ensuring the space feels inviting for relaxation and gatherings.`,
        amenitiesColumns: {
          left: [
            'Central or multiple decorative fountains.',
            'Landscape lighting and garden pathways.',
          ],
          right: [
            `Green areas with selected plants and trees.`,
            `Optional maintenance and customization details available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '5',
    title: '3 Bedroom Apartment',
    slug: '3-bedroom-apartment2',
    location: 'Downtown, Dubai',
    category: 'fitout',
    images: [
      {
        src: '/portfolio/5/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/5/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/5/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '100 M²',
      details: {
        description: `Located in a highly sought-after residential district, this thoughtfully designed three-bedroom apartment offers a refined balance of comfort, style, and functionality. With spacious interiors and timeless finishes, it delivers a welcoming and elevated living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: 'Apartment',
          },
          {
            icon: 'size',
            label: 'Size',
            value: '100 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2024',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `Warm tones, clean architectural lines, and high-quality materials define the apartment’s modern aesthetic. Each room is designed to maximize natural light, enhance comfort, and support a practical everyday lifestyle while maintaining an elegant atmosphere.`,
        amenitiesColumns: {
          left: [
            'Secure residential access and 24-hour support.',
            'Modern climate and smart-home features.',
          ],
          right: [
            `Fitness areas, green spaces, and shared amenities.`,
            `Maintenance and service details available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '6',
    title: 'Veterinary Clinic',
    slug: 'veterinary-clinic',
    location: 'Jumeirah Lake Towers, Dubai',
    category: 'design',
    images: [
      {
        src: '/portfolio/6/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/6/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/6/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '450 M²',
      details: {
        description: `Located in a well-established medical district, this modern veterinary clinic offers a thoughtful blend of advanced medical care, comfort, and functional design. With cutting-edge equipment and a calm, pet-friendly environment, it provides a trusted and elevated healthcare experience for animals.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: 'Veterinary Clinic',
          },
          {
            icon: 'size',
            label: 'Size',
            value: '450 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2023',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `Warm natural textures, clean spatial planning, and high-quality materials define the clinic’s contemporary aesthetic. Each room - from diagnostic labs to recovery suites - is designed to optimize workflow, reduce stress for pets, and maintain a welcoming atmosphere for owners.`,
        amenitiesColumns: {
          left: [
            '24/7 emergency care and on-site medical assistance.',
            'Modern diagnostic labs, surgery rooms, and recovery areas.',
          ],
          right: [
            `Smart-environment systems for temperature, humidity, and hygiene control.`,
            `Dedicated grooming, nursing, and preventive-care services.`,
          ],
        },
      },
    },
  },
  {
    id: '7',
    title: 'Veterinary Clinic',
    slug: 'veterinary-clinic2',
    location: 'Arjan, Dubai',
    category: 'design',
    images: [
      {
        src: '/portfolio/7/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/7/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/7/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '450 M²',
      details: {
        description: `Located in a well-established medical district, this modern veterinary clinic offers a thoughtful blend of advanced medical care, comfort, and functional design. With cutting-edge equipment and a calm, pet-friendly environment, it provides a trusted and elevated healthcare experience for animals.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: 'Veterinary Clinic',
          },
          {
            icon: 'size',
            label: 'Size',
            value: '450 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2023',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `Warm natural textures, clean spatial planning, and high-quality materials define the clinic’s contemporary aesthetic. Each room - from diagnostic labs to recovery suites - is designed to optimize workflow, reduce stress for pets, and maintain a welcoming atmosphere for owners.`,
        amenitiesColumns: {
          left: [
            '24/7 emergency care and on-site medical assistance.',
            'Modern diagnostic labs, surgery rooms, and recovery areas.',
          ],
          right: [
            `Smart-environment systems for temperature, humidity, and hygiene control.`,
            `Dedicated grooming, nursing, and preventive-care services.`,
          ],
        },
      },
    },
  },
  {
    id: '9',
    title: `Lapis Properties`,
    slug: 'lapis-properties1',
    location: 'Downtown, Dubai',
    category: 'design',
    images: [
      {
        src: '/portfolio/9/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/9/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/9/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '1200 M²',
      details: {
        description: `Located in an elite residential zone, this contemporary development by Lapis Properties reflects a refined approach to modern living. With thoughtful planning, timeless materials, and generous layouts, it offers a calm and elevated lifestyle tailored for discerning homeowners.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Residential Development`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '1200 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2022',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `Soft earthy tones, minimalistic architecture, and premium finishes define the development’s aesthetic. Every unit is crafted to maximize natural light, enhance comfort, and support a balanced daily routine while maintaining a sophisticated atmosphere.`,
        amenitiesColumns: {
          left: [
            'Secure gated access with 24-hour surveillance.',
            'Landscaped communal terraces, walking paths, and relaxation zones.',
          ],
          right: [
            `State-of-the-art fitness facilities and shared wellness amenities.`,
            `High-end climate control and smart-home integration.`,
          ],
        },
      },
    },
  },
  {
    id: '10',
    title: `Al Naboodah Offices`,
    slug: 'al-naboodah-offices',
    location: 'Sheikh Zayed Road, Dubai',
    category: 'design',
    images: [
      {
        src: '/portfolio/10/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/10/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/10/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '850 M²',
      details: {
        description: `Clean architectural lines, neutral tones, and premium finishes define the office’s contemporary aesthetic. Each workspace is designed to maximize natural light, improve workflow efficiency, and support both collaborative and private working styles, creating a balanced and sophisticated atmosphere.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Office Space`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '850 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2022',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `Soft earthy tones, minimalistic architecture, and premium finishes define the development’s aesthetic. Every unit is crafted to maximize natural light, enhance comfort, and support a balanced daily routine while maintaining a sophisticated atmosphere.`,
        amenitiesColumns: {
          left: [
            '24/7 building access with advanced security systems.',
            'Fully equipped meeting rooms, conference spaces, and executive lounges.',
          ],
          right: [
            `High-speed network infrastructure and smart-office automation.`,
            `On-site maintenance and responsive facility management.`,
          ],
        },
      },
    },
  },
  {
    id: '11',
    title: `Penthouse`,
    slug: 'penthouse-180-13',
    location: 'Business Bay, Dubai',
    category: 'design',
    images: [
      {
        src: '/portfolio/11/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/11/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/11/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '180 M²',
      details: {
        description: `Located in a prestigious high-rise, this exclusive penthouse showcases exceptional design, panoramic city views, and a refined blend of luxury and comfort. With expansive interiors and bespoke finishes, it offers a truly elevated living experience for those who value privacy, sophistication, and timeless style.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Penthouse`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '180 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2022',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `Natural stone, warm wood textures, and floor-to-ceiling glazing define the penthouse’s contemporary aesthetic. Every area is thoughtfully crafted to enhance natural light, maximize comfort, and create seamless transitions between living, dining, and outdoor spaces - all while maintaining an elegant and serene atmosphere.`,
        amenitiesColumns: {
          left: [
            'Private elevator access and premium 24/7 security.',
            'Rooftop terrace with lounge zones and panoramic skyline views.',
          ],
          right: [
            `Exclusive amenities: fitness suite, spa facilities, and concierge service.`,
            `Smart-home automation, climate control, and energy-efficient systems.`,
          ],
        },
      },
    },
  },
  {
    id: '12',
    title: `Duplex Penthouse`,
    slug: 'duplex-penthouse-12',
    location: 'Business Bay, Dubai',
    category: 'fitout',
    images: [
      {
        src: '/portfolio/12/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/12/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/12/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
      {
        src: '/portfolio/12/4.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '410 M²',
      details: {
        description: `Nestled atop a landmark residential tower, this duplex penthouse delivers a rare combination of vertical living, expansive space, and breathtaking skyline views. Thoughtfully designed across two levels, it blends modern luxury with intelligent functionality, creating an elevated lifestyle experience unlike any other.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Penthouse`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '410 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2022',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `The home features double-height ceilings, sculptural staircases, and premium natural materials that define its refined contemporary aesthetic. Open-plan living areas on the lower level are complemented by private suites upstairs, maximizing privacy and comfort. Abundant natural light and seamless indoor–outdoor transitions enhance the sense of space and exclusivity throughout.`,
        amenitiesColumns: {
          left: [
            'Private elevator access directly to both levels of the penthouse.',
            'Rooftop terraces, lounge areas, and panoramic city vistas.',
          ],
          right: [
            `Exclusive resident amenities: fitness center, spa, and concierge services.`,
            `Advanced smart-home systems and climate control across both floors.`,
          ],
        },
      },
    },
  },
  {
    id: '13',
    title: `Office`,
    slug: 'office-560',
    location: 'Media City, Dubai',
    category: 'fitout',
    images: [
      {
        src: '/portfolio/13/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/13/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/13/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
      {
        src: '/portfolio/13/4.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '560 M²',
      details: {
        description: `Situated in a central business district, this modern office space combines functional planning with a clean, contemporary design. Well-lit interiors, high-quality materials, and an efficient layout create an environment tailored for productive work and seamless team collaboration.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Office`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '560 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2022',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `Neutral tones, refined finishes, and open-plan work zones define the space’s minimalistic aesthetic. Private meeting rooms, focus areas, and a dedicated lounge create a balanced workplace that supports both concentration and teamwork, ensuring a professional yet welcoming atmosphere.`,
        amenitiesColumns: {
          left: [
            'Fully equipped meeting rooms and collaborative zones.',
            'High-speed internet, server infrastructure, and smart-office automation.',
          ],
          right: [
            `On-site maintenance and responsive facility management.`,
            `Reserved parking spaces and EV-charging.`,
          ],
        },
      },
    },
  },
  {
    id: '14',
    title: `Flower Shop`,
    slug: 'flower-shop-95',
    location: 'DIFC, Dubai',
    category: 'fitout',
    images: [
      {
        src: '/portfolio/14/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/14/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/14/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
      {
        src: '/portfolio/14/4.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '95 M²',
      details: {
        description: `Located in a charming pedestrian area, this boutique flower shop offers a curated selection of fresh blooms, handcrafted arrangements, and seasonal compositions. Its warm ambiance, natural textures, and artistic displays create an inviting space for customers seeking beauty, celebration, or thoughtful gifting.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Flower Shop`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '95 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2022',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `Soft lighting, earthy tones, and greenery-filled corners shape the shop’s cozy and inspiring aesthetic. The interior layout supports both browsing and custom floral design, with dedicated zones for bouquets, workshops, and plant care essentials. Every detail is crafted to evoke freshness, creativity, and a sense of natural elegance.`,
        amenitiesColumns: {
          left: [
            'Daily delivery of fresh flowers and premium imported varieties.',
            'Custom bouquets, event arrangements, and wedding floristry.',
          ],
          right: [
            `Seasonal workshops: flower design, wreath-making, plant care.`,
            `Complimentary gift wrapping and personalized composition styling.`,
          ],
        },
      },
    },
  },
  {
    id: '15',
    title: `2 Bedroom Apartment`,
    slug: '2-bedroom-apartment-120',
    location: 'Dubai Marina, Dubai',
    category: 'fitout',
    images: [
      {
        src: '/portfolio/15/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/15/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/15/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '120 M²',
      details: {
        description: `Located in a modern residential complex, this two-bedroom apartment combines smart planning, comfort, and contemporary design. With generous living spaces and thoughtful details, it offers a balanced environment suited for both everyday living and relaxing downtime.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '120 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `Soft neutral tones, high-quality materials, and abundant natural light define the apartment’s aesthetic. The open-plan living area seamlessly connects to a modern kitchen, while both bedrooms offer privacy and comfort. Functional storage solutions and elegant finishes add a sense of harmony and sophistication.`,
        amenitiesColumns: {
          left: [
            'Landscaped outdoor areas, playgrounds, and walking paths.',
            'Fitness center, communal lounge, and wellness amenities.',
          ],
          right: [
            `Smart-home features and energy-efficient systems.`,
            `Underground parking and available EV-charging.`,
          ],
        },
      },
    },
  },
  {
    id: '16',
    title: `1 Bedroom Apartment`,
    slug: '1-bedroom-apartment-98',
    location: 'Business Bay, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/16/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/16/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/16/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '98 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '98 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2024',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '17',
    title: `1 Bedroom Apartment`,
    slug: '1-bedroom-apartment-80-1',
    location: 'JVC, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/17/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/17/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/17/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '80 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '80 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2024',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '18',
    title: `2 Bedroom Apartment`,
    slug: '2-bedroom-apartment-120-1',
    location: 'Business Bay, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/18/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/18/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/18/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '120 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '120 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '19',
    title: `1 Bedroom Apartment`,
    slug: '1-bedroom-apartment-74-1',
    location: 'Business Bay, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/19/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/19/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/19/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '74 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '74 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '20',
    title: `Studio Apartment`,
    slug: 'studio-apartment-30-1',
    location: 'Business Bay, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/20/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/20/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/20/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '30 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '30 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '21',
    title: `1 Bedroom Apartment`,
    slug: '1-bedroom-apartment-74-11',
    location: 'Emaar Beachfront, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/21/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/21/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/21/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '74 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '74 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '22',
    title: `2 Bedroom Apartment`,
    slug: '2-bedroom-apartment-120-11',
    location: 'Business Bay, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/22/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/22/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/22/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '120 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '120 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '23',
    title: `2 Bedroom Apartment`,
    slug: '2-bedroom-apartment-120-12',
    location: 'Downtown, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/23/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/23/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/23/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '120 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '120 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '24',
    title: `4 Bedroom Villa`,
    slug: '4-bedroom-villa-220-133',
    location: 'Dubai hills, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/24/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/24/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/24/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
      {
        src: '/portfolio/24/4.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '220 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Villa`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '220 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2024',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '25',
    title: `1 Bedroom Apartment`,
    slug: '1-bedroom-apartment-74-13',
    location: 'Jumeirah Village Circle, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/25/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/25/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/25/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '75 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '75 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '26',
    title: `1 Bedroom Apartment`,
    slug: '1-bedroom-apartment-75-133',
    location: 'Jumeirah Village Circle, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/26/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/26/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/26/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '75 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '75 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '27',
    title: `1 Bedroom Apartment`,
    slug: '1-bedroom-apartment-75-1133',
    location: 'Jumeirah Village Circle, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/27/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/27/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/27/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '75 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '75 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '28',
    title: `1 Bedroom Apartment`,
    slug: '1-bedroom-apartment-75-1233',
    location: 'Jumeirah Village Circle, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/28/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/28/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/28/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '75 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '75 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '29',
    title: `1 Bedroom Apartment`,
    slug: '1-bedroom-apartment-75-1234',
    location: 'Jumeirah Village Circle, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/29/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/29/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/29/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '75 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '75 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '30',
    title: `1 Bedroom Apartment`,
    slug: '1-bedroom-apartment-75-1235',
    location: 'Jumeirah Village Circle, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/30/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/30/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/30/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '75 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '75 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '31',
    title: `1 Bedroom Apartment`,
    slug: '1-bedroom-apartment-75-1236',
    location: 'Jumeirah Village Circle, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/31/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/31/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/31/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '75 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '75 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '32',
    title: `2 Bedroom Apartment`,
    slug: '2-bedroom-apartment-75-1236',
    location: 'Jumeirah Village Circle, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/32/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/32/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/32/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '120 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '120 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
  {
    id: '33',
    title: `Studio Apartment`,
    slug: 'studio-apartment-75-1236',
    location: 'Jumeirah Village Circle, Dubai',
    category: 'styling',
    images: [
      {
        src: '/portfolio/33/1.webp',
        alt: 'Living room with modern furniture and elegant decor',
      },
      {
        src: '/portfolio/33/2.webp',
        alt: 'Spacious open-plan living area with contemporary design',
      },
      {
        src: '/portfolio/33/3.webp',
        alt: 'Elegant dining space with luxury furnishings',
      },
    ],
    property: {
      price: '$8,500,000',
      area: '30 M²',
      details: {
        description: `Located in one of the city’s most desirable residential areas, this contemporary property offers a harmonious blend of modern design and everyday comfort. With thoughtfully planned interiors and high-quality finishes, it delivers an exceptional living experience.`,
        specifications: [
          {
            icon: 'type',
            label: 'Property Type',
            value: `Apartment`,
          },
          {
            icon: 'size',
            label: 'Size',
            value: '30 m²',
          },
          {
            icon: 'year',
            label: 'Year Built',
            value: '2025',
          },
          {
            icon: 'developer',
            label: 'Developer',
            value: 'Epasero',
          },
        ],
        features: [
          '4 private bedrooms with large windows and natural light.',
          'Open-concept living and dining area designed for both comfort and social gatherings.',
          'Fully equipped modern kitchen with premium finishes.',
          'Dedicated home office space and family room.',
          'Outdoor terrace with a private garden and pool.',
          'Covered parking for two vehicles.',
        ],
        materials: `High-end materials, warm neutral palettes, and refined decorative elements define the property’s timeless aesthetic. Each space is carefully designed to balance functionality and comfort, creating an inviting atmosphere for modern living.`,
        amenitiesColumns: {
          left: [
            '24-hour security and controlled access.',
            'Smart home features and climate system.',
          ],
          right: [
            `Green areas, gym, and recreational pathways.`,
            `Maintenance and service fees available upon request.`,
          ],
        },
      },
    },
  },
]

export const categoryLabels: Record<string, string> = {
  design: 'Design Projects',
  fitout: 'Fit Out Projects',
  styling: 'Styling',
}

export const portfolioCategories: PortfolioCategoryTab[] = [
  { id: 'all', label: 'All', count: portfolioProjects.length },
  {
    id: 'design',
    label: 'Design Projects',
    count: portfolioProjects.filter(p => p.category === 'design').length,
  },
  {
    id: 'fitout',
    label: 'Fit Out Projects',
    count: portfolioProjects.filter(p => p.category === 'fitout').length,
  },
  {
    id: 'styling',
    label: 'Styling',
    count: portfolioProjects.filter(p => p.category === 'styling').length,
  },
]

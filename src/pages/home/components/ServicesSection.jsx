import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaRegHeart, FaStar, FaAngleDown } from 'react-icons/fa'
import { IoFilter } from 'react-icons/io5'

const mockServices = [
  {
    id: 1,
    title: 'Smart Contract Development',
    rating: 4.9,
    price: 1250,
    tag: 'Solidity',
    description:
      'Creation and auditing of smart contracts on the Ethereum network to ensure security and efficiency.',
    siteName: 'CryptoDevs',
    siteUrl: '#',
    image: '/container.webp',
    favorite: false,
  },
  {
    id: 2,
    title: 'Web3 Security Audit',
    rating: 5.0,
    price: 850,
    tag: 'Security',
    description:
      'Comprehensive vulnerability analysis of dApps and protocols to prevent attacks and protect digital assets.',
    siteName: 'SecureChain',
    siteUrl: '#',
    image: '/rectangle.webp',
    favorite: true,
  },
  {
    id: 3,
    title: 'dApp Interface Design',
    rating: 4.8,
    price: 980,
    tag: 'UI/UX',
    description:
      'Design of intuitive and attractive user interfaces for decentralized applications, optimized for adoption.',
    siteName: 'PixelPerfect',
    siteUrl: '#',
    image: '/rectangle_9.webp',
    favorite: false,
  },
  {
    id: 4,
    title: 'Oracle Integration',
    rating: 4.7,
    price: 600,
    tag: 'Chainlink',
    description:
      'Connecting smart contracts with real-world data through decentralized oracles like Chainlink.',
    siteName: 'CryptoDevs',
    siteUrl: '#',
    image: '/container.webp',
    favorite: false,
  },
  {
    id: 5,
    title: 'ERC-20 Token Creation',
    rating: 4.9,
    price: 720,
    tag: 'Tokens',
    description:
      'Development and deployment of custom ERC-20 standard fungible tokens for projects and ecosystems.',
    siteName: 'TokenFactory',
    siteUrl: '#',
    image: '/rectangle_9.webp',
    favorite: true,
  },
  {
    id: 6,
    title: 'Blockchain Consulting',
    rating: 5.0,
    price: 1500,
    tag: 'Strategy',
    description:
      'Strategic advisory for companies looking to implement blockchain and Web3 solutions in their business models.',
    siteName: 'SecureChain',
    siteUrl: '#',
    image: '/rectangle.webp',
    favorite: false,
  },
  {
    id: 7,
    title: 'NFT Marketplace Development',
    rating: 4.8,
    price: 2500,
    tag: 'NFT',
    description:
      'Building marketplace platforms for buying, selling and exchanging Non-Fungible Tokens (NFTs).',
    siteName: 'PixelPerfect',
    siteUrl: '#',
    image: '/container.webp',
    favorite: false,
  },
  {
    id: 8,
    title: 'DeFi Treasury Management',
    rating: 4.9,
    price: 1800,
    tag: 'DeFi',
    description:
      'Strategies and tools for optimized management of digital assets in decentralized finance protocols.',
    siteName: 'TokenFactory',
    siteUrl: '#',
    image: '/rectangle.webp',
    favorite: false,
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
}

const ServicesSection = () => {
  const [filter, setFilter] = useState('popular')
  const [favorites, setFavorites] = useState(
    mockServices.reduce((acc, service) => {
      acc[service.id] = service.favorite
      return acc
    }, {})
  )

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const sortedServices = useMemo(() => {
    const services = [...mockServices]
    switch (filter) {
      case 'popular':
        return services.sort((a, b) => b.rating - a.rating)
      case 'recent':
        return services.sort((a, b) => b.id - a.id)
      case 'price':
        return services.sort((a, b) => a.price - b.price)
      default:
        return services
    }
  }, [filter])

  return (
    <motion.section
      className='py-6 px-2 sm:px-8 lg:px-10 w-full overflow-hidden'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className='max-w-[90rem] mx-auto'>
        <div className='flex justify-between items-center mb-10'>
          <div className='relative'>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className='appearance-none border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-rwa focus:border-rwa block w-full pl-4 pr-10 py-2.5'
            >
              <option value='popular'>Popular</option>
              <option value='recent'>Recent</option>
              <option value='price'>Price</option>
            </select>
            <FaAngleDown className='absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none' />
          </div>
          <button className='flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-800 rounded-lg text-sm hover:border-rwa hover:text-rwa transition-colors duration-300'>
            <IoFilter />
            <span>Filters</span>
          </button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              className='bg-white rounded-lg shadow-xl flex flex-col transition-transform duration-300 hover:-translate-y-2'
              custom={index}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className='relative h-48 rounded-t-lg overflow-hidden'>
                <img
                  src={service.image}
                  alt={service.title}
                  className='w-full h-full object-cover'
                />
                <button
                  onClick={() => toggleFavorite(service.id)}
                  className={`absolute top-0 right-0 p-3 z-10 transition-all duration-300 backdrop-blur-3xl bg-black/20 rounded-bl-lg ${
                    favorites[service.id] ? 'text-rwa' : 'text-white'
                  } hover:scale-125 active:scale-100 [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]`}
                  aria-label={
                    favorites[service.id]
                      ? 'Quitar de favoritos'
                      : 'Añadir a favoritos'
                  }
                >
                  <FaRegHeart size={22} />
                </button>
              </div>

              <div className='p-4 flex flex-col flex-grow text-gray-800'>
                <div className='flex justify-between items-start'>
                  <h3 className='font-bold text-base text-rwa pr-2'>
                    {service.title}
                  </h3>
                  <div className='flex items-center gap-1 flex-shrink-0'>
                    <FaStar className='text-rwa text-lg' />
                    <span className='text-lg'>{service.rating.toFixed(1)}</span>
                  </div>
                </div>

                <div className='flex items-center gap-2 mt-2'>
                  <p className='font-bold text-gray-900 text-base'>
                    ${service.price}
                  </p>
                  <span className='bg-rwa/10 text-rwa text-xs font-semibold px-2 py-0.5 rounded-full'>
                    {service.tag}
                  </span>
                </div>

                <div className='mt-3 flex-grow'>
                  <div className='relative group w-fit'>
                    <p className='text-gray-600 text-sm line-clamp-2'>
                      {service.description}
                    </p>
                    <div className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-sm bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none z-10'>
                      {service.description}
                      <div className='absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-900' />
                    </div>
                  </div>
                </div>

                <div className='border-t border-gray-200 mt-4 pt-3 flex justify-between items-center text-sm text-gray-500'>
                  <span>{service.siteName}</span>
                  <a
                    href={service.siteUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-rwa hover:underline'
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='text-center mt-16'>
          <button className='bg-rwa text-white font-bold px-16 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-rwa/20'>
            All Services
          </button>
        </div>
      </div>
    </motion.section>
  )
}

export default ServicesSection

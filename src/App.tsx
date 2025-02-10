import { motion } from "framer-motion";
import { FaTelegram, FaChartLine, FaLock, FaUsers } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  // Animation variants for floating effect
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Stagger animation for cards
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-mega-dark to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image 2.jpg"
            alt="background"
            className="w-full h-full object-cover opacity-50"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-mega-dark/80 to-black"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0.3,
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-1.5 h-1.5 bg-mega-yellow rounded-full blur-[1px]"
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              {...floatingAnimation}
              className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-mega-yellow to-yellow-500 text-transparent bg-clip-text"
            >
              MEGABNB
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-12 text-gray-300"
            >
              The next generation of decentralized finance on the BNB Chain
            </motion.p>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-mega-yellow text-mega-dark rounded-xl font-bold text-lg shadow-lg shadow-mega-yellow/20 transition-all duration-300"
              >
                Buy $MBNB
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-bold text-lg border border-white/20 transition-all duration-300"
              >
                View Chart
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img
                  src="/image 1.jpg"
                  alt="About MEGABNB"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-mega-yellow/20 rounded-2xl"></div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-mega-yellow to-yellow-500 text-transparent bg-clip-text">
                About MEGABNB
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                MEGABNB represents the next evolution in decentralized finance
                on the BNB Chain. Built with security and community growth in
                mind, our protocol introduces innovative tokenomics and utility
                that benefit long-term holders.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our mission is to create a sustainable ecosystem that rewards
                holders while maintaining strong liquidity and market stability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with hover effects */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: FaChartLine,
                title: "Market Cap",
                value: "$-",
                description: "Growing steadily with strong community support",
              },
              {
                icon: FaUsers,
                title: "Holders",
                value: "-",
                description: "Active and engaged community members",
              },
              {
                icon: FaLock,
                title: "Liquidity",
                value: "Locked",
                description: "Ensuring long-term stability and security",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 transition-all duration-300"
              >
                <motion.div
                  className="flex flex-col gap-4"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <stat.icon className="text-mega-yellow text-3xl" />
                    </motion.div>
                    <div>
                      <h3 className="text-gray-400 text-sm">{stat.title}</h3>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-mega-yellow to-yellow-500 text-transparent bg-clip-text"
          >
            Tokenomics
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Total Supply", value: "1,000,000" },
              { title: "Buy Tax", value: "0%" },
              { title: "Sell Tax", value: "0%" },
              { title: "Max Wallet", value: "2%" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mega-yellow/50 transition-colors"
              >
                <h3 className="text-gray-400 mb-2">{item.title}</h3>
                <p className="text-2xl font-bold">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://x.com/megabnb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-mega-yellow transition-colors"
              >
                <FaXTwitter />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://t.me/megabnbcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-mega-yellow transition-colors"
              >
                <FaTelegram />
              </motion.a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 MEGABNB. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

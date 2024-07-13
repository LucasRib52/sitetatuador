import { contactData } from '../data';
import { FaWhatsapp } from 'react-icons/fa';
// framer motion
import { motion } from 'framer-motion';
// animation
import { fadeIn } from '../variants';

export default function Contact() {
  // destructure contact data
  const { title, info } = contactData;

  const startWhatsAppChat = () => {
    const phoneNumber = '+5521965077687';  // Seu número de WhatsApp aqui
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      'Olá Sander, vim pelo Google e quero fazer uns orçamentos...'
    )}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className="section bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16 items-center">
          {/* text */}
          <motion.div
            variants={fadeIn('right')}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 text-gray-900"
          >
            {/* title */}
            <h2 className="text-4xl font-bold mb-8">{title}</h2>
            {/* information */}
            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
              {info.map((item, i) => {
                // destructure data from item
                const { title, subtitle, address, phone, email, link, cel } = item;

                return (
                  <div key={i}>
                    {/* title */}
                    <div className="mb-3 text-xl font-medium uppercase font-primary">
                      {title}
                    </div>
                    {/* subtitle */}
                    <div className="mb-6 text-gray-700 leading-relaxed tracking-wide">
                      {subtitle}
                    </div>
                    {/* contact */}
                    <div className="flex flex-col mb-8 gap-y-3">
                      <div className="flex items-center gap-[10px]">
                        <div>{address.icon}</div>
                        <div className="font-medium">{address.name}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>{phone.icon}</div>
                        <div className="font-medium">{phone.number}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>{cel.icon}</div>
                        <div className="font-medium">{cel.number}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>{email.icon}</div>
                        <div className="font-medium">{email.address}</div>
                      </div>
                    </div>
                    {/* get location link */}
                    <a
                      className="font-medium border-b border-gray-900 pb-[5px] hover:text-gray-600 transition-colors duration-300"
                      href="#"
                    >
                      {link}
                    </a>
                  </div>
                );
              })}
            </div>
          </motion.div>
          {/* button */}
          <motion.div
            variants={fadeIn('left')}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 xl:pl-[40px] flex justify-center items-center"
          >
            <button
              onClick={startWhatsAppChat}
              className="btn btn-lg rounded-full shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-110"
              style={{
                padding: '2rem 4rem',
                fontSize: '2rem',
                backgroundColor: '#25D366', // Cor do WhatsApp
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
              }}
            >
              <FaWhatsapp size={36} className="mr-4" />
              Fale Conosco no WhatsApp
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react'; 
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import '../testimonialSlider.css';
import { testimonialData, saveComment } from '../data';
import { fadeIn } from '../variants';

export default function Testimonial() {
  const [comments, setComments] = useState(testimonialData); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, comment } = event.target.elements;
    const newComment = {
      name: name.value,
      message: comment.value,
    };
    saveComment(newComment); // Salvar no localStorage
    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    event.target.reset();
  };

  return (
    <motion.section
      className="py-[40px] lg:pb-[160px] lg:pt-0"
      variants={fadeIn('up')}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
      id="testimonial"
    >
      <div className="container mx-auto">
        <Swiper
          pagination={{ dynamicBullets: true, clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {comments.map((slide, index) => {
            const { quoteImg, message, name } = slide;

            return (
              <SwiperSlide key={index}>
                <div className="max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]">
                  {quoteImg && (
                    <div className="w-[154px] h-[109px] mb-5">
                      <img src={quoteImg} alt="Quote Icon" />
                    </div>
                  )}
                  <div className="flex-1 lg:mt-[54px]">
                    <div className="text-2xl lg:text-[36px] mb-6 lg:mb-12">
                      {message}
                    </div>
                    <div className="flex items-center text-xl lg:text-2xl font-primary">
                      <div className="font-semibold">{name}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        
        {/* Formulário para adicionar novos comentários */}
        <form onSubmit={handleSubmit} className="my-8">
          <input type="text" name="name" placeholder="Seu nome" required className="block w-full px-4 py-2 mb-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          <textarea name="comment" placeholder="Seu comentário" required className="block w-full px-4 py-2 mb-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          <button type="submit" className="block w-full px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Enviar Comentário</button>
        </form>
      </div>
    </motion.section>
  );
}

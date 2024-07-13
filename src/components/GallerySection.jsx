import { useState, useEffect } from 'react';
import { galleryData } from '../data';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';

export default function GallerySection() {
  const [currentCategory, setCurrentCategory] = useState('Realismo');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const { categories } = galleryData;
  const categoryNames = Object.keys(categories);
  const imagesPerPage = 3;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define como móvel se a largura da tela for menor ou igual a 768px
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrevImage = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? Math.max(categories[currentCategory].length - imagesPerPage, 0) : prevIndex - imagesPerPage
    );
  };

  const handleNextImage = () => {
    setCurrentIndex(prevIndex =>
      (prevIndex + imagesPerPage >= categories[currentCategory].length) ? 0 : prevIndex + imagesPerPage
    );
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentIndex(0); // Resetar para a primeira imagem da nova categoria
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const displayedImages = categories[currentCategory].slice(currentIndex, currentIndex + imagesPerPage);

  return (
    <section id="gallery" className="relative bg-[#f9f9f9] section mt-10 p-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Galeria</h2>
        <div className={`text-center mb-6 ${isMobile ? 'space-y-2' : 'space-y-0'}`}>
          {categoryNames.map((category, index) => (
            <button 
              key={index} 
              onClick={() => handleCategoryChange(category)} 
              className={`mr-4 text-lg md:text-xl lg:text-2xl px-4 py-2 rounded-full transition-colors duration-200 ${
                currentCategory === category ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-red-500 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative flex justify-center items-center">
          {categories[currentCategory] && (
            <>
              <div className="flex flex-wrap justify-center items-center gap-4">
                {displayedImages.map((image, idx) => (
                  <img
                    key={idx}
                    src={image.src}
                    alt={`Gallery image ${idx}`}
                    className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                    onClick={() => openModal(image)}
                  />
                ))}
              </div>
              {categories[currentCategory].length > imagesPerPage && (
                <>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <button onClick={handlePrevImage} className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                      <AiOutlineArrowLeft size={24} />
                    </button>
                  </div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <button onClick={handleNextImage} className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                      <AiOutlineArrowRight size={24} />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <img src={modalImage.src} alt="Modal" className="max-w-full max-h-full object-contain rounded-lg" />
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

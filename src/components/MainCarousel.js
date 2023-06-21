import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './MainCarousel.css';

const MainCarousel = (props) => {
  const slides = [
    {
      image: 'https://react-shop-oinochoe.vercel.app/img_shop_fashion.jpeg',
      title: '물빠진 청바지!',
      description: '이제 막 도착한 패션 청바지를 구경해 보세요.',
      link: '/fashion',
    },
    {
      image: 'https://react-shop-oinochoe.vercel.app/img_shop_digital.jpeg',
      title: '신속한 업무처리!',
      description: '다양한 디지털 상품을 둘러보세요.',
      link: '/digital',
    },
    {
      image: 'https://react-shop-oinochoe.vercel.app/img_shop_grocery.jpeg',
      title: '신선한 식품!',
      description: '농장 직배송으로 더욱 신선한 식료품을 만나보세요.',
      link: '/grocery',
    },
  ];

  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      showArrows={true}
      emulateTouch={true}
      autoPlay={true}
      showStatus={false}
      className='carousel-container'
    >
      {slides.map((slide, index) => (
        <div key={index} className='carousel-slide'>
          <div className='carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10'>
            <h2 className='text-2xl lg:text-4xl font-bold text-white'>
              {slide.title}
            </h2>
            <p className='my-2 text-white'>{slide.description}</p>
            <a className='btn btn-sm lg:btn-md mt-3' href={slide.link}>
              바로가기
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 ml-1'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
          </div>
          <img src={slide.image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default MainCarousel;

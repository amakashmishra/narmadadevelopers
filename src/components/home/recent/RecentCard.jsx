import React, { useState } from "react"
import { list } from "../../data/Data"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Zoom, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/zoom"
import "swiper/css/navigation" // <- Added for nav arrows
import "./recent.css"

const RecentCard = () => {
  const [selectedImages, setSelectedImages] = useState([])
  const [showModal, setShowModal] = useState(false)

  const openGallery = (images) => {
    setSelectedImages(images)
    setShowModal(true)
  }

  const closeGallery = () => {
    setShowModal(false)
    setSelectedImages([])
  }

  return (
    <>
      <div className='recent content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, cover1, cover2, cover3, cover4, location, name } = val
          const images = [cover, cover1, cover2, cover3, cover4].filter(Boolean)

          return (
            <div
              className='box shadow'
              key={index}
              onClick={() => openGallery(images)}
              style={{ cursor: "pointer" }}
            >
              <div className='img'>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 + index * 600, disableOnInteraction: false }}
                  loop={images.length > 1}
                  spaceBetween={10}
                >
                  {images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt={`cover${i + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className='text'>
                <h4>{name}</h4>
                <p>{location}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Modal */}
      {showModal && (
        <div className='modal-overlay' onClick={closeGallery}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='close-btn' onClick={closeGallery}>✕</button>
            <Swiper
              modules={[Pagination, Zoom, Navigation]}
              pagination={{ clickable: true }}
              navigation={true}
              zoom={true}
              loop={selectedImages.length > 1}
              className='zoom-swiper'
            >
              {selectedImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="swiper-zoom-container">
                    <img src={img} alt={`zoom-img-${idx}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  )
}

export default RecentCard

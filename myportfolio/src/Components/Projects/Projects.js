import React from "react";
import Vpnprj from "../ptjts/VPN";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import prj from '../ptjts/VPN'
import ProjectItem from "../item/projectItem";
import 'swiper/swiper-bundle.min.css';
import "./Project.css"

// install Swiper modules
SwiperCore.use([Navigation]);

export default function Projects() {
    
    
    return(
        <>
      <div className='one'><header classname="title" style={{fontFamily:"times new roman"}}>Recent projects</header></div>
      <div className="projects__allItems">
        <Swiper
        spaceBetween={30}
        slidesPerView={1} navigation
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 3,
          },
        }}>
          {prj.map((prj, index) => {
            if(index>= 4) return;
            return <SwiperSlide key={prj.id}>
            <ProjectItem
              title={prj.name}
              img={prj.img}
              desc={prj.desc}
            />
          </SwiperSlide>
          })}
        </Swiper>
        </div>
    </>
        

    )
    
}

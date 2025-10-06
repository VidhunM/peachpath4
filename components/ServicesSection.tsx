import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Service images
import humanCapitalImg from "@/assets/Human.jpeg";
import csrImg from "@/assets/csr.jpeg";
import peachpodImg from "/src/assets/peachpod.jpeg";

// Import component sections for popup content
import HumanCapitalSection from "./HumanCapitalSection";
import CSRPartnerSection from "./CSRPartnerSection";
import OurPromiseSection from "./OurPromiseSection";
import ImpactEchoesSection from "./ImpactEchoesSection";
import PeachPodSection from "./PeachPodSection";
import NextCtaSection from "./NextCtaSection";

const services = [
  {
    id: 1,
    title: "",
    image: humanCapitalImg,
    icon: humanCapitalImg,
    type: "swipeable",
  },
  {
    id: 2,
    title: "",
    image: peachpodImg,
    icon: peachpodImg,
    type: "scrollable-peachpod",
  },
  {
    id: 3,
    title: "",
    image: csrImg,
    icon: csrImg,
    type: "scrollable",
  },
];

const ServicesSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const swiperRef = useRef(null);

  const handleServiceClick = (service: any) => {
    setIsLoading(true);
    setSelectedService(service);
    setOpen(true);
    // Simulate loading for better UX
    setTimeout(() => setIsLoading(false), 100);
  };

  return (
    <section
      id="services"
      className="pt-2 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-10 pb-6 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-20 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2
          className="font-bold tracking-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 4vw, 4rem)",
            lineHeight: "120%",
            color: "#30404D",
          }}
        >
          Our Services
        </h2>

        {/* Swiper */}
        <div className="relative swiper-container">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}


            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 12,
                centeredSlides: true,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
              },
              475: {
                slidesPerView: 1,
                spaceBetween: 16,
                centeredSlides: true,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
                centeredSlides: false,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
                centeredSlides: false,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
                centeredSlides: false,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
              },
            }}
            className="pb-8 sm:pb-10 md:pb-12"
            watchSlidesProgress={true}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                                                  <Card
                  className="service-card bg-white border-0 mx-auto w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[480px] active:scale-95 transition-transform duration-150"
                  onClick={() => handleServiceClick(service)}
                  onTouchStart={(e) => {
                    e.currentTarget.style.transform = 'scale(0.98)';
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <CardContent className="card-content p-4 sm:p-6 md:p-8 h-full min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px]">
                    <div className={`service-image ${service.id === 1 || service.id === 2 || service.id === 3 ? 'w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56' : 'w-32 h-32 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36'} mb-3 sm:mb-4 md:mb-6 flex-shrink-0`}>
                      {typeof service.icon === 'string' && service.icon.includes('.') ? (
                        <img 
                          src={service.icon} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#F17A57] to-[#F17A57]/80 rounded-full flex items-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                          {service.icon}
                        </div>
                      )}
                    </div>
                    {service.title && (
                      <h3
                        className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#30404D] mb-2 sm:mb-3 text-center"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {service.title}
                      </h3>
                    )}
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          



        </div>

        {/* Popup / Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="mobile-dialog sm:max-w-3xl lg:max-w-5xl xl:max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden p-0">
            {isLoading ? (
              <div className="flex items-center justify-center min-h-[200px] p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F17A57]"></div>
              </div>
            ) : selectedService ? (
              <>
                {selectedService.type === "swipeable" && (
                  <div className="overflow-y-auto max-h-[90vh]">
                    <DialogHeader className="dialog-header p-3 sm:p-4 md:p-6 pb-0 relative">
                      {/* Exit Icon */}
                      <button
                        onClick={() => setOpen(false)}
                        className="close-button absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-20 touch-manipulation"
                        aria-label="Close dialog"
                      >
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      
                      <div className="flex flex-col items-center text-center mb-2 sm:mb-3 md:mb-4 pt-2">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg mb-2 sm:mb-3">
                          <img 
                            src={selectedService.image} 
                            alt="Human Capital"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <DialogTitle
                          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#30404D]"
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          Human Capital
                        </DialogTitle>
                      </div>
                    </DialogHeader>
                    <div className="space-y-0">
                    <HumanCapitalSection />
                    </div>
                  </div>
                )}

                {selectedService.type === "scrollable" && (
                  <div className="overflow-y-auto max-h-[90vh]">
                    <DialogHeader className="dialog-header p-3 sm:p-4 md:p-6 pb-0 relative">
                      {/* Exit Icon */}
                      <button
                        onClick={() => setOpen(false)}
                        className="close-button absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-20 touch-manipulation"
                        aria-label="Close dialog"
                      >
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      
                      <div className="flex flex-col items-center text-center mb-2 sm:mb-3 md:mb-4 pt-2">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg mb-2 sm:mb-3">
                          <img 
                            src={selectedService.image} 
                            alt="CSR Partner"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <DialogTitle
                          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#30404D]"
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          CSR Partner
                        </DialogTitle>
                      </div>
                    </DialogHeader>
                    <div className="space-y-0">
                      <CSRPartnerSection />
                      <OurPromiseSection />
                      <ImpactEchoesSection />
                    </div>
                  </div>
                )}

                {selectedService.type === "scrollable-peachpod" && (
                  <div className="overflow-y-auto max-h-[90vh]">
                    <DialogHeader className="dialog-header p-3 sm:p-4 md:p-6 pb-0 relative">
                      {/* Exit Icon */}
                      <button
                        onClick={() => setOpen(false)}
                        className="close-button absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-20 touch-manipulation"
                        aria-label="Close dialog"
                      >
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      
                      <div className="flex flex-col items-center text-center mb-2 sm:mb-3 md:mb-4 pt-2">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg mb-2 sm:mb-3">
                          <img 
                            src={selectedService.image} 
                            alt="PeachPod"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <DialogTitle
                          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#30404D]"
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          Peachpod
                        </DialogTitle>
                      </div>
                    </DialogHeader>
                    <div className="space-y-0">
                      <PeachPodSection />
                      <NextCtaSection />
                    </div>
                  </div>
                )}
              </>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ServicesSection;

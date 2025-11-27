import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ringLight from "@/assets/productos/ring-light-setup.jpg";
import cameraMonitor from "@/assets/productos/camera-monitor.jpg";
import productPhoto from "@/assets/productos/product-photo.jpg";
import studioRecording from "@/assets/productos/studio-recording.jpg";

const products = [
  { src: ringLight, alt: "Ring Light Setup" },
  { src: cameraMonitor, alt: "Camera Monitor" },
  { src: productPhoto, alt: "Product Photography" },
  { src: studioRecording, alt: "Studio Recording" },
];

const ProductCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 20 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <section className="relative py-16 md:py-20 overflow-hidden sand-texture" style={{ backgroundColor: '#272640' }}>
      <div className="container mx-auto px-6">
        <div className="overflow-hidden w-[96%] md:w-[50%] mx-auto" ref={emblaRef}>
          <div className="flex">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 relative h-[70vh] md:h-[30vh]"
              >
                <img
                  src={product.src}
                  alt={product.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="w-2 h-2 rounded-full bg-gray-400 hover:bg-gray-600 transition-colors"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;

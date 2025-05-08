'use client';
import Image from 'next/image';

interface ImageGridProps {
  images: { src: string; alt: string; title: string }[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
      {images.map((image, index) => (
        <div key={index} className="group relative overflow-hidden rounded-xl aspect-square">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h4 className="text-white text-xl font-bold">{image.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
import React from 'react';
import Image from 'next/image';

const ModelSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="relative w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative h-96 md:h-[500px]">
          <div className="h-full bg-gradient-to-br from-amber-100 to-blue-200 flex items-center justify-between px-8 md:px-16">
            <div className="flex-1 max-w-lg pr-8">
              <div className="mb-2">
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                  NEW FEATURE MODEL
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                WAN 2.2
              </h1>
              
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
                Image generation
              </h2>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.
              </p>
              
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Try WAN 2.2
              </button>
            </div>

            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent rounded-2xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl transform -rotate-2"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-105">
                  <Image
                    src="https://s.krea.ai/announce-wan-2-2-image.webp"
                    alt="WAN 2.2"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative h-96 md:h-[500px]">
          <div className="h-full bg-gradient-to-br from-blue-100 to-amber-100 flex items-center justify-between px-8 md:px-16">
            <div className="flex-1 max-w-lg pr-8">
              <div className="mb-2">
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                  OPEN SOURCE MODEL
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Open Source
              </h1>
              
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
                FLUX.1 Krea
              </h2>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                We are making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.
              </p>
              
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Learn More
              </button>
            </div>

            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent rounded-2xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl transform -rotate-2"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-105">
                  <Image
                    src="/krea-whiskey.png"
                    alt="FLUX.1 Krea"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelSection;
import React from 'react';

interface Tool {
  id: string;
  name: string;
  description: string;
  isNew?: boolean;
  icon: string;
  color: string;
}

const tools: Tool[] = [
  {
    id: 'image',
    name: 'Image',
    description: 'Generate images with custom prompts, Flux and LoRA.',
    isNew: true,
    icon: '🖼️',
    color: 'bg-gray-500'
  },
  {
    id: 'video',
    name: 'Video',
    description: 'Generate videos with Haiku, Pika, Runway, Luma, and more.',
    icon: '🎬',
    color: 'bg-orange-500'
  },
  {
    id: 'realtime',
    name: 'Realtime',
    description: 'Realtime AI rendering in a canvas. Instant feedback loops.',
    icon: '⚡',
    color: 'bg-blue-500'
  },
  {
    id: 'enhancer',
    name: 'Enhancer',
    description: 'Upscale and enhance images and videos up to 2.2K.',
    isNew: true,
    icon: '✨',
    color: 'bg-black'
  },
  {
    id: 'edit',
    name: 'Edit',
    description: 'Add objects, change style, or remove and replace generations.',
    isNew: true,
    icon: '✏️',
    color: 'bg-purple-500'
  },
  {
    id: 'video-upscale',
    name: 'Video Upscale',
    description: 'Lip sync any video to any audio.',
    isNew: true,
    icon: '📹',
    color: 'bg-green-600'
  },
  {
    id: 'motion-transfer',
    name: 'Motion Transfer',
    description: 'Transfer motion to images and animate characters.',
    isNew: true,
    icon: '🕺',
    color: 'bg-gray-900'
  },
  {
    id: 'train',
    name: 'Train',
    description: 'Teach Krea to replicate your style, products, or characters.',
    icon: '🎯',
    color: 'bg-pink-500'
  }
];

const GenerateTools: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Generate</h2>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Show all
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className=" p-4 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 ${tool.color} rounded-md flex items-center justify-center text-white text-sm`}>
                  {tool.icon}
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                  {tool.isNew && (
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  )}
                </div>
              </div>
              <button className="text-gray-500 bg-gray-300 text-sm px-2 py-1 rounded-full">
                Open
              </button>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateTools;
import ModelSection from './components/ModelSection';
import GenerateTools from './components/GeneralTool';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className='container mx-auto px-4'>
        <ModelSection />
        <GenerateTools />
      </div>
    </div>
  );
}

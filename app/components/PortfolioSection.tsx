interface Project {
  id: number;
  title: string;
  description1: string;
  description2: string;
  image: string;
  imageAlt: string;
}

interface PortfolioSectionProps {
  project: Project;
  index: number;
}

export default function PortfolioSection({ project, index }: PortfolioSectionProps) {
  return (
    <section 
      key={project.id} 
      id={'Portfolio'} 
      className={`${index % 2 === 0 ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} py-20`}
    >
      <div className={`container mx-auto px-4 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'bg-gray-900' : 'bg-white'}`}>
          <img 
            src={project.image}
            alt={project.imageAlt}
            className="rounded-lg w-full max-h-[400px] object-contain shadow-xl"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">{project.title}</h2>
          <div className={`${index % 2 === 0 ? 'text-gray-300' : ''} text-lg space-y-4`}>
            <p>{project.description1}</p>
            <p>{project.description2}</p>
          </div>
        </div>
      </div>
    </section>
  );
} 
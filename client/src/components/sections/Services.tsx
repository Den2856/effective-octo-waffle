import Card from '../ui/Card';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 p-10 gap-6">
      <ServiceCard 
        title="Search Engine Optimization"
        imageSrc="/service/1.png"
        bgColor="bg-grey"
        textBgColor="bg-primary"
      />
      
      <ServiceCard 
        title="Pay-per-click Advertising"
        imageSrc="/service/2.png"
        bgColor="bg-primary"
        textBgColor="bg-grey"
      />
      
      <ServiceCard 
        title="Social Media Marketing"
        imageSrc="/service/3.png"
        bgColor="bg-dark"
        textBgColor="bg-white"
      />
      
      <ServiceCard 
        title="Email Marketing"
        imageSrc="/service/4.png"
        bgColor="bg-grey"
        textBgColor="bg-primary" 
      />
      
      <ServiceCard 
        title="Content Creation"
        imageSrc="/service/5.png"
        bgColor="bg-primary"
        textBgColor="bg-grey"
      />
      
      <ServiceCard 
        title="Analytics and Tracking"
        imageSrc="/service/6.png"
        bgColor="bg-dark"
        textBgColor="bg-primary"
      />
      <div className="md:col-span-2 col-span-1">
        <Card 
          title="Let’s make things happen"
          buttonText="Get your free proposal"
          buttonLink="#proposal"
          icon="/abstract.png"
        />
    </div>
    </div>
  );
};

export default Services;

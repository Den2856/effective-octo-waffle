import React from 'react';
import LearnMoreButton from './LearnMoreButton';

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  bgColor: string;
  textBgColor?: string;
  titleClassName?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  imageSrc, 
  bgColor, 
  textBgColor,
  titleClassName = ""
}) => {

  const getButtonColors = () => {
    switch (bgColor) {
      case 'bg-grey':
        return {
          iconColor: 'bg-dark',
          textColor: 'text-dark',
          arrowColor: '#B9FF66'
        };
      case 'bg-primary':
        return {
          iconColor: 'bg-dark',
          textColor: 'text-dark',
          arrowColor: '#B9FF66'
        };
      case 'bg-dark':
        return {
          iconColor: 'bg-grey',
          textColor: 'text-grey',
          arrowColor: '#191A23'
        };
      default:
        return {
          iconColor: 'bg-blue-400',
          textColor: 'text-white',
          arrowColor: 'blue'
        };
    }
  };

  const { iconColor, textColor, arrowColor } = getButtonColors();

  return (
    <div className={`flex flex-row lg:flex-row gap-4 items-center p-6 rounded-[14px] ${bgColor} w-full shadow-lg hover:shadow-xl transition-all duration-300`}>
      <div className="flex flex-col flex-1">
        <h3 className={`text-3xl font-bold text-black mb-16 w-fit rounded-[14px] p-1 ${titleClassName} ${textBgColor}`}>
          {title.includes('\n') 
            ? title.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))
            : title
          }
        </h3>
        <LearnMoreButton
          text="Learn more"
          iconColor={iconColor}
          textColor={textColor}
          arrowColor={arrowColor}
          link="#learn-more"
        />
      </div>

      <div className="flex justify-center lg:justify-end mt-4 lg:mt-0 lg:w-1/3">
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default ServiceCard;

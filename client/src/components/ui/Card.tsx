import React from 'react';

interface CardProps {
  title: string;
  buttonText: string;
  buttonLink: string;
  icon?: string;
}

const Card: React.FC<CardProps> = ({ title,  buttonText, buttonLink, icon }) => {
  return (
    <div className="flex items-center justify-between p-8 bg-grey rounded-[45px] shadow-lg">

      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl font-bold text-dark">
          {title}
        </h2>
        <p className="text-lg text-gray-700">
          Contact us today to learn more about how our digital <br /> marketing services can help your business grow and <b /> succeed online.
        </p>
        <a href={buttonLink} className="bg-dark text-white w-fit px-6 py-3 rounded-md text-lg hover:text-dark hover:bg-primary transition duration-300">
          {buttonText}
        </a>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4">
        {icon && <img className="sm:hidden" src={icon} alt="graphic" />}
      </div>
    </div>
  );
};

export default Card;

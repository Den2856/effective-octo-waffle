import React from 'react';

interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <div className="px-6 py-8 lg:px-10 lg:py-16 flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold w-fit text-dark bg-primary px-3 py-1 rounded-[14px] text-center lg:text-left">
        {title}
      </h2>

      <p className="text-sm sm:text-base lg:text-lg text-dark text-center  lg:text-left mt-4 lg:mt-0">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;

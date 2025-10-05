
const LogoBlock = () => {
  
  const logos = [1, 2, 3, 4, 5, 6];
  
  return (
    <div className="flex flex-wrap p-10 justify-around items-center space-x-2">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={`/company/${logo}.png`}
          alt={`logo ${logo}`}
          className='w-31 h-12 object-contain hover:opacity-80 transition-all duration-300' 
        />
      ))}
    </div>
  )
}

export default LogoBlock

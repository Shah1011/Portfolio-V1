const SpecialButton = ({ href, buttonText, className, padding, onClick }) => {
    return (
      <a
        href={href}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative inline-block text-md group ${className}`}
      >
        <span
          className={`relative z-10 block overflow-hidden font-medium leading-tight text-primary1 transition-transform duration-100 ease-linear border-[1px] border-primary1 rounded-lg group-hover:text-primary2 group-hover:translate-x-1 group-hover:translate-y-1 ${padding}`}
        >
          <span className="absolute inset-0 w-full h-full rounded-lg bg-[#0a192f]"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-100 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#0a192f] group-hover:-rotate-180 ease"></span>
          <span className="relative">{buttonText}</span>
        </span>
        <span
          className='absolute bottom-0 right-0 -mr-1 -mb-1 w-full h-full transition-transform duration-200 ease-linear bg-primary1 rounded-lg' 
          data-rounded="rounded-lg"
        ></span>
      </a>
    );
  };
  
  export default SpecialButton;
  
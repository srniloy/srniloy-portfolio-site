export function PortfolioLogo({ className = "w-10 h-10", color = "#4f46e5" }: { 
    className?: string;
    color?: string; 
  }) {
    return (
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon with indigo-600 stroke */}
        <path
          d="M50 5L87.5 25V75L50 95L12.5 75V25L50 5Z"
          stroke={color}
          strokeWidth="6"
          strokeLinejoin="round"
        />
        
        {/* Letter N with indigo-600 stroke */}
        <path
          d="M35 30V70M35 30L65 70M65 30V70"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
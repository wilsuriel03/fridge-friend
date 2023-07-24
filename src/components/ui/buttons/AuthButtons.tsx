import { CgArrowRight } from 'react-icons/cg';

interface AuthButtonsProps {
  className?: string;
  layout?: 'default' | 'compact';
}

export default function AuthButtons({
  className,
  layout = 'default',
}: AuthButtonsProps) {
  const buttonClasses = layout === 'default' ? 'px-3 py-1.5' : 'px-2 py-1';
  const textSize = layout === 'default' ? 'text-sm' : 'text-base';
  const flexDirection = layout === 'default' ? 'flex-row' : 'flex-col';
  const hiddenClasses = layout === 'default' ? 'hidden lg:flex' : '';
  const textColor =
    layout === 'default'
      ? 'text-primary-light hover:text-primary-dark'
      : 'text-white';

  return (
    <div className={`flex ${flexDirection} ${hiddenClasses} ${className}`}>
      <button className={`${textSize}  ${textColor}`}>Log In</button>
      <button
        className={`${textSize} ${buttonClasses} flex items-center text-white rounded-full bg-secondary hover:bg-secondary-dark transition-colors`}
      >
        Sign Up
        <CgArrowRight className="hidden lg:inline-block ml-2" size={18} />
      </button>
    </div>
  );
}

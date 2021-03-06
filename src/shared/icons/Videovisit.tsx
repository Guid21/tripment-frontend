import React, { FC } from 'react';
import IconProps from '../interfaces/icons';

const Videovisit: FC<IconProps> = (props) => {
  const { size = 32, fill = '#244D51', className, width, height } = props;

  return (
    <svg
      width={width || size}
      height={height || size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="#F5E585" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.0077 12.7636C21.5903 12.5823 21.1063 12.6609 20.7737 12.9676L19.333 14.3009V13.3329C19.333 12.2303 18.4363 11.3329 17.333 11.3329H11.333C10.2303 11.3329 9.33301 12.2303 9.33301 13.3329V18.6663C9.33301 19.7696 10.2303 20.6663 11.333 20.6663H17.333C18.4363 20.6663 19.333 19.7696 19.333 18.6663V17.6989L20.7737 19.0316C20.9877 19.2296 21.2643 19.3329 21.5463 19.3329C21.7017 19.3329 21.8583 19.3016 22.0077 19.2363C22.4137 19.0589 22.6663 18.6796 22.6663 18.2469V13.7529C22.6663 13.3203 22.4137 12.9409 22.0077 12.7636Z"
        fill={fill}
      />
    </svg>
  );
};

export default Videovisit;

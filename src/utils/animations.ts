import { keyframes } from '@emotion/react';

// Premium animations for LouFrank TV
export const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const pulseSlow = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
`;

export const floatSlow = keyframes`
  0% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-20px) translateX(10px); }
  100% { transform: translateY(0px) translateX(0px); }
`;

export const floatMedium = keyframes`
  0% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-15px) translateX(-10px); }
  100% { transform: translateY(0px) translateX(0px); }
`;

export const floatFast = keyframes`
  0% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-10px) translateX(15px); }
  100% { transform: translateY(0px) translateX(0px); }
`;

export const floatReverse = keyframes`
  0% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(15px) translateX(-10px); }
  100% { transform: translateY(0px) translateX(0px); }
`;

export const gradientSlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

// CSS classes for animations
export const animationClasses = {
  gradientFlow: {
    backgroundSize: '300% 300%',
    animation: `${gradientFlow} 8s ease infinite`,
  },
  pulseSlow: {
    animation: `${pulseSlow} 4s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
  },
  floatSlow: {
    animation: `${floatSlow} 20s ease-in-out infinite`,
  },
  floatMedium: {
    animation: `${floatMedium} 15s ease-in-out infinite`,
  },
  floatFast: {
    animation: `${floatFast} 10s ease-in-out infinite`,
  },
  floatReverse: {
    animation: `${floatReverse} 18s ease-in-out infinite`,
  },
  gradientSlow: {
    backgroundSize: '200% 200%',
    animation: `${gradientSlow} 15s ease infinite`,
  },
  scroll: {
    animation: `${scroll} 30s linear infinite`,
  },
};
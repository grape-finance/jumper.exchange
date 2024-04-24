'use client';
import type { CSSObject } from '@mui/material';
import {
  BackgroundGradientBottomLeft,
  BackgroundGradientBottomRight,
  BackgroundGradientContainer,
  BackgroundGradientTopCenter,
} from '.';

interface BackgroundGradientProps {
  styles?: CSSObject;
}

export const BackgroundGradient = ({ styles }: BackgroundGradientProps) => {
  return (
    <BackgroundGradientContainer sx={styles}>
      <img
        src='/assets/bg.jpg'
        style={{width:'100%', height:'100%'}}
        alt="logo"
      />
    </BackgroundGradientContainer>
  );
};

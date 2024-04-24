'use client';
import type { CSSObject } from '@mui/material';
import {
  BackgroundGradientBottomLeft,
  BackgroundGradientBottomRight,
  BackgroundGradientContainer,
  BackgroundGradientTopCenter,
} from '.';

import bg from '../../assets/bg.jpg'

interface BackgroundGradientProps {
  styles?: CSSObject;
}

export const BackgroundGradient = ({ styles }: BackgroundGradientProps) => {
  return (
    <BackgroundGradientContainer sx={styles}>
        <img
          style={{ opacity: 0.3 }}
          className="Preloader__background"
          src={bg}
          alt="bg"
        />
      {/* <BackgroundGradientBottomLeft />
      <BackgroundGradientBottomRight />
      <BackgroundGradientTopCenter /> */}
    </BackgroundGradientContainer>
  );
};

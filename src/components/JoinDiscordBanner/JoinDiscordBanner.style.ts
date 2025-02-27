import type { BoxProps, Breakpoint } from '@mui/material';
import { Box, Typography, alpha } from '@mui/material';

import { urbanist } from '@/fonts/fonts';
import { styled } from '@mui/material/styles';
import { IconButtonPrimary } from '../IconButton.style';

export interface DiscordBannerProps extends Omit<BoxProps, 'component'> {
  isArticlePage: boolean;
}

export const DiscordBanner = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isArticlePage',
})<DiscordBannerProps>(({ theme, isArticlePage }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  alignItems: 'center',
  backgroundColor:
    theme.palette.mode === 'light'
      ? alpha(theme.palette.white.main, 0.48)
      : alpha(theme.palette.white.main, 0.12),
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0px 2px 4px rgba(0, 0, 0, 0.08), 0px 8px 16px rgba(0, 0, 0, 0.16)'
      : '0px 2px 4px rgba(0, 0, 0, 0.08), 0px 8px 16px rgba(0, 0, 0, 0.08)',
  borderRadius: '32px',
  cursor: 'pointer',
  padding: theme.spacing(6),
  transition: 'background-color 250ms',
  margin: theme.spacing(6, 2),
  marginBottom: isArticlePage ? theme.spacing(14.5) : 0,
  '&:hover': {
    backgroundColor:
      theme.palette.mode === 'light'
        ? alpha(theme.palette.white.main, 1)
        : alpha(theme.palette.white.main, 0.2),
  },
  [theme.breakpoints.up('sm' as Breakpoint)]: {
    padding: theme.spacing(12, 8),
    margin: theme.spacing(8),
    marginBottom: isArticlePage ? theme.spacing(14.5) : theme.spacing(0),
    flexDirection: 'row',
    gap: theme.spacing(4),
  },
  [theme.breakpoints.up('md' as Breakpoint)]: {
    padding: theme.spacing(12, 8),
    marginTop: theme.spacing(12),
  },
  [theme.breakpoints.up('xl' as Breakpoint)]: {
    margin: isArticlePage
      ? `${theme.spacing(12, 'auto')}`
      : `${theme.spacing(12, 'auto')}`,
    marginBottom: isArticlePage ? theme.spacing(14.5) : 0,

    maxWidth: theme.breakpoints.values.xl,
  },
}));

export const DiscordBannerLabel = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontFamily: urbanist.style.fontFamily,
  fontSize: '32px',
  lineHeight: '44px',
  fontWeight: 700,
  [theme.breakpoints.up('sm' as Breakpoint)]: {
    fontSize: '40px',
    lineHeight: '56px',
    textDecoration: 'auto',
  },
}));

export const DiscordBannerButton = styled(IconButtonPrimary)<BoxProps>(
  ({ theme }) => ({
    display: 'flex',
  }),
);

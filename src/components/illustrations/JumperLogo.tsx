import { useTheme } from '@mui/material';

// brand-logo: "jumper" + jumper-icon
export const JumperLogo = () => {
  const theme = useTheme();
  const mainCol =
    theme.palette.mode === 'light'
      ? theme.palette.accent1.main
      : theme.palette.accent1Alt.main;
  const subCol = theme.palette.accent2.main;

  return (
    <>
      <img src="/assets/logo.png" alt="logo" height={70} />
    </>
  );
};

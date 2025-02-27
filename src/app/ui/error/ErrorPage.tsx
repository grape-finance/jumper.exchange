import { Button } from '@/components/Button/Button';
import { useTheme } from '@mui/material';

import { Discord } from '@/components/illustrations/Discord';
import { useAccounts } from '@/hooks/useAccounts';
import { useUserTracking } from '@/hooks/userTracking/useUserTracking';
import { EventTrackingTool } from '@/types/userTracking';

import {
  TrackingAction,
  TrackingCategory,
  TrackingEventParameter,
} from '@/const/trackingKeys';
import { DISCORD_URL } from '@/const/urls';
import { getContrastAlphaColor } from '@/utils/colors';
import { openInNewTab } from '@/utils/openInNewTab';
import { useTranslation } from 'react-i18next';
import {
  CenteredContainer,
  ErrorMessage,
  SupportMessage,
} from './ErrorPage.style';

interface FallbackErrorProps {
  reset: () => void;
}

const ErrorPage = ({ reset }: FallbackErrorProps) => {
  const { trackPageload, trackEvent } = useUserTracking();
  const theme = useTheme();
  const { t } = useTranslation();
  const { account } = useAccounts();
  return (
    <CenteredContainer>
      <ErrorMessage variant={'lifiBodyLarge'}>
        {t('error.message')}
      </ErrorMessage>
      <Button
        variant="primary"
        onClick={() => {
          trackEvent({
            category: TrackingCategory.Menu,
            label: 'click-discord-link',
            action: TrackingAction.OpenMenu,
            data: { [TrackingEventParameter.Menu]: 'lifi_discord' },
            disableTrackingTool: [
              EventTrackingTool.ARCx,
              EventTrackingTool.Cookie3,
            ],
          });
          trackPageload({
            source: TrackingCategory.Menu,
            destination: 'discord-lifi',
            url: DISCORD_URL,
            pageload: true,
            disableTrackingTool: [EventTrackingTool.Cookie3],
          });
          openInNewTab(DISCORD_URL);
        }}
        styles={{
          width: 'auto',
          margin: theme.spacing(1.5),
          gap: '8px',
          borderRadius: '24px',
          padding: theme.spacing(1),
          '> button:hover': {
            backgroundColor: getContrastAlphaColor(theme, '4%'),
          },
          '> button:hover svg': {
            fill:
              theme.palette.mode === 'light'
                ? theme.palette.grey[700]
                : theme.palette.grey[300],
          },
        }}
        fullWidth={true}
      >
        <Discord
          color={
            theme.palette.mode === 'dark'
              ? theme.palette.white.main
              : theme.palette.black.main
          }
        />
        <SupportMessage variant="lifiBodyMediumStrong" component="span">
          {t('navbar.navbarMenu.support')}
        </SupportMessage>
      </Button>
    </CenteredContainer>
  );
};

export default ErrorPage;

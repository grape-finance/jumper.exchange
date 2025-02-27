import { defaultSettings } from '@/config/config';
import type {
  SettingsProps,
  SettingsState,
  ThemeModesSupported,
} from '@/types/settings';
import type { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

// ----------------------------------------------------------------------

/*--  Use Zustand  --*/

export const useSettingsStore = createWithEqualityFn(
  persist(
    (set, get) => ({
      ...defaultSettings,
      setValue: (key: keyof SettingsProps, value: any) =>
        set(() => ({
          [key]: value,
        })),
      setValues: (values: { [x: string]: any }) =>
        set((state: SettingsProps) => {
          const updatedState: SettingsProps = { ...state };
          for (const key in values) {
            if (Object.hasOwn(state, key)) {
              updatedState[key] = values[key];
            }
          }
          return updatedState;
        }),

      // Mode
      setThemeMode: (mode: ThemeModesSupported) => {
        set({
          themeMode: mode,
        });
      },
      // Installed Wallets
      setClientWallets: (wallet: string) => {
        const clientWallets = (get() as SettingsProps)?.clientWallets;
        !clientWallets.includes(wallet) &&
          set({
            clientWallets: [...clientWallets, wallet],
          });
      },

      // Disable Feature Card
      setDisabledFeatureCard: (id: string) => {
        const disabledFeatureCards = (get() as SettingsProps)
          ?.disabledFeatureCards;
        id &&
          !disabledFeatureCards.includes(id) &&
          set({
            disabledFeatureCards: [...disabledFeatureCards, id],
          });
      },

      // Welcome Screen
      setWelcomeScreenClosed: (shown: boolean) => {
        set({
          welcomeScreenClosed: shown,
        });
      },

      // Reset
      setDefaultSettings: () => {
        set({
          themeMode:
            defaultSettings.themeMode || ('auto' as ThemeModesSupported),
          disabledFeatureCards: defaultSettings.disabledFeatureCards || [],
        });
      },
    }),
    {
      name: 'jumper-store', // name of the item in the storage (must be unique)
      version: 1,
      migrate: (persistedState: any, version: number) => {
        if (version === 0) {
          const newStore = { ...persistedState };
          Object.keys(persistedState)
            .filter((el) => !(el in defaultSettings))
            .forEach((el) => delete newStore[el]);
          return newStore;
        }
        return persistedState;
      },
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ) as unknown as StateCreator<SettingsState, [], [], SettingsState>,
  shallow,
);

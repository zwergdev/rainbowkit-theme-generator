'use client'

import {
  RainbowKitProvider,
  getDefaultConfig,
  Theme,
  darkTheme,
  midnightTheme,
} from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { http, WagmiProvider as Wagmi } from 'wagmi'
import { mainnet, arbitrum } from 'wagmi/chains'

const myCustomTheme: Theme = {
  blurs: {
    modalOverlay: 'blur(4px)',
  },
  colors: {
    accentColor: 'hsl(var(--accent))',
    accentColorForeground: 'hsl(var(--accent-foreground))',
    actionButtonBorder: 'hsl(var(--border))',
    actionButtonBorderMobile: 'hsl(var(--border))',
    actionButtonSecondaryBackground: 'hsl(var(--background))',
    closeButton: 'hsl(var(--accent-foreground))',
    closeButtonBackground: 'hsl(var(--card))',
    connectButtonBackground: 'hsl(var(--accent))',
    connectButtonBackgroundError: 'hsl(var(--destructive))',
    connectButtonInnerBackground: 'hsl(var(--primary))',
    connectButtonText: 'hsl(var(--accent-foreground))',
    connectButtonTextError: 'hsl(var(--destructive))',
    connectionIndicator: 'hsl(var(--primary))',
    downloadBottomCardBackground: 'hsl(var(--background))',
    downloadTopCardBackground: 'hsl(var(--background))',
    error: 'hsl(var(--destructive))',
    generalBorder: 'hsl(var(--border))',
    generalBorderDim: '',
    menuItemBackground: 'hsl(var(--primary))',
    modalBackdrop: '',
    modalBackground: 'hsl(var(--card))',
    modalBorder: 'hsl(var(--border))',
    modalText: 'hsl(var(--accent-foreground))',
    modalTextDim: '',
    modalTextSecondary: 'hsl(var(--muted-foreground))',
    profileAction: 'hsl(var(--accent))',
    profileActionHover: 'hsl(var(--primary))',
    profileForeground: 'hsl(var(--card))',
    selectedOptionBorder: 'hsl(var(--primary))',
    standby: 'hsl(var(--accent-foreground))',
  },
  fonts: {
    body: '...',
  },
  radii: {
    actionButton: '10px',
    connectButton: '10px',
    menuButton: '10px',
    modal: '10px',
    modalMobile: '10px',
  },
  shadows: {
    connectButton: '...',
    dialog: '...',
    profileDetailsAction: '...',
    selectedOption: '...',
    selectedWallet: '...',
    walletLogo: '...',
  },
}

const queryClient = new QueryClient()

const config = getDefaultConfig({
  appName: 'appName',
  appDescription: 'appDescription',
  projectId: 'f9855280a2d7a19c021f7f7887c1cff0',
  chains: [mainnet, arbitrum],
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
  },
  multiInjectedProviderDiscovery: false,
})

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wagmi config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </Wagmi>
  )
}
//theme={myCustomTheme}

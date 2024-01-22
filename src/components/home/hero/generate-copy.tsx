'use client'

const get = (property: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(property)

export function generateCopy() {
  return `const customTheme = {
  colors: {
    accentColor: 'hsl(${get('--accent')})',
    accentColorForeground: 'hsl(${get('--accent-foreground')})',
    actionButtonBorder: 'hsl(${get('--modal')})',
    actionButtonBorderMobile: 'hsl(${get('--modal')})',
    actionButtonSecondaryBackground: 'hsl(${get('--accent')})',
    closeButton: 'hsl(${get('--close-fill')})',
    closeButtonBackground: 'hsl(${get('--close-background')})',
    connectButtonBackground: 'hsl(${get('--connect-background')})',
    connectButtonBackgroundError: 'hsl(${get('--connect-error')})',
    connectButtonInnerBackground: 'hsl(${get('--connect-inner-background')})',
    connectButtonText: 'hsl(${get('--accent-foreground')})',
    connectButtonTextError: 'hsl(${get('--connect-error-text')})',
    error: 'hsl(${get('--connect-error-text')})',
    generalBorder: 'hsl(${get('--border')})',
    generalBorderDim: 'rgba(0, 0, 0, 0.03)',
    menuItemBackground: 'hsl(${get('--menu')})',
    modalBackdrop: 'rgba(0, 0, 0, 0.5)',
    modalBackground: 'hsl(${get('--modal')})',
    modalBorder: 'hsl(${get('--modal-border')})',
    modalText: 'hsl(${get('--modal-text')})',
    modalTextDim: 'rgba(60, 66, 66, 0.3)',
    modalTextSecondary: 'hsl(${get('--modal-text-secondary')})',
    profileAction: 'hsl(${get('--profile-action')})',
    profileActionHover: 'hsl(${get('--profile-hover')})',
    profileForeground: 'hsl(${get('--profile-foreground')})',
    selectedOptionBorder: 'hsl(${get('--accent')})',
    downloadBottomCardBackground: ${get('--download-bottom-card-background')},
    downloadTopCardBackground: ${get('--download-top-card-background')},
    connectionIndicator: 'hsl(107, 100%, 44%)',
    standby: 'hsl(47, 100%, 63%)',
  },
  radii: {
    actionButton: '${get('--menu-action-button-radius')}',
    connectButton: '${get('--connect-radius')}',
    menuButton: '${get('--menu-button-radius')}',
    modal: '${get('--modal-radius')}',
    modalMobile: '${get('--modal-radius')}',
  },
  shadows: {
    connectButton: '${get('--connect-shadow')}',
    dialog: '${get('--modal-shadow')}',
    profileDetailsAction: '0px 2px 6px rgba(37, 41, 46, 0.04)',
    selectedOption: '0px 2px 6px rgba(0, 0, 0, 0.24)',
    selectedWallet: '0px 2px 6px rgba(0, 0, 0, 0.12)',
    walletLogo: '0px 2px 16px rgba(0, 0, 0, 0.16)',
  },
  blurs: {
    modalOverlay: 'blur(0px)', // e.g. 'blur(4px)'
  },
  fonts: {
    body: '...', // default
  },
}
`
}

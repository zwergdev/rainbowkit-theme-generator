'use client'

const get = (property: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(property)

export function generateCopy() {
  return `const CUSTOM_THEME = {
  blurs: {
    modalOverlay: 'blur(4px)',
  },
  colors: {
    accentColor: ${get('--accent')},
    accentColorForeground: ${get('--accent')},
    actionButtonBorder: ${get('--accent')},
    actionButtonBorderMobile: ${get('--accent')},
    actionButtonSecondaryBackground: ${get('--accent')},
    closeButton: ${get('--accent')},
    closeButtonBackground: ${get('--accent')},
    connectButtonBackground: ${get('--accent')},
    connectButtonBackgroundError: ${get('--accent')},
    connectButtonInnerBackground: ${get('--accent')},
    connectButtonText: ${get('--accent')},
    connectButtonTextError: ${get('--accent')},
    connectionIndicator: ${get('--accent')},
    downloadBottomCardBackground: ${get('--accent')},
    downloadTopCardBackground: ${get('--accent')},
    error: ${get('--accent')},
    generalBorder: ${get('--accent')},
    generalBorderDim: ${get('--accent')},
    menuItemBackground: ${get('--accent')},
    modalBackdrop: ${get('--accent')},
    modalBackground: ${get('--accent')},
    modalBorder: ${get('--accent')},
    modalText: ${get('--accent')},
    modalTextDim: ${get('--accent')},
    modalTextSecondary: ${get('--accent')},
    profileAction: ${get('--accent')},
    profileActionHover: ${get('--accent')},
    profileForeground: ${get('--accent')},
    selectedOptionBorder: ${get('--accent')},
    standby: ${get('--accent')},
  },
  fonts: {
    body: ${get('--accent')},
  },
  radii: {
    actionButton: ${get('--accent')},
    connectButton: ${get('--accent')},
    menuButton: ${get('--accent')},
    modal: ${get('--accent')},
    modalMobile: ${get('--accent')},
  },
  shadows: {
    connectButton: ${get('--accent')},
    dialog: ${get('--accent')},
    profileDetailsAction: ${get('--accent')},
    selectedOption: ${get('--accent')},
    selectedWallet: ${get('--accent')},
    walletLogo: ${get('--accent')},
  },
}
`
}

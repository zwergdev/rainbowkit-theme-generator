import { cn } from '@/lib/utils'

export const ChainButton = ({ name }: { name: keyof typeof NETWORKS }) => {
  return (
    <button
      type="button"
      className={cn(
        'flex items-center justify-start gap-3 hover:bg-menu transition-all duration-150 rounded-menuButton p-1.5',
        NETWORKS[name].connected
          ? 'bg-accent hover:bg-accent text-accent-foreground'
          : 'bg-transparent',
      )}
    >
      <div
        className="w-7 h-7 min-w-7 rounded-full "
        style={{
          backgroundImage: NETWORKS[name].image,
        }}
      />
      <div className="flex items-center justify-between w-full">
        <h6 className="font-bold leading-none">{NETWORKS[name].label}</h6>
        {NETWORKS[name].connected && (
          <div className="flex items-center justify-center gap-2 mr-2">
            <p className="text-sm font-medium leading-none text-accent-foreground">
              Connected
            </p>
            <div className="w-2 h-2 bg-green-500 rounded-full" />
          </div>
        )}
      </div>
    </button>
  )
}

export const NETWORKS = {
  ethereum: {
    label: 'Ethereum',
    connected: false,
    image:
      'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzI1MjkyRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMjhhMTQgMTQgMCAxIDAgMC0yOCAxNCAxNCAwIDAgMCAwIDI4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMjhhMTQgMTQgMCAxIDAgMC0yOCAxNCAxNCAwIDAgMCAwIDI4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTguMTkgMTQuNzcgMTQgMTguMjFsNS44LTMuNDQtNS44IDguMTktNS44MS04LjE5WiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNCAxNi45My01LjgxLTMuNDRMMTQgNC4zNGw1LjgxIDkuMTVMMTQgMTYuOTNaIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCIgeDI9IjE0IiB5MT0iMCIgeTI9IjI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxNCIgeDI9IjE0IiB5MT0iMTQuNzciIHkyPSIyMi45NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjkiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4K")',
  },
  polygon: {
    label: 'Polygon',
    connected: false,
    image:
      'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iQSIgeDE9Ii0xOC4yNzUlIiB4Mj0iODQuOTU5JSIgeTE9IjguMjE5JSIgeTI9IjcxLjM5MyUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNhMjI5YzUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3YjNmZTQiLz48L2xpbmVhckdyYWRpZW50PjxjaXJjbGUgaWQ9IkIiIGN4PSIxNCIgY3k9IjE0IiByPSIxNCIvPjwvZGVmcz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJDIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNCIi8+PC9tYXNrPjxnIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZmlsbD0idXJsKCNBKSIgZD0iTS0xLjMyNi0xLjMyNmgzMC42NTF2MzAuNjUxSC0xLjMyNnoiIG1hc2s9InVybCgjQykiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguMDQ5IDE3LjAyMWwzLjk2LTIuMjg3YS42ODEuNjgxIDAgMCAwIC4zNC0uNTg5VjkuNTcyYS42ODMuNjgzIDAgMCAwLS4zNC0uNTlsLTMuOTYtMi4yODZhLjY4Mi42ODIgMCAwIDAtLjY4IDBsLTMuOTYgMi4yODdhLjY4Mi42ODIgMCAwIDAtLjM0LjU4OXY4LjE3M0wxMC4yOSAxOS4zNWwtMi43NzctMS42MDR2LTMuMjA3bDIuNzc3LTEuNjA0IDEuODMyIDEuMDU4VjExLjg0bC0xLjQ5Mi0uODYxYS42ODEuNjgxIDAgMCAwLS42OCAwbC0zLjk2IDIuMjg3YS42ODEuNjgxIDAgMCAwLS4zNC41ODl2NC41NzNjMCAuMjQyLjEzLjQ2OC4zNC41OWwzLjk2IDIuMjg2YS42OC42OCAwIDAgMCAuNjggMGwzLjk2LTIuMjg2YS42ODIuNjgyIDAgMCAwIC4zNC0uNTg5di04LjE3NGwuMDUtLjAyOCAyLjcyOC0xLjU3NSAyLjc3NyAxLjYwM3YzLjIwOGwtMi43NzcgMS42MDMtMS44My0xLjA1NnYyLjE1MWwxLjQ5Ljg2YS42OC42OCAwIDAgMCAuNjggMHoiLz48L2c+PC9nPjwvc3ZnPg==")',
  },
  optimism: {
    label: 'Optimism',
    connected: true,
    image:
      'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiBmaWxsPSIjRkYzMTMxIiByeD0iMTQiLz48cmVjdCB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9InVybCgjYSkiIGZpbGwtb3BhY2l0eT0iLjMiIHJ4PSIxNCIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjIyIDE4LjM1YzIuNyAwIDQuODYtMi4yIDQuODYtNS4zOCAwLTIuMTktMS40Ny0zLjgtMy45OC0zLjgtMi43MiAwLTQuODUgMi4yLTQuODUgNS4zOCAwIDIuMiAxLjUgMy44IDMuOTcgMy44Wm0uODMtNy4zNWMxLjA2IDAgMS43NC44MSAxLjc0IDIuMSAwIDEuOS0xLjExIDMuNDItMi41MSAzLjQyLTEuMDYgMC0xLjc0LS44Mi0xLjc0LTIuMSAwLTEuODkgMS4xMS0zLjQyIDIuNS0zLjQyWm02LjM4LTEuNjgtMS44OCA4Ljg4aDIuMjZsLjU1LTIuNmgxLjQ3YzIuNDMgMCA0LjAxLTEuMzggNC4wMS0zLjYgMC0xLjYxLTEuMTctMi42OC0zLjEtMi42OGgtMy4zWm0xLjkgMS43NGguOTRjLjgzIDAgMS4zLjM4IDEuMyAxLjE0IDAgMS0uNjggMS43LTEuNzQgMS43aC0xLjExbC42LTIuODRaIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCIgeDI9IjE0IiB5MT0iMCIgeTI9IjI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+Cg==")',
  },
}

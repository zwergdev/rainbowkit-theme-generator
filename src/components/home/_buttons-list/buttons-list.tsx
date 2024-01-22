import { Button } from '@/components/ui/button'
import { Dropdown } from '@/components/ui/icons'
import { WrongNetwork } from './wrong-network'

export const ButtonsList = () => {
  return (
    <div className="flex md:justify-start items-center justify-center sm:flex-row w-full flex-col sm:gap-7 gap-3 flex-wrap">
      <Button className='order-1'>Connect Wallet</Button>

      <div className="flex sm:order-2 order-3 sm:flex-row items-center flex-col gap-3">
        <Button variant="secondary" className="w-[153px]">
          <div
            className="w-6 h-6 rounded-full bg-center"
            style={{
              backgroundImage:
                'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiBmaWxsPSIjRkYzMTMxIiByeD0iMTQiLz48cmVjdCB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9InVybCgjYSkiIGZpbGwtb3BhY2l0eT0iLjMiIHJ4PSIxNCIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05LjIyIDE4LjM1YzIuNyAwIDQuODYtMi4yIDQuODYtNS4zOCAwLTIuMTktMS40Ny0zLjgtMy45OC0zLjgtMi43MiAwLTQuODUgMi4yLTQuODUgNS4zOCAwIDIuMiAxLjUgMy44IDMuOTcgMy44Wm0uODMtNy4zNWMxLjA2IDAgMS43NC44MSAxLjc0IDIuMSAwIDEuOS0xLjExIDMuNDItMi41MSAzLjQyLTEuMDYgMC0xLjc0LS44Mi0xLjc0LTIuMSAwLTEuODkgMS4xMS0zLjQyIDIuNS0zLjQyWm02LjM4LTEuNjgtMS44OCA4Ljg4aDIuMjZsLjU1LTIuNmgxLjQ3YzIuNDMgMCA0LjAxLTEuMzggNC4wMS0zLjYgMC0xLjYxLTEuMTctMi42OC0zLjEtMi42OGgtMy4zWm0xLjkgMS43NGguOTRjLjgzIDAgMS4zLjM4IDEuMyAxLjE0IDAgMS0uNjggMS43LTEuNzQgMS43aC0xLjExbC42LTIuODRaIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCIgeDI9IjE0IiB5MT0iMCIgeTI9IjI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+Cg==")',
            }}
          />
          Optimism <Dropdown />
        </Button>

        <Button variant="secondary" size="profile">
          0.007 ETH
          <Button asChild variant="address" size="address">
            <div className="flex items-center justify-center gap-1.5">
              <div className="h-6 w-6 rounded-full bg-[hsl(334.96deg,100%,77.45%)] flex items-center justify-center text-[13px]">
                &#128055;
              </div>
              0xB8...0a9D <Dropdown className="text-connect-text" />
            </div>
          </Button>
        </Button>
      </div>

      <WrongNetwork />
    </div>
  )
}

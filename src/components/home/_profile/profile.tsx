import { Copy } from 'lucide-react'
import { CloseButton } from '../_shared/close-button'
import { Disconnect } from '../../ui/icons'
import { ActionButton } from './action-button'

export const Profile = () => {
  return (
    <div className="w-[360px] p-4 bg-profile relative rounded-modal border border-modal-border text-modal-text shadow-modal">
      <CloseButton className="absolute right-4 top-4" />
      <div className="m-2 mb-0 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <div className="h-[74px] w-[74px] rounded-full bg-[hsl(334.96deg,100%,77.45%)] flex items-center justify-center text-[41px]">
            &#128055;
          </div>

          <div className="flex flex-col items-center justify-center gap-px">
            <h6 className="text-lg font-extrabold leading-none">0xB8…0a9D</h6>
            <p className="text-modal-text-secondary text-sm font-semibold">
              0.007 ETH
            </p>
          </div>
        </div>

        <div className="m-0.5 mt-4 flex gap-2 items-center justify-between w-full font-semibold text-[13px]">
          <ActionButton
            title="Copy Address"
            icon={
              <Copy className="stroke-modal-text w-4 h-4" strokeWidth={2.5} />
            }
          />
          <ActionButton
            title="Disconnect"
            icon={<Disconnect className="fill-modal-text w-4 h-4" />}
          />
        </div>
      </div>
    </div>
  )
}

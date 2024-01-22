import { CloseButton } from '../_shared/close-button'
import { ChainButton } from './chain-button'

export const SwitchNetwork = () => {
  return (
    <div className="w-[360px] rounded-modal border border-modal-border bg-modal px-4 pt-4 text-modal-text shadow-modal">
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-between items-center">
          <h6 className="text-lg font-extrabold">Switch Networks</h6>
          <CloseButton />
        </div>
        <div className="flex flex-col p-0.5 pb-4 gap-1">
          <ChainButton name="ethereum" />
          <ChainButton name="polygon" />
          <ChainButton name="optimism" />
        </div>
      </div>
    </div>
  )
}

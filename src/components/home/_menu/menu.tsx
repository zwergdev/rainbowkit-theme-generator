import { Separator } from '@/components/ui/separator'
import { CloseButton } from '../_shared/close-button'
import { WalletsList } from './wallets-list'
import { Description } from './description'

export const Menu = () => {
  return (
    <div className="md:w-[720px] w-[360px] h-[500px] bg-modal flex rounded-modal border border-modal-border text-modal-text shadow-modal transition-all duration-150">
      <div className="md:w-[287px] w-[360px] min-w-[287px] p-4 flex flex-col">
        <h6 className="text-lg font-extrabold mb-6 ml-1.5 md:text-left text-center relative">
          Connect a Wallet
          <CloseButton className='inline-flex md:hidden absolute right-0' />
        </h6>
        <WalletsList />
      </div>

      <Separator orientation="vertical" className="md:block hidden" />

      <div className="grow p-4 pb-16 text-modal-text w-[430px] md:block hidden">
        <div className="flex w-full justify-end mb-3">
          <CloseButton />
        </div>
        <div className="flex flex-col items-center justify-around h-full px-2">
          <h6 className="text-lg font-extrabold mb-2.5">What is a Wallet?</h6>
          <div className="my-5 gap-8 flex flex-col max-w-[320px]">
            <Description variant="assets" />
            <Description variant="login" />
          </div>
          <div className="flex flex-col items-center justify-center gap-3 m-2.5 font-bold text-sm">
            <button
              type="button"
              className="bg-accent rounded-menuActionButton px-3 py-1 h-7 text-accent-foreground hover:scale-[1.025] duration-150 transition-all"
            >
              Get a Wallet
            </button>
            <p className="py-1 text-accent leading-none cursor-pointer hover:scale-[1.025] duration-150 transition-all">
              Learn More
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

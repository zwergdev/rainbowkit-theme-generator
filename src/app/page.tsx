import { ButtonsList } from '@/components/home/_buttons-list/buttons-list'
import { Menu } from '@/components/home/_menu/menu'
import { Profile } from '@/components/home/_profile/profile'
import { SwitchNetwork } from '@/components/home/_network/switch-network'
import { ColorPicker } from '@/components/home/hero/color-picker'
import { Title } from '@/components/home/hero/title'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <>
      <section className="lg:pt-24 pt-12 flex items-center justify-center w-full lg:flex-row flex-col gap-20 lg:gap-0">
        <Title />
        <ColorPicker />
      </section>
      <Separator className="md:hidden block mt-10 w-screen opacity-25 bg-accent" />
      <section className="flex flex-col items-start justify-center gap-7 mt-12">
        <ButtonsList />

        <div className="flex gap-7 flex-wrap md:flex-row flex-col items-center justify-center w-full">
          <Menu />

          <div className="flex flex-col gap-7">
            <SwitchNetwork />

            <Profile />
          </div>
        </div>
      </section>
    </>
  )
}

import { ButtonsList } from '@/components/home/buttons-list'
import { Menu } from '@/components/home/_menu/menu'
import { Profile } from '@/components/home/_profile/profile'
import { SwitchNetwork } from '@/components/home/_network/switch-network'
import { ColorPicker } from '@/components/home/hero/color-picker'
import { Title } from '@/components/home/hero/title'

export default function Home() {
  return (
    <>
      <section className="pt-24 flex items-center justify-center w-full">
        <Title />
        <ColorPicker />
      </section>
      <section className="flex flex-col items-start justify-center gap-7 mt-12">
        <ButtonsList />

        <div className="flex gap-7">
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

import { EmptyMemories } from '@/components/EmptyMemories'
import { Copyright } from '@/components/copyright'
import { Hero } from '@/components/hero'
import { SingIn } from '@/components/singin'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* left */}
      <div className="felx-col relative flex items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] px-28 py-16">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* sing in */}
        <SingIn />

        {/* Hero */}
        <Hero />

        {/* Copyright */}
        <Copyright />
      </div>
      {/* rigth */}
      <div className="bg- flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16 ">
        <EmptyMemories />
      </div>
    </main>
  )
}

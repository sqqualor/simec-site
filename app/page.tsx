import { SiteProvider } from '@/components/site/site-provider'
import { TopBar } from '@/components/site/top-bar'
import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Catalog } from '@/components/site/catalog'
import { Parts } from '@/components/site/parts'
// import { Services } from '@/components/site/services'  // <-- убрали за ненадобностью
import { About } from '@/components/site/about'
import { News } from '@/components/site/news'
import { LeadForm } from '@/components/site/lead-form'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <SiteProvider>
      <div id="top" className="min-h-screen bg-slate-950 text-slate-100 selection:bg-brand selection:text-white">
        <TopBar />
        <Header />
        <main>
          <Hero />
          <Catalog />
          <Parts />
          {/* Секция Services удалена */}
          <About />
          <News />
          <LeadForm />
        </main>
        <Footer />
      </div>
    </SiteProvider>
  )
}
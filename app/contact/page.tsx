import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'Kontak | Nadira Querida Dinarzade',
  description: 'Hubungi Nadira Querida Dinarzade — Accounting & SAP Finance Support',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center pt-20">
        <div className="w-full">
          <Contact />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)]">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Nadira Querida Dinarzade All rights reserved.
        </p>
      </footer>
    </main>
  )
}

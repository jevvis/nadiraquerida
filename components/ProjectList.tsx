'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-blue-600', 'bg-teal-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Rekonsiliasi Bank & Transaksi Oracle", en: "Bank Reconciliation & Oracle Transactions" },
    description: { id: "Memproses 10–20 transaksi harian di Oracle, termasuk Create Accounting, transfer ke GL, dan rekonsiliasi bank.", en: "Processing 10–20 daily transactions in Oracle, including Create Accounting, transfer to GL, and bank reconciliation." },
    framework: "PT. MERAK JAYA GROUP 2026",
    techStack: ["Oracle", "GL"],
  },
  {
    number: '02',
    title: { id: "CoA Oracle & Template Upload Accurate", en: "Oracle CoA & Accurate Upload Templates" },
    description: { id: "Memperbarui Chart of Accounts Oracle, menyiapkan template upload Accurate, dan menyusun laporan buku besar untuk pajak.", en: "Maintaining the Oracle Chart of Accounts, preparing Accurate upload templates, and generating general ledger reports for tax purposes." },
    framework: "PT. MERAK JAYA GROUP 2026",
    techStack: ["CoA", "Accurate"],
  },
  {
    number: '03',
    title: { id: "Dukungan Ticket SAP Finance", en: "SAP Finance Ticket Support" },
    description: { id: "Menangani 10–30 ticket per bulan terkait kendala transaksi dan proses keuangan di modul SAP FI (GL, AP, AR).", en: "Handling 10–30 tickets per month on transaction and financial process issues in the SAP FI module (GL, AP, AR)." },
    framework: "SPINDO 2025",
    techStack: ["SAP FI", "Tickets"],
  },
  {
    number: '04',
    title: { id: "Request Perubahan Master Data SAP", en: "SAP Master Data Change Requests" },
    description: { id: "Memproses 10–50 request per bulan untuk GL Account, Vendor, Customer, dan Cost Center.", en: "Processing 10–50 requests per month for GL Accounts, Vendors, Customers, and Cost Centers." },
    framework: "SPINDO 2025",
    techStack: ["Master Data", "GL Account"],
  },
  {
    number: '05',
    title: { id: "Dokumentasi Proses Bisnis SAP Finance", en: "SAP Finance Business Process Documentation" },
    description: { id: "Mendokumentasikan proses bisnis SAP Finance dan kebutuhan master data untuk implementasi sistem yang akurat.", en: "Documenting SAP Finance business processes and master data requirements for accurate system implementation." },
    framework: "SPINDO 2025",
    techStack: ["SAP", "Dokumentasi"],
  },
  {
    number: '06',
    title: { id: "Administrasi Faktur Pembelian", en: "Purchase Invoice Administration" },
    description: { id: "Menginput dan memverifikasi 10–20 data faktur pembelian per hari terhadap catatan sistem.", en: "Entering and verifying 10–20 purchase invoice records per day against system records." },
    framework: "APOTEK DIKAF 2025 — SEKARANG",
    techStack: ["Faktur", "Verifikasi"],
  },
  {
    number: '07',
    title: { id: "Verifikasi dan Pengarsipan Dokumen Pendaftaran", en: "Application Document Verification & Archiving" },
    description: { id: "Memverifikasi dan mengarsipkan dokumen pendaftaran serta melayani 20–30 calon mahasiswa per hari.", en: "Verifying and archiving application documents while serving 20–30 prospective students per day." },
    framework: "UNIVERSITAS NAHDLATUL ULAMA 2024",
    techStack: ["Dokumen", "Pengarsipan"],
  },
  {
    number: '08',
    title: { id: "Kertas Kerja Pemeriksaan (KKP)", en: "Audit Working Papers (KKP)" },
    description: { id: "Menyusun KKP untuk 5–10 akun utama per klien dan mengoperasikan ATLAS pada audit 2–5 klien.", en: "Preparing KKP for 5–10 key accounts per client and operating ATLAS on audits for 2–5 clients." },
    framework: "KAP BUDI & AZHARI 2023",
    techStack: ["KKP", "ATLAS"],
  },
  {
    number: '09',
    title: { id: "Studi Kasus Pajak Badan, PPh dan PPN", en: "Corporate Tax Study Case: PPh & VAT" },
    description: { id: "Menghitung laba kena pajak setelah koreksi fiskal, PPh (21, 23, Pasal 4 ayat 2), serta PPN Masukan dan Keluaran.", en: "Calculating taxable income after fiscal reconciliation, income tax (21, 23, Pasal 4 ayat 2), and input and output VAT." },
    framework: "MYSKILL 2024",
    techStack: ["PPh", "PPN"],
  },
  {
    number: '10',
    title: { id: "Desain Sistem Akuntansi untuk UMKM", en: "Accounting System Design for an MSME" },
    description: { id: "Mengidentifikasi kebutuhan dan merancang sistem akuntansi yang efisien dengan laporan keuangan dan alur data sesuai standar.", en: "Identifying needs and designing an efficient accounting system with standard financial reports and data flow." },
    framework: "UPN “VETERAN” JAWA TIMUR 2022",
    techStack: ["Desain Sistem", "UMKM"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'ACCOUNTING & FINANCE PORTFOLIO' : 'PORTOFOLIO AKUNTANSI & FINANCE'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Accounting, SAP Finance, Audit & Tax Work' : 'Pekerjaan Akuntansi, SAP Finance, Audit & Perpajakan'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of accounting operations, SAP Finance support, audit working papers, and tax and accounting-system projects.'
              : 'Rekam jejak operasional akuntansi, dukungan SAP Finance, kertas kerja audit, serta proyek perpajakan dan sistem akuntansi.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

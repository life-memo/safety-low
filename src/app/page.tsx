import {
  japanRegulation,
  usRegulation,
  ukRegulation,
  comparisonTable,
  analysisPoints,
} from "@/data/regulations";
import type { CountryRegulation, ComparisonItem, Source } from "@/data/regulations";

function CountryFlag({ flag }: { flag: string }) {
  const flags: Record<string, string> = {
    JP: "\u{1F1EF}\u{1F1F5}",
    US: "\u{1F1FA}\u{1F1F8}",
    UK: "\u{1F1EC}\u{1F1E7}",
  };
  return <span className="text-2xl mr-2">{flags[flag] ?? ""}</span>;
}

function NavBar() {
  return (
    <nav className="bg-slate-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-lg font-bold whitespace-nowrap">
          安全衛生法規制 国際比較
        </h1>
        <div className="flex flex-wrap gap-3 text-sm">
          <a href="#overview" className="hover:text-blue-300 transition-colors">
            概要
          </a>
          <a href="#comparison" className="hover:text-blue-300 transition-colors">
            比較表
          </a>
          <a href="#details" className="hover:text-blue-300 transition-colors">
            各国詳細
          </a>
          <a href="#analysis" className="hover:text-blue-300 transition-colors">
            分析
          </a>
          <a href="#sources" className="hover:text-blue-300 transition-colors">
            出典
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <header className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          日本・米国・英国
          <br className="md:hidden" />
          安全衛生法規制 比較
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          日本の労働安全衛生法（1972年）、米国のOSH Act（1970年）、
          英国のHealth and Safety at Work Act（1974年）を条文レベルで比較し、
          各国の規制アプローチの違いを明らかにします。
        </p>
        <p className="text-slate-400 text-sm mt-6">
          全ての記載に一次資料（法令条文・政府機関公式サイト）へのリンクを付記しています
        </p>
      </div>
    </header>
  );
}

function OverviewCard({ reg }: { reg: CountryRegulation }) {
  return (
    <div
      className={`rounded-xl border-2 ${reg.borderClass} ${reg.bgClass} p-6 flex flex-col`}
    >
      <div className="flex items-center mb-4">
        <CountryFlag flag={reg.flag} />
        <h3 className={`text-xl font-bold ${reg.colorClass}`}>
          {reg.country}
        </h3>
      </div>
      <dl className="space-y-3 text-sm flex-1">
        <div>
          <dt className="font-semibold text-gray-600">中心法令</dt>
          <dd className="mt-0.5">{reg.overview.mainLaw}</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-600">制定年</dt>
          <dd className="mt-0.5">{reg.overview.enactedYear}年</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-600">所管機関</dt>
          <dd className="mt-0.5">
            <a
              href={reg.overview.governingBodyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {reg.overview.governingBody}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-600">法的根拠</dt>
          <dd className="mt-0.5">{reg.overview.legalBasis}</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-600">規制アプローチ</dt>
          <dd className="mt-0.5">{reg.overview.approach}</dd>
        </div>
      </dl>
    </div>
  );
}

function OverviewSection() {
  return (
    <section id="overview" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">各国の概要</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <OverviewCard reg={japanRegulation} />
          <OverviewCard reg={usRegulation} />
          <OverviewCard reg={ukRegulation} />
        </div>
      </div>
    </section>
  );
}

function ComparisonRow({ item, index }: { item: ComparisonItem; index: number }) {
  return (
    <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      <td className="px-4 py-4 font-semibold text-gray-800 align-top border-r border-gray-200 min-w-[120px]">
        {item.topic}
      </td>
      <td className="px-4 py-4 text-sm leading-relaxed align-top border-r border-gray-200">
        {item.japan}
      </td>
      <td className="px-4 py-4 text-sm leading-relaxed align-top border-r border-gray-200">
        {item.us}
      </td>
      <td className="px-4 py-4 text-sm leading-relaxed align-top">
        {item.uk}
      </td>
    </tr>
  );
}

function ComparisonSection() {
  return (
    <section id="comparison" className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">比較一覧表</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-slate-700 text-white">
                <th className="px-4 py-3 text-left font-semibold w-[140px]">
                  項目
                </th>
                <th className="px-4 py-3 text-left font-semibold bg-red-800/30">
                  <CountryFlag flag="JP" />
                  日本
                </th>
                <th className="px-4 py-3 text-left font-semibold bg-blue-800/30">
                  <CountryFlag flag="US" />
                  米国
                </th>
                <th className="px-4 py-3 text-left font-semibold bg-green-800/30">
                  <CountryFlag flag="UK" />
                  英国
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((item, i) => (
                <ComparisonRow key={item.topic} item={item} index={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ProvisionCard({ reg }: { reg: CountryRegulation }) {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <CountryFlag flag={reg.flag} />
        <h3 className={`text-2xl font-bold ${reg.colorClass}`}>
          {reg.country}（{reg.countryEn}）
        </h3>
      </div>
      <div className="space-y-4">
        {reg.keyProvisions.map((prov) => (
          <div
            key={prov.title}
            className={`rounded-lg border ${reg.borderClass} ${reg.bgClass} p-5`}
          >
            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <h4 className="font-bold text-gray-800">{prov.title}</h4>
              <span className="text-xs font-mono bg-white/70 border border-gray-300 rounded px-2 py-0.5 text-gray-600">
                {prov.article}
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {prov.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailSection() {
  return (
    <section id="details" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          各国の主要規定（条文ベース）
        </h2>
        <ProvisionCard reg={japanRegulation} />
        <ProvisionCard reg={usRegulation} />
        <ProvisionCard reg={ukRegulation} />
      </div>
    </section>
  );
}

function AnalysisSection() {
  return (
    <section id="analysis" className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">比較分析</h2>
        <div className="space-y-8">
          {analysisPoints.map((point) => (
            <div key={point.title}>
              <h3 className="text-lg font-bold text-slate-800 mb-3 border-l-4 border-slate-600 pl-3">
                {point.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {point.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SourceList({ title, sources, colorClass }: { title: string; sources: Source[]; colorClass: string }) {
  return (
    <div className="mb-8">
      <h3 className={`text-lg font-bold mb-3 ${colorClass}`}>{title}</h3>
      <ul className="space-y-2">
        {sources.map((src) => (
          <li key={src.url} className="text-sm">
            <a
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              {src.label}
            </a>
            <span className="text-gray-500 ml-2">— {src.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SourcesSection() {
  return (
    <section id="sources" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">出典・一次資料</h2>
        <p className="text-sm text-gray-600 mb-8 text-center">
          本資料の全ての記載は、以下の一次資料（法令条文・政府機関公式サイト）に基づいています。
          リンク先で各法令の原文を確認できます。
        </p>
        <SourceList
          title="日本"
          sources={japanRegulation.sources}
          colorClass="text-red-700"
        />
        <SourceList
          title="米国（United States）"
          sources={usRegulation.sources}
          colorClass="text-blue-700"
        />
        <SourceList
          title="英国（United Kingdom）"
          sources={ukRegulation.sources}
          colorClass="text-green-700"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-400 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center text-sm space-y-2">
        <p>
          本資料は法的助言を構成するものではありません。正確な法的判断には各国の法令原文及び専門家への相談が必要です。
        </p>
        <p>
          情報は2025年時点のものです。最新の改正状況は各国の公式サイトでご確認ください。
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <OverviewSection />
      <ComparisonSection />
      <DetailSection />
      <AnalysisSection />
      <SourcesSection />
      <Footer />
    </main>
  );
}

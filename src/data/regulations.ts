export interface Source {
  label: string;
  url: string;
  description: string;
}

export interface CountryRegulation {
  country: string;
  countryEn: string;
  flag: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  overview: {
    mainLaw: string;
    enactedYear: number;
    governingBody: string;
    governingBodyUrl: string;
    legalBasis: string;
    approach: string;
  };
  keyProvisions: {
    title: string;
    article: string;
    description: string;
  }[];
  sources: Source[];
}

export const japanRegulation: CountryRegulation = {
  country: "日本",
  countryEn: "Japan",
  flag: "JP",
  colorClass: "text-red-700",
  bgClass: "bg-red-50",
  borderClass: "border-red-200",
  overview: {
    mainLaw: "労働安全衛生法（昭和47年法律第57号）",
    enactedYear: 1972,
    governingBody: "厚生労働省（労働基準局安全衛生部）",
    governingBodyUrl: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/anzen/index.html",
    legalBasis: "労働基準法から独立・拡充して制定",
    approach: "詳細規定型（具体的な基準を法令で規定）",
  },
  keyProvisions: [
    {
      title: "事業者の一般的義務",
      article: "第3条",
      description:
        "事業者は、単にこの法律で定める労働災害の防止のための最低基準を守るだけでなく、快適な職場環境の実現と労働条件の改善を通じて職場における労働者の安全と健康を確保するようにしなければならない。",
    },
    {
      title: "安全衛生管理体制",
      article: "第10条〜第19条",
      description:
        "総括安全衛生管理者、安全管理者、衛生管理者、産業医の選任義務。常時50人以上の事業場では安全委員会・衛生委員会（または安全衛生委員会）の設置義務。",
    },
    {
      title: "危険防止措置",
      article: "第20条〜第25条",
      description:
        "機械・器具、爆発性物質、電気・熱等による危険防止措置。原材料・ガス・粉じん等による健康障害防止措置。作業方法・場所に起因する危険防止措置。事業者は労働者の退避等の義務も負う。",
    },
    {
      title: "リスクアセスメント",
      article: "第28条の2",
      description:
        "事業者は、建設物、設備、原材料等の危険性又は有害性等を調査し、その結果に基づいて必要な措置を講ずるよう努めなければならない（努力義務）。化学物質については2016年より一定範囲で義務化。",
    },
    {
      title: "安全衛生教育",
      article: "第59条〜第60条",
      description:
        "雇入れ時・作業内容変更時の安全衛生教育義務。危険有害業務就業時の特別教育義務。職長等の教育義務。",
    },
    {
      title: "健康診断",
      article: "第66条〜第66条の9",
      description:
        "一般健康診断（雇入れ時、定期）、特殊健康診断の実施義務。ストレスチェック制度（50人以上の事業場で義務、2025年改正で全事業場に拡大予定）。",
    },
    {
      title: "罰則",
      article: "第115条〜第123条",
      description:
        "法令違反に対して6月以下の懲役または50万円以下の罰金等。重大な違反（第116条・第117条）は3年以下の懲役又は300万円以下の罰金。法人に対する両罰規定あり。",
    },
  ],
  sources: [
    {
      label: "労働安全衛生法（条文全文）",
      url: "https://elaws.e-gov.go.jp/document?lawid=347AC0000000057",
      description: "e-Gov法令検索 - 労働安全衛生法の全条文",
    },
    {
      label: "厚生労働省 - 安全衛生関係法令",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/anzen/an-eihou/index_00001.html",
      description: "厚生労働省による労働安全衛生法の改正情報・解説ページ",
    },
    {
      label: "厚生労働省 - リスクアセスメント",
      url: "https://anzeninfo.mhlw.go.jp/yougo/yougo01_1.html",
      description: "職場のあんぜんサイト - リスクアセスメントの概要と実施方法",
    },
    {
      label: "厚生労働省 - 化学物質管理の改正",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000099121.html",
      description: "化学物質の自律的管理に関する改正情報",
    },
    {
      label: "中央労働災害防止協会 - リスクアセスメント",
      url: "https://www.jisha.or.jp/oshms/ra/about01.html",
      description: "リスクアセスメントの基本的な考え方と手順",
    },
  ],
};

export const usRegulation: CountryRegulation = {
  country: "アメリカ合衆国",
  countryEn: "United States",
  flag: "US",
  colorClass: "text-blue-700",
  bgClass: "bg-blue-50",
  borderClass: "border-blue-200",
  overview: {
    mainLaw: "Occupational Safety and Health Act of 1970（労働安全衛生法）",
    enactedYear: 1970,
    governingBody: "OSHA（労働安全衛生庁、労働省管轄）",
    governingBodyUrl: "https://www.osha.gov/",
    legalBasis: "29 U.S.C. §§ 651–678",
    approach: "基準設定型（連邦基準 + General Duty Clause）",
  },
  keyProvisions: [
    {
      title: "一般義務条項（General Duty Clause）",
      article: "Section 5(a)(1) / 29 U.S.C. §654",
      description:
        "各事業者は、認識されている危険（recognized hazards）であって死亡又は重大な身体的危害を引き起こしている又は引き起こすおそれのある危険がない雇用及び就業場所を各従業員に提供しなければならない。",
    },
    {
      title: "基準遵守義務",
      article: "Section 5(a)(2) / 29 U.S.C. §654",
      description:
        "各事業者は、本法に基づき公布された労働安全衛生基準を遵守しなければならない。OSHA基準は29 CFR Part 1910（一般産業）、1926（建設業）等に規定。",
    },
    {
      title: "基準制定権限",
      article: "Section 6 / 29 U.S.C. §655",
      description:
        "労働長官に労働安全衛生基準の制定・改正・廃止の権限を付与。緊急臨時基準（Emergency Temporary Standards）の制定も可能。",
    },
    {
      title: "記録保持・報告義務",
      article: "Section 8 / 29 U.S.C. §657",
      description:
        "事業者は労働災害・疾病の記録を保持する義務。死亡事故、入院、切断、失明は必ずOSHAに報告。有害物質への曝露記録も保持義務あり。",
    },
    {
      title: "立入検査",
      article: "Section 8(a) / 29 U.S.C. §657",
      description:
        "OSHA検査官（CSHO）が事前通知なく事業場に立入検査可能。優先順位：切迫した危険、死亡・災害、従業員の苦情、重点検査対象。",
    },
    {
      title: "是正命令・罰則",
      article: "Section 9-10, 17 / 29 U.S.C. §658-659, 666",
      description:
        "違反に対しCitation（是正命令）を発行。重大違反（Serious）：最大$16,131/件。故意違反（Willful）：最大$161,323/件。反復違反も同額。刑事罰は故意で死亡事故の場合6月以下の禁固（再犯は1年）。",
    },
    {
      title: "従業員の権利・内部告発保護",
      article: "Section 11(c) / 29 U.S.C. §660(c)",
      description:
        "従業員がOSHAへの苦情申立て、検査参加等の権利行使を理由とする解雇・報復・差別の禁止。違反者には復職・バックペイ等の救済命令。",
    },
    {
      title: "州計画（State Plans）",
      article: "Section 18 / 29 U.S.C. §667",
      description:
        "各州は連邦基準と同等以上の効果を持つ独自の安全衛生計画を策定・運用可能。現在約半数の州が州計画を運用。",
    },
  ],
  sources: [
    {
      label: "OSH Act of 1970（条文全文）",
      url: "https://www.osha.gov/laws-regs/oshact/completeoshact",
      description: "OSHA公式サイト - 労働安全衛生法の全条文",
    },
    {
      label: "29 U.S.C. §654 - Duties of employers and employees",
      url: "https://www.law.cornell.edu/uscode/text/29/654",
      description: "Cornell Law Institute - 条文テキスト（General Duty Clause含む）",
    },
    {
      label: "EPA - Summary of the OSH Act",
      url: "https://www.epa.gov/laws-regulations/summary-occupational-safety-and-health-act",
      description: "米国環境保護庁による法律の概要説明",
    },
    {
      label: "Congressional Research Service - OSH Act Legal Overview",
      url: "https://www.congress.gov/crs-product/R48292",
      description: "議会調査局による法的概観レポート",
    },
    {
      label: "OSHA - Laws and Regulations",
      url: "https://www.osha.gov/laws-regs",
      description: "OSHA公式の法令・規則一覧ページ",
    },
    {
      label: "DOL Employment Law Guide - OSH",
      url: "https://webapps.dol.gov/elaws/elg/osha.htm",
      description: "米国労働省による雇用法ガイド（安全衛生セクション）",
    },
  ],
};

export const ukRegulation: CountryRegulation = {
  country: "イギリス",
  countryEn: "United Kingdom",
  flag: "UK",
  colorClass: "text-green-700",
  bgClass: "bg-green-50",
  borderClass: "border-green-200",
  overview: {
    mainLaw:
      "Health and Safety at Work etc. Act 1974（労働安全衛生等法）+ 関連規則",
    enactedYear: 1974,
    governingBody: "HSE（安全衛生庁）",
    governingBodyUrl: "https://www.hse.gov.uk/",
    legalBasis: "1974 c.37（英国議会制定法）",
    approach:
      "目標設定型（原則ベース + 'so far as reasonably practicable' 基準）",
  },
  keyProvisions: [
    {
      title: "事業者の一般義務",
      article: "HSWA Section 2",
      description:
        "全ての事業者は、合理的に実行可能な限り（so far as is reasonably practicable）、全従業員の就業中の安全・健康・福祉を確保しなければならない。安全な設備・作業システムの提供、物質の安全な使用・取扱い、情報提供・教育・訓練・監督を含む。",
    },
    {
      title: "非従業員への義務",
      article: "HSWA Section 3",
      description:
        "事業者は、その事業の遂行において、従業員以外の者（請負業者、訪問者、一般公衆）が健康・安全上のリスクにさらされないよう、合理的に実行可能な限り確保しなければならない。",
    },
    {
      title: "リスクアセスメント（法的義務）",
      article: "Management of Health and Safety at Work Regulations 1999, Reg.3",
      description:
        "全ての事業者は、従業員及び影響を受ける第三者に対するリスクの「適切かつ十分な」アセスメントを実施しなければならない。5人以上の事業場では重要な所見を書面で記録する義務。定期的な見直しも必要。",
    },
    {
      title: "従業員の義務",
      article: "HSWA Section 7-8",
      description:
        "従業員は、自身及び他者の安全・健康について合理的な注意を払い、事業者が法令上の義務を遂行できるよう協力する義務。安全衛生のために提供された物品を意図的又は無謀に妨害・誤用することの禁止。",
    },
    {
      title: "製造者・供給者の義務",
      article: "HSWA Section 6",
      description:
        "職場で使用される物品・物質の設計者、製造者、輸入者、供給者は、適切な使用時に安全でリスクがないことを確保する一般義務を負う。",
    },
    {
      title: "安全衛生方針の策定",
      article: "HSWA Section 2(3)",
      description:
        "5人以上の従業員を雇用する事業者は、安全衛生方針を書面で作成し、従業員に周知する義務。方針の見直し・更新も必要。",
    },
    {
      title: "安全代表・安全委員会",
      article: "HSWA Section 2(4)-(7) / Safety Representatives Regulations 1977",
      description:
        "労働組合は安全代表を任命可能。安全代表は安全問題について協議を受ける権利を有する。1996年以降は全従業員との安全問題に関する協議が事業者の義務。",
    },
    {
      title: "執行・罰則",
      article: "HSWA Section 33, 42 / Health and Safety (Offences) Act 2008",
      description:
        "HSE検査官による事前通知なしの立入検査権限。改善通知（Improvement Notice）・禁止通知（Prohibition Notice）の発行。最も重大な違反には無制限の罰金または最大2年の禁固刑。2008年法改正で多くの違反が正式起訴対象に引き上げ。",
    },
  ],
  sources: [
    {
      label: "Health and Safety at Work etc. Act 1974（条文全文）",
      url: "https://www.legislation.gov.uk/ukpga/1974/37/contents",
      description: "英国法令データベース - HSWA 1974の全条文",
    },
    {
      label: "Management of Health and Safety at Work Regulations 1999",
      url: "https://www.legislation.gov.uk/uksi/1999/3242/contents/made",
      description: "英国法令データベース - 1999年規則の全条文",
    },
    {
      label: "HSE - Health and Safety at Work Act",
      url: "https://www.hse.gov.uk/legislation/hswa.htm",
      description: "HSE公式による法律の概要説明",
    },
    {
      label: "HSE - Management of Health and Safety at Work Regulations",
      url: "https://www.hse.gov.uk/pubns/hsc13.pdf",
      description: "HSE公式による1999年規則の承認実務規範",
    },
    {
      label: "British Safety Council - HSWA Explained",
      url: "https://www.britsafe.org/training-and-learning/informational-resources/the-health-and-safety-at-work-act-explained",
      description: "英国安全協議会によるHSWAの解説",
    },
    {
      label: "HSE - Enforcement Policy Statement",
      url: "https://www.hse.gov.uk/enforce/enforcepolicy.htm",
      description: "HSEの執行方針に関する公式声明",
    },
  ],
};

export interface ComparisonItem {
  topic: string;
  japan: string;
  us: string;
  uk: string;
}

export const comparisonTable: ComparisonItem[] = [
  {
    topic: "中心法令",
    japan: "労働安全衛生法（1972年）",
    us: "Occupational Safety and Health Act of 1970",
    uk: "Health and Safety at Work etc. Act 1974",
  },
  {
    topic: "規制アプローチ",
    japan:
      "詳細規定型：具体的な数値基準や手順を法令・省令で細かく規定。労働安全衛生規則等の下位法令が充実。",
    us: "基準設定型：OSHAが詳細な連邦基準（29 CFR）を制定。General Duty Clauseで基準未整備の分野もカバー。",
    uk: "目標設定型：原則ベースの法律（HSWA）+ 'so far as reasonably practicable' の裁量基準。下位規則（Regulations）で具体化。",
  },
  {
    topic: "事業者の一般義務",
    japan:
      "労働災害防止の最低基準の遵守に加え、快適な職場環境の実現と労働条件の改善に努める義務（第3条）。",
    us: "認識されている危険のない就業場所の提供義務（General Duty Clause, §5(a)(1)）。OSHA基準の遵守義務（§5(a)(2)）。",
    uk: "合理的に実行可能な限り（SFAIRP）、全従業員の安全・健康・福祉を確保する義務（Section 2）。非従業員への配慮義務も明示（Section 3）。",
  },
  {
    topic: "リスクアセスメント",
    japan:
      "一般的なリスクアセスメントは努力義務（第28条の2）。化学物質（674物質以上）については2016年から法的義務化。2024年改正でさらに対象拡大。",
    us: "リスクアセスメント自体の一般的な法的義務は規定なし。ただしProcess Safety Management（PSM, 29 CFR 1910.119）やHazard Communication Standard等の個別基準で実質的に要求。",
    uk: "全事業者に法的義務（1999年規則 Reg.3）。「適切かつ十分な」アセスメントを実施し、5人以上の事業場では書面記録が必要。最も体系的な義務化。",
  },
  {
    topic: "安全衛生管理体制",
    japan:
      "50人以上の事業場：安全管理者・衛生管理者・産業医の選任義務。安全委員会・衛生委員会の設置義務。業種・規模により総括安全衛生管理者も必要。",
    us: "法律上の一般的な管理体制の設置義務はなし。ただしOSHA自主管理プログラム（VPP）、安全衛生委員会の推奨、個別基準での要件あり。一部の州計画では安全委員会を義務化。",
    uk: "事業者は「有能な者（competent person）」を任命して安全衛生措置を支援させる義務（1999年規則 Reg.7）。労働組合の安全代表制度。安全委員会は安全代表の要求により設置義務。",
  },
  {
    topic: "従業員の義務",
    japan:
      "労働安全衛生法上、労働者に対する直接的な罰則規定はなし。ただし「法令の遵守」が規定されている（第4条・第26条）。",
    us: "各従業員は自身の行為に適用される基準・規則を遵守する義務（§5(b)）。ただし従業員個人への罰則はなく、OSHAは事業者のみを取締対象とする。",
    uk: "自身及び他者の安全に合理的注意を払う義務（Section 7）。安全設備の故意の妨害禁止（Section 8）。従業員個人も刑事責任を問われうる。",
  },
  {
    topic: "執行機関",
    japan: "労働基準監督署（厚生労働省管轄）。労働基準監督官が臨検・指導・是正勧告を実施。",
    us: "OSHA（連邦）+ 州計画を持つ州の独自機関。約半数の州が独自に執行。OSHA検査官（CSHO）が事前通知なし検査を実施。",
    uk: "HSE（安全衛生庁）+ 地方自治体の環境衛生官。HSE検査官が事前通知なし検査を実施。改善通知・禁止通知の発行権限。",
  },
  {
    topic: "罰則の重さ",
    japan:
      "最大で3年以下の懲役又は300万円以下の罰金（第116条・第117条）。一般的な違反は6月以下の懲役又は50万円以下の罰金。法人に対する両罰規定あり。",
    us: "重大違反：最大$16,131/件。故意違反：最大$161,323/件。刑事罰は故意による死亡事故で6月以下の禁固（再犯1年）。連邦レベルの罰金上限は主要国中比較的低い。",
    uk: "最も重大な違反には無制限の罰金。最大2年の禁固刑。法人過失致死法（2007年）による法人訴追も可能。2016年の量刑ガイドライン改定で罰金額が大幅に引き上げ。3カ国中最も厳しい罰則体系。",
  },
  {
    topic: "非従業員の保護",
    japan:
      "2025年改正により、作業場所の全ての者（一人親方、下請業者含む）への安全措置が義務化。従来は雇用関係にある労働者に限定。",
    us: "OSH Actは「従業員」を保護対象とし、独立請負業者（independent contractor）は対象外。ただしMulti-employer worksiteの方針で間接的に保護。",
    uk: "当初から非従業員（一般公衆含む）への配慮義務を明示（Section 3）。対象範囲が3カ国中最も広い。",
  },
  {
    topic: "最近の主な改正動向",
    japan:
      "2024年：化学物質管理体制の見直し、化学物質管理者の選任義務化。2025年：安全措置対象の全作業従事者への拡大、電子申請の義務化。2026年予定：ストレスチェックの全事業場義務化、個人事業者の安全衛生対策。",
    us: "2025年：General Duty Clauseの解釈に関する規則制定提案（一部のプロフェッショナル活動への適用制限）。罰金額のインフレ調整による毎年の引き上げ。電子記録提出規則の拡大。",
    uk: "Building Safety Act 2022の施行。2016年量刑ガイドライン改定後の高額罰金の定着。Brexit後のEU由来規制の見直し議論（ただし大きな変更は現時点で限定的）。",
  },
];

export interface AnalysisSection {
  title: string;
  content: string;
}

export const analysisPoints: AnalysisSection[] = [
  {
    title: "規制哲学の違い",
    content: `日本は「詳細規定型」で、法律・政令・省令・告示の階層構造により具体的な基準（数値、手順、資格要件等）を細かく定めます。米国は「基準設定型」で、OSHAが連邦官報を通じて詳細な技術基準を公布しつつ、General Duty Clauseで基準の隙間をカバーします。英国は「目標設定型」で、HSWAが大枠の原則を定め、「合理的に実行可能な限り（SFAIRP）」という柔軟な基準の下で事業者に裁量を与えます。英国のアプローチは1972年のロベンス報告書（Robens Report）に基づくもので、過度に規範的な規制よりも自主管理を重視する考え方です。`,
  },
  {
    title: "リスクアセスメントの位置づけ",
    content: `リスクアセスメントに対する法的義務の程度が3カ国で大きく異なります。英国が最も体系的で、1999年規則により全事業者に「適切かつ十分な」リスクアセスメントを法的義務として課しています。日本は一般的なリスクアセスメントは努力義務にとどまり、化学物質分野で段階的に義務化を進めています。米国にはリスクアセスメントの一般的な法的義務がなく、個別基準（PSM等）の中で実質的に要求される形です。`,
  },
  {
    title: "罰則と執行力",
    content: `罰則の重さは英国が突出しています。無制限の罰金と最大2年の禁固刑に加え、2016年の量刑ガイドライン改定により数百万ポンド規模の罰金が珍しくなくなりました。日本は刑事罰を中心としますが、罰金の上限額が比較的低く（最大300万円）、抑止力としての実効性に課題が指摘されています。米国は行政罰（民事罰金）を中心とし、故意違反で最大約$161,000/件ですが、刑事罰の適用は死亡事故に限定的で、禁固刑も最大6月と軽いとの批判があります。`,
  },
  {
    title: "保護対象の範囲",
    content: `英国は制定当初から、従業員だけでなく非従業員（一般公衆を含む）への保護義務を明示しており、保護範囲が最も広いです。日本は2025年の改正により、作業場所の全ての従事者（一人親方・下請業者含む）への安全措置が義務化され、従来の雇用関係を前提とした保護範囲を大きく拡大しました。米国は「従業員」を保護対象とし、独立請負業者は原則対象外ですが、Multi-employer worksiteの方針で間接的にカバーしています。`,
  },
];

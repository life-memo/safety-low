export interface Provision {
  id: string;
  country: "JP" | "US" | "UK";
  topic_tags: string[];
  keywords: string[];
  law_name: string;
  citation: string;
  text_original: string;
  text_ja: string;
  source_url: string;
  note: string;
}

export const provisions: Provision[] = [
  // ── Japan ──────────────────────────────────────────────
  {
    id: "jp-001",
    country: "JP",
    topic_tags: ["general_duty", "employer_duty"],
    keywords: [
      "事業者",
      "一般的義務",
      "最低基準",
      "快適な職場",
      "労働条件",
      "安全",
      "健康",
      "general duty",
      "employer obligation",
    ],
    law_name: "労働安全衛生法",
    citation: "第3条",
    text_original: "",
    text_ja:
      "事業者は、単にこの法律で定める労働災害の防止のための最低基準を守るだけでなく、快適な職場環境の実現と労働条件の改善を通じて職場における労働者の安全と健康を確保するようにしなければならない。",
    source_url: "https://elaws.e-gov.go.jp/document?lawid=347AC0000000057",
    note: "事業者の包括的責務を定める基本条項。",
  },
  {
    id: "jp-002",
    country: "JP",
    topic_tags: ["management_system", "safety_committee"],
    keywords: [
      "安全衛生管理体制",
      "総括安全衛生管理者",
      "安全管理者",
      "衛生管理者",
      "産業医",
      "安全委員会",
      "衛生委員会",
      "safety committee",
      "occupational physician",
      "management system",
    ],
    law_name: "労働安全衛生法",
    citation: "第10条〜第19条",
    text_original: "",
    text_ja:
      "総括安全衛生管理者、安全管理者、衛生管理者、産業医の選任義務。常時50人以上の事業場では安全委員会・衛生委員会（または安全衛生委員会）の設置義務。",
    source_url: "https://elaws.e-gov.go.jp/document?lawid=347AC0000000057",
    note: "事業場規模・業種により選任すべき管理者が異なる。",
  },
  {
    id: "jp-003",
    country: "JP",
    topic_tags: ["hazard_prevention"],
    keywords: [
      "危険防止措置",
      "危険防止",
      "機械",
      "爆発",
      "電気",
      "健康障害",
      "粉じん",
      "hazard prevention",
      "danger prevention",
      "prevention measures",
    ],
    law_name: "労働安全衛生法",
    citation: "第20条〜第25条",
    text_original: "",
    text_ja:
      "機械・器具、爆発性物質、電気・熱等による危険防止措置。原材料・ガス・粉じん等による健康障害防止措置。作業方法・場所に起因する危険防止措置。事業者は労働者の退避等の義務も負う。",
    source_url: "https://elaws.e-gov.go.jp/document?lawid=347AC0000000057",
    note: "具体的な技術基準は労働安全衛生規則等の下位法令で規定。",
  },
  {
    id: "jp-004",
    country: "JP",
    topic_tags: ["risk_assessment", "chemical_management"],
    keywords: [
      "リスクアセスメント",
      "RA",
      "risk assessment",
      "危険性",
      "有害性",
      "調査",
      "化学物質",
      "努力義務",
      "evaluate",
      "hazard identification",
      "リスク評価",
    ],
    law_name: "労働安全衛生法",
    citation: "第28条の2",
    text_original: "",
    text_ja:
      "事業者は、建設物、設備、原材料等の危険性又は有害性等を調査し、その結果に基づいて必要な措置を講ずるよう努めなければならない（努力義務）。化学物質については2016年より一定範囲で義務化。2024年改正で対象拡大。",
    source_url: "https://elaws.e-gov.go.jp/document?lawid=347AC0000000057",
    note: "一般的RAは努力義務。化学物質RA（674物質以上）は法的義務。",
  },
  {
    id: "jp-005",
    country: "JP",
    topic_tags: ["education_training"],
    keywords: [
      "安全衛生教育",
      "雇入れ時",
      "特別教育",
      "職長",
      "training",
      "education",
      "safety training",
      "教育",
      "訓練",
    ],
    law_name: "労働安全衛生法",
    citation: "第59条〜第60条",
    text_original: "",
    text_ja:
      "雇入れ時・作業内容変更時の安全衛生教育義務。危険有害業務就業時の特別教育義務。職長等の教育義務。",
    source_url: "https://elaws.e-gov.go.jp/document?lawid=347AC0000000057",
    note: "特別教育の対象業務は安衛則で限定列挙。",
  },
  {
    id: "jp-006",
    country: "JP",
    topic_tags: ["health_surveillance", "stress_check"],
    keywords: [
      "健康診断",
      "一般健康診断",
      "特殊健康診断",
      "ストレスチェック",
      "health check",
      "medical examination",
      "stress check",
      "health surveillance",
      "メンタルヘルス",
    ],
    law_name: "労働安全衛生法",
    citation: "第66条〜第66条の9",
    text_original: "",
    text_ja:
      "一般健康診断（雇入れ時、定期）、特殊健康診断の実施義務。ストレスチェック制度（50人以上の事業場で義務、2025年改正で全事業場に拡大予定）。",
    source_url: "https://elaws.e-gov.go.jp/document?lawid=347AC0000000057",
    note: "2026年予定：ストレスチェックの全事業場義務化。",
  },
  {
    id: "jp-007",
    country: "JP",
    topic_tags: ["penalty", "enforcement"],
    keywords: [
      "罰則",
      "懲役",
      "罰金",
      "両罰規定",
      "penalty",
      "fine",
      "imprisonment",
      "criminal",
      "enforcement",
    ],
    law_name: "労働安全衛生法",
    citation: "第115条〜第123条",
    text_original: "",
    text_ja:
      "法令違反に対して6月以下の懲役または50万円以下の罰金等。重大な違反（第116条・第117条）は3年以下の懲役又は300万円以下の罰金。法人に対する両罰規定あり。",
    source_url: "https://elaws.e-gov.go.jp/document?lawid=347AC0000000057",
    note: "日本の罰金上限は国際比較では低水準との指摘あり。",
  },
  {
    id: "jp-008",
    country: "JP",
    topic_tags: ["chemical_management", "risk_assessment"],
    keywords: [
      "化学物質管理",
      "化学物質管理者",
      "SDS",
      "ラベル",
      "chemical management",
      "chemical substance",
      "GHS",
      "自律的管理",
      "有害物質",
    ],
    law_name: "労働安全衛生法・労働安全衛生規則",
    citation: "第57条・第57条の2, 規則第577条の2等",
    text_original: "",
    text_ja:
      "化学物質のラベル表示（第57条）・SDS交付義務（第57条の2）。2024年改正により化学物質管理者の選任義務化、リスクアセスメント対象物質の大幅拡大、ばく露濃度基準の設定。自律的管理への転換。",
    source_url:
      "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000099121.html",
    note: "2024年からの段階施行で化学物質管理体制が大きく転換。",
  },

  // ── United States ──────────────────────────────────────
  {
    id: "us-001",
    country: "US",
    topic_tags: ["general_duty", "employer_duty"],
    keywords: [
      "一般義務条項",
      "General Duty Clause",
      "recognized hazards",
      "認識されている危険",
      "serious physical harm",
      "general duty",
      "employer obligation",
    ],
    law_name: "Occupational Safety and Health Act of 1970",
    citation: "Section 5(a)(1) / 29 U.S.C. §654",
    text_original:
      "Each employer shall furnish to each of his employees employment and a place of employment which are free from recognized hazards that are causing or are likely to cause death or serious physical harm to his employees.",
    text_ja:
      "各事業者は、認識されている危険（recognized hazards）であって死亡又は重大な身体的危害を引き起こしている又は引き起こすおそれのある危険がない雇用及び就業場所を各従業員に提供しなければならない。",
    source_url:
      "https://www.law.cornell.edu/uscode/text/29/654",
    note: "OSHA基準が未整備の分野もカバーする包括的条項。",
  },
  {
    id: "us-002",
    country: "US",
    topic_tags: ["standards_compliance", "employer_duty"],
    keywords: [
      "基準遵守",
      "standards compliance",
      "OSHA基準",
      "29 CFR",
      "連邦基準",
    ],
    law_name: "Occupational Safety and Health Act of 1970",
    citation: "Section 5(a)(2) / 29 U.S.C. §654",
    text_original:
      "Each employer shall comply with occupational safety and health standards promulgated under this Act.",
    text_ja:
      "各事業者は、本法に基づき公布された労働安全衛生基準を遵守しなければならない。OSHA基準は29 CFR Part 1910（一般産業）、1926（建設業）等に規定。",
    source_url:
      "https://www.law.cornell.edu/uscode/text/29/654",
    note: "連邦基準（29 CFR）の遵守義務を定める。",
  },
  {
    id: "us-003",
    country: "US",
    topic_tags: ["standard_setting"],
    keywords: [
      "基準制定",
      "standard setting",
      "Emergency Temporary Standards",
      "緊急臨時基準",
      "rulemaking",
      "労働長官",
    ],
    law_name: "Occupational Safety and Health Act of 1970",
    citation: "Section 6 / 29 U.S.C. §655",
    text_original:
      "The Secretary of Labor shall promulgate, modify, or revoke occupational safety and health standards. Emergency temporary standards may be issued when employees are exposed to grave danger from new hazards.",
    text_ja:
      "労働長官に労働安全衛生基準の制定・改正・廃止の権限を付与。緊急臨時基準（Emergency Temporary Standards）の制定も可能。",
    source_url:
      "https://www.osha.gov/laws-regs/oshact/section6",
    note: "OSHA基準は正式規則制定手続（notice-and-comment rulemaking）を経て公布。",
  },
  {
    id: "us-004",
    country: "US",
    topic_tags: ["record_keeping", "reporting"],
    keywords: [
      "記録保持",
      "報告義務",
      "record keeping",
      "reporting",
      "労働災害",
      "injury",
      "illness",
      "OSHA 300",
      "recordkeeping",
    ],
    law_name: "Occupational Safety and Health Act of 1970",
    citation: "Section 8 / 29 U.S.C. §657",
    text_original:
      "Each employer shall make, keep and preserve records of work-related injuries and illnesses. Fatalities must be reported within 8 hours; hospitalizations, amputations, and losses of an eye within 24 hours.",
    text_ja:
      "事業者は労働災害・疾病の記録を保持する義務。死亡事故、入院、切断、失明は必ずOSHAに報告。有害物質への曝露記録も保持義務あり。",
    source_url: "https://www.osha.gov/laws-regs/oshact/section8",
    note: "OSHA Form 300/300A/301による記録様式が定められている。",
  },
  {
    id: "us-005",
    country: "US",
    topic_tags: ["enforcement", "inspection"],
    keywords: [
      "立入検査",
      "inspection",
      "CSHO",
      "compliance officer",
      "臨検",
      "enforcement",
      "事前通知なし",
    ],
    law_name: "Occupational Safety and Health Act of 1970",
    citation: "Section 8(a) / 29 U.S.C. §657",
    text_original:
      "Authorized representatives of the Secretary, upon presenting appropriate credentials, may enter without delay and at reasonable times any factory, plant, establishment, construction site, or other area, workplace or environment where work is performed by an employee of an employer.",
    text_ja:
      "OSHA検査官（CSHO）が事前通知なく事業場に立入検査可能。優先順位：切迫した危険、死亡・災害、従業員の苦情、重点検査対象。",
    source_url: "https://www.osha.gov/laws-regs/oshact/section8",
    note: "Marshall v. Barlow's, Inc. (1978) により令状なし検査の合憲性に制限あり。",
  },
  {
    id: "us-006",
    country: "US",
    topic_tags: ["penalty", "enforcement"],
    keywords: [
      "是正命令",
      "罰則",
      "citation",
      "penalty",
      "重大違反",
      "故意違反",
      "serious violation",
      "willful violation",
      "罰金",
      "fine",
      "criminal",
    ],
    law_name: "Occupational Safety and Health Act of 1970",
    citation: "Section 9-10, 17 / 29 U.S.C. §658-659, 666",
    text_original:
      "If upon inspection the Secretary believes an employer has violated the Act, a citation shall be issued. Serious violations carry penalties of up to $16,131 per violation. Willful violations carry penalties of up to $161,323 per violation. Criminal penalties for willful violations causing death: up to 6 months imprisonment.",
    text_ja:
      "違反に対しCitation（是正命令）を発行。重大違反（Serious）：最大$16,131/件。故意違反（Willful）：最大$161,323/件。反復違反も同額。刑事罰は故意で死亡事故の場合6月以下の禁固（再犯は1年）。",
    source_url: "https://www.osha.gov/penalties",
    note: "罰金額はインフレ調整で毎年引き上げ。刑事罰の軽さが批判されている。",
  },
  {
    id: "us-007",
    country: "US",
    topic_tags: ["employee_rights", "whistleblower"],
    keywords: [
      "従業員の権利",
      "内部告発",
      "whistleblower",
      "解雇",
      "報復",
      "discrimination",
      "retaliation",
      "employee rights",
      "保護",
    ],
    law_name: "Occupational Safety and Health Act of 1970",
    citation: "Section 11(c) / 29 U.S.C. §660(c)",
    text_original:
      "No person shall discharge or in any manner discriminate against any employee because such employee has filed any complaint or instituted or caused to be instituted any proceeding under or related to this Act.",
    text_ja:
      "従業員がOSHAへの苦情申立て、検査参加等の権利行使を理由とする解雇・報復・差別の禁止。違反者には復職・バックペイ等の救済命令。",
    source_url:
      "https://www.osha.gov/whistleblower",
    note: "OSHAは22以上の連邦法の内部告発保護を管轄。",
  },
  {
    id: "us-008",
    country: "US",
    topic_tags: ["state_plans"],
    keywords: [
      "州計画",
      "state plan",
      "州法",
      "state",
      "連邦",
      "federal",
    ],
    law_name: "Occupational Safety and Health Act of 1970",
    citation: "Section 18 / 29 U.S.C. §667",
    text_original:
      "Any State which desires to assume responsibility for development and enforcement of occupational safety and health standards relating to any issue with respect to which a Federal standard has been promulgated may submit a State plan.",
    text_ja:
      "各州は連邦基準と同等以上の効果を持つ独自の安全衛生計画を策定・運用可能。現在約半数の州が州計画を運用。",
    source_url: "https://www.osha.gov/stateplans",
    note: "州計画はOSHAの承認・監視の下で運用される。",
  },
  {
    id: "us-009",
    country: "US",
    topic_tags: ["risk_assessment", "chemical_management", "psm"],
    keywords: [
      "プロセス安全管理",
      "PSM",
      "process safety management",
      "リスクアセスメント",
      "risk assessment",
      "高危険物質",
      "化学プラント",
      "hazard analysis",
      "PHA",
      "変更管理",
      "MOC",
      "management of change",
    ],
    law_name: "OSHA Process Safety Management Standard",
    citation: "29 CFR 1910.119",
    text_original:
      "This section contains requirements for preventing or minimizing the consequences of catastrophic releases of toxic, reactive, flammable, or explosive chemicals. Employers shall perform an initial process hazard analysis (PHA) on all processes covered by this standard.",
    text_ja:
      "毒性、反応性、可燃性または爆発性の化学物質の壊滅的な放出を防止または最小化するための要件。事業者は対象プロセスについてプロセス危険性分析（PHA）を実施しなければならない。変更管理（MOC）手順の整備も必須。",
    source_url:
      "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.119",
    note: "14要素からなる包括的な管理プログラム。EPA RMPと併せて適用されることが多い。",
  },
  {
    id: "us-010",
    country: "US",
    topic_tags: ["chemical_management", "education_training"],
    keywords: [
      "危険有害性情報伝達",
      "Hazard Communication",
      "HazCom",
      "SDS",
      "MSDS",
      "GHS",
      "ラベル",
      "label",
      "化学物質",
      "chemical",
      "有害物質",
    ],
    law_name: "OSHA Hazard Communication Standard",
    citation: "29 CFR 1910.1200",
    text_original:
      "The purpose of this section is to ensure that the hazards of all chemicals produced or imported are classified, and that information concerning the classified hazards is transmitted to employers and employees by means of labels on containers and safety data sheets.",
    text_ja:
      "製造・輸入される全ての化学品の有害性を分類し、容器ラベルと安全データシート（SDS）により事業者・従業員に情報を伝達する。GHSに準拠した分類・表示を義務化。",
    source_url:
      "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.1200",
    note: "2012年にGHS準拠に改正。「従業員の知る権利」の中核基準。",
  },
  {
    id: "us-011",
    country: "US",
    topic_tags: ["employee_duty"],
    keywords: [
      "従業員の義務",
      "employee duty",
      "worker obligation",
      "compliance",
      "遵守",
    ],
    law_name: "Occupational Safety and Health Act of 1970",
    citation: "Section 5(b) / 29 U.S.C. §654(b)",
    text_original:
      "Each employee shall comply with occupational safety and health standards and all rules, regulations, and orders issued pursuant to this Act which are applicable to his own actions and conduct.",
    text_ja:
      "各従業員は、自身の行為に適用される労働安全衛生基準及び本法に基づく全ての規則・命令を遵守する義務を負う。ただし従業員個人への罰則はなく、OSHAは事業者のみを取締対象とする。",
    source_url: "https://www.law.cornell.edu/uscode/text/29/654",
    note: "従業員にも義務はあるが、執行対象は事業者のみ。",
  },

  // ── United Kingdom ─────────────────────────────────────
  {
    id: "uk-001",
    country: "UK",
    topic_tags: ["general_duty", "employer_duty"],
    keywords: [
      "事業者の一般義務",
      "general duty",
      "reasonably practicable",
      "SFAIRP",
      "合理的に実行可能",
      "employer duty",
      "welfare",
      "福祉",
    ],
    law_name: "Health and Safety at Work etc. Act 1974",
    citation: "Section 2",
    text_original:
      "It shall be the duty of every employer to ensure, so far as is reasonably practicable, the health, safety and welfare at work of all his employees.",
    text_ja:
      "全ての事業者は、合理的に実行可能な限り（so far as is reasonably practicable）、全従業員の就業中の安全・健康・福祉を確保しなければならない。安全な設備・作業システムの提供、情報提供・教育・訓練・監督を含む。",
    source_url:
      "https://www.legislation.gov.uk/ukpga/1974/37/section/2",
    note: "英国安全衛生法の最も基本的な条項。SFAIRPが核心概念。",
  },
  {
    id: "uk-002",
    country: "UK",
    topic_tags: ["non_employee", "employer_duty"],
    keywords: [
      "非従業員",
      "一般公衆",
      "請負業者",
      "non-employee",
      "third party",
      "public",
      "contractor",
      "訪問者",
    ],
    law_name: "Health and Safety at Work etc. Act 1974",
    citation: "Section 3",
    text_original:
      "It shall be the duty of every employer to conduct his undertaking in such a way as to ensure, so far as is reasonably practicable, that persons not in his employment who may be affected thereby are not thereby exposed to risks to their health or safety.",
    text_ja:
      "事業者は、その事業の遂行において、従業員以外の者（請負業者、訪問者、一般公衆）が健康・安全上のリスクにさらされないよう、合理的に実行可能な限り確保しなければならない。",
    source_url:
      "https://www.legislation.gov.uk/ukpga/1974/37/section/3",
    note: "制定当初から非従業員を保護対象に含めた先進的規定。",
  },
  {
    id: "uk-003",
    country: "UK",
    topic_tags: ["risk_assessment"],
    keywords: [
      "リスクアセスメント",
      "RA",
      "risk assessment",
      "suitable and sufficient",
      "適切かつ十分",
      "MHSWR",
      "1999年規則",
      "リスク評価",
      "evaluate",
      "hazard identification",
    ],
    law_name: "Management of Health and Safety at Work Regulations 1999",
    citation: "Regulation 3",
    text_original:
      "Every employer shall make a suitable and sufficient assessment of — (a) the risks to the health and safety of his employees to which they are exposed whilst they are at work; and (b) the risks to the health and safety of persons not in his employment arising out of or in connection with the conduct by him of his undertaking.",
    text_ja:
      "全ての事業者は、従業員及び影響を受ける第三者に対するリスクの「適切かつ十分な」アセスメントを実施しなければならない。5人以上の事業場では重要な所見を書面で記録する義務。定期的な見直しも必要。",
    source_url:
      "https://www.legislation.gov.uk/uksi/1999/3242/regulation/3/made",
    note: "3カ国中最も体系的なRA義務。全事業者に法的義務として課される。",
  },
  {
    id: "uk-004",
    country: "UK",
    topic_tags: ["employee_duty"],
    keywords: [
      "従業員の義務",
      "employee duty",
      "reasonable care",
      "合理的な注意",
      "cooperation",
      "協力",
      "妨害",
      "誤用",
    ],
    law_name: "Health and Safety at Work etc. Act 1974",
    citation: "Section 7-8",
    text_original:
      "It shall be the duty of every employee while at work — (a) to take reasonable care for the health and safety of himself and of other persons who may be affected by his acts or omissions at work; and (b) as regards any duty or requirement imposed on his employer, to co-operate with him so far as is necessary to enable that duty or requirement to be performed or complied with.",
    text_ja:
      "従業員は、自身及び他者の安全・健康について合理的な注意を払い、事業者が法令上の義務を遂行できるよう協力する義務。安全衛生のために提供された物品を意図的又は無謀に妨害・誤用することの禁止（Section 8）。",
    source_url:
      "https://www.legislation.gov.uk/ukpga/1974/37/section/7",
    note: "英国では従業員個人も刑事責任を問われうる点が日米と異なる。",
  },
  {
    id: "uk-005",
    country: "UK",
    topic_tags: ["supplier_manufacturer"],
    keywords: [
      "製造者",
      "供給者",
      "manufacturer",
      "supplier",
      "設計者",
      "輸入者",
      "designer",
      "importer",
      "物品",
      "article",
    ],
    law_name: "Health and Safety at Work etc. Act 1974",
    citation: "Section 6",
    text_original:
      "It shall be the duty of any person who designs, manufactures, imports or supplies any article for use at work — (a) to ensure, so far as is reasonably practicable, that the article is so designed and constructed that it will be safe and without risks to health at all times when it is being set, used, cleaned or maintained by a person at work.",
    text_ja:
      "職場で使用される物品・物質の設計者、製造者、輸入者、供給者は、適切な使用時に安全でリスクがないことを確保する一般義務を負う。",
    source_url:
      "https://www.legislation.gov.uk/ukpga/1974/37/section/6",
    note: "サプライチェーン全体に義務を課す規定。",
  },
  {
    id: "uk-006",
    country: "UK",
    topic_tags: ["safety_policy", "management_system"],
    keywords: [
      "安全衛生方針",
      "safety policy",
      "書面",
      "written statement",
      "方針",
      "policy",
      "周知",
    ],
    law_name: "Health and Safety at Work etc. Act 1974",
    citation: "Section 2(3)",
    text_original:
      "Except in such cases as may be prescribed, it shall be the duty of every employer to prepare and as often as may be appropriate revise a written statement of his general policy with respect to the health and safety at work of his employees and the organisation and arrangements for the time being in force for carrying out that policy, and to bring the statement and any revision of it to the notice of all of his employees.",
    text_ja:
      "5人以上の従業員を雇用する事業者は、安全衛生方針を書面で作成し、従業員に周知する義務。方針の見直し・更新も必要。",
    source_url:
      "https://www.legislation.gov.uk/ukpga/1974/37/section/2",
    note: "方針文書はHSE検査時に最初に確認される書類の一つ。",
  },
  {
    id: "uk-007",
    country: "UK",
    topic_tags: ["safety_committee", "employee_rights"],
    keywords: [
      "安全代表",
      "安全委員会",
      "safety representative",
      "safety committee",
      "労働組合",
      "trade union",
      "協議",
      "consultation",
    ],
    law_name: "Health and Safety at Work etc. Act 1974 / Safety Representatives and Safety Committees Regulations 1977",
    citation: "Section 2(4)-(7)",
    text_original:
      "Recognised trade unions may appoint safety representatives from amongst the employees. It shall be the function of safety representatives to represent the employees in consultations with the employers. If requested by safety representatives, the employer shall establish a safety committee.",
    text_ja:
      "労働組合は安全代表を任命可能。安全代表は安全問題について協議を受ける権利を有する。1996年以降は全従業員との安全問題に関する協議が事業者の義務。",
    source_url:
      "https://www.legislation.gov.uk/ukpga/1974/37/section/2",
    note: "安全代表は事業場の検査権、情報へのアクセス権等を持つ。",
  },
  {
    id: "uk-008",
    country: "UK",
    topic_tags: ["penalty", "enforcement"],
    keywords: [
      "執行",
      "罰則",
      "enforcement",
      "penalty",
      "改善通知",
      "禁止通知",
      "improvement notice",
      "prohibition notice",
      "unlimited fine",
      "無制限の罰金",
      "罰金",
      "禁固",
      "imprisonment",
      "HSE",
    ],
    law_name: "Health and Safety at Work etc. Act 1974 / Health and Safety (Offences) Act 2008",
    citation: "Section 33, 42",
    text_original:
      "A person guilty of an offence under any of the relevant statutory provisions shall be liable — on conviction on indictment, to an unlimited fine, or to imprisonment for a term not exceeding two years, or both. HSE inspectors have the power to issue improvement notices and prohibition notices.",
    text_ja:
      "HSE検査官による事前通知なしの立入検査権限。改善通知（Improvement Notice）・禁止通知（Prohibition Notice）の発行。最も重大な違反には無制限の罰金または最大2年の禁固刑。2008年法改正で多くの違反が正式起訴対象に引き上げ。",
    source_url:
      "https://www.legislation.gov.uk/ukpga/1974/37/section/33",
    note: "2016年量刑ガイドライン改定で数百万ポンド規模の罰金が定着。3カ国中最も厳しい罰則体系。",
  },
  {
    id: "uk-009",
    country: "UK",
    topic_tags: ["chemical_management", "risk_assessment"],
    keywords: [
      "COSHH",
      "化学物質",
      "有害物質",
      "chemical",
      "hazardous substance",
      "exposure",
      "ばく露",
      "occupational exposure limit",
      "OEL",
      "WEL",
      "chemical management",
    ],
    law_name: "Control of Substances Hazardous to Health Regulations 2002 (COSHH)",
    citation: "Regulation 6-7",
    text_original:
      "Every employer shall ensure that the exposure of his employees to substances hazardous to health is either prevented or, where this is not reasonably practicable, adequately controlled. An employer shall not carry out work which is liable to expose any employees to any substance hazardous to health unless he has made a suitable and sufficient assessment of the risk.",
    text_ja:
      "事業者は、従業員の有害物質へのばく露を防止し、防止が合理的に実行不可能な場合は十分に管理しなければならない。有害物質へのばく露のおそれがある業務を行う前に、適切かつ十分なリスクアセスメントを実施する義務。",
    source_url:
      "https://www.legislation.gov.uk/uksi/2002/2677/contents/made",
    note: "英国における化学物質管理の中核規則。職場ばく露限界値（WEL）を設定。",
  },
];

/**
 * 血液科臨床資源入口網 — 連結與內容設定檔
 * 
 * 更新說明：
 * 1. 若要填入尚未完成的網址，只需將對應項目的 url 欄位從 "" 改為完整網址（如 "https://..."），
 *    並將 status 改為 "active" 即可自動啟用連結。
 * 2. 若要新增「疾病個論」項目，直接在 diseaseTopics 陣列中新增物件即可。
 */

window.PORTAL_CONFIG = {
  siteTitle: "血液科臨床資源入口網",
  siteSubtitle: "Hematology & BMT Clinical Portal",
  lastUpdated: "2026-11-26",

  // 臨床工具與預約系統
  clinicalTools: [
    {
      id: "bm-exam",
      title: "骨髓檢查預約系統",
      subtitle: "Bone Marrow Exam Scheduling",
      description: "線上預約骨髓穿刺與切片檢查時段、查詢排程及相關注意事項。",
      url: "https://sites.google.com/view/bmexam/",
      status: "active", // "active" | "coming-soon"
      badge: "線上預約",
      icon: "calendar",
      tags: ["骨髓檢查", "BM", "預約", "排程"]
    },
    {
      id: "consult-templates",
      title: "血液科照會罐頭",
      subtitle: "Hematology Consultation Templates",
      description: "常用血液科會診回覆模板、檢驗建議與標準化照會紀錄格式。",
      url: "https://lichiahans.github.io/hema-consult-helper/",
      status: "active",
      badge: "臨床工具",
      icon: "clipboard",
      tags: ["照會", "會診", "罐頭", "模板", "consult"]
    },
    {
      id: "bmt-protocol",
      title: "BMT Protocol 產生器",
      subtitle: "BMT Conditioning & Protocol Generator",
      description: "依體表面積 (BSA) 與體重快速產生骨髓移植前處置療程與醫囑草案。",
      url: "https://lichiahans.github.io/bmt-protocol-generator/",
      status: "active",
      badge: "臨床工具",
      icon: "flask",
      tags: ["BMT", "HSCT", "骨髓移植", "protocol", "處置療程"]
    },
    {
      id: "ward-orders",
      title: "血液科病房Survival guide",
      subtitle: "Hematology Ward Survival Guide",
      description: "血液科病房常用處方、突破性止吐、入院醫令、TDM、Ribavirin RSV 計算機、抗生素封存療法（ALT）與照會／診斷書模板。",
      url: "https://lichiahans.github.io/hema-ward-orders/",
      status: "active",
      badge: "病房指南",
      icon: "book",
      tags: ["Survival guide", "病房", "處方", "醫囑", "止吐", "TDM", "antifungal", "Posaconazole", "照會", "診斷書", "Ribavirin", "RSV", "Lock", "ALT", "Port-A", "G-CSF", "CRI"]
    }
  ],

  // 疾病個論網站（後續可持續擴充）
  diseaseSection: {
    title: "疾病個論網站",
    subtitle: "Hematologic Disease Monographs",
    description: "血液疾病診斷標準、風險分層與治療指引整理（持續更新中）。",
    mainUrl: "", // 若有統一的疾病個論主網站網址可填於此
    status: "updating",
    topics: [
      {
        id: "aml",
        title: "急性骨髓性白血病 (AML)",
        description: "NCCN v5.2026 速查：ELN 2022 風險分層、高/低強度誘導與鞏固、Venetoclax、R/R 標靶、MRD、APL 與 BPDCN。",
        url: "https://lichiahans.github.io/aml-nccn-guide/",
        status: "active",
        tags: ["AML", "APL", "BPDCN", "白血病", "leukemia", "ELN", "FLT3", "IDH", "NPM1", "Venetoclax", "MRD", "NCCN"]
      },
      {
        id: "bcell-lymphoma",
        title: "B 細胞淋巴瘤 (B-Cell Lymphomas)",
        description: "NCCN v4.2026 速查：DLBCL、FL、MZL、MCL、PMBL、HGBL、BL、PTLD 與預後計算機。",
        url: "https://lichiahans.github.io/bcell-lymphoma-nccn-guide/",
        status: "active",
        tags: ["淋巴瘤", "B細胞淋巴瘤", "lymphoma", "DLBCL", "FL", "MZL", "MCL", "Burkitt", "NCCN"]
      },
      {
        id: "tcell-lymphoma",
        title: "T 細胞淋巴瘤 (T-Cell Lymphomas)",
        description: "NCCN v1.2027 速查：PTCL、ALCL、BIA-ALCL、T-LGLL、T-PLL、ATLL、HSTCL、ENKL/ANKL、GI LPD 與次發性 HLH。",
        url: "https://lichiahans.github.io/tcell-nccn-guide/",
        status: "active",
        tags: ["淋巴瘤", "T細胞淋巴瘤", "lymphoma", "PTCL", "ALCL", "AITL", "ATLL", "HSTCL", "ENKL", "T-LGLL", "T-PLL", "HLH", "NCCN"]
      },
      {
        id: "mpn",
        title: "骨髓增生性腫瘤 (MPN)",
        description: "NCCN v3.2026 速查：MF、PV、ET、AP/BP、Rusfertide、RopegIFN、JAKi 安全須知與預後／MPN-10 計算機。",
        url: "https://lichiahans.github.io/mpn-nccn-guide/",
        status: "active",
        tags: ["MPN", "骨髓增生性腫瘤", "MF", "PV", "ET", "骨髓纖維化", "真性紅血球增多症", "原發性血小板增多症", "JAK2", "CALR", "MPL", "Rusfertide", "Ruxolitinib", "Momelotinib", "NCCN"]
      },
      {
        id: "mds",
        title: "骨髓增生異常症候群 (MDS)",
        description: "NCCN v1.2027 速查：IPSS-R 計算機、IPSS-M、低/高風險治療、MDS-5q、SF3B1、VEXAS/UBA1、IWG 2023、基因與遺傳易感。",
        url: "https://lichiahans.github.io/mds-nccn-guide/",
        status: "active",
        tags: ["MDS", "骨髓化生不良", "骨髓增生異常", "IPSS-R", "IPSS-M", "del(5q)", "SF3B1", "UBA1", "VEXAS", "Luspatercept", "Imetelstat", "HMA", "CMML", "NCCN"]
      },
      {
        id: "mm",
        title: "多發性骨髓瘤 (Multiple Myeloma)",
        description: "NCCN v2.2027 速查：SLiM-CRAB、R2-ISS/IMS-IMWG 與 VTE 計算機、四藥一線、CAR-T/BsAb、BCMA 後處置、腎病變與 MGCS/POEMS。",
        url: "https://lichiahans.github.io/mm-nccn-guide/",
        status: "active",
        tags: ["MM", "多發性骨髓瘤", "myeloma", "SLiM-CRAB", "R-ISS", "R2-ISS", "IMS-IMWG", "Dara-VRd", "Isa-VRd", "CAR-T", "BsAb", "BCMA", "MRD", "IMPEDE", "SAVED", "MGCS", "MGRS", "POEMS", "NCCN"]
      },
      {
        id: "cll",
        title: "慢性淋巴球性白血病 (CLL / SLL)",
        description: "NCCN v2.2027 速查：MBL/CLL/SLL 診斷、Rai/Binet/CLL-IPI 與 TLS 工具、Fit/Frail 一線、Pirtobrutinib+VenR、MRD、Richter 轉化與 BTKi 停藥警語。",
        url: "https://lichiahans.github.io/cll-nccn-guide/",
        status: "active",
        tags: ["CLL", "SLL", "MBL", "慢性淋巴球性白血病", "小淋巴球性淋巴瘤", "del(17p)", "TP53", "IGHV", "BTKi", "BCL2i", "Venetoclax", "Acalabrutinib", "Zanubrutinib", "Pirtobrutinib", "Richter", "TLS", "MRD", "CLL-IPI", "NCCN"]
      },
      {
        id: "cml",
        title: "慢性骨髓性白血病 (CML)",
        description: "NCCN v2.2027 速查：ELTS 風險計算機、CP/AP/BP 治療、3/6/12m 里程碑、BCR::ABL1 突變換藥、TKI 副作用／交互作用、TFR 停藥與懷孕處置。",
        url: "https://lichiahans.github.io/cml-nccn-guide/",
        status: "active",
        tags: ["CML", "慢性骨髓性白血病", "白血病", "leukemia", "BCR-ABL1", "TKI", "Asciminib", "Ponatinib", "Imatinib", "Dasatinib", "Nilotinib", "Bosutinib", "T315I", "ELTS", "TFR", "NCCN"]
      }
    ]
  },

  // 病人衛教網站
  patientEducation: [
    {
      id: "leukemia-guide",
      title: "血癌攻略",
      organization: "台灣癌症基金會 / eCancer",
      description: "專為白血病病人與家屬設計的疾病認識、治療流程與照護指南。",
      url: "https://leukemia.ecancer.org.tw/",
      status: "active",
      badge: "白血病衛教",
      tags: ["血癌", "白血病", "衛教", "病人", "leukemia"]
    },
    {
      id: "lymphoma-guide",
      title: "淋巴癌攻略",
      organization: "台灣癌症基金會 / eCancer",
      description: "深入淺出介紹淋巴癌分類、症狀警訊、化學治療與日常生活注意事項。",
      url: "https://lymphoma.ecancer.org.tw/",
      status: "active",
      badge: "淋巴癌衛教",
      tags: ["淋巴癌", "淋巴瘤", "衛教", "病人", "lymphoma"]
    },
    {
      id: "ntuh-cancer-handbook",
      title: "臺大醫院 癌症病人多元整合照護手冊",
      organization: "國立臺灣大學醫學院附設醫院 癌症防治中心",
      description: "涵蓋治療副作用處理、營養飲食、心理支持與居家照護的完整手冊。",
      url: "https://www.ntuh.gov.tw/CACC/Fpage.action?muid=6487&fid=6979",
      status: "active",
      badge: "整合照護手冊",
      tags: ["臺大醫院", "NTUH", "照護手冊", "副作用", "營養", "衛教"]
    }
  ],

  // 專科考試
  boardExam: [
    {
      id: "hema-board-review",
      title: "血專複習班",
      subtitle: "Hematology Board Exam Review",
      description: "血液病專科醫師考試重點整理、考題複習與準備資源。",
      url: "https://hema-2026.hsiehting.com/",
      status: "active",
      badge: "血液專科",
      tags: ["血專", "專科考試", "複習班", "血液專科", "exam", "board"]
    },
    {
      id: "hsct-board-review",
      title: "移植專複習班",
      subtitle: "HSCT / BMT Board Exam Review",
      description: "造血幹細胞移植專科考試重點回顧、臨床情境與考前複習。",
      url: "https://hsct.hsiehting.com/",
      status: "active",
      badge: "移植專科",
      tags: ["移植專", "HSCT", "BMT", "專科考試", "複習班", "exam", "board"]
    },
    {
      id: "ebmt-study-zh",
      title: "EBMT book 翻譯與口試大補帖",
      subtitle: "EBMT Handbook Study Guide (ZH)",
      description: "EBMT 造血幹細胞移植手冊中文翻譯整理與專科口試核心考題精華。",
      url: "https://lichiahans.github.io/ebmt-transplant-study-zh/",
      status: "active",
      badge: "口試與手冊",
      tags: ["EBMT", "口試", "大補帖", "翻譯", "移植專", "HSCT", "BMT", "專科考試"]
    }
  ]
};

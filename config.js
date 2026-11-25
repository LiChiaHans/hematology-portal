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
  lastUpdated: "2026-11-25",

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
        description: "ELN 風險分層、誘導與鞏固治療原則。",
        url: "",
        status: "coming-soon",
        tags: ["AML", "白血病", "leukemia"]
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
        id: "mm",
        title: "多發性骨髓瘤 (Multiple Myeloma)",
        description: "IMWG 診斷標準、R-ISS 分期與誘導治療組合。",
        url: "",
        status: "coming-soon",
        tags: ["MM", "多發性骨髓瘤", "myeloma"]
      },
      {
        id: "mds-mpn",
        title: "MDS / MPN",
        description: "IPSS-M 風險評估與骨髓增生性腫瘤處置。",
        url: "",
        status: "coming-soon",
        tags: ["MDS", "MPN", "骨髓化生不良"]
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

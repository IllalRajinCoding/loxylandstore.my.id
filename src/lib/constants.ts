// constants/products.ts

export interface ProductItem {
  id: string;
  name: string;
  code: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  status: string;
  description: string;
  items: ProductItem[];
}

export const products: Product[] = [
  {
    id: "yt",
    name: "Youtube Premium",
    category: "stream",
    status: "Tersedia",
    description: "Bebas iklan, download offline, background play",
    items: [
      {
        id: "yt_ind",
        name: "Individual - 1 Bulan",
        code: "ytimplan",
        price: 10000,
      },
      {
        id: "yt_fam",
        name: "Family - 1 Bulan",
        code: "ytfamplan",
        price: 15000,
      },
    ],
  },
  {
    id: "nflx",
    name: "Netflix",
    category: "stream",
    status: "Tersedia",
    description: "Streaming film dan series 4K quality",
    items: [
      {
        id: "nflx_p",
        name: "Private - 1 Bulan",
        code: "nflxpriv",
        price: 165000,
      },
      {
        id: "nflx_s",
        name: "Shared - 1 Bulan",
        code: "nflxshare",
        price: 30000,
      },
    ],
  },
  {
    id: "cnv",
    name: "Canva Pro",
    category: "edit",
    status: "Tersedia",
    description: "Design tools dengan template unlimited",
    items: [
      {
        id: "cnv_pro",
        name: "Pro - 1 Bulan",
        code: "cnv1m",
        price: 5000,
      },
      {
        id: "cnv_edu",
        name: "Education - Lifetime",
        code: "cnvedu",
        price: 20000,
      },
    ],
  },
  {
    id: "cap",
    name: "CapCut Pro",
    category: "edit",
    status: "Tersedia",
    description: "Video editing tanpa watermark",
    items: [
      {
        id: "cap_pro_1y",
        name: "Pro - 1 Tahun",
        code: "cappro1y",
        price: 80000,
      },
    ],
  },
];

export const accountVariants: Record<
  string,
  { features: string[]; limitations: string[] }
> = {
  individual: {
    features: [
      "1 akun pribadi",
      "Full akses premium",
      "Tidak dapat dibagikan",
    ],
    limitations: ["Hanya untuk 1 pengguna"],
  },
  family: {
    features: [
      "Maksimal 6 akun",
      "Profil terpisah per user",
      "Full akses untuk semua",
    ],
    limitations: ["Butuh satu alamat rumah"],
  },
  private: {
    features: [
      "Email & password pribadi",
      "Bisa ganti profil",
      "Full control akun",
    ],
    limitations: ["Tidak dapat dibagikan"],
  },
  shared: {
    features: [
      "Harga lebih murah",
      "Profil sendiri",
      "Akses full konten",
    ],
    limitations: [
      "Dibagi dengan user lain",
      "Tidak bisa ganti password",
    ],
  },
  pro: {
    features: [
      "Template premium unlimited",
      "Background remover",
      "Brand kit & custom font",
    ],
    limitations: [],
  },
  education: {
    features: [
      "Akses selamanya",
      "Semua fitur Pro",
      "Khusus pelajar/pengajar",
    ],
    limitations: [],
  },
  default: {
    features: [
      "Fitur premium lengkap",
      "Proses instant",
      "Customer support",
    ],
    limitations: [],
  },
};

export const productBenefits: Record<string, string[]> = {
  yt: [
    "Tanpa iklan",
    "Download video",
    "Play di background",
    "YouTube Music included",
  ],
  nflx: [
    "Quality 4K UHD",
    "Film & series unlimited",
    "Download offline",
    "Multi-device",
  ],
  cnv: [
    "420K+ template",
    "Remove background",
    "Brand kit",
    "100GB storage",
  ],
  cap: [
    "No watermark",
    "Effect & filter premium",
    "Storage unlimited",
    "Multi-track edit",
  ],
};
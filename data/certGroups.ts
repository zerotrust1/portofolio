export type CertGroup = {
  title: string;
  slug: string;
  description: string;
  certifications: Array<{
    title: string;
    date: string;
    url: string;
  }>;
};

export const certGroups: CertGroup[] = [
  {
    title: "Juniper Networks",
    slug: "juniper-networks",
    description: "Enterprise network security certifications from Juniper Networks / HPE Networking",
    certifications: [
      {
        title: "JNCIA-SEC (Juniper Networks Certified Associate - Security)",
        date: "2026",
        url: "https://www.juniper.net/us/en/training/certification/certification-tracks/security-track.html",
      },
    ],
  },
  {
    title: "Cisco Networking Academy",
    slug: "cisco-academy",
    description: "Certifications from Cisco's educational program",
    certifications: [
      {
        title: "Network Addressing and Basic Troubleshooting",
        date: "2026",
        url: "https://www.credly.com/badges/1c8eec23-e881-42fa-b4ba-5e4efe5d31a1/linked_in_profile",
      },
    ],
  },
  {
    title: "Anthropic Academy",
    slug: "anthropic-academy",
    description: "Certifications from Anthropic's educational program",
    certifications: [
      {
        title: "Claude 101",
        date: "2026",
        url: "https://verify.skilljar.com/c/qqviqc9t5p8z",
      },
      {
        title: "AI Fluency: Framework & Foundation",
        date: "2026",
        url: "https://verify.skilljar.com/c/xcsy7tk5hyx2",
      },
    ],
  },
];

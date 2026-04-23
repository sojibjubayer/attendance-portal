import {
  Building2,
  Users,
  QrCode,
  Clock3,
  BarChart3,
  Palette,
  Globe,
  Lock,
  ShieldCheck,
  Briefcase,
  ScanLine,
  FileBarChart2,
} from "lucide-react";

export const quickStats = [
  { label: "Company-wise Access", value: "Multi Tenant" },
  { label: "Attendance Flow", value: "4 Actions" },
  { label: "Security", value: "QR + Login" },
  { label: "Reports", value: "Monthly" },
];

export const services = [
  {
    title: "Company Registration",
    description:
      "Onboard companies with unique company IDs and separate access control.",
    icon: Building2,
  },
  {
    title: "Company-wise Login",
    description:
      "Allow staff and admins to log in using company ID, email, and password.",
    icon: Briefcase,
  },
  {
    title: "Staff Management",
    description:
      "Create, update, and manage staff with role-based permissions.",
    icon: Users,
  },
  {
    title: "QR Code Generation",
    description:
      "Generate unique QR codes for each company, branch, or location.",
    icon: QrCode,
  },
  {
    title: "Attendance Workflow",
    description:
      "Support check-in, lunch out, lunch in, and checkout with timestamps.",
    icon: Clock3,
  },
  {
    title: "Attendance Reports",
    description:
      "View history and generate monthly reports with clean summaries.",
    icon: FileBarChart2,
  },
  {
    title: "Company Branding",
    description:
      "Apply custom logo, company name, and brand colors for each portal.",
    icon: Palette,
  },
  {
    title: "Subdomain Access",
    description:
      "Support custom subdomain access like company.samiracloud.com.",
    icon: Globe,
  },
  {
    title: "Secure Validation",
    description:
      "Protect attendance with QR validation, login checks, and optional IP rules.",
    icon: ShieldCheck,
  },
  {
    title: "Role-based Access",
    description:
      "Separate permission levels for super admin, company admin, and staff.",
    icon: Lock,
  },
  {
    title: "Location Based Scan",
    description:
      "Allow QR attendance per office or location for stronger validation.",
    icon: ScanLine,
  },
  {
    title: "Company Dashboard",
    description:
      "Provide a dedicated dashboard for each company’s attendance operations.",
    icon: BarChart3,
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "Register Company",
    description:
      "Create a company profile with company ID, branding, admin account, and subdomain setup.",
  },
  {
    step: "02",
    title: "Add Staff & QR",
    description:
      "Add staff members, assign roles, and generate QR for company or branch locations.",
  },
  {
    step: "03",
    title: "Secure Login",
    description:
      "Staff log in with company ID, email, and password before attendance actions.",
  },
  {
    step: "04",
    title: "Mark Attendance",
    description:
      "Scan QR and complete check-in, lunch out, lunch in, and checkout with time tracking.",
  },
];
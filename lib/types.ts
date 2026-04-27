export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type ReportPayload = {
  title: string;
  description: string;
  location: string;
  lat: string;
  long: string;
  images?: string[];
};

export type Report = {
  id: string;
  title: string;
  description: string;
  location: string;
  lat: string;
  long: string;
  status: string;
  created_at: string;
};

export type ReportImage = {
  id: string;
  report_id: string;
  image_url: string;
};
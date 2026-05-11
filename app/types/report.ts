export type ReportStatus =
  | 'pending'
  | 'process'
  | 'done';

export interface Report {
  deleted_at: any;
  id: string;
  title: string;
  description: string;
  location: string;

  status: ReportStatus;

  created_at: string;
}
import { supabase } from '@/lib/supabase';
import AdminReports from '../components/AdminReports';

interface ReportsPageProps {
  searchParams: Promise<{
    search?: string;
    status?: string;
  }>;
}

export default async function ReportsPage({
  searchParams,
}: ReportsPageProps) {
  const params = await searchParams;

  const search = params.search || '';
  const status = params.status || 'all';

  let query = supabase
    .from('reports')
    .select('*')
    .is('deleted_at', null)
    .order('created_at', { ascending: false });

  if (search) {
    query = query.or(
      `title.ilike.%${search}%,location.ilike.%${search}%`
    );
  }

  if (status !== 'all') {
    query = query.eq('status', status);
  }

  const { data: reports } = await query;

  return <AdminReports reports={reports || []} />;
}
import AdminDashboard from './components/AdminDashboard';

import { supabase } from '@/lib/supabase';

export default async function AdminPage() {
  const { data: reports, error } =
    await supabase
      .from('reports')
      .select('*')
      .is("deleted_at", null);

  if (error) {
    console.error(error);
  }

  return (
    <AdminDashboard
      reports={reports || []}
    />
  );
}
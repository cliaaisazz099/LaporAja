"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

type Props = {
  id: string;
  currentStatus: "pending" | "process" | "done";
};

export default function StatusUpdater({
  id,
  currentStatus,
}: Props) {
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);

  const updateStatus = async (newStatus: string) => {
    setLoading(true);

    console.log("UPDATE ID:", id);
    console.log("NEW STATUS:", newStatus);

    const { data, error } = await supabase
      .from("reports")
      .update({ status: newStatus })
      .eq("id", id.trim())
      .select();

    console.log("UPDATE RESULT:", { data, error });

    if (error) {
      toast.error(error.message);
      setLoading(false);
      return;
    }

    if (!data || data.length === 0) {
      toast.error("No row updated (CHECK RLS / ID mismatch)");
      setLoading(false);
      return;
    }

    setStatus(newStatus as any);
    toast.success("Status updated");

    setLoading(false);
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={status}
        onChange={(e) => updateStatus(e.target.value)}
        disabled={loading}
        className="px-3 py-2 border rounded-lg text-sm bg-white"
      >
        <option value="pending">Pending</option>
        <option value="process">Process</option>
        <option value="done">Done</option>
      </select>

      {loading && (
        <span className="text-xs text-gray-400">
          Updating...
        </span>
      )}
    </div>
  );
}
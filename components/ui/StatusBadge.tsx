'use client";'

type Status = "pending" | "process" | "done";

interface Props {
  status: Status;
}

function getStyle(status: Status) {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-700";
    case "process":
      return "bg-blue-100 text-blue-700";
    case "done":
      return "bg-green-100 text-green-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
}

function getLabel(status: Status) {
  switch (status) {
    case "pending":
      return "Menunggu";
    case "process":
      return "Diproses";
    case "done":
      return "Selesai";
    default:
      return "Unknown";
  }
}

export default function StatusBadge({ status }: Props) {
  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full ${getStyle(
        status
      )}`}
    >
      {getLabel(status)}
    </span>
  );
}
import React from "react";

export default function DashboardLoading() {
  return (
    <div className="space-y-6 max-w-6xl animate-pulse">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <div className="h-8 w-64 rounded-lg bg-slate-200" />
        <div className="h-4 w-96 rounded-lg bg-slate-200" />
      </div>

      {/* Form Skeleton */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="h-4 w-40 rounded bg-slate-200 mb-4" />
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="h-10 rounded-xl bg-slate-200" />
          <div className="h-10 rounded-xl bg-slate-200" />
          <div className="h-10 rounded-xl bg-slate-200" />
        </div>
      </div>

      {/* Table List Skeleton */}
      <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm mt-6">
        <div className="h-12 bg-slate-100 border-b border-slate-200" />
        <div className="divide-y divide-slate-100 p-4 space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between items-center py-2">
              <div className="h-5 w-1/4 rounded bg-slate-200" />
              <div className="h-5 w-1/4 rounded bg-slate-200" />
              <div className="h-5 w-1/3 rounded bg-slate-200" />
              <div className="h-8 w-16 rounded-lg bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
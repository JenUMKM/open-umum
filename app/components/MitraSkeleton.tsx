import React from "react";

export default function MitraSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm min-h-[180px] flex flex-col justify-between">
          <div>
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-slate-200 flex-shrink-0" />
              <div className="space-y-2 flex-1">
                <div className="h-5 w-3/4 rounded bg-slate-200" />
                <div className="h-4 w-20 rounded bg-slate-200" />
              </div>
            </div>
            <div className="mt-6 space-y-3 border-t border-slate-100 pt-4">
              <div className="h-4 w-1/2 rounded bg-slate-200" />
              <div className="h-4 w-5/6 rounded bg-slate-200" />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <div className="h-4 w-24 rounded bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

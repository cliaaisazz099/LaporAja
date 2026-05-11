'use client';

import React from 'react';

export default function AdminSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header */}
      <div className="space-y-3">
        <div className="h-9 w-72 rounded-xl bg-gray-200" />

        <div className="h-4 w-96 rounded-lg bg-gray-100" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({
          length: 4,
        }).map((_, i) => (
          <div
            key={i}
            className="panel p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-gray-200" />

              <div className="w-12 h-5 rounded-full bg-gray-100" />
            </div>

            <div className="space-y-2">
              <div className="h-8 w-20 rounded-lg bg-gray-200" />

              <div className="h-4 w-28 rounded-lg bg-gray-100" />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Table Skeleton */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-7 w-52 rounded-lg bg-gray-200" />

            <div className="h-5 w-24 rounded-lg bg-gray-100" />
          </div>

          <div className="panel overflow-hidden">
            <div className="divide-y divide-border">
              {Array.from({
                length: 5,
              }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-6 py-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />

                    <div className="space-y-2">
                      <div className="h-4 w-40 rounded bg-gray-200" />

                      <div className="h-3 w-28 rounded bg-gray-100" />
                    </div>
                  </div>

                  <div className="h-7 w-20 rounded-full bg-gray-100" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          <div className="h-7 w-40 rounded-lg bg-gray-200" />

          <div className="panel p-8 space-y-4">
            <div className="h-6 w-36 rounded-lg bg-gray-200" />

            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-gray-100" />

              <div className="h-4 w-5/6 rounded bg-gray-100" />

              <div className="h-4 w-4/6 rounded bg-gray-100" />
            </div>

            <div className="h-12 w-full rounded-2xl bg-gray-200" />
          </div>

          <div className="panel p-6 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gray-200" />

              <div className="space-y-2">
                <div className="h-4 w-28 rounded bg-gray-200" />

                <div className="h-3 w-20 rounded bg-gray-100" />
              </div>
            </div>

            <div className="flex -space-x-2">
              {Array.from({
                length: 6,
              }).map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
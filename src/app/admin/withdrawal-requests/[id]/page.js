// app/admin/withdrawal-requests/[id]/page.jsx
"use client";

import { useRouter, useParams } from 'next/navigation';
import { ArrowLeftIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function WithdrawalDetails() {
  const router = useRouter();
  const { id } = useParams();

  // In real app, fetch by ID. Here we use dummy data to match the UI:
  const data = {
    fullName: "Jane Cooper",
    email: "abc@example.com",
    phone: "(319) 555-0115",
    transactionId: "12345678",
    accountHolder: "Wade Warren",
    accountNumber: "**** **** *456",
    received: "$500",
    detect: "$100",
    final: "$400"
  };

  return (
    <div className="p-8 bg-white min-h-screen font-sans text-gray-900">
      {/* Back Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => router.back()} className="p-2 bg-blue-50 rounded-full text-[#C12722]">
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-bold">Withdrawal Request Details</h1>
      </div>

      <div className="max-w-4xl">
        <div className="mb-4">
          <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold flex items-center w-fit gap-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" /> Pending
          </span>
        </div>

        <h2 className="text-lg font-bold mb-4">Basic Information</h2>
        
        <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-8">
          <div className="grid grid-cols-2 border-b border-gray-100">
            <div className="p-5 border-r border-gray-100">
              <p className="text-gray-400 text-xs uppercase font-semibold">Full Name</p>
              <p className="font-bold">{data.fullName}</p>
            </div>
            <div className="p-5">
              <p className="text-gray-400 text-xs uppercase font-semibold">Email Address</p>
              <p className="font-bold">{data.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 border-b border-gray-100">
            <div className="p-5 border-r border-gray-100">
              <p className="text-gray-400 text-xs uppercase font-semibold">Phone</p>
              <p className="font-bold">{data.phone}</p>
            </div>
            <div className="p-5">
              <p className="text-gray-400 text-xs uppercase font-semibold">Transaction ID</p>
              <p className="font-bold">{data.transactionId}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 border-b border-gray-100">
            <div className="p-5 border-r border-gray-100">
              <p className="text-gray-400 text-xs uppercase font-semibold">Account Holder Name</p>
              <p className="font-bold">{data.accountHolder}</p>
            </div>
            <div className="p-5">
              <p className="text-gray-400 text-xs uppercase font-semibold">Account Number</p>
              <p className="font-bold">{data.accountNumber}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 bg-gray-50">
            <div className="p-5 border-r border-gray-100">
              <p className="text-gray-400 text-xs uppercase font-semibold">Received Amount</p>
              <p className="font-bold">{data.received}</p>
            </div>
            <div className="p-5 border-r border-gray-100">
              <p className="text-gray-400 text-xs uppercase font-semibold">Detect Percentage</p>
              <p className="font-bold text-red-500">{data.detect}</p>
            </div>
            <div className="p-5">
              <p className="text-gray-400 text-xs uppercase font-semibold">Final Amount</p>
              <p className="font-bold text-green-600">{data.final}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg">
            <CheckIcon className="w-5 h-5" /> Accept
          </button>
          <button className="flex-1 border-2 border-red-500 text-red-500 hover:bg-red-50 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all">
            <XMarkIcon className="w-5 h-5" /> Reject
          </button>
        </div>
      </div>
    </div>
  );
}
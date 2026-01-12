// src/components/WithdrawalRequests.jsx
"use client";

import React, { useState, useMemo } from 'react';
import { MagnifyingGlassIcon, EyeIcon } from '@heroicons/react/24/outline';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

// 1. Defined the data function inside the file so it's globally available to the component
const getAllWithdrawalRequests = () => {
  return [
    {
      id: 'WR001',
      submittedBy: 'Haus & Herz',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      accountType: 'User',
      dateSubmitted: 'May 7, 2025',
      amount: '€150.00',
      paymentMethod: 'Bank Transfer',
      status: 'Pending',
    },
    {
      id: 'WR002',
      submittedBy: 'Studio Pixel',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
      accountType: 'Rider',
      dateSubmitted: 'May 6, 2025',
      amount: '€500.00',
      paymentMethod: 'PayPal',
      status: 'Approved',
    },
    // Add more mock items here if needed
  ];
};

const WithdrawalRequests = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 2. Safely call the function now that it is defined
  const fetchedData = useMemo(() => getAllWithdrawalRequests(), []);
  
  const filteredData = useMemo(() => {
    return fetchedData.filter(item => 
      item.submittedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, fetchedData]);

  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm font-sans min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-xl font-bold text-gray-800">Withdrawal Requests</h1>
        
        <div className="flex items-center w-full md:w-auto">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-9 pr-4 py-2 w-full text-black md:w-64 text-sm rounded-l-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-500"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* <button className="bg-[#C12722] p-2 rounded-r-md border border-[#C12722] hover:bg-[#a11f1b] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="14" y2="12"></line>
                <line x1="4" y1="18" x2="8" y2="18"></line>
            </svg>
          </button> */}
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-100 shadow-sm">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-[#036BB4] text-white">
              <th className="py-3.5 px-4 text-sm font-semibold first:rounded-tl-lg">Submitted By</th>
              <th className="py-3.5 px-4 text-sm font-semibold text-center">Account Type</th>
              <th className="py-3.5 px-4 text-sm font-semibold text-center">Date Submitted</th>
              <th className="py-3.5 px-4 text-sm font-semibold text-center">Amount</th>
              <th className="py-3.5 px-4 text-sm font-semibold text-center">Payment Method</th>
              <th className="py-3.5 px-4 text-sm font-semibold text-center">Status</th>
              <th className="py-3.5 px-4 text-sm font-semibold text-center last:rounded-tr-lg">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {displayedData.length > 0 ? (
              displayedData.map((req) => (
                <tr key={req.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-9 h-9">
                        <img 
                          src={req.avatar} 
                          className="rounded-full object-cover w-full h-full border border-gray-200" 
                          alt={req.submittedBy} 
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{req.submittedBy}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-gray-600">{req.accountType}</td>
                  <td className="py-4 px-4 text-center text-sm text-gray-500">{req.dateSubmitted}</td>
                  <td className="py-4 px-4 text-center text-sm font-bold text-gray-900">{req.amount}</td>
                  <td className="py-4 px-4 text-center text-sm text-gray-600">{req.paymentMethod}</td>
                  <td className="py-4 px-4 text-center">
                    <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      req.status === 'Pending' ? 'bg-orange-50 text-orange-500' : 
                      req.status === 'Approved' ? 'bg-green-50 text-green-500' : 
                      'bg-red-50 text-red-500'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center gap-2">
                      <button className="w-8 h-8 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all shadow-sm">
                        <CheckIcon className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-white transition-all shadow-sm">
                        <XMarkIcon className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => router.push(`/admin/withdrawal-requests/${req.id}`)}
                        className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all shadow-sm"
                      >
                        <EyeIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-10 text-center text-gray-400 text-sm">No requests found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawalRequests;
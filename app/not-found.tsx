'use client'

import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();

  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold text-white">{
        pathname === '/unauthorized' ? 'Unauthorized' : '404 Not Founds'
        }</h2>
      <p className='text-white'>Could not find the requested invoices.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}

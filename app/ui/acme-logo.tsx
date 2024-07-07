import { GlobeAltIcon, ChartBarIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center justify-center leading-none text-white`}
    >
      <ShoppingCartIcon className="h-10 w-15 rotate-[0deg] me-2" />
      <p className="text-[20px] mb-0">Add to Cart</p>
    </div>
  );
}

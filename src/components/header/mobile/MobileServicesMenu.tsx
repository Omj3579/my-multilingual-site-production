import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

export const MobileServicesMenu = ({ onClose }: { onClose: () => void }) => {
  const { translations, language } = useLanguage();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-between w-full focus:outline-none focus:ring-2 focus:ring-[#FFAB77] focus:ring-opacity-50 active:bg-gray-100">
          <span>{translations['nav.services']?.[language] || 'Our Services'}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent 
          className="w-80 min-w-[20rem] bg-white shadow-lg rounded-md max-h-96 overflow-y-auto mobile-dropdown-content"
          style={{ zIndex: 9999 }}
          sideOffset={4}
          alignOffset={0}
          side="bottom"
          align="start"
        >
        <h3 className="px-4 py-2 text-sm font-medium text-yellow-500 whitespace-nowrap">
          {language === 'en' ? 'Advanced Injection Moulding' : 'Fejlett fröccsöntési technológia'}
        </h3>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/services/plastic-injection-moulding" className="px-4 py-3 hover:bg-gray-50 rounded transition-colors whitespace-nowrap">
            {language === 'en' ? 'Precision Injection Manufacturing' : 'Precíziós fröccsöntési gyártás'}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/services/in-mould-labelling" className="px-4 py-3 hover:bg-gray-50 rounded transition-colors whitespace-nowrap">
            {language === 'en' ? 'In-Mould Labeling Technology' : 'Öntés közbeni címkézési technológia'}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/services/in-mould-decoration" className="px-4 py-3 hover:bg-gray-50 rounded transition-colors whitespace-nowrap">
            {language === 'en' ? 'Surface Enhancement Solutions' : 'Felületjavítási megoldások'}
          </Link>
        </DropdownMenuItem>
        
        <h3 className="px-4 py-2 text-sm font-medium text-yellow-500 mt-4 whitespace-nowrap">
          {language === 'en' ? 'Manufacturing Partnership' : 'Gyártási partnerség'}
        </h3>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/services/contract-manufacturing" className="px-4 py-3 hover:bg-gray-50 rounded transition-colors whitespace-nowrap">
            {language === 'en' ? 'Strategic Manufacturing Solutions' : 'Stratégiai gyártási megoldások'}
          </Link>
        </DropdownMenuItem>
        
        <h3 className="px-4 py-2 text-sm font-medium text-yellow-500 mt-4 whitespace-nowrap">
          {language === 'en' ? 'Production Excellence' : 'Gyártási kiválóság'}
        </h3>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/services/tooling-management" className="px-4 py-3 hover:bg-gray-50 rounded transition-colors whitespace-nowrap">
            {language === 'en' ? 'Tooling Management' : 'Szerszámkezelés'}
          </Link>
        </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

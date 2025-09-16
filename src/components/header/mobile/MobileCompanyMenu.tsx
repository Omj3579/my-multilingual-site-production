
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

export const MobileCompanyMenu = ({ onClose }: { onClose: () => void }) => {
  const { translations, language } = useLanguage();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-between w-full focus:outline-none focus:ring-2 focus:ring-[#FFAB77] focus:ring-opacity-50 active:bg-gray-100">
          <span>{translations['nav.company']?.[language]}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent 
          className="w-80 min-w-[20rem] bg-white shadow-lg rounded-md mobile-dropdown-content"
          style={{ zIndex: 9999 }}
          sideOffset={4}
          alignOffset={0}
          side="bottom"
          align="start"
        >
        <h3 className="px-4 py-2 text-sm font-medium text-yellow-500 whitespace-nowrap">
          {language === 'en' ? 'Our History' : 'Történetünk'}
        </h3>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/company/history#origins" className="px-4 py-3 hover:bg-gray-50 rounded transition-colors whitespace-nowrap">
            {language === 'en' ? 'Company Origins' : 'Vállalat Eredete'}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/company/history#milestones" className="px-4 py-3 hover:bg-gray-50 rounded transition-colors whitespace-nowrap">
            {language === 'en' ? 'Growth & Milestones' : 'Növekedés és Mérföldkövek'}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/company/history#innovation" className="px-4 py-3 hover:bg-gray-50 rounded transition-colors whitespace-nowrap">
            {language === 'en' ? 'Innovation Legacy' : 'Innovációs Örökség'}
          </Link>
        </DropdownMenuItem>
        
        <h3 className="px-4 py-2 text-sm font-medium text-yellow-500 mt-4 whitespace-nowrap">
          {language === 'en' ? 'Leadership' : 'Vezetőség'}
        </h3>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/company/management" className="px-4 py-3 hover:bg-gray-50 rounded transition-colors whitespace-nowrap">
            {language === 'en' ? 'Management Team' : 'Vezetői Csapat'}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/company/management#executives" className="px-4 py-3 hover:bg-gray-50 rounded transition-colors whitespace-nowrap">
            {language === 'en' ? 'Executive Leadership' : 'Ügyvezetői Vezetőség'}
          </Link>
        </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

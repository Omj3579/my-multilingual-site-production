
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

export const MobileSustainabilityMenu = ({ onClose }: { onClose: () => void }) => {
  const { translations, language } = useLanguage();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-between w-full focus:outline-none focus:ring-2 focus:ring-[#FFAB77] focus:ring-opacity-50 active:bg-gray-100">
          <span>{translations['nav.sustainability']?.[language]}</span>
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
          {language === 'en' ? 'Green Strategy Initiatives' : 'Zöld Stratégiai Kezdeményezések'}
        </h3>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/sustainability/green-strategy#renewable-energy" className="px-4 py-3 hover:bg-gray-50 rounded transition-colors whitespace-nowrap">
            {language === 'en' ? 'Renewable Energy Integration' : 'Megújuló Energia Integráció'}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/sustainability/green-strategy#water-management" className="px-4 py-3 hover:bg-gray-50 rounded transition-colors whitespace-nowrap">
            {language === 'en' ? 'Advanced Water Management' : 'Fejlett Vízgazdálkodás'}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/sustainability/green-strategy#material-recovery" className="px-4 py-3 hover:bg-gray-50 rounded transition-colors whitespace-nowrap">
            {language === 'en' ? 'Circular Material Flow' : 'Körforgásos Anyagáramlás'}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/sustainability/green-strategy#environmental-stewardship" className="px-4 py-3 hover:bg-gray-50 rounded transition-colors whitespace-nowrap">
            {language === 'en' ? 'Environmental Stewardship' : 'Környezeti Felelősségvállalás'}
          </Link>
        </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

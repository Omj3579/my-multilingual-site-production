
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

export const MobileCompanyMenu = ({ onClose }: { onClose: () => void }) => {
  const { translations, language } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-between w-full">
        <span>{translations['nav.company']?.[language]}</span>
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white shadow-lg rounded-md">
        <h3 className="px-2 py-1 text-sm font-medium text-yellow-500">
          {translations['company.about']?.[language]}
        </h3>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/company/history">
            {translations['company.history']?.[language]}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/company/management">
            {translations['company.management']?.[language]}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

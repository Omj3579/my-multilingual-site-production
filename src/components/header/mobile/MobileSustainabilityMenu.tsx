
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

export const MobileSustainabilityMenu = ({ onClose }: { onClose: () => void }) => {
  const { translations, language } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-between w-full">
        <Link href="/sustainability" className="text-gray-700 hover:text-blue-600" onClick={onClose}>
          <span>{translations['nav.sustainability']?.[language]}</span>
        </Link>
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white shadow-lg rounded-md">
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/sustainability/green-strategy">
            {translations['sustainability.green_strategy']?.[language]}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

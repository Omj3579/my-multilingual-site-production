
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

export const MobileServicesMenu = ({ onClose }: { onClose: () => void }) => {
  const { translations, language } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-between w-full">
        <span>{translations['nav.services']?.[language] || 'Our Services'}</span>
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full bg-white shadow-lg rounded-md">
        <h3 className="px-2 py-1 text-sm font-medium text-yellow-500">
          {translations['services.plastic_injection']?.[language]}
        </h3>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/services/plastic-injection-moulding">
            {translations['services.plastic_injection']?.[language]}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/services/in-mould-labelling">
            {translations['services.in_mould_labelling']?.[language]}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/services/in-mould-decoration">
            {translations['services.in_mould_decoration']?.[language]}
          </Link>
        </DropdownMenuItem>
        
        <h3 className="px-2 py-1 text-sm font-medium text-yellow-500 mt-2">
          {translations['services.contract_manufacturing']?.[language]}
        </h3>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/services/contract-manufacturing">
            {translations['services.contract_manufacturing']?.[language]}
          </Link>
        </DropdownMenuItem>
        
        <h3 className="px-2 py-1 text-sm font-medium text-yellow-500 mt-2">
          {translations['services.manufacturing_support']?.[language]}
        </h3>
        <DropdownMenuItem asChild onClick={onClose}>
          <Link href="/services/tooling-management">
            {translations['services.tooling_management']?.[language]}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

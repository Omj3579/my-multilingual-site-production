import React from 'react';
import { Weight, Ruler, Layers, Package } from 'lucide-react';

interface SpecificationsTableProps {
  specifications: {
    volume?: string;
    size?: string;
    material?: string;
    pallet?: string;
    [key: string]: string | undefined;
  };
  language: 'en' | 'hu';
}

const SpecificationsTable: React.FC<SpecificationsTableProps> = ({
  specifications,
  language
}) => {
  const getIconForSpec = (key: string) => {
    switch (key) {
      case 'volume':
        return <Weight className="mt-1 h-5 w-5 text-gray-400 shrink-0" />;
      case 'size':
        return <Ruler className="mt-1 h-5 w-5 text-gray-400 shrink-0" />;
      case 'material':
        return <Layers className="mt-1 h-5 w-5 text-gray-400 shrink-0" />;
      case 'pallet':
        return <Package className="mt-1 h-5 w-5 text-gray-400 shrink-0" />;
      default:
        return null;
    }
  };

  const getLabel = (key: string): string => {
    const labels: Record<string, Record<'en' | 'hu', string>> = {
      volume: {
        en: 'Tonnage',
        hu: 'Űrtartalom'
      },
      size: {
        en: 'Size (w × h × d)',
        hu: 'Méret (sz × m × m)'
      },
      material: {
        en: 'Material',
        hu: 'Anyag'
      },
      pallet: {
        en: 'Pieces per Pallet',
        hu: 'Darab/raklap'
      }
    };

    return labels[key]?.[language] || key;
  };

  return (
    <div className="space-y-4">
      {Object.entries(specifications).map(([key, value]) => (
        value && (
          <div key={key} className="flex items-start gap-3">
            {getIconForSpec(key)}
            <div>
              <p className="text-sm text-gray-500">{getLabel(key)}</p>
              <p className="font-medium">{value}</p>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default SpecificationsTable;

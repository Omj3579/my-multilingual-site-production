import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLanguage } from '@/contexts/LanguageContext';

interface InteractiveChartProps {
  // Optional custom data
  customData?: any[];
}

const InteractiveChart: React.FC<InteractiveChartProps> = ({ customData }) => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Default data for breakdown time in years
  const defaultData = [
    {
      name: language === 'en' ? 'PET Bottle' : language === 'hu' ? 'PET Palack' : 'PET Flasche',
      traditional: 450,
      biodegradable: 5,
    },
    {
      name: language === 'en' ? 'Plastic Bag' : language === 'hu' ? 'Műanyag Zacskó' : 'Plastiktüte',
      traditional: 20,
      biodegradable: 0.5,
    },
    {
      name: language === 'en' ? 'Food Container' : language === 'hu' ? 'Ételtároló' : 'Lebensmittelbehälter',
      traditional: 75,
      biodegradable: 2,
    },
    {
      name: language === 'en' ? 'Coffee Cup' : language === 'hu' ? 'Kávés Pohár' : 'Kaffeebecher',
      traditional: 30,
      biodegradable: 1.5,
    },
  ];
  
  const data = customData || defaultData;
  
  // Labels based on language
  const traditionalLabel = 
    language === 'en' ? 'Traditional Plastic' : 
    language === 'hu' ? 'Hagyományos Műanyag' : 
    'Traditioneller Kunststoff';
  
  const biodegradableLabel = 
    language === 'en' ? 'Biodegradable Plastic' : 
    language === 'hu' ? 'Biológiailag Lebomló' : 
    'Biologisch Abbaubar';
  
  const yearsLabel = 
    language === 'en' ? 'Years to Decompose' : 
    language === 'hu' ? 'Lebomlási Idő (év)' : 
    'Jahre zum Abbau';
  
  const tooltipTitle = 
    language === 'en' ? 'Breakdown Time' : 
    language === 'hu' ? 'Lebomlási idő' : 
    'Abbauzeit';
  
  // Handle mouse enter
  const handleMouseEnter = (data: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: yearsLabel, angle: -90, position: 'insideLeft' }} />
          <Tooltip 
            formatter={(value: number) => [`${value} ${language === 'en' ? 'years' : language === 'hu' ? 'év' : 'Jahre'}`, tooltipTitle]}
          />
          <Legend />
          <Bar 
            dataKey="traditional" 
            name={traditionalLabel} 
            fill="#8884d8" 
            onMouseEnter={handleMouseEnter}
            animationDuration={1500}
          />
          <Bar 
            dataKey="biodegradable" 
            name={biodegradableLabel} 
            fill="#82ca9d"
            onMouseEnter={handleMouseEnter}
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
      
      <div className="text-center text-sm text-gray-500 mt-2">
        {language === 'en' 
          ? 'Click on bars to compare breakdown times'
          : language === 'hu'
            ? 'Kattintson az oszlopokra az összehasonlításhoz'
            : 'Klicken Sie auf die Balken, um die Abbauzeiten zu vergleichen'
        }
      </div>
    </div>
  );
};

export default InteractiveChart;
import { NextApiRequest, NextApiResponse } from 'next';
import { caseStudies as caseStudiesData, CaseStudy } from '@/data/caseStudiesData';

// Import custom case studies registry
let customCaseStudies: Partial<CaseStudy>[] = [];
try {
  const customCaseStudyModule = await import('@/data/customCaseStudiesRegistry');
  customCaseStudies = customCaseStudyModule.customCaseStudies || [];
} catch {
  console.log('customCaseStudiesRegistry not found, using empty array');
  customCaseStudies = [];
}

// Transform case studies to standardized format
const transformCaseStudy = (study: CaseStudy | Partial<CaseStudy>) => {
  if (!study.id || !study.title || !study.date) {
    return null;
  }

  return {
    id: study.id,
    title: study.title,
    description: study.description,
    summary: study.description, // Use description as summary for consistency
    content: study.content,
    slug: study.slug,
    image: study.image || study.thumbnailImage,
    thumbnailImage: study.thumbnailImage || study.image,
    date: study.date,
    publishedAt: study.date,
    updatedAt: study.updatedAt,
    author: study.author,
    readTime: study.readTime || 5,
    tags: study.tags || [],
    category: study.category || 'case-study',
    featured: study.featured || false,
    customUrl: study.customUrl || `/resources/case-studies/${study.slug}`,
    // Case study specific fields
    client: study.client,
    challenge: study.challenge,
    solution: study.solution,
    results: study.results,
    industry: study.client?.industry
  };
};

// Helper function to merge regular case studies with custom ones
const mergeCaseStudies = () => {
  const caseStudies = caseStudiesData || [];
  
  // Filter out regular studies that have been overridden by custom ones
  const filteredRegular = caseStudies.filter(
    regularStudy => !customCaseStudies.some(customStudy => customStudy.id === regularStudy.id)
  );
  
  // Transform and combine
  const transformedRegular = filteredRegular.map(transformCaseStudy).filter(study => study !== null);
  const transformedCustom = customCaseStudies.map(transformCaseStudy).filter(study => study !== null);
  
  return [
    ...transformedRegular,
    ...transformedCustom
  ];
};

const getTextContent = (field: string | { en: string; hu: string; de: string; } | undefined): string => {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return `${field.en || ''} ${field.hu || ''} ${field.de || ''}`;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { featured, industry, tag, client, limit, search, debug } = req.query;

    let allCaseStudies = mergeCaseStudies();

    // Filter by featured if requested
    if (featured === 'true') {
      allCaseStudies = allCaseStudies.filter(study => study?.featured === true);
    }

    // Filter by industry if specified
    if (industry && typeof industry === 'string') {
      allCaseStudies = allCaseStudies.filter(study => 
        study?.industry?.toLowerCase() === industry.toLowerCase() ||
        study?.client?.industry?.toLowerCase() === industry.toLowerCase()
      );
    }

    // Filter by client if specified
    if (client && typeof client === 'string') {
      allCaseStudies = allCaseStudies.filter(study => 
        study?.client?.name?.toLowerCase().includes(client.toLowerCase())
      );
    }

    // Filter by tag if specified
    if (tag && typeof tag === 'string') {
      allCaseStudies = allCaseStudies.filter(study => 
        study?.tags?.some((studyTag: string) => studyTag.toLowerCase() === tag.toLowerCase())
      );
    }

    // Search functionality
    if (search && typeof search === 'string') {
      const searchTerm = search.toLowerCase();
      allCaseStudies = allCaseStudies.filter(study => {
        if (!study) return false;
        
        const searchableContent = [
          getTextContent(study.title),
          getTextContent(study.description),
          getTextContent(study.summary),
          getTextContent(study.challenge),
          getTextContent(study.solution),
          study.client?.name || '',
          study.client?.industry || '',
          study.industry || '',
          ...(study.tags || [])
        ].join(' ').toLowerCase();
        
        return searchableContent.includes(searchTerm);
      });
    }

    // Sort by date (newest first)
    allCaseStudies.sort((a, b) => {
      if (!a?.date || !b?.date) return 0;
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    // Apply limit if specified
    if (limit && typeof limit === 'string') {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum)) {
        allCaseStudies = allCaseStudies.slice(0, limitNum);
      }
    }

    // Debug information
    if (debug === 'true') {
      const debugInfo = {
        regular: caseStudiesData?.length || 0,
        custom: customCaseStudies.length,
        total: allCaseStudies.length,
        filters: {
          featured: featured === 'true',
          industry: industry || null,
          client: client || null,
          tag: tag || null,
          search: search || null,
          limit: limit || null
        },
        availableIndustries: [...new Set(allCaseStudies.map(study => 
          study?.industry || study?.client?.industry
        ).filter(Boolean))].sort(),
        availableClients: [...new Set(allCaseStudies.map(study => 
          study?.client?.name
        ).filter(Boolean))].sort(),
        availableTags: [...new Set(allCaseStudies.flatMap(study => study?.tags || []))].sort()
      };

      return res.status(200).json({
        caseStudies: allCaseStudies,
        debug: debugInfo
      });
    }

    // Return case studies array
    res.status(200).json(allCaseStudies);
  } catch (error) {
    console.error('Error in combined-case-studies API:', error);
    res.status(500).json({ 
      error: 'Failed to fetch case studies',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

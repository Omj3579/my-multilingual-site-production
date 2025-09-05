import { NextApiRequest, NextApiResponse } from 'next';
import { updates as updatesData, UpdateItem } from '@/data/updatesData';

// Check if custom updates registry exists
let customUpdates: Partial<UpdateItem>[] = [];
try {
  const customUpdatesModule = require('@/data/customUpdatesRegistry');
  customUpdates = customUpdatesModule.customUpdates || [];
} catch (error) {
  console.log('customUpdatesRegistry not found, using empty array');
  customUpdates = [];
}

// Transform updates to standardized format
const transformUpdate = (update: UpdateItem | Partial<UpdateItem>) => {
  if (!update.id || !update.title || !update.date) {
    return null;
  }

  return {
    id: update.id,
    title: update.title,
    description: update.description,
    summary: update.description, // Use description as summary for consistency
    content: update.content,
    slug: update.slug,
    image: update.image || update.thumbnailImage,
    thumbnailImage: update.thumbnailImage || update.image,
    date: update.date,
    author: update.author,
    readTime: update.readTime || 2,
    tags: update.tags || [],
    category: update.category || 'update',
    featured: update.featured || false,
    customUrl: update.customUrl || `/resources/updates/${update.slug}`,
    version: update.version,
    priority: update.priority,
    updateCategory: update.updateCategory,
    changeType: update.changeType,
    affectedProducts: update.affectedProducts || []
  };
};

// Helper function to merge regular updates with custom ones
const mergeUpdates = () => {
  // Filter out regular updates that have been overridden by custom ones
  const filteredRegular = updatesData.filter(
    regularUpdate => !customUpdates.some(customUpdate => customUpdate.id === regularUpdate.id)
  );
  
  // Transform and combine
  const transformedRegular = filteredRegular.map(transformUpdate).filter(update => update !== null);
  const transformedCustom = customUpdates.map(transformUpdate).filter(update => update !== null);
  
  return [
    ...transformedRegular,
    ...transformedCustom
  ];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { 
      featured, 
      priority, 
      updateCategory, 
      changeType, 
      version, 
      affectedProduct, 
      tag, 
      limit, 
      search, 
      debug,
      sortBy,
      sortOrder 
    } = req.query;

    let allUpdates = mergeUpdates();

    // Filter by featured if requested
    if (featured === 'true') {
      allUpdates = allUpdates.filter(update => update.featured === true);
    }

    // Filter by priority if specified
    if (priority && typeof priority === 'string') {
      allUpdates = allUpdates.filter(update => 
        update.priority?.toLowerCase() === priority.toLowerCase()
      );
    }

    // Filter by update category if specified
    if (updateCategory && typeof updateCategory === 'string') {
      allUpdates = allUpdates.filter(update => 
        update.updateCategory?.toLowerCase() === updateCategory.toLowerCase()
      );
    }

    // Filter by change type if specified
    if (changeType && typeof changeType === 'string') {
      allUpdates = allUpdates.filter(update => 
        update.changeType?.toLowerCase() === changeType.toLowerCase()
      );
    }

    // Filter by version if specified
    if (version && typeof version === 'string') {
      allUpdates = allUpdates.filter(update => 
        update.version?.toLowerCase().includes(version.toLowerCase())
      );
    }

    // Filter by affected product if specified
    if (affectedProduct && typeof affectedProduct === 'string') {
      allUpdates = allUpdates.filter(update => 
        update.affectedProducts?.some((prod: string) => 
          prod.toLowerCase().includes(affectedProduct.toLowerCase())
        )
      );
    }

    // Filter by tag if specified
    if (tag && typeof tag === 'string') {
      allUpdates = allUpdates.filter(update => 
        update.tags.some((updateTag: string) => updateTag.toLowerCase() === tag.toLowerCase())
      );
    }

    // Search functionality
    if (search && typeof search === 'string') {
      const searchTerm = search.toLowerCase();
      allUpdates = allUpdates.filter(update => {
        const searchableContent = [
          update.title?.en || '',
          update.title?.hu || '',
          update.title?.de || '',
          update.description?.en || '',
          update.description?.hu || '',
          update.description?.de || '',
          update.summary?.en || '',
          update.summary?.hu || '',
          update.summary?.de || '',
          update.version || '',
          update.updateCategory || '',
          update.changeType || '',
          ...(update.tags || []),
          ...(update.affectedProducts || [])
        ].join(' ').toLowerCase();
        
        return searchableContent.includes(searchTerm);
      });
    }    // Sorting logic
    const getSortValue = (update: any, sortField: string) => {
      switch (sortField) {
        case 'priority':
          const priorityOrder = { 'critical': 4, 'high': 3, 'medium': 2, 'low': 1 };
          return priorityOrder[update.priority as keyof typeof priorityOrder] || 0;
        case 'date':
          return new Date(update.date).getTime();
        case 'version':
          return update.version || '';
        case 'title':
          const title = update.title;
          if (typeof title === 'string') return title;
          return title?.en || title?.hu || title?.de || '';
        default:
          return new Date(update.date).getTime();
      }
    };

    // Apply sorting
    const sortField = (sortBy as string) || 'date';
    const order = (sortOrder as string) || 'desc';
    
    allUpdates.sort((a, b) => {
      // Special case: always prioritize critical updates first regardless of sort
      if (a.priority === 'critical' && b.priority !== 'critical') return -1;
      if (b.priority === 'critical' && a.priority !== 'critical') return 1;
      
      const valueA = getSortValue(a, sortField);
      const valueB = getSortValue(b, sortField);
      
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return order === 'desc' ? valueB - valueA : valueA - valueB;
      } else {
        const stringA = String(valueA).toLowerCase();
        const stringB = String(valueB).toLowerCase();
        if (order === 'desc') {
          return stringB.localeCompare(stringA);
        } else {
          return stringA.localeCompare(stringB);
        }
      }
    });

    // Apply limit if specified
    if (limit && typeof limit === 'string') {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum)) {
        allUpdates = allUpdates.slice(0, limitNum);
      }
    }    // Debug information
    if (debug === 'true') {
      const debugInfo = {
        regular: updatesData.length,
        custom: customUpdates.length,
        total: allUpdates.length,
        filters: {
          featured: featured === 'true',
          priority: priority || null,
          updateCategory: updateCategory || null,
          changeType: changeType || null,
          version: version || null,
          affectedProduct: affectedProduct || null,
          tag: tag || null,
          search: search || null,
          limit: limit || null,
          sortBy: sortBy || 'date',
          sortOrder: sortOrder || 'desc'
        },
        availablePriorities: [...new Set(allUpdates.map(update => update.priority).filter(Boolean))].sort(),
        availableCategories: [...new Set(allUpdates.map(update => update.updateCategory).filter(Boolean))].sort(),
        availableChangeTypes: [...new Set(allUpdates.map(update => update.changeType).filter(Boolean))].sort(),
        availableVersions: [...new Set(allUpdates.map(update => update.version).filter(Boolean))].sort(),
        availableProducts: [...new Set(allUpdates.flatMap(update => update.affectedProducts || []))].sort(),
        availableTags: [...new Set(allUpdates.flatMap(update => update.tags))].sort(),
        criticalUpdates: allUpdates.filter(update => update.priority === 'critical').length
      };

      return res.status(200).json({
        updates: allUpdates,
        debug: debugInfo
      });
    }

    // Return updates with enhanced summary info
    res.status(200).json({
      updates: allUpdates,
      total: allUpdates.length,
      critical: allUpdates.filter(update => update.priority === 'critical').length,
      featured: allUpdates.filter(update => update.featured).length,
      filters: {
        updateCategory: updateCategory || null,
        priority: priority || null,
        changeType: changeType || null,
        affectedProduct: affectedProduct || null,
        version: version || null,
        tag: tag || null,
        featured: featured === 'true',
        search: search || null,
        limit: limit ? parseInt(limit as string) : null,
        sortBy: sortBy || 'date',
        sortOrder: sortOrder || 'desc'
      }
    });
  } catch (error) {
    console.error('Error in combined-updates API:', error);
    res.status(500).json({ 
      error: 'Failed to fetch updates',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
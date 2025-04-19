
import { Skeleton } from "@/components/ui/skeleton";

/**
 * PageSkeleton component for reducing CLS (Cumulative Layout Shift)
 * Displays a skeleton view while page content is loading
 */
const PageSkeleton = () => {
  return (
    <div className="w-full max-w-full animate-pulse">
      {/* Header skeleton */}
      <div className="w-full h-16 bg-slate-200 dark:bg-slate-800 mb-4 rounded"></div>
      
      {/* Hero section skeleton */}
      <div className="w-full aspect-[21/9] bg-slate-200 dark:bg-slate-800 mb-8 rounded-lg"></div>
      
      {/* Content skeletons */}
      <div className="container mx-auto px-4">
        {/* Title skeleton */}
        <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
        
        {/* Text skeleton */}
        <div className="space-y-2 mb-8">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        
        {/* Card grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <Skeleton className="h-32 w-full mb-4 rounded-md" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
              <div className="mt-4">
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;

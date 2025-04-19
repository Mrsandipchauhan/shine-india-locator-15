
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  path: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  microdata?: boolean;
}

const Breadcrumbs = ({ items, microdata = true }: BreadcrumbsProps) => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    ...items
  ];

  return (
    <Breadcrumb className="mb-4">
      {microdata && (
        <div 
          itemScope 
          itemType="https://schema.org/BreadcrumbList" 
          className="hidden"
        >
          {breadcrumbItems.map((item, index) => (
            <div 
              key={`bc-schema-${index}`} 
              itemScope 
              itemProp="itemListElement" 
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={`${index + 1}`} />
              <meta itemProp="name" content={item.label} />
              <meta itemProp="item" content={`https://shinedetailers.in${item.path}`} />
            </div>
          ))}
        </div>
      )}
      
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">
              <Home className="h-4 w-4" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {items.map((item, index) => (
          <Fragment key={`breadcrumb-${index}`}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {item.isCurrent ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={item.path}>{item.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;

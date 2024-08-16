// Breadcrumbs component

import Link from "next/link";

const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="py-3">
      <ol className="flex ">
        {/* Mapping Items as breadcrumbs */}
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-1 text-black-400">&gt;</span>}
            {/* Redirect to respective route for all items but not for the last one */}
            {index < items.length - 1 ? (
              <Link href={item.href}>
                <p className="text-teal hover:text-teal-800 text-xs">
                  {item.label}
                </p>
              </Link>
            ) : (
              <>
                {/* Simple text display for the last one */}
                <span className="text-black-600 text-xs">{item.label}</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

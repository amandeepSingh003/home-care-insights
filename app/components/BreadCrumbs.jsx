// components/Breadcrumbs.tsx

import Link from "next/link";


const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="py-3">
      <ol className="flex ">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-1 text-black-400">&gt;</span>}
            {index < items.length - 1 ? (
              <Link href={item.href}>
                <p className="text-teal hover:text-teal-800 text-xs">
                  {item.label}
                </p>
              </Link>
            ) : (
              <span className="text-black-600 text-xs">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

import React from "react";
import { Link } from "react-router-dom";
import { carList } from "../../../../data";

export default function MultiLevelMenu({name}) {
return (
    <div className="relative group">
    <button className="hover:text-blue-600 font-semibold text-sm">
        {name}
      </button>
      <div className="absolute top-full left-0 z-10 hidden group-hover:block bg-white shadow-lg border rounded-md min-w-[180px]">
        <ul className="py-2">
          {Object.keys(carList).map((brand) => (
            <li key={brand} className="relative group/brand">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700">
                {brand}
              </button>

              <div className="absolute top-0 left-full z-20 hidden group-hover/brand:block bg-white shadow-lg border rounded-md min-w-[180px]">
                <ul className="py-2">
                  {carList[brand].map((model) => (
                    <li key={model}>
                      <Link
                        to={`/${name}/${brand.toLowerCase()}/${model.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                      >
                        {model}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
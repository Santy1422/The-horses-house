import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Breadcrumb = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  console.log("bread", breadcrumbs);

  useEffect(() => {
    // Dividir la ruta en segmentos para construir el breadcrumb
    const pathSegments = router.asPath
      .split("/")
      .filter((segment) => segment !== "");

    // Construir el breadcrumb
    const breadcrumbItems = pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      return { segment, href };
    });

    setBreadcrumbs(breadcrumbItems);
  }, [router.asPath]);

  return (
    <nav className="text-sm" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex gap-2">
        {breadcrumbs.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <a
              href={item.href}
              className="text-[#6D6E6D] hover:text-indigo-950"
            >
              {index === 0 ? "Inicio" : item.segment}
            </a>
            {index !== breadcrumbs.length - 1 && (
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.64645 3.64645C5.45118 3.84171 5.45118 4.15829 5.64645 4.35355L9.29289 8L5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536C5.84171 12.5488 6.15829 12.5488 6.35355 12.3536L10.3536 8.35355C10.5488 8.15829 10.5488 7.84171 10.3536 7.64645L6.35355 3.64645C6.15829 3.45118 5.84171 3.45118 5.64645 3.64645Z"
                    fill="#C3C3CB"
                  />
                </svg>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

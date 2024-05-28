type PageParamDataType = {
  params: {
    path: string[];
  };
};

export default async function RootPage({ params }: PageParamDataType) {
  console.log("building a regular page", params);
  return <div>{JSON.stringify(params)}</div>;
}

export const dynamicParams = false;
export const generateStaticParams = () => {
  const pageNames = [
    "home",
    "about",
    "services",
    "contact",
    "portfolio",
    "blog",
    "shop",
    "faq",
    "testimonials",
    "careers",
    "pricing",
    "privacy-policy",
    "terms-of-service",
    "support",
  ];

  return pageNames.map((page) => ({
    path: [page],
  }));
};

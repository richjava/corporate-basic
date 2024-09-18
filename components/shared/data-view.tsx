import React from "react";

type Props = {
  sectionName: string;
  content: {
    data: any;
    collections: any;
  };
};

export const DataView: React.FC<Props> = ({ sectionName, content }) => {
  if (!content) return null;
  const { data, collections } = { ...content };
  const hasData = data || collections;
  if (hasData) {
    return (
      <div className="border border-solid border-rgb-[var(--card-border-rgb)] bg-white rounded-lg p-5 mb-6">
        {sectionName && (
          <div>
            <h2 className="mb-6 text-xs opacity-60">{sectionName}</h2>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="attributes">
            <h3 className="mb-2 text-xs uppercase">Data</h3>
            {(!data || Object.keys(data).length === 0) && <p>No Data</p>}
            <ul className="ml-5">
              {data &&
                Object.keys(data).length > 0 &&
                Object.keys(data).map((attributeName) => (
                  <li className="list-disc leading-[1.5]" key={attributeName}>
                    {attributeName}:
                    {Array.isArray(data[attributeName]) ? (
                      <ul>
                        {data[attributeName].map((item, index) => (
                          <li className="break-all list-disc" key={index}>
                            <ul>
                              {Object.keys(item).map((key) => (
                                <li className="break-all list-disc" key={key}>
                                  {key}: {item[key]}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    ) : typeof data[attributeName] === "object" ? (
                      <ul>
                        {Object.keys(data[attributeName]).map((key) => (
                          <li className="break-all list-disc" key={key}>
                            {key}: {JSON.stringify(data[attributeName][key])}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      data[attributeName]
                    )}
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-5 md:mt-0">
            <h3 className="mb-2 text-xs uppercase">Collections</h3>
            {(!collections || Object.keys(collections).length === 0) && (
              <p>No collections</p>
            )}
            <ul className="ml-5">
              {collections &&
                Object.keys(collections).length > 0 &&
                Object.keys(collections).map((collectionName) => (
                  <li className="list-disc" key={collectionName}>
                    {collectionName}
                    {collections[collectionName].map((item: any, i: number) => (
                      <ul className="ml-10" key={i}>
                        <li className="list-disc">{`[${i}]`}</li>
                        <ul className="ml-10">
                          {item &&
                            Object.keys(item).length > 0 &&
                            Object.keys(item).map((attributeName) => (
                              <li
                                className="break-all list-disc"
                                key={attributeName}
                              >
                                {attributeName}: {JSON.stringify(item[attributeName])}
                              </li>
                            ))}
                        </ul>
                      </ul>
                    ))}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

// import-slot
// end-import-slot

const Layout = (props: any) => {
  if (!props) return <></>;
  const { children, layoutComps, page } = props;

  return (
    // content-slot
    <>
      {/* section-slot */}
      {page &&
        layoutComps.length > 0 &&
        layoutComps.map((Section: any, i: number) => {
          return (
            <div key={i}>
              <Section content={page.layout.sections[i].content} />
              {i === page.layout.contentIndex - 1 && (
                <main id="main">{children}</main>
              )}
            </div>
          );
        })}
      {/* end-section-slot */}
    </>
    // end-content-slot
  );
};

export default Layout;

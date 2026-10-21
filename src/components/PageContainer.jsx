const PageContainer = ({ children, className = "" }) => {
  return (
    <main className={`mx-auto w-full min-w-0 max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-16 ${className}`}>
      {children}
    </main>
  );
};

export default PageContainer;
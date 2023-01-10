function LandingLayout({ children }) {
  return (
    <div className="bg-grey">
      <div className="container mx-auto pt-10 lg:pt-2 w-full print:pt-0">
        <main className="flex flex-col pt-16 px-8 sm:px-8 md:px-16 print:pt-0">
          {children}
        </main>
      </div>
    </div>
  );
}

export default LandingLayout;

export const Loader = () => {
  return (
    <main className="flex items-center justify-center pt-11 h-screen">
      <img
        src={process.env.PUBLIC_URL + "/images/svg/loader.svg"}
        alt="print"
        className="w-32 animate-spin animate-thrice "
      />
    </main>
  );
};

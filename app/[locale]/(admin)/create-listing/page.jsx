import CreateListing from "@/components/dashboard/create-listing";

export const metadata = {
  title: "Key Finder",
  description: "Key Finder",
};

const index = async (props) => {
  const params = await props.params;
  const { locale } = params;

  return (
    <>
      <CreateListing locale={locale} />
    </>
  );
};

export default index;

import MyProfile from "@/components/dashboard/my-profile";

export const metadata = {
  title: "Key Finder",
  description: "Key Finder",
};

const index = async (props) => {
  const params = await props.params;
  const { locale } = params;

  return (
    <>
      <MyProfile locale={locale} />
    </>
  );
};

export default index;

import MyDashboard from "@/components/dashboard/my-dashboard";

export const metadata = {
  title: "Key Finder",
  description: "Key Finder",
};

const index = async (props) => {
  const params = await props.params;
  const { locale } = params;

  return (
    <>
      <MyDashboard locale={locale} />
    </>
  );
};

export default index;

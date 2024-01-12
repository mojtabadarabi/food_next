import { getMainPageApi } from "@/api/pages/mainPage";
import FoodsCategory from "@/components/category";
import MainFoods from "@/components/foods/components/MainFoods";
import HeaderImage from "@/components/headers/HeaderImage";
import MainRestaurants from "@/components/restaurants/components/MainRestaurants";
import { reactQuerySsr } from "@/helpers/ReactQuery";
import { useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";


export default function Home() {
  const { data, isError } = useQuery({ queryKey: ['main_page'], queryFn: () => getMainPageApi() })
  return (
    <main
      className={``}
    >
      <HeaderImage />
      <div className="flex flex-col gap-8">
        <FoodsCategory/>
        <MainFoods foods={data?.foods} isError={isError} />
        <MainRestaurants restaurants={data?.restaurants} isError={isError} />
      </div>
    </main>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const props = await reactQuerySsr({
    context,
    queryKey: ['main_page'],
    queryFn: () => getMainPageApi()
  })
  return {
    props: {
      ...props,
    }
  }
}


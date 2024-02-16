import { getMainPageApi } from "@/api/pages/mainPage";
import FoodsCategory from "@/components/category";
import Comments from '@/components/comments';
import MainFoods from "@/components/foods/components/FoodsWithSwiper";
import HeaderImage from "@/components/headers/HeaderImage";
import MainRestaurants from "@/components/restaurants/components/RestaurantWithSwiper";
import { reactQuerySsr } from "@/helpers/ReactQuery";
import { useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

export default function Home() {
  const { data, isError } = useQuery({ queryKey: ['main_page'], queryFn: () => getMainPageApi() })
  return (
    <main
      className={``}
    >
      <Head>
        <title>فودینو | صفحه اصلی</title>
      </Head>
      <HeaderImage />
      <div className="flex flex-col gap-8">
        <MainFoods withBackground={false} title={'پیشنهاد ویژه'} foods={data?.foods} isError={isError} />
        <FoodsCategory />
        <MainFoods withBackground={true} title={'غذا های محبوب'} foods={data?.foods} isError={isError} />
        <MainFoods withBackground={false} title={'غذا ها'} foods={data?.foods} isError={isError} />
        <MainRestaurants restaurants={data?.restaurants} isError={isError} />
        <Comments comments={data?.someComments} />
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


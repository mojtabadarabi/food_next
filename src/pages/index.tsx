import { getMainPageApi } from "@/api/pages/mainPage";
import FoodsCategory from "@/components/category";
import MainFoods from "@/components/foods/components/MainFoods";
import HeaderImage from "@/components/headers/HeaderImage";
import MainRestaurants from "@/components/restaurants/components/MainRestaurants";
import { reactQuerySsr } from "@/helpers/ReactQuery";
import { useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import Comments from '@/components/comments'

export default function Home() {
  const { data, isError } = useQuery({ queryKey: ['main_page'], queryFn: () => getMainPageApi() })
  return (
    <main
      className={``}
    >
      <head>
        <title>فودینو | صفحه اصلی</title>
      </head>
      <HeaderImage />
      <div className="flex flex-col gap-8">
        <FoodsCategory/>
        <MainFoods withBackground={false} title={'پیشنهاد ویژه'} foods={data?.foods} isError={isError} />
        <MainFoods withBackground={true} title={'غذا های محبوب'} foods={data?.foods} isError={isError} />
        <MainFoods withBackground={false} title={'غذا ها'} foods={data?.foods} isError={isError} />
        <MainRestaurants restaurants={data?.restaurants} isError={isError} />
        <Comments comments={data?.someComments}/>
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


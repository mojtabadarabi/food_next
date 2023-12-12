import { ReactQueryContainer } from '@/helpers/ReactQuery';
import { Template } from '@/lib/components';
import '@/styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import NApp from 'next/app';
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../../public/font/Yekan.woff' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryContainer dehydratedState={pageProps.dehydratedState}>
      <main className={myFont.className}>
        <Template template={pageProps.isAdminTemplate ? 'admin' : 'public'}>
          <Component {...pageProps} />
        </Template>

      </main>
    </ReactQueryContainer>
  )
}

App.getInitialProps = async (appContext: AppContext) => {
  if (appContext.ctx.err) return { err: appContext.ctx.err }

  const appProps = await NApp.getInitialProps(appContext);
  return {
    ...appProps,
    pageProps:
    {
      ...appProps.pageProps,
      isAdminTemplate: appContext.ctx.pathname.split('/')[1] === 'admin',
    }
  }
}


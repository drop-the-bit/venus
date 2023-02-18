import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import WidgetArea from '../components/WidgetArea';
import { GAME_INFO_LIST } from '../constants/mockList';
import { WidgetMeta } from '../types';

export type PageParams = { id: string };

export async function getStaticPaths() {
  return {
    paths: GAME_INFO_LIST.map<{ params: PageParams }>(({ id }) => ({
      params: { id: String(id) },
    })),
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<PageParams>
) {
  return {
    props: {
      widgetMetaList: [
        { type: 'title', title: `Title widget ${context.params?.id}` },
        {
          type: 'image',
          src: '/vercel.svg',
          alt: '',
          width: 100,
          height: 100,
        },
        {
          type: 'video',
          src: '/cat-run.mp4',
        },
        {
          type: 'layout',
          direction: 'vertical',
          widgetProps: [
            {
              type: 'input',
              defaultValue: '',
              placeholder: '입력하세요',
            },
          ],
        },
      ] as WidgetMeta[],
    },
  };
}

export default function Game({
  widgetMetaList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div id="content">
      <WidgetArea widgetMetaList={widgetMetaList || []} />
    </div>
  );
}

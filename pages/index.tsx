import { InferGetStaticPropsType, NextPageContext } from 'next';
import GameCard from '../components/GameCard';
import { GAME_INFO_LIST_RESPONSE } from '../constants/mockList';
import style from './style.module.scss';

//페이지 콘텐츠 외부 데이터 연동
export async function getStaticProps(context: NextPageContext) {
  return {
    props: {
      gameInfoList: GAME_INFO_LIST_RESPONSE,
    },
  };
}

export default function Index({
  gameInfoList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div id="list">
      <ul className={style.gameInfoList}>
        {gameInfoList.items.map((gameInfo) => (
          <li key={gameInfo.id}>
            <GameCard {...gameInfo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

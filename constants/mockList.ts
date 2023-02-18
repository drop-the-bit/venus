import { PageableResponse, GameInfo } from '../types';

export type GameInfoListResponse = PageableResponse<GameInfo>;

export const GAME_INFO_LIST: GameInfo[] = [
  {
    id: 1,
    title: '나는 오징어 게임의 어떤 캐릭터와 닮았는가?',
    tags: '#오징어게임 #캐릭터 #squid-game #심리게임',
    description:
      '오징어 게임에 등장하는 캐릭터중 나는 어떤 캐릭터와 가장 닮았을까요?\n몇 가지 질문에 응답하는 것을 통해 확인해 보아요',
    updatedAt: 1676702114589,
  },
  {
    id: 2,
    title: '내가 들어갈 호그와트 기숙사는 어딜까?',
    tags: '#해리포터 #기숙사 #심리게임 #호그와트',
    description:
      '헤리포터에 등장하는 캐릭터중 나는 어떤 캐릭터와 가장 닮았을까요?\n몇 가지 질문에 응답하는 것을 통해 확인해 보아요',
    updatedAt: 1676702114589,
  },
];

export const GAME_INFO_LIST_RESPONSE: GameInfoListResponse = {
  items: GAME_INFO_LIST,
  pageInfo: {
    hasNext: false,
    cursor: '111222333',
    hasPrevious: false,
  },
};

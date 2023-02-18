import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type GameInfo } from '../../types';
import defaultThumbnail from './default-thumbnail.png';
import style from './style.module.scss';

function splitTags(tags: Required<GameInfo>['tags']) {
  const tagList = tags.split(/\s+/);
  return tagList;
}

function splitDescription(description: Required<GameInfo>['description']) {
  const descriptionList = description.split(/\r?\n/);
  return descriptionList;
}

export type Props = GameInfo;

export default function GameCard({
  id,
  title,
  description,
  tags,
  thumbnailURL,
  updatedAt,
}: Props) {
  const formattedUpdateAt = format(updatedAt, 'yyyy-MM-dd');
  const router = useRouter();

  return (
    <div className={style.gameCard}>
      <button
        role="link"
        onClick={() => {
          router.push(String(id));
        }}
      >
        <Image
          src={thumbnailURL || defaultThumbnail}
          height={300}
          alt={title}
        />
        <header className={style.header}>
          <h3>{title}</h3>
          <span>{formattedUpdateAt}</span>
        </header>
        {description && (
          <div className={style.descriptionContainer}>
            {splitDescription(description).map((paragraph) => (
              <p className={style.description} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {tags && (
          <ul className={style.tagList}>
            {splitTags(tags).map((tag) => (
              <li className={style.tag} key={tag}>
                <Link href={`tags?${encodeURIComponent(tag)}`}>{tag}</Link>
              </li>
            ))}
          </ul>
        )}
      </button>
    </div>
  );
}

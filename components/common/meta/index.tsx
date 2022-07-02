import Image from 'next/image';
import { LikeAndCommentInfo, PostMeta } from './styledMetaContainer';

export const PostMetaInfo = ({ nickname, dateTime, className }: PostMetaProps) => {
  return (
    <PostMeta className={className}>
      <span>{nickname}</span>
      <time dateTime={dateTime?.toISOString()}>
        {className === 'review' ? '2022.06.09' : '1분 전'}
      </time>
    </PostMeta>
  );
};

export const LikeAndCommentCount = ({
  like,
  comment,
  isClicked,
  toggleLiked,
  width,
  height,
}: CountProps) => {
  const clickToggleLiked = () => {
    if (!toggleLiked) return;
    toggleLiked(!isClicked);
  };
  return (
    <LikeAndCommentInfo>
      <Image
        className={toggleLiked ? 'likeBtn' : ''}
        src={isClicked ? '/assets/common/love.svg' : '/assets/common/love-blank.svg'}
        alt="좋아요"
        width={width ? width : 15}
        height={height ? height : 15}
        onClick={() => {
          clickToggleLiked();
        }}
      ></Image>
      <span>{like}</span>
      <Image src="/assets/community/speech.svg" alt="댓글" width={15} height={15}></Image>
      <span>{comment}</span>
    </LikeAndCommentInfo>
  );
};

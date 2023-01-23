import { AiOutlineRedo } from 'react-icons/ai';
import { HiCheck } from 'react-icons/hi';
import { useRecoilState } from 'recoil';
import { selectedArticleState } from '../atoms/articles';
import AddedSubContent from './AddedSubContent';
import MissingSubContent from './MissingSubContent';
import ReplacedSubContent from './ReplacedSubContent.js';

const Highlighter = ({ index, content, side }) => {
  var [selectedArticle, setSelectedArticle] =
    useRecoilState(selectedArticleState);
  const [indexBg, chunkBg] =
    side == 'left'
      ? ['bg-red-200/70', 'bg-red-100/20']
      : ['bg-green-200/70', 'bg-green-100/20'];

  const reviseParagraph = (b) => {
    content.forEach((line) =>
      line.forEach((subContent) => (subContent.revised = b))
    );
    setSelectedArticle({ ...selectedArticle });
  };
  return (
    <div className='flex w-full relative'>
      {side == 'right' && (
        <div className='flex  flex-col absolute right-0 '>
          <div
            className='default-button px-1.5 border-b border-white
border-opacity-70 '
            onClick={() => reviseParagraph(true)}
          >
            <HiCheck />
          </div>
          <div
            className='default-button px-1.5'
            onClick={() => reviseParagraph(false)}
          >
            <AiOutlineRedo />
          </div>
        </div>
      )}
      <div className={`flex pl-5 pt-1 pr-2  ${indexBg} `}>{index}</div>
      <div className={`flex max-w-lg w-full px-8 flex-wrap ${chunkBg} py-1`}>
        {content.map((line) => (
          <div className='flex flex-wrap'>
            {line.map((subContent) => (
              <>
                {subContent.content ? (
                  <span
                    key={subContent.content}
                    className={`flex  ${subContent.weight}`}
                  >
                    {subContent.content}
                  </span>
                ) : subContent.replaced ? (
                  <ReplacedSubContent subContent={subContent} side={side} />
                ) : subContent.missing ? (
                  <MissingSubContent subContent={subContent} side={side} />
                ) : side == 'right' && subContent.added ? (
                  <AddedSubContent subContent={subContent} />
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Highlighter;

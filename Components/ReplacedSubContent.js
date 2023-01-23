import { useRecoilState } from 'recoil';
import { selectedArticleState } from '../atoms/articles';

const ReplacedSubContent = ({ subContent, side }) => {
  const [selectedArticle, setSelectedArticle] =
    useRecoilState(selectedArticleState);

  const toggleRevision = () => {
    subContent.revised = !subContent.revised;
    setSelectedArticle({ ...selectedArticle });
  };

  return (
    <span class=' flex '>
      <span
        className='tooltip '
        data-tip={`${subContent.revised ? '⎌ Undo' : '± Replace'}`}
        onClick={toggleRevision}
      >
        <span
          key={subContent.id}
          className={` flex cursor-pointer ${subContent.weight} ${
            side == 'right' && subContent.revised && 'line-through'
          } ${
            subContent.revised ? 'bg-blue-300/40' : 'bg-blue-300/70'
          } rounded hover-quick`}
        >
          {side == 'left' ? subContent.replacement : subContent.replaced}
        </span>
      </span>

      {subContent.revised && side == 'right' && (
        <>
          &nbsp;
          <span
            key={subContent.id}
            className={`flex text-blue-900/90 ${subContent.weight} underline underline-offset-4 hover-quick
          `}
          >
            {subContent.replacement}
          </span>
          &nbsp;
        </>
      )}
    </span>
  );
};

export default ReplacedSubContent;

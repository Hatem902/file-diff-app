import { useRecoilState } from 'recoil';
import { selectedArticleState } from '../atoms/articles';

const MissingSubContent = ({ subContent, side }) => {
  const [selectedArticle, setSelectedArticle] =
    useRecoilState(selectedArticleState);

  const toggleRevision = () => {
    subContent.revised = !subContent.revised;
    setSelectedArticle({ ...selectedArticle });
  };

  return (
    <span class=' flex '>
      {side == 'left' ? (
        <span
          className='tooltip '
          data-tip={`${subContent.revised ? '⎌ Undo' : '+ Add'}`}
          onClick={toggleRevision}
        >
          <span
            key={subContent.id}
            className={` flex cursor-pointer  ${subContent.weight} ${
              subContent.revised && 'line-through'
            } ${
              subContent.revised ? 'bg-red-300/40' : 'bg-red-300/70'
            } rounded hover-quick`}
          >
            {subContent.missing}
          </span>
        </span>
      ) : (
        subContent.revised && (
          <>
            &nbsp;
            <span
              key={subContent.id}
              className={`flex  text-red-900/90 ${
                subContent.weight == 'font-semibold' && 'font-semibold'
              } underline underline-offset-4 hover-quick 
          `}
            >
              {subContent.missing}
            </span>
            &nbsp;
          </>
        )
      )}
    </span>
  );
};

export default MissingSubContent;

import { useRecoilState } from 'recoil';
import { selectedArticleState } from '../atoms/articles';

const AddedSubContent = ({ subContent }) => {
  const [selectedArticle, setSelectedArticle] =
    useRecoilState(selectedArticleState);

  const toggleRevision = () => {
    subContent.revised = !subContent.revised;
    setSelectedArticle({ ...selectedArticle });
    console.log(selectedArticle);
  };

  return (
    <span
      className='tooltip '
      data-tip={`${subContent.revised ? '⎌ Undo' : '- Remove'}`}
      onClick={toggleRevision}
    >
      <span
        key={subContent.id}
        className={` flex cursor-pointer ${
          subContent.weight == 'font-semibold' && 'font-semibold'
        } ${subContent.revised && 'line-through'} ${
          subContent.revised ? 'bg-green-300/40' : 'bg-green-300/70'
        } rounded hover-quick`}
      >
        {subContent.added}
      </span>
    </span>
  );
};

export default AddedSubContent;

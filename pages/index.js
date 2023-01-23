import { AiOutlineRedo } from 'react-icons/ai';
import { BsCheckAll } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useRecoilState } from 'recoil';
import { selectedArticleState } from '../atoms/articles';
import Header from '../Components/Header';
import Highlighter from '../Components/Highlighter';

const Home = () => {
  const [selectedArticle, setSelectedArticle] =
    useRecoilState(selectedArticleState);
  const reviseArticle = (b) => {
    selectedArticle.paragraphs.forEach((paragraph) =>
      paragraph.content.forEach((chunk) =>
        chunk.chunkContent.forEach((line) =>
          line.forEach((subContent) => (subContent.revised = b))
        )
      )
    );
    setSelectedArticle({ ...selectedArticle });
  };
  return (
    <>
      <div className='flex  fixed  top-2 right-6 gap-4 '>
        <div className='flex gap-1.5'>
          <div
            className='default-button rounded-full'
            onClick={() => reviseArticle(true)}
          >
            <BsCheckAll />
          </div>
          <div
            className='default-button rounded-full'
            onClick={() => reviseArticle(false)}
          >
            <AiOutlineRedo />
          </div>
        </div>
        <div className='default-button rounded-full'>
          <HiDownload /> Download{' '}
        </div>
      </div>

      <div className='flex w-full  justify-center '>
        <div className='flex flex-col gap-10 items-start  max-w-4xl w-full bg-bgDefault h-fit my-14'>
          {
            <div className='flex w-full -mb-5   '>
              <Header title='Master Contract' />
              <Header title='Check Contract' />
            </div>
          }
          {selectedArticle.paragraphs.map((paragraph) => (
            <div
              className={`flex flex-col shadow-md ${
                paragraph.id == selectedArticle.selectedParagraphId &&
                'border border-textSecondary/40'
              }`}
            >
              {paragraph.content.map((chunk) => (
                <div className='flex w-full '>
                  <Highlighter
                    index={chunk.indexes[0]}
                    content={chunk.chunkContent}
                    side='left'
                  />
                  <Highlighter
                    index={chunk.indexes[1]}
                    content={chunk.chunkContent}
                    side='right'
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useState } from 'react';
import {
  AiFillFolder,
  AiFillFolderOpen,
  AiOutlineSearch,
} from 'react-icons/ai';
import { FiFileText } from 'react-icons/fi';
import { MdExpandMore, MdOutlineUndo } from 'react-icons/md';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { useRecoilState } from 'recoil';
import { articlesState, selectedArticleState } from '../atoms/articles';

const SideBar = () => {
  const [expanded, setExpanded] = useState(true);
  var [articles, setArticles] = useRecoilState(articlesState);
  var [selectedArticle, setSelectedArticle] =
    useRecoilState(selectedArticleState);
  const selectParagraph = (id, article) => {
    console.log(article.id);
    selectedArticle = article;
    console.log(id);
    selectedArticle.selectedParagraphId = id;
    setSelectedArticle({ ...selectedArticle });
  };
  const expandArticle = (article) => {
    console.log(article.expanded);
    article.expanded = !article.expanded;
    setSelectedArticle({ ...selectedArticle });
  };
  const expandSideBar = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div
        className={`flex  fixed  top-2 ${
          expanded ? 'left-60' : 'left-4'
        } gap-1.5 `}
      >
        <div className='default-button rounded-full' onClick={expandSideBar}>
          {expanded ? <RxDoubleArrowLeft /> : <RxDoubleArrowRight />}
        </div>
        <div className='default-button rounded-full'>
          <MdOutlineUndo />
        </div>
        <div className='default-button rounded-full '>
          <MdOutlineUndo className='rotate-180' />
        </div>
        <div className='default-button rounded-full '>
          <AiOutlineSearch /> Search Anything...
        </div>
      </div>
      {expanded && (
        <div className='sticky top-0 h-screen left-0  w-56 bg-bgSecondary flex flex-col items-center gap-3 pt-3   border-r text-textSecondary font-semibold  overflow-x-clip pb-2 flex-shrink-0 '>
          {/* App Logo */}
          <div className='  text- tracking-widest font-semi-bold text-primary/70 cursor-pointer  mb-1 '>
            DocCompareX
          </div>
          {/*  tabs will be put in a state and iterated through , each tab will be
          an instance of the same component, this is just a poc of tabs */}
          <div className='flex w-full '>
            <div className='default-button w-full border-r border-white '>
              Tab 1
            </div>
            <div className='default-button w-full border-r border-white bg-bgMild/40'>
              Tab 2
            </div>
            <div className='default-button w-full bg-bgMild/40'>Tab 3</div>
          </div>
          <div className=' px-1.5 flex flex-col gap-0 w-full overflow-y-auto overflow-x-hidden pr-1.5 scroll-bar py-2 cursor-pointer  '>
            {articles.map((article) => (
              <div key={article.id}>
                <div
                  className={`item  w-full pr-3 mr  pl-2 justify-between ${
                    article.id == selectedArticle.id && 'bg-bgMild/30'
                  }`}
                  onClick={(e) => setSelectedArticle(article)}
                >
                  <div className='flex items-center gap-2  whitespace-nowrap'>
                    <div
                      className=' text-textSecondary/40 rounded hover:bg-bgMild/40 hover-quick '
                      onClick={(e) => {
                        expandArticle(article);
                        e.stopPropagation();
                      }}
                    >
                      {article.expanded ? (
                        <MdExpandMore />
                      ) : (
                        <MdExpandMore className='-rotate-90' />
                      )}
                    </div>
                    <div className='text-primary/40   '>
                      {article.expanded ? (
                        <AiFillFolderOpen />
                      ) : (
                        <AiFillFolder />
                      )}
                    </div>
                    <div>{article.title}</div>
                  </div>
                  <div>-- {article.percentage} %</div>
                </div>
                {/* -- */}

                {article.expanded && (
                  <div>
                    {article.paragraphs.map((paragraph) => (
                      <div
                        className={`item gap-2 items-center pl-8 ${
                          paragraph.id == selectedArticle.selectedParagraphId &&
                          'bg-bgMild/20'
                        } `}
                        onClick={() => selectParagraph(paragraph.id, article)}
                      >
                        <FiFileText className='text-gray-500  ' />
                        <div>{paragraph.content[0][0]}</div>
                        <div className='truncate '>{paragraph.title}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;

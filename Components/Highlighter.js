const Highlighter = ({ words, mode }) => {
  const [hColor, bgColor] =
    mode == '--'
      ? ['bg-red-400', 'bg-blue-100']
      : ['bg-green-400', 'bg-green-100'];
  return (
    <div className={`flex max-w-xl w-full  rounded-lg ${bgColor} flex-wrap `}>
      {words.map((word) => {
        const [type, value] = [word.slice(0, 2), word.slice(2, word.length)];

        return (
          (type == mode || type == '__') && (
            <span key={word}>
              <span
                className={`flex ${type == mode ? `${hColor} rounded-lg` : ''}`}
              >
                &nbsp;{value}&nbsp;
              </span>
              <span>&nbsp;</span>
            </span>
          )
        );
      })}
    </div>
  );
};

export default Highlighter;

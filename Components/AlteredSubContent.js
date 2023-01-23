const AlteredSubContent = ({ weight, hColor, value }) => {
  return (
    <span class='tooltip font-normal' data-tip='hello'>
      <span
        key={value}
        className={`tooltip flex cursor-pointer ${weight} ${hColor} `}
      >
        {value}
      </span>
    </span>
  );
};

export default AlteredSubContent;

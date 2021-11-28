const InternalStyle = () => {
  const styleParagraph = {
    color: "orange",
    fontSize: "2rem",
  };

  const styleSalih = {
    backgroundColor: "blue",
  };

  return (
    <div style={styleParagraph}>
      Hocam şöyle somut projelerde görmek istiyor insan
      <span style={styleSalih}>(Salih Bayrakçı)</span>
      <div style={styleParagraph}>Yeni yazı</div>
    </div>
  );
};

export default InternalStyle;

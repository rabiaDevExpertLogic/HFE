import baseColor from "../config/color";

export default function AppButton(props) {
  const { title, onClick, children, className, background, color, border, width } = props;
  return (
    <>
      <button className={className} onClick={onClick} style={{
        background: background ? background : baseColor.black,
        borderRadius : '25px',
        display: "flex",
        justifyContent:'center',
        alignItems: 'center',
        height: '37px',
        width: width ? width : '120px',
        color: color ? color : baseColor.white,
        boxShadow: 'none',
        border: border ? border : 'none',

      }}>
        {title}
        {children}
      </button>
    </>
  );
}

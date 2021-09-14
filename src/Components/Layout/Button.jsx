const Button = ({ type, title }) => {
  return (
    <button type={type} className='btn'>
      {title}
    </button>
  );
};

Button.defaultProps = {
  type: 'submit',
};

export default Button;

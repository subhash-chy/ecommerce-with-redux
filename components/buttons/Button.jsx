function Button(props) {
  return (
    <button
      {...props}
      className="bg-accent text-white px-3 py-1 rounded-md hover:bg-accent/80 flex items-center justify-center uppercase"
    >
      {props.title}
    </button>
  );
}

export default Button;

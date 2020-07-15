function BasicLayout(props) {
  console.log('props',props)
  return (
    <div>
      { props.children }
    </div>
  );
}

export default BasicLayout;
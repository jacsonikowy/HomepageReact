const Link = ({url, text}) => {
  return (
    <>
      <a href={url} className={"p-2"}>{text}</a>
    </>
  )
}

export default Link

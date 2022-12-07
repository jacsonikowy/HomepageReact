import Link from "./Link"

const Content = () => {
  return (
    <div className={"flex justify-evenly content-center w-screen text-xl mt-10"}>
      <div className={"text-center"}>
        <p className={"text-4xl"}>Learning</p>
        <div className={"block my-6"}>
          <Link url={"https://www.monkeytype.com"} text={"MonkeyType"} /><br />
          <Link url={"https://www.reddit.com/r/unixporn"} text={"r/unixporn"} />
        </div>
      </div>
      <div>
        <p className={"text-4xl"}>Coding</p>
      </div>
    </div>
  )
}

export default Content

import Link from "./Link"

const Content = () => {
  return (
    <div className={"flex justify-evenly content-center w-screen text-xl mt-10"}>
      <div className={"text-center"}>
        <p className={"text-4xl text-purple-600"}>Productive</p>
        <div className={"my-3"}>
          <Link url={"https://calendar.google.com"} text={"Google Calendar"} /><br />
        </div>
      </div>
      <div className={"text-center"}>
        <p className={"text-4xl text-purple-600"}>Coding</p>
        <div className={"my-3"}>
          <Link url={"https://www.github.com"} text={"Github"} /><br />
          <Link url={"https://www.gitlab.com"} text={"Gitlab"} />
        </div>
      </div>
    </div>
  )
}

export default Content

import Link from "./Link"

const Content = () => {
  return (
    <div className={"md:justify-evenly md:content-center w-screen text-xl mt-10 md:flex"}>
      <div className={"text-center"}>
        <p className={"text-4xl text-purple-600 font-bold"}>Productive</p>
        <div className={"flex flex-col my-6"}>
          <Link url={"https://calendar.google.com"} text={"Google Calendar"} />
          <Link url={"https://www.duolingo.com"} text={"Duolingo"} />
          <Link url={"https://www.youtube.com/watch?v=nMfPqeZjc2c"} text={"White Noise"} />
        </div>
      </div>
      <div className={"text-center"}>
        <p className={"text-4xl text-purple-600 font-bold"}>Coding</p>
        <div className={"flex flex-col my-6"}>
          <Link url={"https://www.github.com"} text={"Github"} />
          <Link url={"https://www.gitlab.com"} text={"Gitlab"} />
          <Link url={"https://news.ycombinator.com"} text={"HackerNews"} />
        </div>
      </div>
    <div className={"text-center"}>
      <p className={"text-4xl text-purple-600 font-bold"}>Entertainment</p>
      <div className={"flex flex-col my-6"}>
        <Link url={"https://www.monkeytype.com"} text={"MonkeyType"} />
        <Link url={"https://www.reddit.com/r/unixporn"} text={"r/unixporn"} />
        <Link url={"https://www.youtube.com"} text={"YouTube"} />
      </div>
    </div>
    </div>
  )
}

export default Content

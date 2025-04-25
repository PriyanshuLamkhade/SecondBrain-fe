import { useEffect } from 'react'
import { ShareIcon } from "../../Icons/ShareIcon"
import { TrashCanIcon } from "../../Icons/TrashcanIcon"
import { XIcon } from "../../Icons/XIcon"
import { YoutubeIcon } from "../../Icons/YoutubeIcon"
import { BACKEND_URL } from '../../config'
import axios from 'axios'

interface cardProps {
  type: 'youtube' | 'tweet' | 'reddit' | 'other',
  link: string,
  title: string,
  contentId: any
}

export const Card = (props: cardProps) => {
    async function deleteBrain(){
        await axios.delete(BACKEND_URL+"/api/v1/content",{
            headers:{
                "Authorization":localStorage.getItem("token")
            },  params:{
              contentId: props.contentId
           },
        })
        window.location.reload();
    }

    useEffect(() => {
        if (props.type === 'tweet') {
            const twitterScript = document.createElement('script')
            twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
            twitterScript.setAttribute('async', 'true')
            document.body.appendChild(twitterScript)
        }

        if (props.type === 'reddit') {
            const redditScript = document.createElement('script')
            redditScript.setAttribute('src', 'https://embed.redditmedia.com/widgets/platform.js')
            redditScript.setAttribute('async', 'true')
            redditScript.setAttribute('charset', 'UTF-8')
            document.body.appendChild(redditScript)
        }
    }, [props.type])

    return (
      <div className="mt-10 p-2 w-[36vmax] bg-slate-100 rounded-xl border border-slate-400 self-start">
        <div id="topCard" className="flex p-3 justify-between">
          <div className="flex gap-2 text-xl text-black">
            {props.type === "youtube" && (<YoutubeIcon size="lg"/>)}
            {props.type === "tweet" && (<XIcon size="lg"/>)}
            {props.title}
          </div>
          <div className="flex gap-2 items-center">
            <a href={props.link} target="_blank">
              <div className="text-gray-500">
                <ShareIcon size="md" />
              </div>
            </a>
            <div className="text-gray-500 cursor-pointer hover:bg-red-400 rounded-full p-1 " onClick={deleteBrain}>
              <TrashCanIcon size="md" />
            </div>
          </div>
        </div>

        <div id="middleCard" className="overflow-y-hidden">
          {props.type === "other" && (
            <a href={props.link} target="_blank" className="text-blue-500 p-5">{props.link}</a>
          )}

          {props.type === "youtube" && (
            <iframe
              className="w-full aspect-video rounded-md"
              src={props.link.replace("watch?v=", "embed/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {props.type === "tweet" && (
            <div className="aspect-video overflow-y-scroll">
              <blockquote className="twitter-tweet">
                <a href={props.link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            </div>
          )}

          {props.type === "reddit" && (
            <div className="aspect-video overflow-y-scroll">
              <blockquote className="reddit-card" data-card-url={props.link}>
                <a href={props.link}></a>
              </blockquote>
            </div>
          )}
        </div>
      </div>
    )
}

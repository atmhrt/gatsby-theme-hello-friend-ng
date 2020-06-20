import React, { useContext } from "react"
import { Link } from "gatsby"

import MediaQueryContext from "../context/media-query-context"

import ClockIcon from "./icons/clock"
import NotepadIcon from "./icons/notepad"
import TagIcon from "./icons/tag"
import CalendarIcon from "./icons/calendar"

const Post = ({ title, published_at, body, tags, words, readTime }) => {
  const { mediaQueryMatch } = useContext(MediaQueryContext)

  // Make sure screen size is known before rendering, to compute placeholder
  // sizes for images. It's always known beforhand, with an exception of when
  // a post is loaded directly from a URL, not using React router.
  if (typeof mediaQueryMatch === "undefined") return null

  return (
    <>
      <div className="post-info">
        <p>
          {readTime && (
            <>
              <ClockIcon />
              {readTime} minute read
              <Link to="#">
                <span className="flag flag-icon flag-icon-gb flag-icon-squared"></span>
              </Link>
            </>
          )}
        </p>
      </div>

      <article>
        <h1 className="post-title">{title}</h1>
        <div className="post-content">{body}</div>
      </article>

      <div className="post-info with-dashed-border">
        <p>
          <CalendarIcon />
          {new Date(published_at).toLocaleDateString("en-GB", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        {words && (
          <p>
            <NotepadIcon />
            {words} words
          </p>
        )}

        {tags && (
          <p>
            <TagIcon />
            {tags.map((tag) => (
              <span className="tag">
                <Link to="#">{tag}</Link>
              </span>
            ))}
          </p>
        )}
      </div>
    </>
  )
}

export default Post

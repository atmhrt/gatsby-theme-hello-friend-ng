import React from "react"
import TagIcon from "../icons/tag"
import ExternalLinkIcon from "../icons/external-link"

const ProjectLinks = ({ tags, links }) => {
  return (
    <div className="post-info project-info">
      <p>
        <TagIcon />
        {tags.join(", ")}
      </p>
      <p>
        <ExternalLinkIcon />
        {links.map((link, i) => (
          <span>
            <a
              href={link.url}
              title={link.title}
              target="_blank"
              rel="noreferrer"
            >
              {link.title}
            </a>
            {i < links.length - 1 && ", "}
          </span>
        ))}
      </p>
    </div>
  )
}

export default ProjectLinks

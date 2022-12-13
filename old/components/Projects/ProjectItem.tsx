import Image from 'next/image';
import ExternalLinkIcon from '../../../public/images/feather/external-link.svg';

type ProjectItemProps = {
  title: string;
  description: string;
  date: string;
  imagePath?: string;
  videoURL?: string;
  link: string;
  technologies: string;
  imageClassName?: string;
};

export const ProjectItem = ({
  title,
  description,
  date,
  imagePath,
  videoURL,
  link,
  technologies,
  imageClassName = 'bg-neutral-300',
}: ProjectItemProps) => {
  const isExternalLink = link.startsWith('http');

  return (
    <div className="flex flex-col items-start mb-16">
      <a
        href={link}
        target={isExternalLink ? '_blank' : '_self'}
        rel="noreferrer"
        className="flex-col group w-full rounded-lg overflow-hidden ring-1 shadow-md ring-neutral-200 dark:ring-neutral-700 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 hover:dark:bg-neutral-700 hover:pointer transition-colors"
      >
        <div className={`w-full h-80 relative rounded-t-lg mx-auto ${imageClassName}`}>
          {imagePath ? (
            <Image src={imagePath} alt="Showcasing Börsjakten" layout="fill" objectFit="contain" priority />
          ) : (
            videoURL && (
              <iframe
                width="100%"
                height="320px"
                src={videoURL}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )
          )}
        </div>

        <div className="flex-col px-4 py-3 text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-row justify-between text-neutral-700 dark:text-neutral-300 items-center mb-0.5">
            <div className="flex flex-row items-center">
              <p>{title}</p>
              {isExternalLink && (
                <span className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLinkIcon />
                </span>
              )}
            </div>

            <p className="text-sm">{date}</p>
          </div>

          <p className="text-sm leading-relaxed">{description}</p>
          {technologies && <p className="text-xs mt-2">{technologies}</p>}
        </div>
      </a>
    </div>
  );
};

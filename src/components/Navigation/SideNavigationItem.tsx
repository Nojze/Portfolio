import Link from 'next/link';
import { useRouter } from 'next/router';
import ExternalLinkIcon from '../../../public/images/feather/external-link.svg';
import {
  getNavigationTitle,
  navigationAccessibilityClass,
  NavigationIcon,
  NavigationIcons,
  NavigationLinks,
} from './NavigationIcons';
import { useSettings } from '../../context/SettingsProvider';

type SideNavigationItemProps = {
  label: NavigationIcon;
  target?: '_parent' | '_blank';
  rightIcon?: JSX.Element;
};

export const SideNavigationItem = ({ label, rightIcon }: SideNavigationItemProps) => {
  const router = useRouter();
  const { setIsContactModalOpen } = useSettings();

  const title = getNavigationTitle(label);
  const hrefNavigationLink = NavigationLinks[label];
  const isExternalLink = hrefNavigationLink.startsWith('http');

  const itemClass = `flex w-full items-center px-3 py-1.5 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-lg cursor-pointer text-sm transition ${
    router.asPath == hrefNavigationLink ? `bg-neutral-300 dark:bg-neutral-700` : ``
  } ${navigationAccessibilityClass}`;

  const innerContent = () => (
    <>
      <span className="mr-2">{NavigationIcons[label]}</span>

      {title}

      <span className={`ml-auto pl-2`}>{isExternalLink ? <ExternalLinkIcon /> : rightIcon}</span>
    </>
  );

  return (
    <li className="my-1">
      {label === 'contact-side' ? (
        <button
          role="dialog"
          aria-label={title}
          onClick={() => setIsContactModalOpen(true)}
          className={itemClass}
          title={title}
        >
          {innerContent()}
        </button>
      ) : (
        <Link passHref href={hrefNavigationLink} scroll>
          <a
            href={hrefNavigationLink}
            rel="noreferrer"
            target={isExternalLink ? '_blank' : '_self'}
            title={title}
            className={itemClass}
          >
            {innerContent()}
          </a>
        </Link>
      )}
    </li>
  );
};

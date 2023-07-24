/* eslint-disable @next/next/no-img-element */
import { announcementData } from '~/shared/data';

const Announcement = () => {
  const { title, callToAction, callToAction2 } = announcementData;

  return (
    <div className="hidden overflow-hidden text-ellipsis whitespace-nowrap border-b border-blue-900 bg-blue-900 px-3 py-2 text-sm text-gray-200 md:block">
      <div id='animate'>
        <span className="bg-yellow-900 py-0.5 px-1 text-xs font-semibold">{title}</span>{' '}
        {callToAction && callToAction.text && callToAction.href && (
          <a
            href={callToAction.href}
            target="_blank"
            rel="noreferrer noopened"
            className="cursor-pointer text-gray-100 hover:underline"
          >
            {callToAction.icon && <callToAction.icon className="mr-1 -ml-1.5 h-5 w-5" />} {callToAction.text}
          </a>
        )}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="bg-yellow-900 py-0.5 px-1 text-xs font-semibold">{title}</span>{' '}
        {callToAction && callToAction.text && callToAction.href && (
          <a
            href={callToAction.href}
            target="_blank"
            rel="noreferrer noopened"
            className="cursor-pointer text-gray-100 hover:underline"
          >
            {callToAction.icon && <callToAction.icon className="mr-1 -ml-1.5 h-5 w-5" />} {callToAction.text}
          </a>
        )}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="bg-yellow-900 py-0.5 px-1 text-xs font-semibold">{title}</span>{' '}
        {callToAction && callToAction.text && callToAction.href && (
          <a
            href={callToAction.href}
            target="_blank"
            rel="noreferrer noopened"
            className="cursor-pointer text-gray-100 hover:underline"
          >
            {callToAction.icon && <callToAction.icon className="mr-1 -ml-1.5 h-5 w-5" />} {callToAction.text}
          </a>
        )}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="bg-yellow-900 py-0.5 px-1 text-xs font-semibold">{title}</span>{' '}
        {callToAction && callToAction.text && callToAction.href && (
          <a
            href={callToAction.href}
            target="_blank"
            rel="noreferrer noopened"
            className="cursor-pointer text-gray-100 hover:underline"
          >
            {callToAction.icon && <callToAction.icon className="mr-1 -ml-1.5 h-5 w-5" />} {callToAction.text}
          </a>
        )}
        {callToAction2 && callToAction2.text && callToAction2.href && (
        <a
          href={callToAction2.href}
          target="_blank"
          rel="noreferrer"
          className="float-right"
          title={callToAction2.text}
        >
          <img
            src="https://img.shields.io/twitter/url/https/twitter.com?style=social&amp;label=Follow%20%40crei-rdc"
            alt="Follow @crei-rdc"
            width="125"
            height="20"
          />
        </a>
      )}
      </div>
  
      
    </div>
  );
};

export default Announcement;

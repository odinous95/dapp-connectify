import Link from 'next/link';
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { Logo } from './logo';
import { getPlatformIconByName } from '@/utils/utils';

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-10">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <span className="flex items-center gap-2">
            <Logo />
            <h3 className="manrope text-xl font-semibold cursor-pointer">
              {siteDetails.siteName}
            </h3>
          </span>
          <p className="mt-3.5 text-gray-600 dark:text-gray-300">
            {footerDetails.subheading}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-600 dark:text-gray-300">
            {footerDetails.quickLinks.map(link => (
              <li key={link.text} className="mb-2">
                <Link href={link.url} className="hover:text-gray-900 dark:hover:text-gray-100">{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              Email: {footerDetails.email}
            </a>
          )}
          {footerDetails.telephone && (
            <a
              href={`tel:${footerDetails.telephone}`}
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              Phone: {footerDetails.telephone}
            </a>
          )}
          {footerDetails.socials && (
            <div className="mt-5 flex items-center gap-5 flex-wrap">
              {Object.keys(footerDetails.socials).map(platformName => {
                if (platformName && footerDetails.socials[platformName]) {
                  return (
                    <Link
                      href={footerDetails.socials[platformName]}
                      key={platformName}
                      aria-label={platformName}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      {getPlatformIconByName(platformName)}
                    </Link>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 md:text-center text-gray-500 dark:text-gray-400 px-6">
        <p>
          Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
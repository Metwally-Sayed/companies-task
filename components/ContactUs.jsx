import React from 'react';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const contactDetails = [
  {
    name: 'Collaborate',
    email: 'support@example.com',
    telephone: '+1 (555) 123-4567',
  },
  {
    name: 'Press',
    email: 'support@example.com',
    telephone: '+1 (555) 123-4567',
  },
  {
    name: 'Join our team',
    email: 'support@example.com',
    telephone: '+1 (555) 123-4567',
  },
  {
    name: 'Say hello',
    email: 'support@example.com',
    telephone: '+1 (555) 123-4567',
  },
];

const ContactUs = ({ getdata }) => {
  return (
    <div className="bg-white">
      <main>
        <div className="bg-white">
          <div className="mx-auto max-w-md py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="divide-y divide-warm-gray-200">
              <section
                className="lg:grid lg:grid-cols-3 lg:gap-8"
                aria-labelledby="contact-heading"
              >
                <h2
                  id="contact-heading"
                  className="text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight"
                >
                  Get in touch
                </h2>
                <div className="mt-8  lg:mt-0">
                  {getdata.map((item, idx) => (
                    <div className="flex" key={idx}>
                      <div>
                        <h5 className="text-md mb-6 text-lg ">
                          Company e-mails{' '}
                        </h5>
                        <div className="text-lg font-medium text-warm-gray-900">
                          Sales :
                          <a href={item.emails.sales}>{item.emails.sales}</a>
                        </div>
                        <div className="text-lg font-medium text-warm-gray-900">
                          contact :
                          <a href={item.emails.contact}>
                            {item.emails.contact}
                          </a>
                        </div>
                        <div className="text-lg font-medium text-warm-gray-900">
                          recruitment :
                          <a href={item.emails.recruitment}>
                            {item.emails.recruitment}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8  lg:mt-0">
                  {Array.isArray(getdata)
                    ? getdata.map((item, idx) => (
                        <div className="flex" key={idx}>
                          <div>
                            <h5 className="text-md mb-6 text-lg ">
                              Company Social Links{' '}
                            </h5>
                            <div className="text-lg font-medium text-warm-gray-900">
                              YouTube :
                              <a href={item.social_links.YouTube}>
                                {item.social_links.YouTube}
                              </a>
                            </div>
                            <div className="text-lg font-medium text-warm-gray-900">
                              twitter :
                              <a href={item.emails.contact}>
                                {item.emails.contact}
                              </a>
                            </div>
                            <div className="text-lg font-medium text-warm-gray-900">
                              website :
                              <a href={item.emails.recruitment}>
                                {item.emails.recruitment}
                              </a>
                            </div>
                            <div className="text-lg font-medium text-warm-gray-900">
                              WhatsApp :
                              <a href={item.social_links.WhatsApp}>
                                {item.social_links.WhatsApp}
                              </a>
                            </div>
                            <div className="text-lg font-medium text-warm-gray-900">
                              facebook :
                              <a href={item.social_links.facebook}>
                                {item.social_links.facebook}
                              </a>
                            </div>
                            <div className="text-lg font-medium text-warm-gray-900">
                              linkedin :
                              <a href={item.social_links.linkedin}>
                                {item.social_links.linkedin}
                              </a>
                            </div>
                            <div className="text-lg font-medium text-warm-gray-900">
                              snapchat :
                              <a href={item.social_links.snapchat}>
                                {item.social_links.snapchat}
                              </a>
                            </div>
                            <div className="text-lg font-medium text-warm-gray-900">
                              instagram :
                              <a href={item.social_links.instagram}>
                                {item.social_links.instagram}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;

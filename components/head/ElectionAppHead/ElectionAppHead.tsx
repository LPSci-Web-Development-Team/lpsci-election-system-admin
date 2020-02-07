// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Head from 'next/head';

export interface IProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const ElectionAppHead = ({ title, description, children }: IProps) => (
  <Head>
    <meta charSet="utf-8" />
    {/* Viewport for responsive web design */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover" />
    {/* Document Title */}
    <title>{title}</title>
    {/* Meta Description */}
    <meta name="description" content={description} />
    {/* SF UI Dispaly */}
    <link
      href="/fonts/sf-ui-display/fonts.css"
      rel="stylesheet"
    />
    {children}
  </Head>
);

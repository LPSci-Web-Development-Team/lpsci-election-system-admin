import { Client, Server } from 'styletron-engine-atomic';
import { DebugEngine } from 'styletron-react';

function getHydratedClass(): HTMLStyleElement[] {
  const els = document.getElementsByClassName('_styletron_hydrate_');

  const newEls = [];

  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < els.length; i += 1) {
    const el: Element = els[i];
    if (el instanceof HTMLStyleElement) {
      newEls.push(el);
    }
  }

  return newEls;
}

export const styletron = (
  (typeof window === 'undefined')
    ? new Server()
    : new Client({
      hydrate: getHydratedClass(),
    })
);

export const debug = (
  process.env.NODE_ENV !== 'production' ? new DebugEngine() : undefined
);

import React from 'react';
import content from '../../contents/support-page/support.yml';
import { SEO } from '../components/SEO';
import { HeroSupport } from './support/Hero';
import { FAQPreview } from './support/FAQPreview';
import { Assistance } from './support/Assistance';

const {
  mainHero: { title, description },
} = content;

export const SupportPage = () => (
  <>
    <SEO title={content.title} />
    <div className="sr-only">
      <h1>{content.name}</h1>
    </div>
    <HeroSupport title={title} subtitle={description} />
    <FAQPreview />
    <Assistance />
  </>
);

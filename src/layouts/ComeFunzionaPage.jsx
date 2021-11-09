import React, { useEffect } from 'react';
import { support } from '../../contents/home-page/home.yml';
import content from '../../contents/come-funziona/come-funziona.yml';
import { SEO } from '../components/SEO';
// import { ComeFunzionaCarousel } from '../components/carousel/ComeFunzionaCarousel';
import { Tab } from '../components/Tab';
import { Timeline } from '../components/carousel/Timeline';
import { HeroHowItWorks } from '../components/hero/HeroHowItWorks';
import seo from '../../contents/seo.yml';
import { Involved } from './come-funziona/Involved';
import { Beneficiaries } from './come-funziona/Beneficiaries';
import { SupportSection } from './faq/SupportSection';

const { title: seoTitle, description: seoDescription } = seo.comeFunzionaPage;

export const ComeFunzionaPage = (props) => {
  useEffect(() => {
    if (props.section) {
      document.querySelector('#' + props.section).scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [props.section]);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <div className="sr-only">
        <h1>{content.name}</h1>
      </div>
      <HeroHowItWorks
        title={content.hero.title}
        body={content.hero.body}
        theme="bg-white"
        smallText="true"
        image="come-funziona-hero.svg"
        list={content.hero.list}
      />
      <Tab
        tabContent={content.pacchettiTabs}
        sideDesktopNavigation
        mobileNavigation
        title={content.pacchettiTabs.title}
        subtitle={content.pacchettiTabs.subtitle}
        sectionId="pacchetti-standard"
      />
      <Tab
        tabContent={content.presentazioneTabs}
        sideDesktopNavigation
        mobileNavigation
        title={content.presentazioneTabs.title}
        subtitle={content.presentazioneTabs.subtitle}
        sectionId="presentazione-progetto"
      />
      <Timeline content={content.timeline} title="Il calendario" />
      <Beneficiaries item={content.beneficiaries} />
      <Involved title={content.involved.title} category={content.involved.category} cards={content.involved.cards} />
      <SupportSection supportList={support.cards} title={support.title} buttonLabel={support.buttonLabel} />
    </>
  )
};

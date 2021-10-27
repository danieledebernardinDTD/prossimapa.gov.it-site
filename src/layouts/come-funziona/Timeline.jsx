import React from 'react';
import { createUseStyles } from 'react-jss';
import { Chrono } from 'react-chrono';
import {} from 'design-react-kit';
import PropTypes from 'prop-types';

const useStyle = createUseStyles({});

export const Timeline = (props) => {
  const classes = useStyle();
  const {} = props;

  const items = [
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk 1',
      cardSubtitle: 'Dunkirk 1',
      cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
    },
    {
      title: 'May 2009',
      cardTitle: 'Dunkirk 2',
      cardSubtitle: 'Dunkirk 2',
      cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
    },
    {
      title: 'May 2021',
      cardTitle: 'Dunkirk 3',
      cardSubtitle: 'Dunkirk 3',
      cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
    },
  ];

  return (
    <>
      <div className="container">
        <Chrono items={items} mode="HORIZONTAL" itemWidth="500" />
      </div>
    </>
  );
};

Timeline.propTypes = {};

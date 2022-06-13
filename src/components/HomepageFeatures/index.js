import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built With Docusaurus',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  },
  {
    title: 'Docs Authored In Markdown',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  },
  {
    title: 'Site Deployed Via Github Pages',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

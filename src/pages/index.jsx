import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';


const infos = [
  {
    title: (
      <Translate
        id="homepage.features.easy-to-use.title"
        description="Title of feature of Easy to use on the home page">
        4
      </Translate>
    ),
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
        Globaly Created Realms
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.easy-to-use.title"
        description="Title of feature of Easy to use on the home page">
        3
      </Translate>
    ),
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
        Vendors
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.easy-to-use.title"
        description="Title of feature of Easy to use on the home page">
        14
      </Translate>
    ),
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
        Deployed Apps
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.easy-to-use.title"
        description="Title of feature of Easy to use on the home page">
        55
      </Translate>
    ),
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
        Users
      </Translate>
    ),
  }
]
const features = [
  {
    title: (
      <Translate
        id="homepage.features.easy-to-use.title"
        description="Title of feature of Easy to use on the home page">
        Easy to Use
      </Translate>
    ),
    imageUrl: 'img/undraw_just_browsing.svg',
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
        Tuval framework is designed from the ground up to be easily build your apps and running quickly.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.modern-ui.title"
        description="Title of feature of Modern UI on the home page">
        Modern UI
      </Translate>
    ),
    imageUrl: 'img/undraw_responsive.svg',
    description: (
      <Translate
        values={{ angularJS: (<code>AngularJS</code>), reactJS: (<code>ReactJS</code>) }}
        id="homepage.features.modern-ui"
        description="Modern UI">
        {`All Tuval web components let you design modern and responsive user interfaces using a functional API`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.pluggable-extensible.title"
        description="The Virtual File System makes it possible to manage files that in client browser.">
        Virtual File System In Browser
      </Translate>
    ),
    imageUrl: 'img/undraw_text_files_au1q.svg',
    description: (
      <Translate
        values={{ starters: (<code>starters</code>) }}
        id="homepage.features.pluggable-extensible"
        description="Feature __Pluggable and Extensible">
        {`The Virtual File System makes it possible to manage files that in client browser.`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.connect-information.title"
        description="Title of feature of Connect your information on the home page">
        Connect your information
      </Translate>
    ),
    imageUrl: 'img/undraw_online_connection.svg',
    description: (
      <Translate
        id="homepage.features.connect-information"
        description="Feature Connect your information">
        ...
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.customize-easy.title"
        description="Title of feature of Customize easy on the home page">
        Internationalization
      </Translate>
    ),
    imageUrl: 'img/undraw_the_world_is_mine_re_j5cr.svg',
    description: (
      <Translate
        id="homepage.features.customize-easy"
        description="Feature Customize easy">
        AWE has multiple preconfigured themes and multi-language support.
        You can add custom CSS according to your needs.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Typescript Support
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{ autowired: (<code>@Autowired</code>) }}
        id="homepage.features.powered-by"
        description="Typescript Support">
        {`Uses Spring 5 and Spring Boot 2. {autowired} is available for AWE components and layouts.`}
      </Translate>
    ),
  },
];

function InfoBox({ title, description }) {
  return (
    <div className={clsx('col col--3', styles.infobox)}>
      <h3 className={clsx(styles['infobox-header'])}>{title}</h3>
      <p className={clsx(styles['infobox-desc'])}>{description}</p>
    </div>
  );
}


function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig: { customFields = {}, tagline } = {} } = context;
  return (
    <Layout title={tagline} description={customFields.description}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="Awe logo"
              className={styles.heroLogo}
              src={useBaseUrl('img/undraw_freelancer_re_irh4.svg')}
            />
            <span className={styles.heroTitleTextHtml}>
              <Translate id="homepage.hero.title" description="Home page hero title, can contain simple html tags"
                values={{
                  business: (<b><Translate>işletmeler</Translate></b>),
                  appstore: (<b><Translate>appstore</Translate></b>),
                  apps: (<b><Translate>apps</Translate></b>),
                  bussiness: (<b><Translate>bussiness</Translate></b>),
                  smart: (<b><Translate>Akıllı</Translate></b>)
                }}>
                {`Akıllı {business}`}
              </Translate>
              <br />
              <Translate id="homepage.hero.title" description="Home page hero title, can contain simple html tags"
                values={{
                  superapp: (<b><Translate>superapp</Translate></b>),
                  appstore: (<b><Translate>çözümler</Translate></b>),
                  apps: (<b><Translate>apps</Translate></b>),
                  bussiness: (<b><Translate>bussiness</Translate></b>)
                }}>
                {`Entegre {appstore}`}
              </Translate>
              <br />
              {/* <Translate id="homepage.hero.title" description="Home page hero title, can contain simple html tags"
                values={{
                  superapp: (<b><Translate>superapp</Translate></b>),
                  appstore: (<b><Translate>appstore</Translate></b>),
                  apps: (<b><Translate>apps</Translate></b>),
                  bussiness: (<b><Translate>bussiness</Translate></b>)
                }}>
                {`Deploy {apps}`}
              </Translate> */}

            </span>
          </h1>

          <div style={{ color: 'rgba(255,255,255,0.1)' }} className={styles.indexCtas}>
            <ul>
              <li>
                Süper uygulamalar, kullanıcılar için daha ilgi çekici ve güçlü bir deneyim sağlayabilir.
              </li>
              <li>
                Mini uygulamalar aracılığıyla kişiselleştirilmiş uygulama deneyimleri için kullanılan platformlar olarak oluşturulmuştur.
              </li>
              <li>
                Endüstriler, rekabet avantajı elde etmek için süper uygulamaları benimsiyor.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*   <div className={clsx(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          <Translate
            values={{
              migrationGuideLink: (
                <Link to="/docs/guides/v4-migration">
                  <Translate>v3 to v4 migration guide</Translate>
                </Link>
              ),
            }}>
            {`Coming from v3? Check out our {migrationGuideLink}`}
          </Translate>
          .
        </div>
      </div> */}
      <main>
        {infos && infos.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {infos.map((props, idx) => (
                  <InfoBox key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
